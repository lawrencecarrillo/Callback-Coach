/* ---------- DATA ---------- */
const CATS = {
  opening:"Opening", behavioral:"Behavioral", logistics:"Logistics",
  swe:"Software engineer", ai:"AI / prompt", cs:"Customer success", se:"Solutions engineer"
};
const QS = [
 {id:"o1",c:"opening",q:"Tell me about yourself.",want:"A short story of past, present and future that ends with why you fit this job.",a:"I've spent most of my career in hospitality and operations in New York. Most recently I managed service across four venues at The Hospitality Department in the Martinique Hotel, and before that I was a front of house manager at Eataly Flatiron and worked in customer experience at Goldbelly.\n\nIn March 2026 I joined Pursuit's AI Native Fellowship. I've been building real products there, including Ask BPL, an AI assistant that helps Brooklyn Public Library staff find answers in their policies.\n\nI'm looking for a role where I can combine understanding people with building and teaching AI tools. That's why this role caught my eye.",tip:"Have a 30-second version ready too. Some recruiters cut in early."},
 {id:"o2",c:"opening",q:"Why do you want to work in tech?",want:"Real motivation, not just \"it pays well.\"",a:"In every job I've had, I was the person fixing the process: the reservation system, the scheduling, the handoffs between teams. I love solving the problem behind the problem. AI tools now let me build those fixes myself, and Pursuit gave me the structure to do it seriously.",tip:"Tie it to a concrete moment you remember."},
 {id:"o3",c:"opening",q:"Why this company?",want:"Proof you did your homework.",a:"I've been following [company] because of [specific product, mission or recent news]. I really connect with [a value from their site]. With my background in [customer experience / training / the arts], I think I could help with [something from the job post].",tip:"Research this before every call. One specific detail beats three general ones."},
 {id:"o4",c:"opening",q:"Why this role?",want:"A clear match between the job post and your experience.",a:"The posting talks about [two duties from the post]. That's what I've done for years in hospitality and training, just with guests and staff instead of users. Now I can also handle the technical side, since I've built and shipped AI tools, so I can speak to both the customer and the engineering team.",tip:"Quote two phrases from the job post back to them."},
 {id:"o5",c:"opening",q:"Walk me through your resume.",want:"Time order, one or two sentences per role, each connected to the next.",a:"I started in performing arts as an actor and puppeteer, and became a licensed massage therapist running my own practice, which taught me marketing, finances and clients. In restaurants I moved into management at Union Square Hospitality Group, Eataly and The Hospitality Department, and I trained staff and wrote training books along the way. At Goldbelly and RH I did customer experience remotely. Each role pulled me closer to systems and technology, which led me to Pursuit.",tip:"Keep it under two minutes. Stop on the role that leads into this job."},
 {id:"o6",c:"opening",q:"What's a project you're proud of?",want:"Something real, your specific part, and the impact.",a:"Ask BPL, my capstone. My team of four built an AI assistant for Brooklyn Public Library staff. Staff ask a policy question in plain English and get an answer drawn from the library's actual policy documents. It's for a real client with real users, so accuracy matters. My part was [your contribution].",tip:"Backup: the feature your team shipped on Excalidraw's open-source codebase."},
 {id:"b1",c:"behavioral",star:1,q:"Tell me about a time you dealt with an unhappy customer.",want:"Empathy, ownership and a good outcome.",a:"S: At Eataly, a guest was upset because [what went wrong].\nT: As the manager on the floor, it was on me to fix it.\nA: I listened without interrupting, apologized, and told them exactly what I'd do. Then I [your fix].\nR: They [came back / left a good review]. Most angry customers want to feel heard first.",tip:"Add a tech link: \"Users get frustrated with software too, and it's the same skill.\""},
 {id:"b2",c:"behavioral",star:1,q:"Tell me about a time you led a team under pressure.",want:"Calm leadership with clear communication.",a:"S: I've been a float captain for the Macy's Thanksgiving Day Parade for nine years.\nT: I organize my team, walk the route and get the float through the finish line for the live NBC broadcast.\nA: One year [a specific challenge], so I [briefed the team / reassigned roles / stayed calm].\nR: We hit our mark on live TV. When there's no second take, preparation and clear communication are everything.",tip:"This story is memorable. Use it."},
 {id:"b3",c:"behavioral",star:1,q:"Tell me about a conflict with a coworker or teammate.",want:"You can disagree respectfully and still deliver.",a:"S: On a Pursuit team project, a teammate and I disagreed about [approach].\nT: We had a deadline and needed to agree.\nA: I asked to talk one-on-one, listened to their reasoning, and shared mine. We [compromised / tested both / asked the client].\nR: We shipped on time and worked better together after. Argue about the idea, not the person.",tip:"Never make the other person the villain."},
 {id:"b4",c:"behavioral",star:1,q:"Tell me about a time you failed or made a mistake.",want:"Honesty and what you changed afterward.",a:"S/T: [A real, moderate mistake: a scheduling error, a bug, a missed handoff.]\nA: I owned it right away, told my team, and fixed it by [action].\nR: Then I [changed a process or habit] so it wouldn't happen again.",tip:"Pick something real but not disastrous. Spend most of the time on the fix."},
 {id:"b5",c:"behavioral",star:1,q:"Tell me about a time you had to learn something new quickly.",want:"How you learn, not just that you did.",a:"When I started Pursuit, I'd never [used Git / worked in a large codebase]. Within weeks my team was shipping a feature on Excalidraw's open-source code. I learned by breaking it into small pieces, asking questions early, using AI to explain code, and then checking it myself.",tip:"Name your learning method. Teaching roles love this."},
 {id:"b6",c:"behavioral",star:1,q:"Tell me about a time you taught or trained someone.",want:"You can make complex things clear for others.",a:"S: In hospitality I trained new bartenders and servers, and I wrote the front-of-house training book.\nT: New hires needed to be floor-ready in [timeframe].\nA: I broke the job into short lessons, demonstrated, let them practice, and checked in after each shift.\nR: [Result: faster ramp-up, fewer mistakes]. The same approach works for teaching people new AI tools.",tip:"Great for AI enablement and customer success roles."},
 {id:"b7",c:"behavioral",star:1,q:"How do you handle many tasks at once?",want:"A real system you use.",a:"Running four venues at once at The Hospitality Department meant constant juggling. I'd [start each shift with a priorities list, delegate to leads, and check in at set times]. In tech I do the same with a task board or GitHub issues.",tip:"Describe the system, then one example."},
 {id:"l1",c:"logistics",q:"What are your salary expectations?",want:"A researched range, said calmly.",a:"Based on my research for this role in New York, I'm looking in the range of [low end] to [high end]. I'm flexible depending on the full package and growth opportunity.",tip:"NYC job posts must list a pay range by law. Start there."},
 {id:"l2",c:"logistics",q:"When can you start?",want:"A clear, honest date.",a:"I've wrapped up Pursuit's fellowship and I can start [date].",tip:"Know your answer before the call."},
 {id:"l3",c:"logistics",q:"Remote, hybrid or in-office?",want:"Flexibility plus your real preference.",a:"I'm based in Queens, so I'm happy with [your preference]. I've also worked fully remote before, at RH, so I'm comfortable with that setup.",tip:"Check the job post first so you aren't surprised."},
 {id:"l4",c:"logistics",q:"Why are you leaving hospitality?",want:"A positive reason, no complaints.",a:"I'm not running away from hospitality, I'm taking it with me. The best part of that work was solving problems for people, and tech lets me do that at a bigger scale.",tip:"Never criticize a past employer."},
 {id:"s1",c:"swe",q:"What happens when you type a URL into a browser?",want:"The basic flow in plain language.",a:"The browser looks up the site's address through DNS, which works like a phone book for the internet. It sends a request to that server, the server sends back HTML, CSS and JavaScript, and the browser turns that into the page you see.",tip:"Keep it simple unless they ask for more detail."},
 {id:"s2",c:"swe",q:"What's the difference between frontend and backend?",want:"A clear split, ideally with an analogy.",a:"Frontend is what the user sees and clicks: layout, buttons and forms. Backend is behind the scenes: the server, the database and the logic that saves and fetches data. In a restaurant, frontend is the dining room and backend is the kitchen.",tip:"Your restaurant analogies are a strength. Use them."},
 {id:"s3",c:"swe",q:"What is an API?",want:"A definition plus an example.",a:"An API is a set of rules that lets two programs talk to each other. One sends a request and the other sends back data. It's like a waiter: you don't walk into the kitchen, you give your order to the waiter and they bring back your food.",tip:"Mention an API you've actually used, like Google Maps in your hackathon app."},
 {id:"s4",c:"swe",q:"What is Git and why do teams use it?",want:"Branches, pull requests and review.",a:"Git tracks every change to code so you can see history and undo mistakes. Teams work on branches, then open a pull request so others can review before merging into main. I used that workflow on our Excalidraw feature.",tip:""},
 {id:"s5",c:"swe",q:"How do you debug a problem?",want:"A calm, step-by-step method.",a:"First I reproduce the bug. Then I read the error message and narrow down where it starts using console logs or dev tools. I change one thing at a time and test. If I'm stuck I search, ask AI to explain, or ask a teammate, and I always confirm the fix works.",tip:""},
 {id:"s6",c:"swe",q:"How do you use AI coding tools?",want:"Useful, but you stay responsible.",a:"I use them to explain unfamiliar code, draft boilerplate and brainstorm approaches. I treat the output like a first draft: I read it, test it and make sure I understand it before I commit it. AI speeds me up, but I'm responsible for the code.",tip:"More companies ask this every month."},
 {id:"a1",c:"ai",q:"What makes a good prompt?",want:"Role, context, task, format, examples, and what to do when unsure.",a:"A good prompt is clear and specific. It gives the AI a role, the context it needs, the exact task, the format I want back, and examples of good and bad answers. It also says what to do when the AI doesn't know, like \"say you're not sure instead of guessing.\"",tip:""},
 {id:"a2",c:"ai",q:"A prompt gives bad or inconsistent results. How do you fix it?",want:"A test-and-compare method, not guessing.",a:"I collect examples of the bad outputs to see the pattern. I check whether the prompt is vague, missing context or asking too much at once. Then I change one thing at a time and re-test on the same set of inputs so the comparison is fair.",tip:""},
 {id:"a3",c:"ai",q:"How do you know if an AI's answer is good?",want:"Test sets, rubrics, edge cases.",a:"I build a small test set of real questions with expected answers, then score outputs against a checklist: accurate, complete, right format and safe. On Ask BPL the key check is whether the answer matches the library's actual policy, because a wrong answer could cause real problems for staff.",tip:""},
 {id:"a4",c:"ai",q:"What is a hallucination, and how do you reduce it?",want:"Grounding, citations and permission to say \"I don't know.\"",a:"A hallucination is when the AI confidently makes something up. I reduce it by giving the AI real source material, telling it to only use that material, asking it to cite where the answer came from, and telling it to say \"I don't know\" when the answer isn't there.",tip:""},
 {id:"a5",c:"ai",q:"What is RAG?",want:"Retrieve first, then generate.",a:"RAG means retrieval-augmented generation. The system first searches your own documents for the relevant pieces, then gives those to the AI to answer from. That's how Ask BPL works: it pulls the right section of the library's policies, then the AI explains it in plain language.",tip:""},
 {id:"a6",c:"ai",q:"How would you teach a non-technical team to use an AI tool?",want:"An enablement mindset: start small, practice, follow up.",a:"I'd start with one task they already do every week and show how the tool helps with it. Then a short hands-on session where everyone tries it with their own work, a one-page cheat sheet, and office hours a week later to answer questions. I'd track who's using it and gather feedback to improve the training.",tip:"Lean on your teaching artist and staff-training background here."},
 {id:"a7",c:"ai",q:"When should you NOT use AI?",want:"Judgment and risk awareness.",a:"When a mistake would be costly and no human is checking, when a simple rule or regular code would be more reliable, or when the data is private and shouldn't go to an outside model. Sometimes a spreadsheet is the better answer.",tip:""},
 {id:"c1",c:"cs",q:"A customer says the integration stopped syncing this morning. What do you do?",want:"Empathy first, then logical troubleshooting.",a:"Reply right away: acknowledge the problem, apologize for the disruption, ask when it last worked and for a screenshot of any error, and promise an update time.\n\nThen: check the status page, confirm their API key or login hasn't expired (look for 401 errors), read the sync logs for the first failure, try to reproduce it in a test account, and escalate to engineering with details if it's a bug, keeping the customer updated.",tip:"Graders look for empathy, a next step and a promised update time."},
 {id:"c2",c:"cs",q:"How would you onboard a new customer to our product?",want:"A clear plan with milestones.",a:"I'd start with a kickoff call to learn their goals and what success looks like. Then a short setup plan with dates, a hands-on training session for their team, and a check-in after two weeks to see what's working. I'd watch usage and reach out early if adoption is slow.",tip:"This is like training new staff on opening day."},
 {id:"c3",c:"cs",q:"A customer wants a feature we don't have. What do you say?",want:"Honest, helpful, and you log the feedback.",a:"I'd thank them, ask what problem they're trying to solve, and share any workaround that exists today. I'd be honest that it isn't available, log the request for the product team with their use case, and follow up if it gets built.",tip:"Never promise a feature you can't guarantee."},
 {id:"c4",c:"cs",q:"A big account is using the product less and may not renew. What do you do?",want:"Proactive, data-informed retention.",a:"First I'd look at the usage data to see what dropped and when. Then I'd reach out to my main contact, not to sell, but to ask how things are going and what's changed on their side, like a new team lead or new goals. Based on that, I'd offer a refresher training, connect them with a feature that fits their new goals, or bring in support for any open issues. I'd set a check-in plan through renewal.",tip:"Interviewers want to hear that you act before the customer complains."},
 {id:"c5",c:"cs",q:"How do you prioritize when several customers need you at once?",want:"A clear triage method.",a:"I sort by impact and urgency: anything blocking a customer's business comes first, then deadlines, then routine requests. I tell each customer when they'll hear from me so nobody feels ignored. On a busy restaurant floor I did the same thing every night: the table with a problem gets you first, but everyone gets acknowledged.",tip:""},
 {id:"c6",c:"cs",q:"What metrics matter in customer success?",want:"You know how the role is measured.",a:"Retention and churn rate, net revenue retention, product adoption and usage, customer satisfaction scores like CSAT or NPS, time to first value during onboarding, and support ticket trends. Together they show whether customers are getting real value.",tip:"Know these terms by name. They come up often."},
 {id:"e1",c:"se",q:"Explain a technical concept to me as if I were a non-technical customer.",want:"Clarity, an analogy, and checking for understanding.",a:"Pick something you know well, like RAG: \"Imagine a new library staff member who's smart but hasn't read the policy binder. Instead of guessing, they look up the right page first and then answer. That's what our assistant does: it finds the relevant policy, then explains it in plain English.\" Then check in: \"Does that match how your team looks up answers today?\"",tip:"Practice this one out loud a lot. It's the core of solutions and enablement roles."},
 {id:"e2",c:"se",q:"Walk me through a demo of a product you've built.",want:"A story built around the user's problem, not a feature tour.",a:"Start with the problem: \"Library staff spend time digging through long policy documents.\" Show one realistic task end to end: ask a real question and get a sourced answer. Point out one detail that builds trust, like the citation. End with the impact and what you'd build next. Keep it to 5–10 minutes and leave time for questions.",tip:"Have Ask BPL ready to demo with a backup recording in case the live demo fails."},
 {id:"e3",c:"se",q:"A prospect asks a technical question you can't answer. What do you do?",want:"Honesty plus a reliable follow-up.",a:"I'd say: \"That's a great question, and I want to give you an accurate answer rather than guess. Let me confirm with our engineering team and get back to you by [day].\" Then I'd write it down, get the answer, and follow up when I said I would. Trust matters more than looking like you know everything.",tip:""},
 {id:"e4",c:"se",q:"How would you find out what a customer actually needs?",want:"Discovery questions, listening, and confirming.",a:"I'd ask open questions: What does your team do today? What's slow or frustrating? What would success look like six months from now? Who else is affected? Then I'd summarize what I heard back to them to confirm, before suggesting any solution.",tip:"Your hospitality instincts help here. Reading a table is discovery."},
 {id:"b8",c:"behavioral",star:1,q:"Tell me about a time you improved a process.",want:"You spot inefficiency and fix it with measurable results.",a:"S: At [venue], [a process] was slow or error-prone.\nT: I wanted to make it faster and more consistent for the team.\nA: I [mapped the steps, removed one, created a checklist or tool, trained the team on it].\nR: [Measurable result: saved time, fewer errors, better reviews].",tip:"Process improvement maps directly to implementation and AI ops roles."},
 {id:"b9",c:"behavioral",star:1,q:"Tell me about a time you used data to make a decision.",want:"You look at evidence, not just instinct.",a:"S: At [Goldbelly / Eataly], we noticed [a pattern: complaints, slow nights, staffing gaps].\nT: I needed to decide [what to change].\nA: I looked at [reservations, sales reports, ticket counts] and found [insight].\nR: We [changed X], which led to [result].",tip:"Even simple data counts: covers per night, ticket volume, review scores."},
 {id:"o7",c:"opening",q:"You're new to tech. Why should we hire you?",want:"Confidence about your transition.",a:"I'm newer to tech, but not new to work. I've managed four venues, trained staff and handled thousands of customers, which is client management and enablement under pressure. And I've shipped real AI tools, like Ask BPL for Brooklyn Public Library. I bring people skills that are hard to teach, and I've proven I can learn the technical side quickly.",tip:"Expect this question. Say it with confidence, not apology."},
 {id:"o8",c:"opening",q:"What questions do you have for us?",want:"Curiosity and real interest in the job.",a:"What does success look like in the first 90 days?\nWhat's the biggest challenge the team is working on right now?\nHow does the team use AI tools day to day?\nWhat do you enjoy most about working here?\nWhat are the next steps in the process?",tip:"Always ask at least two. Never say \"No, I think you covered everything.\""}
];
const QUIZ = [
 {q:"What does HTTP status 404 mean?",o:["Server error","Not found","Unauthorized","Created"],a:1,e:"404 means the page or resource doesn't exist."},
 {q:"What does HTTP status 500 mean?",o:["Something broke on the server","Request was bad","Success","Not logged in"],a:0,e:"500 is a server error: the problem is on their end."},
 {q:"Which status code means \"not logged in or bad credentials\"?",o:["403","200","401","201"],a:2,e:"401 Unauthorized. 403 means you're logged in but not allowed."},
 {q:"Which HTTP method is used to create new data?",o:["GET","POST","DELETE","HEAD"],a:1,e:"POST creates. GET reads, PUT/PATCH updates, DELETE removes."},
 {q:"Which SQL keyword filters rows?",o:["SELECT","FROM","WHERE","ORDER"],a:2,e:"WHERE filters rows, e.g. WHERE city = 'New York'."},
 {q:"Which SQL keyword removes duplicate results?",o:["UNIQUE","DISTINCT","GROUP","ONLY"],a:1,e:"SELECT DISTINCT city FROM station returns each city once."},
 {q:"What does JOIN do in SQL?",o:["Deletes a table","Combines rows from two tables","Sorts results","Counts rows"],a:1,e:"JOIN combines rows from two tables using a matching column."},
 {q:"Which Git command sends your commits to GitHub?",o:["git pull","git clone","git push","git add"],a:2,e:"git push sends commits up. git pull brings others' changes down."},
 {q:"What is a pull request?",o:["Downloading a repo","A request to review and merge your changes","Deleting a branch","Undoing a commit"],a:1,e:"A PR lets teammates review your branch before it merges into main."},
 {q:"What is an AI \"hallucination\"?",o:["A slow response","The AI confidently making something up","A crashed model","A long prompt"],a:1,e:"Grounding the AI in real sources helps reduce hallucinations."},
 {q:"What does RAG stand for?",o:["Random answer generation","Retrieval-augmented generation","Rapid AI grading","Rule-based agent"],a:1,e:"Search your documents first, then let the AI answer from them."},
 {q:"A lower temperature setting makes AI output…",o:["More creative","More consistent","Longer","Faster"],a:1,e:"Low temperature means less randomness and more consistent answers."},
 {q:"What is a context window?",o:["The chat sidebar","How much text the AI can see at once","A browser tab","A system error"],a:1,e:"It covers the prompt, documents and conversation the model can read."},
 {q:"What are tokens?",o:["Passwords","Chunks of text the AI reads and charges by","Cookies","API keys only"],a:1,e:"A token is roughly part of a word."},
 {q:"What is an API?",o:["A database","Rules that let two programs talk","A coding language","A web browser"],a:1,e:"Think of a waiter carrying orders between you and the kitchen."},
 {q:"What does DNS do?",o:["Stores passwords","Turns a website name into an address","Styles a page","Runs JavaScript"],a:1,e:"DNS is like a phone book for the internet."},
 {q:"Frontend vs backend: which handles the database?",o:["Frontend","Backend","Neither","CSS"],a:1,e:"Backend: server, database and logic. Frontend: what users see."},
 {q:"In STAR, what does the R stand for?",o:["Reason","Role","Result","Review"],a:2,e:"Situation, Task, Action, Result. End with a result, ideally a number."},
 {q:"What is the result of 7 % 2 in JavaScript?",o:["3.5","1","0","3"],a:1,e:"% gives the remainder. 7 divided by 2 is 3 remainder 1."},
 {q:"What are evals?",o:["Code reviews","Repeatable tests that measure an AI system","Job interviews","Error logs"],a:1,e:"Evals let you compare prompt versions fairly."}
];
const CODE = [
 {id:"k1",t:"Simple Array Sum",lvl:"Easy",task:"Given a list of numbers, return their total.",ex:"[1, 2, 3, 4, 10, 11]  →  31",starter:"function simpleArraySum(ar) {\n  // your code here\n}",hint:"Start a total at 0, loop through each number, and add it to the total.",sol:"function simpleArraySum(ar) {\n  let total = 0;\n  for (const n of ar) {\n    total += n;\n  }\n  return total;\n}"},
 {id:"k2",t:"Compare the Triplets",lvl:"Easy",task:"Alice and Bob each have three scores. Compare them position by position. The higher score gets a point, and ties get nothing. Return [alice, bob].",ex:"Alice [5, 6, 7], Bob [3, 6, 10]  →  [1, 1]",starter:"function compareTriplets(a, b) {\n  // your code here\n}",hint:"Keep two counters and loop i from 0 to 2, comparing a[i] and b[i].",sol:"function compareTriplets(a, b) {\n  let alice = 0, bob = 0;\n  for (let i = 0; i < 3; i++) {\n    if (a[i] > b[i]) alice++;\n    else if (a[i] < b[i]) bob++;\n  }\n  return [alice, bob];\n}"},
 {id:"k3",t:"Mini-Max Sum",lvl:"Easy",task:"Given 5 numbers, print the smallest and largest totals you can make by adding exactly 4 of them.",ex:"[1, 2, 3, 4, 5]  →  10 14",starter:"function miniMaxSum(arr) {\n  // your code here\n}",hint:"Add everything. Subtract the biggest number for the minimum and the smallest number for the maximum.",sol:"function miniMaxSum(arr) {\n  const total = arr.reduce((sum, n) => sum + n, 0);\n  const min = total - Math.max(...arr);\n  const max = total - Math.min(...arr);\n  console.log(min, max);\n}"},
 {id:"k4",t:"Birthday Cake Candles",lvl:"Easy",task:"A kid can only blow out the tallest candles. Count how many candles are the tallest.",ex:"[3, 2, 1, 3]  →  2",starter:"function birthdayCakeCandles(candles) {\n  // your code here\n}",hint:"Find the maximum with Math.max, then count how many equal it.",sol:"function birthdayCakeCandles(candles) {\n  const tallest = Math.max(...candles);\n  return candles.filter(c => c === tallest).length;\n}"},
 {id:"k5",t:"Staircase",lvl:"Easy",task:"Print a right-aligned staircase of # symbols with n steps.",ex:"n = 4\n   #\n  ##\n ###\n####",starter:"function staircase(n) {\n  // your code here\n}",hint:"For each row i from 1 to n, print (n - i) spaces followed by i # symbols. Try ' '.repeat().",sol:"function staircase(n) {\n  for (let i = 1; i <= n; i++) {\n    console.log(' '.repeat(n - i) + '#'.repeat(i));\n  }\n}"},
 {id:"k6",t:"Time Conversion",lvl:"Medium",task:"Convert a 12-hour time string to 24-hour time.",ex:"\"07:05:45PM\"  →  \"19:05:45\"\n\"12:00:00AM\"  →  \"00:00:00\"",starter:"function timeConversion(s) {\n  // your code here\n}",hint:"Split off the last two letters (AM/PM). Watch the edge cases: 12 AM becomes 00, and 12 PM stays 12.",sol:"function timeConversion(s) {\n  const period = s.slice(-2);\n  let [hh, mm, ss] = s.slice(0, -2).split(':');\n  let hour = parseInt(hh);\n\n  if (period === 'AM' && hour === 12) hour = 0;\n  if (period === 'PM' && hour !== 12) hour += 12;\n\n  return String(hour).padStart(2, '0') + ':' + mm + ':' + ss;\n}"},
 {id:"k7",t:"Revising the Select Query",lvl:"SQL",task:"From the CITY table, get all American cities (COUNTRYCODE 'USA') with a population over 100,000.",ex:"Columns: NAME, COUNTRYCODE, POPULATION",starter:"-- write your query\n",hint:"Use WHERE with two conditions joined by AND.",sol:"SELECT * FROM CITY\nWHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;"},
 {id:"k8",t:"Weather Observation Station 3",lvl:"SQL",task:"From the STATION table, list cities that have an even ID number, with no duplicates.",ex:"Columns: ID, CITY",starter:"-- write your query\n",hint:"DISTINCT removes duplicates. MOD(ID, 2) = 0 checks for even numbers.",sol:"SELECT DISTINCT CITY FROM STATION\nWHERE MOD(ID, 2) = 0;"}
];

