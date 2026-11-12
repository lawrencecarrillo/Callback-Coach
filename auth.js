/* ---------- ACCOUNTS ----------
   Sign up, log in and out, and cloud sync of progress with Firebase Auth + Firestore.
   Runs only when firebase-config.js has an apiKey; otherwise the app stays in guest mode.
   Progress for each user is one Firestore document, users/{uid}, holding the app state as JSON.
   A local copy is kept per user (callback-coach-v1:{uid}) so the app opens instantly and works offline. */
(async()=>{
  const cfg=window.FIREBASE_CONFIG;
  if(!cfg||!cfg.apiKey) return;

  const V="10.12.2", lib=n=>`https://www.gstatic.com/firebasejs/${V}/firebase-${n}.js`;
  const $=s=>document.querySelector(s);
  const acct=$("#acct"), loginBtn=$("#loginBtn"), who=$("#who"), sync=$("#sync"), dlg=$("#authDlg"), form=$("#authForm"), err=$("#authErr");
  acct.hidden=false; loginBtn.disabled=true;

  let P,A,F;
  try{[P,A,F]=await Promise.all([import(lib("app")),import(lib("auth")),import(lib("firestore"))]);}
  catch(e){loginBtn.textContent="Accounts offline";loginBtn.title="Couldn't load sign-in. Check your connection and reload.";return;}
  const app=P.initializeApp(cfg);
  const auth=A.getAuth(app), db=F.getFirestore(app);
  const docRef=uid=>F.doc(db,"users",uid);

  /* ----- sync status ----- */
  const setSync=(t,cls="")=>{sync.textContent=t;sync.className=cls;const av=$("#avatar");av.className="avatar "+cls;av.title=t;};
  const MAX_BYTES=900000; // Firestore documents top out at 1 MiB
  const withTimeout=(p,ms)=>Promise.race([p,new Promise((_,r)=>setTimeout(()=>r(new Error("timeout")),ms))]);

  /* ----- cloud saves ----- */
  let user=null, blocked=false, dirty=false, saving=false, timer=null;
  async function push(){
    clearTimeout(timer); timer=null;
    if(!user||blocked||!dirty) return;
    if(saving){timer=setTimeout(push,800);return;}
    const st=CC.state, json=JSON.stringify(st);
    if(json.length>MAX_BYTES){setSync("Too big to sync · export a backup and delete old sessions","err");return;}
    saving=true; dirty=false;
    try{
      await withTimeout(F.setDoc(docRef(user.uid),{state:json,updatedAt:st.updatedAt||Date.now(),email:user.email||"",savedAt:F.serverTimestamp()}),10000);
      setSync(dirty?"Saving…":"Saved to your account","ok");
    }catch(e){
      dirty=true; setSync("Not synced yet · saved on this device","err");
      timer=setTimeout(push,15000);
    }finally{saving=false;}
    if(dirty&&!timer) timer=setTimeout(push,1500);
  }
  CC.onSave=()=>{if(!user||blocked) return; dirty=true; setSync("Saving…"); clearTimeout(timer); timer=setTimeout(push,1500);};
  addEventListener("online",()=>{if(user&&blocked) handle(user); else push();});
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden") push();});

  /* ----- header ----- */
  function renderAcct(u){
    loginBtn.disabled=false;
    loginBtn.hidden=!!u; who.hidden=!u;
    if(u){
      const name=u.displayName||u.email||"Signed in";
      $("#whoName").textContent=name; $("#whoName").title=u.email||"";
      $("#avatar").textContent=name.trim()[0].toUpperCase();
    }
  }

  /* ----- switching accounts ----- */
  let queue=Promise.resolve();
  A.onAuthStateChanged(auth,u=>{queue=queue.then(()=>handle(u)).catch(e=>console.error(e));});

  async function handle(u){
    if(!u){
      user=null; blocked=false; dirty=false; renderAcct(null); CC.setSignedIn(false);
      if(CC.key!==CC.BASE_KEY){CC.useKey(CC.BASE_KEY);CC.applyState(CC.readLocal(CC.BASE_KEY));}
      return;
    }
    renderAcct(u); setSync("Loading your progress…");
    const key=CC.BASE_KEY+":"+u.uid, local=CC.readLocal(key);
    let cloud=null, cloudOk=true;
    try{const snap=await withTimeout(F.getDoc(docRef(u.uid)),10000); if(snap.exists()) cloud=JSON.parse(snap.data().state);}
    catch(e){cloudOk=false;}

    if(!cloudOk&&!local){
      // Starting from an empty copy here could overwrite real progress later, so don't.
      CC.toast("Couldn't load your account. Check your connection and log in again.");
      await A.signOut(auth); return;
    }
    let chosen=null, needPush=false;
    if(cloud&&(!local||(cloud.updatedAt||0)>=(local.updatedAt||0))) chosen=cloud;
    else if(local){chosen=local; needPush=cloudOk;}
    else{
      // Brand-new account: offer to bring along guest progress from this device.
      const guest=CC.readLocal(CC.BASE_KEY);
      if(CC.hasProgress(guest)&&confirm("Copy the progress already saved on this device into your new account?")) chosen=guest;
      needPush=true;
    }
    CC.useKey(key); CC.setSignedIn(true); CC.applyState(chosen);
    user=u; blocked=!cloudOk;
    if(blocked) setSync("Offline · saved on this device","err");
    else if(needPush){dirty=true; await push();}
    else setSync("Saved to your account","ok");
  }

  /* ----- log out ----- */
  $("#logoutBtn").onclick=async()=>{
    if(dirty||saving){setSync("Saving…"); await push();}
    const unsynced=dirty||blocked;
    if(unsynced&&!confirm("Some progress hasn't reached your account yet. Log out anyway? It stays saved on this device until you log in again.")) return;
    const key=CC.key;
    await A.signOut(auth);
    // On a shared computer, don't leave this person's progress behind once it's safely in the cloud.
    if(!unsynced) try{localStorage.removeItem(key);}catch(e){}
    CC.toast("Logged out");
  };

  /* ----- sign-in dialog ----- */
  let mode="login";
  function setMode(m){
    mode=m; err.textContent=""; err.className="";
    document.querySelectorAll("#authModes button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.mode===m));
    $("#authTitle").textContent=m==="login"?"Welcome back":"Create your free account";
    $("#authSubmit").textContent=m==="login"?"Log in":"Create account";
    $("#authPw").autocomplete=m==="login"?"current-password":"new-password";
    $("#pwHint").hidden=m==="login"; $("#forgot").hidden=m!=="login";
  }
  document.querySelectorAll("#authModes button").forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
  loginBtn.onclick=()=>{setMode("login");form.reset();dlg.showModal();$("#authEmail").focus();};
  $("#authClose").onclick=()=>dlg.close();
  dlg.addEventListener("click",e=>{if(e.target===dlg) dlg.close();});
  $("#showPw").onchange=e=>{$("#authPw").type=e.target.checked?"text":"password";};

  const MSG={
    "auth/invalid-email":"That email address doesn't look right.",
    "auth/missing-email":"Enter your email address.",
    "auth/missing-password":"Enter your password.",
    "auth/weak-password":"Use at least 6 characters for your password.",
    "auth/email-already-in-use":"There's already an account with that email. Try logging in instead.",
    "auth/invalid-credential":"Email or password is incorrect.",
    "auth/invalid-login-credentials":"Email or password is incorrect.",
    "auth/wrong-password":"Email or password is incorrect.",
    "auth/user-not-found":"Email or password is incorrect.",
    "auth/too-many-requests":"Too many tries. Wait a minute and try again.",
    "auth/network-request-failed":"Couldn't connect. Check your internet connection.",
    "auth/popup-blocked":"Your browser blocked the sign-in window. Allow pop-ups for this site and try again.",
    "auth/operation-not-allowed":"This sign-in method isn't turned on yet.",
    "auth/unauthorized-domain":"This website isn't approved for sign-in yet. Add it in Firebase under Authentication → Settings → Authorized domains."
  };
  const SILENT=["auth/popup-closed-by-user","auth/cancelled-popup-request"];
  const fail=e=>{if(SILENT.includes(e.code)) return; err.className="no"; err.textContent=MSG[e.code]||"Something went wrong. Please try again.";};
  const busy=on=>form.querySelectorAll("button,input").forEach(x=>x.disabled=on);

  form.onsubmit=async e=>{
    e.preventDefault(); err.textContent="";
    const email=$("#authEmail").value.trim(), pw=$("#authPw").value;
    busy(true);
    try{
      if(mode==="signup") await A.createUserWithEmailAndPassword(auth,email,pw);
      else await A.signInWithEmailAndPassword(auth,email,pw);
      dlg.close(); CC.toast(mode==="signup"?"Account created. Your progress now saves to it":"Logged in");
    }catch(x){fail(x);}finally{busy(false);}
  };
  $("#forgot").onclick=async()=>{
    const email=$("#authEmail").value.trim();
    if(!email){err.className="no";err.textContent="Enter your email above, then click “Forgot password?” again.";$("#authEmail").focus();return;}
    busy(true);
    try{await A.sendPasswordResetEmail(auth,email); err.className="ok"; err.textContent="If there's an account for that email, a reset link is on its way. Check your spam folder too.";}
    catch(x){fail(x);}finally{busy(false);}
  };
  $("#googleBtn").onclick=async()=>{
    busy(true);
    try{await A.signInWithPopup(auth,new A.GoogleAuthProvider()); dlg.close(); CC.toast("Logged in");}
    catch(x){fail(x);}finally{busy(false);}
  };
})();
