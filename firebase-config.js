/*
  Firebase settings for accounts (sign up, log in, cloud-saved progress).

  Leave apiKey empty to run without accounts: the app works in guest mode and
  saves progress in the browser only.

  To turn accounts on, follow "Setting up accounts" in README.md and paste the
  values from Firebase console → Project settings → Your apps → Web app.

  These values are not secret. Firebase identifies your project with them;
  firestore.rules is what keeps each person's data private.
*/
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