/* ---------- STATE ---------- */
const KEY="callback-coach-v1";
const DEFAULTS=()=>({xp:0,ratings:{},solved:{},days:[],quizBest:0,seq:0,session:null,history:[]});
let S=DEFAULTS();
let firstVisit=true;
try{const raw=localStorage.getItem(KEY); if(raw){firstVisit=false;S=Object.assign(S,JSON.parse(raw));}}catch(e){}
function newSession(){S.seq=(S.seq||0)+1;return {id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),n:S.seq,name:"",started:Date.now(),attempts:[],quizzes:[],code:[]};}
function ensureSession(){if(!Array.isArray(S.history)) S.history=[]; if(!S.session) S.session=newSession();}
ensureSession();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
save();
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LEVELS=[[0,"Extra"],[60,"Understudy"],[180,"Ensemble"],[360,"Featured"],[600,"Lead"],[900,"Headliner"]];
function today(){const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function streak(){
  const set=new Set(S.days); let n=0; const d=new Date();
  if(!set.has(today())) d.setDate(d.getDate()-1);
  while(set.has(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())){n++;d.setDate(d.getDate()-1);}
  return n;
}
function award(n,msg){
  S.xp+=n; if(!S.days.includes(today())) S.days.push(today()); save(); renderStats();
  toast("+"+n+" XP · "+msg);
}
function renderStats(){
  $("#xp").textContent=S.xp;
  let l=LEVELS[0][1]; for(const [min,name] of LEVELS) if(S.xp>=min) l=name;
  $("#lvl").textContent=l; $("#streak").textContent=streak(); $("#sess").textContent=S.session.n;
}
let tt; function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),1800);}

/* ---------- TABS ---------- */
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll("nav button").forEach(x=>x.setAttribute("aria-selected",x===b));
  document.querySelectorAll("[role=tabpanel]").forEach(p=>p.hidden=p.id!=="p-"+b.dataset.tab);
  stopTimer();
  if(b.dataset.tab==="progress") renderProgress();
}));
$("#sessStat").onclick=()=>$("#t-progress").click();
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>{$("#t-"+b.dataset.go).click();window.scrollTo(0,0);}));

/* ---------- TIMER ---------- */
let timer=null; const ELAP={};
function timerHTML(id){return `<div class="timer"><svg class="ring" viewBox="0 0 36 36" aria-hidden="true"><circle class="trk" cx="18" cy="18" r="15"/><circle class="val" id="${id}-r" cx="18" cy="18" r="15" stroke-dasharray="94.25" stroke-dashoffset="0"/></svg><span class="clock" id="${id}-c">1:30</span><button class="btn" id="${id}-b">Start 90s</button></div>`;}
function stopTimer(){if(timer){clearInterval(timer.h);timer=null;}}
function bindTimer(id,secs=90,autostart=false){
  const c=$("#"+id+"-c"), r=$("#"+id+"-r"), b=$("#"+id+"-b");
  const fmt=s=>{const neg=s<0;s=Math.abs(s);return (neg?"+":"")+Math.floor(s/60)+":"+String(s%60).padStart(2,"0");};
  let left=secs;
  const draw=()=>{ELAP[id]=secs-left;c.textContent=fmt(left);c.classList.toggle("over",left<0);r.style.strokeDashoffset=94.25*(1-Math.max(left,0)/secs);};
  const start=()=>{stopTimer();left=secs;draw();b.textContent="Stop";timer={h:setInterval(()=>{left--;draw();},1000)};};
  b.onclick=()=>{if(timer){stopTimer();b.textContent="Restart";}else start();};
  draw(); if(autostart) start();
}

/* ---------- PRACTICE ---------- */
let cat="opening", order=[], idx=0, revealed=false;
const weight=id=>({l:3,m:2,g:1}[S.ratings[id]]||2.5);
function buildDeck(){
  const list=QS.filter(q=>q.c===cat);
  order=list.map(q=>({q,k:Math.random()/weight(q.id)})).sort((a,b)=>a.k-b.k).map(x=>x.q);
  idx=0; revealed=false;
}
function renderCats(){
  $("#cats").innerHTML=Object.entries(CATS).map(([k,v])=>{
    const n=QS.filter(q=>q.c===k).length, done=QS.filter(q=>q.c===k&&S.ratings[q.id]==="g").length;
    return `<button class="chip" aria-pressed="${k===cat}" data-c="${k}">${v}<span class="n">${done}/${n}</span></button>`;
  }).join("");
  document.querySelectorAll("#cats .chip").forEach(b=>b.onclick=()=>{cat=b.dataset.c;buildDeck();renderCats();renderCard();});
}
function renderCard(){
  stopTimer();
  const q=order[idx];
  const star=q.star?`<div class="star" role="group" aria-label="STAR checklist">${[["S","Situation"],["T","Task"],["A","Action"],["R","Result"]].map(([l,n])=>`<label><input type="checkbox" id="st-${l}"><b>${l}</b>${n}</label>`).join("")}</div>`:"";
  $("#pcard").innerHTML=`
    <div class="cardtop"><span class="tag">${CATS[q.c]}</span><span class="count">Card ${idx+1} of ${order.length}</span>${timerHTML("pt")}</div>
    <p class="q">${esc(q.q)}</p>
    <p class="want"><b>What they're listening for:</b> ${esc(q.want)}</p>
    ${star}
    <label for="ans" class="tip">Jot your key points (optional), then say it out loud.</label>
    <textarea id="ans" placeholder="My answer…"></textarea>
    <div id="rev"></div>`;
  bindTimer("pt");
  renderReveal();
  renderDots();
}
function renderReveal(){
  const q=order[idx];
  if(!revealed){
    $("#rev").innerHTML=`<div class="row"><button class="btn primary" id="show">Show sample answer</button><button class="btn ghost" id="skip">Skip</button></div>`;
    $("#show").onclick=()=>{revealed=true;stopTimer();renderReveal();};
    $("#skip").onclick=next;
    return;
  }
  $("#rev").innerHTML=`
    <div class="sample"><h4>Sample answer · make it yours</h4>${esc(q.a)}</div>
    ${q.tip?`<p class="tip"><b>Coach's note:</b> ${esc(q.tip)}</p>`:""}
    <p class="tip" style="margin:0">How did that go?</p>
    <div class="rate">
      <button class="g" data-r="g">Nailed it<small>+10 XP</small></button>
      <button class="m" data-r="m">Getting there<small>+5 XP</small></button>
      <button class="l" data-r="l">Practice more<small>+2 XP</small></button>
    </div>`;
  document.querySelectorAll(".rate button").forEach(b=>b.onclick=()=>{
    const r=b.dataset.r; S.ratings[q.id]=r;
    logAttempt(q,r,$("#ans").value,ELAP.pt,"cards");
    award({g:10,m:5,l:2}[r],{g:"Bravo!",m:"Nice rep",l:"Every rehearsal counts"}[r]);
    renderCats(); next();
  });
}
function next(){idx=(idx+1)%order.length; if(idx===0) buildDeck(); revealed=false; renderCard();}
function renderDots(){
  $("#pdots").innerHTML=order.map((q,i)=>`<span class="dot ${S.ratings[q.id]||""} ${i===idx?"cur":""}" title="${esc(q.q)}"></span>`).join("");
}

/* ---------- QUIZ ---------- */
let qz=null;
function newQuiz(){
  qz={items:[...QUIZ].sort(()=>Math.random()-.5).slice(0,10),i:0,score:0,picked:null,missed:[],logged:false};
  renderQuiz();
}
function renderQuiz(){
  const c=$("#qcard");
  if(!qz){c.innerHTML=`<p class="q">Ready for 10 questions?</p><p class="want">Best score so far: <b>${S.quizBest}/10</b></p><div class="row"><button class="btn primary" id="qs">Start quiz</button></div>`;$("#qs").onclick=newQuiz;return;}
  if(qz.i>=qz.items.length){
    if(qz.score>S.quizBest){S.quizBest=qz.score;}
    if(!qz.logged){qz.logged=true;S.session.quizzes.push({at:Date.now(),score:qz.score,total:qz.items.length,missed:qz.missed});}
    save();
    const msg=qz.score>=9?"Standing ovation.":qz.score>=7?"Strong show. Review the misses and run it again.":"Good rehearsal. Run it again tomorrow and watch the score climb.";
    c.innerHTML=`<span class="tag">Final score</span><p class="q">${qz.score} / 10</p><div class="meter"><i style="width:${qz.score*10}%"></i></div><p class="want">${msg}</p><div class="row"><button class="btn primary" id="qa">New quiz</button></div>`;
    $("#qa").onclick=newQuiz; return;
  }
  const it=qz.items[qz.i];
  c.innerHTML=`
    <div class="cardtop"><span class="tag">Question ${qz.i+1} of 10</span><span class="count">Score ${qz.score}</span></div>
    <div class="meter"><i style="width:${qz.i*10}%"></i></div>
    <p class="q">${esc(it.q)}</p>
    <div class="opts">${it.o.map((o,j)=>`<button class="opt" data-j="${j}"><span class="k">${"ABCD"[j]}</span><span>${esc(o)}</span></button>`).join("")}</div>
    <div id="qf"></div>`;
  document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(qz.picked!==null) return;
    const j=+b.dataset.j; qz.picked=j;
    document.querySelectorAll(".opt").forEach(x=>{const k=+x.dataset.j; if(k===it.a) x.classList.add("right"); else if(k===j) x.classList.add("wrong"); x.disabled=true;});
    const ok=j===it.a; if(ok){qz.score++;award(5,"Correct");} else qz.missed.push(it.q);
    $("#qf").innerHTML=`<div class="feedback"><b class="${ok?"ok":"no"}">${ok?"Correct.":"Not quite."}</b> ${esc(it.e)}</div><div class="row" style="margin-top:12px"><button class="btn primary" id="qn">${qz.i===9?"See score":"Next question"}</button></div>`;
    $("#qn").onclick=()=>{qz.i++;qz.picked=null;renderQuiz();};
    $("#qn").focus();
  });
}

/* ---------- CODE ---------- */
let cur=CODE[0].id, drafts={};
function renderPlist(){
  $("#plist").innerHTML=CODE.map(p=>`<button class="pitem" aria-current="${p.id===cur}" data-id="${p.id}"><span><b>${esc(p.t)}</b><small>${p.lvl}</small></span><span class="badge ${S.solved[p.id]?"done":""}">${S.solved[p.id]?"Solved":"To do"}</span></button>`).join("");
  document.querySelectorAll(".pitem").forEach(b=>b.onclick=()=>{saveDraft();cur=b.dataset.id;renderPlist();renderCode();});
}
function saveDraft(){const t=$("#cd"); if(t) drafts[cur]=t.value;}
function renderCode(){
  const p=CODE.find(x=>x.id===cur);
  const c=$("#ccard");
  const help={hint:false,sol:false};
  const solvedNow=S.session.code.some(x=>x.id===p.id);
  c.innerHTML=`
    <div class="cardtop"><span class="tag">${p.lvl==="SQL"?"SQL":"JavaScript"} · ${p.lvl}</span>${timerHTML("ct")}</div>
    <p class="q">${esc(p.t)}</p>
    <p class="want">${esc(p.task)}</p>
    <pre>${esc(p.ex)}</pre>
    <label for="cd" class="tip">Your solution. Talk through it out loud as you type.</label>
    <textarea class="code" id="cd" spellcheck="false"></textarea>
    <div class="row">
      <button class="btn" id="hb">Show hint</button>
      <button class="btn" id="sb">Show solution</button>
      <button class="btn primary" id="mb" ${solvedNow?"disabled":""}>${solvedNow?"Solved this session":S.solved[p.id]?"Mark solved again":"Mark solved"}</button>
    </div>
    <div id="hint"></div><div id="sol"></div>`;
  $("#cd").value=drafts[p.id]??p.starter;
  bindTimer("ct",p.lvl==="Medium"?900:600);
  $("#ct-b").textContent="Start timer";
  $("#hb").onclick=()=>{help.hint=true;$("#hint").innerHTML=`<div class="feedback"><b>Hint:</b> ${esc(p.hint)}</div>`;};
  $("#sb").onclick=()=>{help.sol=true;$("#sol").innerHTML=`<pre>${esc(p.sol)}</pre><p class="tip">Test the edge cases too: an empty list, one item, the biggest and smallest values.</p>`;};
  $("#mb").onclick=()=>{
    S.solved[p.id]=1; saveDraft();
    S.session.code.push({id:p.id,at:Date.now(),help:help.sol?"sol":help.hint?"hint":"none",secs:ELAP.ct||0,text:$("#cd").value});
    award(15,"Problem solved");renderPlist();renderCode();};
}

/* ---------- MOCK ---------- */
let mk=null;
const ROLE={cs:"Customer success / AI enablement",se:"Solutions engineer",ai:"AI prompt engineer / AI ops",swe:"Software engineer"};
function renderMock(){
  const m=$("#mock");
  if(!mk){
    m.innerHTML=`<div class="stage">
      <span class="tag" style="align-self:flex-start">Places, please</span>
      <h2>Mock recruiter pre-screen</h2>
      <p class="lede">Seven questions in the order a real 20–30 minute recruiter screen usually follows: an opener, two behavioral, one logistics, two for your target role, and the closing "Do you have questions for us?" Each gets a 90-second clock that starts on its own. Sit up, look at the camera and answer out loud as if it's the real call. Recording yourself on your phone is the fastest way to improve.</p>
      <div class="row"><label for="role">Target role</label>
      <select id="role">${Object.entries(ROLE).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select>
      <button class="btn primary" id="go">Start the screen</button></div>
    </div>`;
    $("#go").onclick=()=>{
      const role=$("#role").value, pick=(c,n)=>QS.filter(q=>q.c===c).sort(()=>Math.random()-.5).slice(0,n);
      const roleQs=role==="cs"?[...pick("cs",1),...pick("ai",1)]:pick(role,2);
      mk={qs:[QS[0],...pick("behavioral",2),...pick("logistics",1),...roleQs,QS.find(q=>q.id==="o8")],i:0,role,show:false,notes:[],started:[],el:[]};
      renderMock();
    };
    return;
  }
  if(mk.i>=mk.qs.length){
    stopTimer();
    m.innerHTML=`<div class="card"><span class="tag">That's a wrap</span><p class="q">Screen complete. +25 XP</p>
      <div class="sum"><div><b>${mk.qs.length}</b><span>Questions answered</span></div><div><b>${Math.round(mk.qs.length*1.5)}</b><span>Minutes of practice</span></div><div><b>${S.xp}</b><span>Total XP</span></div></div>
      <p class="want"><b>Now close strong.</b> Before hanging up on a real call, ask two of these:</p>
      <ul class="checklist"><li>What does success look like in the first 90 days?</li><li>What's the biggest challenge the team is working on right now?</li><li>How does the team use AI tools day to day?</li><li>What are the next steps in the process?</li></ul>
      <p class="tip">Then send a short thank-you email within 24 hours.</p>
      <div class="row"><button class="btn primary" id="again">Run another screen</button></div></div>`;
    $("#again").onclick=()=>{mk=null;renderMock();};
    return;
  }
  const q=mk.qs[mk.i];
  m.innerHTML=`<div class="card">
    <div class="cardtop"><span class="tag">Recruiter · ${CATS[q.c]}</span><span class="count">${mk.i+1} of ${mk.qs.length}</span>${timerHTML("mt")}</div>
    <div class="meter"><i style="width:${mk.i/mk.qs.length*100}%"></i></div>
    <p class="q">"${esc(q.q)}"</p>
    <p class="want"><b>Listening for:</b> ${esc(q.want)}</p>
    <label for="mans" class="tip">Key points you said (optional, saved to your session)</label>
    <textarea id="mans" placeholder="My answer…"></textarea>
    <div id="msamp">${mk.show?`<div class="sample"><h4>Sample answer</h4>${esc(q.a)}</div>`:""}</div>
    <p class="tip" style="margin:0">Rate this answer to save it and move on:</p>
    <div class="rate" id="mrate">
      <button class="g" data-r="g">Nailed it<small>+10 XP</small></button>
      <button class="m" data-r="m">Getting there<small>+5 XP</small></button>
      <button class="l" data-r="l">Practice more<small>+2 XP</small></button>
    </div>
    <div class="row">
      <button class="btn" id="peek">${mk.show?"Hide sample":"Peek at sample"}</button>
      <button class="btn ghost" id="mn">${mk.i===mk.qs.length-1?"Finish without rating":"Skip rating"}</button>
    </div></div>`;
  $("#mans").value=mk.notes[mk.i]||"";
  $("#mans").oninput=e=>{mk.notes[mk.i]=e.target.value;};
  bindTimer("mt",90,!mk.show&&!mk.started[mk.i]);
  mk.started[mk.i]=1;
  $("#peek").onclick=()=>{mk.el[mk.i]=Math.max(mk.el[mk.i]||0,ELAP.mt||0);mk.show=!mk.show;renderMock();};
  const advance=()=>{stopTimer();mk.i++;mk.show=false;if(mk.i>=mk.qs.length) award(25,"Mock screen complete");renderMock();};
  $("#mn").onclick=advance;
  document.querySelectorAll("#mrate button").forEach(b=>b.onclick=()=>{
    const r=b.dataset.r; S.ratings[q.id]=r;
    logAttempt(q,r,$("#mans").value,Math.max(mk.el[mk.i]||0,ELAP.mt||0),"mock");
    award({g:10,m:5,l:2}[r],{g:"Bravo!",m:"Nice rep",l:"Every rehearsal counts"}[r]);
    renderCats(); advance();
  });
}

/* ---------- SESSIONS & PROGRESS ---------- */
const RV={g:100,m:60,l:20}, RL={g:"Nailed it",m:"Getting there",l:"Practice more"};
const HELP={none:[100,"Solved clean"],hint:[70,"Solved with hint"],sol:[40,"Solved after viewing solution"]};
const DEPTS=[...Object.entries(CATS),["quiz","Quick quiz"],["code","Code warm-ups"]];
let cmpA=null, cmpB=null;
function logAttempt(q,r,text,secs,src){
  S.session.attempts.push({q:q.id,c:q.c,r,text:(text||"").trim(),secs:secs||0,src,at:Date.now()});
}
const fmtT=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
const fmtD=ts=>new Date(ts).toLocaleDateString(undefined,{month:"short",day:"numeric"});
const fmtDT=ts=>new Date(ts).toLocaleString(undefined,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});
const sessLabel=s=>"Session "+s.n+(s.name?" · "+s.name:"");
const allSessions=()=>[...S.history,S.session];
const isEmpty=s=>!s.attempts.length&&!s.quizzes.length&&!s.code.length;
function latestBy(list,key){const m={};for(const x of list) m[x[key]]=x;return Object.values(m);}
function scores(s){
  const out={};
  for(const [k] of Object.entries(CATS)){
    const xs=latestBy(s.attempts.filter(a=>a.c===k),"q");
    if(xs.length) out[k]={v:Math.round(xs.reduce((t,a)=>t+RV[a.r],0)/xs.length),n:xs.length};
  }
  if(s.quizzes.length) out.quiz={v:Math.round(s.quizzes.reduce((t,z)=>t+z.score/z.total*100,0)/s.quizzes.length),n:s.quizzes.length};
  const cs=latestBy(s.code,"id");
  if(cs.length) out.code={v:Math.round(cs.reduce((t,c)=>t+HELP[c.help][0],0)/cs.length),n:cs.length};
  return out;
}
const unitN=(k,n)=>k==="quiz"?n+" quiz"+(n>1?"zes":""):k==="code"?n+" solved":n+" question"+(n>1?"s":"");
function endSession(){
  if(isEmpty(S.session)){toast("Nothing saved in this session yet");return;}
  const done=S.session; done.ended=Date.now();
  S.history.push(done); S.session=newSession(); save();
  cmpA=done.id; cmpB=null;
  renderStats(); saveDraft(); renderCode(); renderProgress();
  toast(sessLabel(done)+" saved · Session "+S.session.n+" started");
}
function heatCell(k,s,i,list){
  const sc=scores(s)[k];
  if(!sc) return `<td class="empty">—</td>`;
  let prev=null; for(let j=i-1;j>=0;j--){const p=scores(list[j])[k]; if(p){prev=p;break;}}
  const d=prev?sc.v-prev.v:null;
  const delta=d===null?"":`<small class="${d>0?"up":d<0?"down":"flat"}">${d>0?"▲ "+d:d<0?"▼ "+(-d):"＝"}</small>`;
  const bg=`color-mix(in srgb,var(--teal) ${Math.round(8+sc.v*.4)}%,var(--surface))`;
  const tip=`${sessLabel(s)} · ${DEPTS.find(x=>x[0]===k)[1]}: ${sc.v} (${unitN(k,sc.n)})${d!==null?", "+(d>=0?"+":"")+d+" vs previous":""}`;
  return `<td style="background:${bg}" title="${esc(tip)}">${sc.v}${delta}</td>`;
}
function answerBox(a){
  if(!a) return `<div class="ans"><span class="none">Not answered in this session</span></div>`;
  return `<div class="ans"><div class="meta"><span class="rt ${a.r}">● ${RL[a.r]}</span>${a.secs?`<span>${fmtT(a.secs)} on the clock</span>`:""}<span>${a.src==="mock"?"Mock screen":"Question cards"}</span><span>${fmtDT(a.at)}</span></div>${a.text?esc(a.text):`<span class="none">No notes written</span>`}</div>`;
}
function sessDetail(s){
  let h="";
  for(const [k,v] of Object.entries(CATS)){
    const xs=s.attempts.filter(a=>a.c===k); if(!xs.length) continue;
    h+=`<div class="hgroup"><h4>${v}</h4>${xs.map(a=>{const q=QS.find(x=>x.id===a.q);return `<div class="hq">${esc(q?q.q:a.q)}</div>${answerBox(a)}`;}).join("")}</div>`;
  }
  if(s.quizzes.length) h+=`<div class="hgroup"><h4>Quick quiz</h4>${s.quizzes.map(z=>`<div class="ans"><div class="meta"><span>${fmtDT(z.at)}</span></div><b>${z.score} / ${z.total}</b>${z.missed.length?"\nMissed: "+z.missed.map(esc).join(" · "):"\nNo misses"}</div>`).join("")}</div>`;
  if(s.code.length) h+=`<div class="hgroup"><h4>Code warm-ups</h4>${s.code.map(c=>{const p=CODE.find(x=>x.id===c.id);return `<div class="hq">${esc(p?p.t:c.id)}</div><div class="ans"><div class="meta"><span>${HELP[c.help][1]}</span>${c.secs?`<span>${fmtT(c.secs)} on the clock</span>`:""}<span>${fmtDT(c.at)}</span></div><pre>${esc(c.text||"")}</pre></div>`;}).join("")}</div>`;
  return h||`<p class="tip">Nothing recorded.</p>`;
}
function renderProgress(){
  const s=S.session, sc=scores(s), list=allSessions();
  const counts=`<div class="sum"><div><b>${s.attempts.length}</b><span>Answers rated</span></div><div><b>${s.quizzes.length}</b><span>Quizzes finished</span></div><div><b>${s.code.length}</b><span>Problems solved</span></div></div>`;
  const chips=Object.keys(sc).length?`<div class="chips">${DEPTS.filter(([k])=>sc[k]).map(([k,v])=>`<span class="chip">${v}<span class="n">${sc[k].v}</span></span>`).join("")}</div>`:`<p class="tip" style="margin:0">Rate a question card, finish a quiz, rate a mock answer or solve a warm-up and it will show up here.</p>`;

  const cols=list.slice(-8), off=list.length-cols.length;
  const heat=list.length<2&&isEmpty(s)?`<p class="tip" style="margin:0">Your first session will appear here once you start practicing.</p>`:`
    <div class="scroll"><table class="heat"><thead><tr><th></th>${cols.map(x=>`<th scope="col">${x===s?"Now":"S"+x.n}<small>${fmtD(x.started)}</small></th>`).join("")}</tr></thead>
    <tbody>${DEPTS.map(([k,v])=>`<tr><th scope="row">${v}</th>${cols.map((x,i)=>heatCell(k,x,i+off,list)).join("")}</tr>`).join("")}</tbody></table></div>
    <p class="tip" style="margin:0">Score out of 100: Nailed it = 100, Getting there = 60, Practice more = 20 (your latest rating per question). Quiz = % correct. Code = 100 clean, 70 with hint, 40 after viewing the solution. Arrows compare with the last session that practiced that department.</p>`;

  let cmp="";
  if(list.length>=2){
    if(!list.find(x=>x.id===cmpA)) cmpA=list[list.length-2].id;
    if(!list.find(x=>x.id===cmpB)) cmpB=s.id;
    const A=list.find(x=>x.id===cmpA), B=list.find(x=>x.id===cmpB), sa=scores(A), sb=scores(B);
    const opt=sel=>list.map(x=>`<option value="${x.id}" ${x.id===sel?"selected":""}>${esc(sessLabel(x))}${x===s?" (current)":""} · ${fmtD(x.started)}</option>`).join("");
    const bar=(v,cls)=>v?`<div><i class="${cls}" style="width:${v.v}%"></i>${v.v}</div>`:`<div class="none">—</div>`;
    const rows=DEPTS.filter(([k])=>sa[k]||sb[k]).map(([k,v])=>{
      const d=sa[k]&&sb[k]?sb[k].v-sa[k].v:null;
      return `<div class="cbar" title="${esc(v)}: ${sa[k]?sa[k].v:"—"} → ${sb[k]?sb[k].v:"—"}"><b>${v}${d!==null?` <small class="${d>0?"up":d<0?"down":"flat"}">${d>0?"▲ "+d:d<0?"▼ "+(-d):"＝"}</small>`:""}</b><div class="bars">${bar(sa[k],"ca")}${bar(sb[k],"cb")}</div></div>`;
    }).join("");
    const lastA=Object.fromEntries(latestBy(A.attempts,"q").map(a=>[a.q,a])), lastB=Object.fromEntries(latestBy(B.attempts,"q").map(a=>[a.q,a]));
    const both=QS.filter(q=>lastA[q.id]&&lastB[q.id]);
    cmp=`<div class="card"><h3>Compare two sessions</h3>
      <div class="row"><label for="ca">From</label><select id="ca">${opt(cmpA)}</select><label for="cb">to</label><select id="cb">${opt(cmpB)}</select></div>
      <div class="legend"><span><i class="ca"></i>${esc(sessLabel(A))}</span><span><i class="cb"></i>${esc(sessLabel(B))}</span></div>
      <div class="cmp">${rows||`<p class="tip" style="margin:0">Neither session has scores yet.</p>`}</div>
      ${both.length?`<h3 style="margin-top:8px">Same question, both sessions</h3>${both.map(q=>`<div class="qpair"><b>${esc(q.q)}</b><div class="grid2" style="gap:10px">${answerBox(lastA[q.id])}${answerBox(lastB[q.id])}</div></div>`).join("")}`:`<p class="tip" style="margin:0">Answer the same question in both sessions to see your answers side by side.</p>`}
    </div>`;
  }

  const hist=S.history.length?[...S.history].reverse().map(x=>`<details class="hist"><summary><span>${esc(sessLabel(x))}</span><small>${fmtDT(x.started)} – ${fmtDT(x.ended)} · ${x.attempts.length} answers · ${x.quizzes.length} quizzes · ${x.code.length} solved</small></summary>${sessDetail(x)}<div class="row"><button class="btn ghost" data-del="${x.id}">Delete this session</button></div></details>`).join(""):`<p class="tip" style="margin:0">No saved sessions yet. End your current session to save it.</p>`;

  $("#prog").innerHTML=`
    <div class="stage">
      <span class="tag" style="align-self:flex-start">Current · started ${fmtDT(s.started)}</span>
      <h2>Session ${s.n}</h2>
      <div class="row"><input type="text" id="sname" placeholder="Name it (optional), e.g. Before Acme screen" value="${esc(s.name)}" aria-label="Session name"></div>
    </div>
    <div class="card">${counts}${chips}
      ${!isEmpty(s)?`<details class="hist"><summary><span>This session's answers</span></summary>${sessDetail(s)}</details>`:""}
      <div class="row"><button class="btn primary" id="endS">End &amp; save session, start a new one</button></div></div>
    <div class="card"><h3>Growth by department</h3>${heat}</div>
    ${cmp}
    <div class="card"><h3>Saved sessions</h3>${hist}</div>
    <div class="card"><h3>Backup</h3><p class="tip" style="margin:0">Sessions live in this browser only. Export a backup now and then, or to move your history to another device.</p>
      <div class="row"><button class="btn" id="exp">Export backup</button><button class="btn" id="impB">Import backup</button><input type="file" id="imp" accept="application/json,.json" hidden></div></div>`;

  $("#sname").oninput=e=>{S.session.name=e.target.value.slice(0,60);save();};
  $("#endS").onclick=endSession;
  if($("#ca")){$("#ca").onchange=e=>{cmpA=e.target.value;renderProgress();};$("#cb").onchange=e=>{cmpB=e.target.value;renderProgress();};}
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
    const x=S.history.find(h=>h.id===b.dataset.del);
    if(x&&confirm("Delete "+sessLabel(x)+"? This can't be undone.")){S.history=S.history.filter(h=>h!==x);save();renderProgress();}
  });
  $("#exp").onclick=()=>{
    const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}), a=document.createElement("a");
    a.href=URL.createObjectURL(blob); a.download="callback-coach-backup-"+new Date().toISOString().slice(0,10)+".json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  };
  $("#impB").onclick=()=>$("#imp").click();
  $("#imp").onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    f.text().then(t=>{
      const d=JSON.parse(t);
      if(!d||!Array.isArray(d.history)) throw 0;
      if(!confirm("Replace your current progress with this backup?")) return;
      S=Object.assign(DEFAULTS(),d); ensureSession(); save();
      cmpA=cmpB=null; buildDeck(); renderCats(); renderCard(); renderQuiz(); renderPlist(); renderCode(); renderStats(); renderProgress();
      toast("Backup restored");
    }).catch(()=>toast("That file isn't a Callback Coach backup"));
  };
}

$("#copyEmail").onclick=()=>{
  const txt=$("#email").textContent;
  navigator.clipboard.writeText(txt).then(()=>toast("Template copied")).catch(()=>{
    const r=document.createRange(); r.selectNodeContents($("#email")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Selected. Copy with Ctrl/Cmd+C");
  });
};
/* ---------- BOOT ---------- */
buildDeck(); renderCats(); renderCard(); renderQuiz(); renderPlist(); renderCode(); renderMock(); renderStats();
if(firstVisit) $("#t-guide").click();
