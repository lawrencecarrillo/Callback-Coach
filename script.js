/* ---------- DATA ---------- */
const CATS = {
  opening:"Opening", behavioral:"Behavioral", logistics:"Logistics",
  swe:"Software engineer", ai:"AI / prompt", cs:"Customer success", se:"Solutions engineer"
};
const QS = [
 {id:"o1",c:"opening",q:"Tell me about yourself.",want:"A short story of past, present and future that ends with why you fit this job.",a:"I've spent most of my career in {{background}}. Most recently I was {{recentRole}}, where I {{proud}}.\n\nRecently I completed {{program}}, where I built {{project}}: {{projectWhat}}.\n\nI'm looking for a role where I can combine what I learned in {{background}} with {{goal}}. That's why this role caught my eye.",tip:"Have a 30-second version ready too. Some recruiters cut in early."},
 {id:"o2",c:"opening",q:"Why do you want to work in tech?",want:"Real motivation, not just \"it pays well.\"",a:"In every job I've had, I was the person fixing the process: [an example from your past work]. I love solving the problem behind the problem. Tech lets me build those fixes myself, and {{program}} gave me the structure to do it seriously.",tip:"Tie it to a concrete moment you remember."},
 {id:"o3",c:"opening",q:"Why this company?",want:"Proof you did your homework.",a:"I've been following [company] because of [specific product, mission or recent news]. I really connect with [a value from their site]. With my background in [customer experience / training / the arts], I think I could help with [something from the job post].",tip:"Research this before every call. One specific detail beats three general ones."},
 {id:"o4",c:"opening",q:"Why this role?",want:"A clear match between the job post and your experience.",a:"The posting talks about [two duties from the post]. That's what I've done for years in {{background}}, just with [customers / guests / students] instead of users. Now I can also handle the technical side, since I've built {{project}}, so I can speak to both the customer and the engineering team.",tip:"Quote two phrases from the job post back to them."},
 {id:"o5",c:"opening",q:"Walk me through your resume.",want:"Time order, one or two sentences per role, each connected to the next.",a:"I started in [your first field], where I learned [a skill that still matters]. Then I moved into [your next role], where I [a bigger responsibility]. Most recently I was {{recentRole}}. Each role pulled me closer to systems and technology, which led me to {{program}}.",tip:"Keep it under two minutes. Stop on the role that leads into this job."},
 {id:"o6",c:"opening",q:"What's a project you're proud of?",want:"Something real, your specific part, and the impact.",a:"{{project}}. It's {{projectWhat}}. It has real users, so [why getting it right mattered]. My part was [your specific contribution], and the result was [the impact, ideally with a number].",tip:"Have a second project ready in case they ask for another example."},
 {id:"b1",c:"behavioral",star:1,q:"Tell me about a time you dealt with an unhappy customer.",want:"Empathy, ownership and a good outcome.",a:"S: At [company], a customer was upset because [what went wrong].\nT: As [your role], it was on me to fix it.\nA: I listened without interrupting, apologized, and told them exactly what I'd do. Then I [your fix].\nR: They [came back / left a good review / stayed a customer]. Most angry customers want to feel heard first.",tip:"Add a tech link: \"Users get frustrated with software too, and it's the same skill.\""},
 {id:"b2",c:"behavioral",star:1,q:"Tell me about a time you led a team under pressure.",want:"Calm leadership with clear communication.",a:"S: [A high-pressure moment: a launch, a rush, a live event, a hard deadline].\nT: I was responsible for [your part in it] and a team of [number].\nA: When [the specific challenge] happened, I [briefed the team / reassigned roles / set clear priorities] and stayed calm.\nR: We [hit the deadline / delivered on time]. When there's no second take, preparation and clear communication are everything.",tip:"Use your most memorable story. Unusual details stick with interviewers."},
 {id:"b3",c:"behavioral",star:1,q:"Tell me about a conflict with a coworker or teammate.",want:"You can disagree respectfully and still deliver.",a:"S: On a team project, a teammate and I disagreed about [approach].\nT: We had a deadline and needed to agree.\nA: I asked to talk one-on-one, listened to their reasoning, and shared mine. We [compromised / tested both / asked the client].\nR: We shipped on time and worked better together after. Argue about the idea, not the person.",tip:"Never make the other person the villain."},
 {id:"b4",c:"behavioral",star:1,q:"Tell me about a time you failed or made a mistake.",want:"Honesty and what you changed afterward.",a:"S/T: [A real, moderate mistake: a scheduling error, a bug, a missed handoff.]\nA: I owned it right away, told my team, and fixed it by [action].\nR: Then I [changed a process or habit] so it wouldn't happen again.",tip:"Pick something real but not disastrous. Spend most of the time on the fix."},
 {id:"b5",c:"behavioral",star:1,q:"Tell me about a time you had to learn something new quickly.",want:"How you learn, not just that you did.",a:"When I started {{program}}, I'd never [used Git / worked in a large codebase / used a new tool]. Within [a few weeks] I was [shipping a feature / using it on a real project]. I learned by breaking it into small pieces, asking questions early, using AI to explain things, and then checking the work myself.",tip:"Name your learning method. Teaching roles love this."},
 {id:"b6",c:"behavioral",star:1,q:"Tell me about a time you taught or trained someone.",want:"You can make complex things clear for others.",a:"S: As {{recentRole}}, I trained [new hires / customers / students].\nT: They needed to be ready in [timeframe].\nA: I broke the job into short lessons, demonstrated, let them practice, and checked in afterward.\nR: [Result: faster ramp-up, fewer mistakes]. The same approach works for teaching people new tools.",tip:"Great for AI enablement and customer success roles."},
 {id:"b7",c:"behavioral",star:1,q:"How do you handle many tasks at once?",want:"A real system you use.",a:"In {{background}} I was always juggling [several responsibilities]. I'd [start each day with a priorities list, delegate where I could, and check in at set times]. In tech I do the same with a task board or GitHub issues.",tip:"Describe the system, then one example."},
 {id:"l1",c:"logistics",q:"What are your salary expectations?",want:"A researched range, said calmly.",a:"Based on my research for this role in [city], I'm looking in the range of {{salary}}. I'm flexible depending on the full package and growth opportunity.",tip:"Many job posts list a pay range, and some places (like NYC) require it by law. Start there."},
 {id:"l2",c:"logistics",q:"When can you start?",want:"A clear, honest date.",a:"I can start {{startDate}}.",tip:"Know your answer before the call."},
 {id:"l3",c:"logistics",q:"Remote, hybrid or in-office?",want:"Flexibility plus your real preference.",a:"I'm based in {{location}}, so I'm happy with [your preference]. [If true: I've worked fully remote before, so I'm comfortable with that setup.]",tip:"Check the job post first so you aren't surprised."},
 {id:"l4",c:"logistics",q:"Why are you leaving {{background}}?",want:"A positive reason, no complaints.",a:"I'm not running away from {{background}}, I'm taking it with me. The best part of that work was [what you loved about it], and tech lets me do that at a bigger scale.",tip:"Never criticize a past employer."},
 {id:"s1",c:"swe",q:"What happens when you type a URL into a browser?",want:"The basic flow in plain language.",a:"The browser looks up the site's address through DNS, which works like a phone book for the internet. It sends a request to that server, the server sends back HTML, CSS and JavaScript, and the browser turns that into the page you see.",tip:"Keep it simple unless they ask for more detail."},
 {id:"s2",c:"swe",q:"What's the difference between frontend and backend?",want:"A clear split, ideally with an analogy.",a:"Frontend is what the user sees and clicks: layout, buttons and forms. Backend is behind the scenes: the server, the database and the logic that saves and fetches data. In a restaurant, frontend is the dining room and backend is the kitchen.",tip:"Everyday analogies, like a restaurant, make technical ideas easy to follow."},
 {id:"s3",c:"swe",q:"What is an API?",want:"A definition plus an example.",a:"An API is a set of rules that lets two programs talk to each other. One sends a request and the other sends back data. It's like a waiter: you don't walk into the kitchen, you give your order to the waiter and they bring back your food.",tip:"Mention an API you've actually used in one of your projects."},
 {id:"s4",c:"swe",q:"What is Git and why do teams use it?",want:"Branches, pull requests and review.",a:"Git tracks every change to code so you can see history and undo mistakes. Teams work on branches, then open a pull request so others can review before merging into main. I used that workflow on {{project}}.",tip:""},
 {id:"s5",c:"swe",q:"How do you debug a problem?",want:"A calm, step-by-step method.",a:"First I reproduce the bug. Then I read the error message and narrow down where it starts using console logs or dev tools. I change one thing at a time and test. If I'm stuck I search, ask AI to explain, or ask a teammate, and I always confirm the fix works.",tip:""},
 {id:"s6",c:"swe",q:"How do you use AI coding tools?",want:"Useful, but you stay responsible.",a:"I use them to explain unfamiliar code, draft boilerplate and brainstorm approaches. I treat the output like a first draft: I read it, test it and make sure I understand it before I commit it. AI speeds me up, but I'm responsible for the code.",tip:"More companies ask this every month."},
 {id:"a1",c:"ai",q:"What makes a good prompt?",want:"Role, context, task, format, examples, and what to do when unsure.",a:"A good prompt is clear and specific. It gives the AI a role, the context it needs, the exact task, the format I want back, and examples of good and bad answers. It also says what to do when the AI doesn't know, like \"say you're not sure instead of guessing.\"",tip:""},
 {id:"a2",c:"ai",q:"A prompt gives bad or inconsistent results. How do you fix it?",want:"A test-and-compare method, not guessing.",a:"I collect examples of the bad outputs to see the pattern. I check whether the prompt is vague, missing context or asking too much at once. Then I change one thing at a time and re-test on the same set of inputs so the comparison is fair.",tip:""},
 {id:"a3",c:"ai",q:"How do you know if an AI's answer is good?",want:"Test sets, rubrics, edge cases.",a:"I build a small test set of real questions with expected answers, then score outputs against a checklist: accurate, complete, right format and safe. For an assistant that answers from company policies, the key check is whether the answer matches the actual policy, because a wrong answer could cause real problems.",tip:""},
 {id:"a4",c:"ai",q:"What is a hallucination, and how do you reduce it?",want:"Grounding, citations and permission to say \"I don't know.\"",a:"A hallucination is when the AI confidently makes something up. I reduce it by giving the AI real source material, telling it to only use that material, asking it to cite where the answer came from, and telling it to say \"I don't know\" when the answer isn't there.",tip:""},
 {id:"a5",c:"ai",q:"What is RAG?",want:"Retrieve first, then generate.",a:"RAG means retrieval-augmented generation. The system first searches your own documents for the relevant pieces, then gives those to the AI to answer from. For example, a help-desk assistant pulls the right section of the company's policies, then the AI explains it in plain language.",tip:""},
 {id:"a6",c:"ai",q:"How would you teach a non-technical team to use an AI tool?",want:"An enablement mindset: start small, practice, follow up.",a:"I'd start with one task they already do every week and show how the tool helps with it. Then a short hands-on session where everyone tries it with their own work, a one-page cheat sheet, and office hours a week later to answer questions. I'd track who's using it and gather feedback to improve the training.",tip:"Lean on any experience you have training or teaching people."},
 {id:"a7",c:"ai",q:"When should you NOT use AI?",want:"Judgment and risk awareness.",a:"When a mistake would be costly and no human is checking, when a simple rule or regular code would be more reliable, or when the data is private and shouldn't go to an outside model. Sometimes a spreadsheet is the better answer.",tip:""},
 {id:"c1",c:"cs",q:"A customer says the integration stopped syncing this morning. What do you do?",want:"Empathy first, then logical troubleshooting.",a:"Reply right away: acknowledge the problem, apologize for the disruption, ask when it last worked and for a screenshot of any error, and promise an update time.\n\nThen: check the status page, confirm their API key or login hasn't expired (look for 401 errors), read the sync logs for the first failure, try to reproduce it in a test account, and escalate to engineering with details if it's a bug, keeping the customer updated.",tip:"Graders look for empathy, a next step and a promised update time."},
 {id:"c2",c:"cs",q:"How would you onboard a new customer to our product?",want:"A clear plan with milestones.",a:"I'd start with a kickoff call to learn their goals and what success looks like. Then a short setup plan with dates, a hands-on training session for their team, and a check-in after two weeks to see what's working. I'd watch usage and reach out early if adoption is slow.",tip:"Think of it like training a new team member: clear goals, hands-on practice, then follow-up."},
 {id:"c3",c:"cs",q:"A customer wants a feature we don't have. What do you say?",want:"Honest, helpful, and you log the feedback.",a:"I'd thank them, ask what problem they're trying to solve, and share any workaround that exists today. I'd be honest that it isn't available, log the request for the product team with their use case, and follow up if it gets built.",tip:"Never promise a feature you can't guarantee."},
 {id:"c4",c:"cs",q:"A big account is using the product less and may not renew. What do you do?",want:"Proactive, data-informed retention.",a:"First I'd look at the usage data to see what dropped and when. Then I'd reach out to my main contact, not to sell, but to ask how things are going and what's changed on their side, like a new team lead or new goals. Based on that, I'd offer a refresher training, connect them with a feature that fits their new goals, or bring in support for any open issues. I'd set a check-in plan through renewal.",tip:"Interviewers want to hear that you act before the customer complains."},
 {id:"c5",c:"cs",q:"How do you prioritize when several customers need you at once?",want:"A clear triage method.",a:"I sort by impact and urgency: anything blocking a customer's business comes first, then deadlines, then routine requests. I tell each customer when they'll hear from me so nobody feels ignored. The customer with the biggest problem gets me first, but everyone gets acknowledged.",tip:""},
 {id:"c6",c:"cs",q:"What metrics matter in customer success?",want:"You know how the role is measured.",a:"Retention and churn rate, net revenue retention, product adoption and usage, customer satisfaction scores like CSAT or NPS, time to first value during onboarding, and support ticket trends. Together they show whether customers are getting real value.",tip:"Know these terms by name. They come up often."},
 {id:"e1",c:"se",q:"Explain a technical concept to me as if I were a non-technical customer.",want:"Clarity, an analogy, and checking for understanding.",a:"Pick something you know well, like RAG: \"Imagine a new employee who's smart but hasn't read the policy binder. Instead of guessing, they look up the right page first and then answer. That's what our assistant does: it finds the relevant policy, then explains it in plain English.\" Then check in: \"Does that match how your team looks up answers today?\"",tip:"Practice this one out loud a lot. It's the core of solutions and enablement roles."},
 {id:"e2",c:"se",q:"Walk me through a demo of a product you've built.",want:"A story built around the user's problem, not a feature tour.",a:"Start with the problem: [what your users struggled with]. Show one realistic task end to end in {{project}}. Point out one detail that builds trust, like [a citation, a confirmation, an undo]. End with the impact and what you'd build next. Keep it to 5–10 minutes and leave time for questions.",tip:"Have {{project}} ready to demo, with a backup recording in case the live demo fails."},
 {id:"e3",c:"se",q:"A prospect asks a technical question you can't answer. What do you do?",want:"Honesty plus a reliable follow-up.",a:"I'd say: \"That's a great question, and I want to give you an accurate answer rather than guess. Let me confirm with our engineering team and get back to you by [day].\" Then I'd write it down, get the answer, and follow up when I said I would. Trust matters more than looking like you know everything.",tip:""},
 {id:"e4",c:"se",q:"How would you find out what a customer actually needs?",want:"Discovery questions, listening, and confirming.",a:"I'd ask open questions: What does your team do today? What's slow or frustrating? What would success look like six months from now? Who else is affected? Then I'd summarize what I heard back to them to confirm, before suggesting any solution.",tip:"Customer-facing experience helps here. Reading what someone needs is discovery."},
 {id:"b8",c:"behavioral",star:1,q:"Tell me about a time you improved a process.",want:"You spot inefficiency and fix it with measurable results.",a:"S: At [venue], [a process] was slow or error-prone.\nT: I wanted to make it faster and more consistent for the team.\nA: I [mapped the steps, removed one, created a checklist or tool, trained the team on it].\nR: [Measurable result: saved time, fewer errors, better reviews].",tip:"Process improvement maps directly to implementation and AI ops roles."},
 {id:"b9",c:"behavioral",star:1,q:"Tell me about a time you used data to make a decision.",want:"You look at evidence, not just instinct.",a:"S: At [company], we noticed [a pattern: complaints, slow days, staffing gaps].\nT: I needed to decide [what to change].\nA: I looked at [sales reports, ticket counts, survey results] and found [insight].\nR: We [changed X], which led to [result].",tip:"Even simple data counts: covers per night, ticket volume, review scores."},
 {id:"o7",c:"opening",q:"You're new to tech. Why should we hire you?",want:"Confidence about your transition.",a:"I'm newer to tech, but not new to work. In {{background}} I [managed people / trained staff / handled hundreds of customers], which is [the tech skill it maps to, like client management or enablement]. And I've shipped real work, like {{project}}. I bring people skills that are hard to teach, and I've proven I can learn the technical side quickly.",tip:"Expect this question. Say it with confidence, not apology."},
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
const BASE_KEY="callback-coach-v1", ACTIVE_KEY="callback-coach-active";
const ACCOUNTS=!!(window.FIREBASE_CONFIG&&window.FIREBASE_CONFIG.apiKey);
// When accounts are on, reopen the last signed-in user's local copy so there's no flash of guest data.
let KEY=BASE_KEY;
try{if(ACCOUNTS) KEY=localStorage.getItem(ACTIVE_KEY)||BASE_KEY;}catch(e){}
const DEFAULTS=()=>({xp:0,ratings:{},solved:{},days:[],quizBest:0,seq:0,session:null,history:[],updatedAt:0,profile:{},answers:{},gloss:{star:{},known:{}}});
let S=DEFAULTS();
let firstVisit=true;
try{const raw=localStorage.getItem(KEY); if(raw){firstVisit=false;S=Object.assign(S,JSON.parse(raw));}}catch(e){}
function newSession(){S.seq=(S.seq||0)+1;return {id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),n:S.seq,name:"",started:Date.now(),attempts:[],quizzes:[],code:[]};}
function ensureSession(){if(!Array.isArray(S.history)) S.history=[]; if(!S.session) S.session=newSession(); if(!S.profile) S.profile={}; if(!S.answers) S.answers={}; if(!S.gloss) S.gloss={star:{},known:{}};}
ensureSession();
function writeLocal(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function save(){S.updatedAt=Date.now();writeLocal();if(window.CC&&CC.onSave) CC.onSave();}
writeLocal();
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LEVELS=[[0,"Extra"],[60,"Understudy"],[180,"Ensemble"],[360,"Featured"],[600,"Lead"],[900,"Headliner"]];
/* ---------- PERSONALIZATION ----------
   Sample answers are general templates. {{key}} slots fill in from the user's profile;
   [brackets] are details only the user can supply. Editing the profile or saving your own
   answers needs a login when accounts are set up (anyone can when they aren't). */
const TOK={
  name:["your name","Your name","Jordan Rivera"],
  background:["your field","Field you're coming from","hospitality, teaching, retail, healthcare…"],
  recentRole:["your most recent role","Most recent role","operations manager at a restaurant group"],
  proud:["one thing you're proud of","Something you're proud of in that role (start with a verb)","cut guest wait times by 20% with a new seating system"],
  program:["your training program","Training, program or degree","a full-stack bootcamp"],
  project:["your best project","Best project (name)","ShiftMate"],
  projectWhat:["what your project does","What it does, in one line","an app that helps volunteers sign up for shifts"],
  goal:["what you want to do next","What you want to do next","building tools that make customers' lives easier"],
  location:["your city","Where you're based","Chicago, IL"],
  startDate:["your start date","When you can start","two weeks after an offer"],
  salary:["your salary range","Target salary range","$70,000 to $85,000"],
  linkedin:["your LinkedIn","LinkedIn URL","linkedin.com/in/your-name"]
};
let signedIn=KEY!==BASE_KEY;
const canEdit=()=>!ACCOUNTS||signedIn;
const pv=k=>((S.profile||{})[k]||"").trim();
const TOKRE=/\{\{(\w+)\}\}|\[([^\]\n]+)\]/g;
function fillHTML(t){
  return esc(t).replace(TOKRE,(m,k,br)=>br!==undefined?`<mark class="ph">[${br}]</mark>`:pv(k)?`<span class="fill">${esc(pv(k))}</span>`:`<mark class="ph">[${TOK[k]?TOK[k][0]:k}]</mark>`);
}
function fillText(t){return t.replace(/\{\{(\w+)\}\}/g,(m,k)=>pv(k)||"["+(TOK[k]?TOK[k][0]:k)+"]");}
const qText=q=>fillText(q.q);
function renderTokens(){
  document.querySelectorAll("[data-tok]").forEach(el=>{const k=el.dataset.tok;el.innerHTML=pv(k)?esc(pv(k)):`<mark class="ph">[${TOK[k][0]}]</mark>`;});
}
function openLogin(){const b=$("#loginBtn"); if(b&&!$("#acct").hidden&&!b.hidden) b.click(); else toast("Log in to personalize");}

function today(){const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function streak(){
  const set=new Set(S.days); let n=0; const d=new Date();
  if(!set.has(today())) d.setDate(d.getDate()-1);
  while(set.has(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate())){n++;d.setDate(d.getDate()-1);}
  return n;
}
function award(n,msg,undo){
  S.xp+=n; if(!S.days.includes(today())) S.days.push(today()); save(); renderStats();
  if(undo) offerUndo("+"+n+" XP · "+msg,undo.snap,undo.then); else toast("+"+n+" XP · "+msg);
}
const unaward=n=>{S.xp=Math.max(0,S.xp-n);};

/* ---------- UNDO ----------
   Take a snapshot before an action, then offerUndo() after it. The toast shows an Undo button
   for a few seconds. Undo only works if nothing else has changed since, so it can never wipe out
   later work. */
const snapshot=()=>JSON.stringify(S);
function offerUndo(msg,snap,then){
  const mark=S.updatedAt;
  toast(msg,()=>{
    if(S.updatedAt!==mark){toast("Too late to undo. Something else changed since.");return;}
    S=Object.assign(DEFAULTS(),JSON.parse(snap)); ensureSession(); save();
    renderStats(); renderCats(); renderPlist(); renderTokens();
    if(then) then();
    toast("Undone");
  });
}
function renderStats(){
  $("#xp").textContent=S.xp;
  let l=LEVELS[0][1]; for(const [min,name] of LEVELS) if(S.xp>=min) l=name;
  $("#lvl").textContent=l; $("#streak").textContent=streak(); $("#sess").textContent=S.session.n;
}
let tt, undoFn=null;
function toast(m,undo){
  const t=$("#toast"); undoFn=undo||null; clearTimeout(tt);
  t.textContent=m;
  if(undo){
    const b=document.createElement("button"); b.className="undo"; b.textContent="Undo";
    b.onclick=()=>{const f=undoFn; undoFn=null; t.classList.remove("show","act"); clearTimeout(tt); if(f) f();};
    t.append(" ",b);
  }
  t.classList.toggle("act",!!undo); t.classList.add("show");
  tt=setTimeout(()=>{t.classList.remove("show","act"); undoFn=null;},undo?7000:1800);
}

/* ---------- TABS ---------- */
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll("nav button").forEach(x=>x.setAttribute("aria-selected",x===b));
  document.querySelectorAll("[role=tabpanel]").forEach(p=>p.hidden=p.id!=="p-"+b.dataset.tab);
  stopTimer();
  if(b.dataset.tab==="progress") renderProgress();
  if(b.dataset.tab==="profile") renderProfile();
  if(b.dataset.tab==="glossary") renderGlossary();
  if(b.dataset.tab==="mock"&&!mk) renderMock();
  b.scrollIntoView({block:"nearest",inline:"nearest"});
}));
// Fade the tab bar's edges when more tabs are hidden off-screen (phones).
const navEl=$("nav"), navFade=()=>{navEl.classList.toggle("more-l",navEl.scrollLeft>4);navEl.classList.toggle("more-r",navEl.scrollLeft+navEl.clientWidth<navEl.scrollWidth-4);};
navEl.addEventListener("scroll",navFade,{passive:true}); addEventListener("resize",navFade); navFade();
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
let cat="opening", order=[], idx=0, revealed=false, editingAns=false;
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
  document.querySelectorAll("#cats .chip").forEach(b=>b.onclick=()=>{cat=b.dataset.c;editingAns=false;buildDeck();renderCats();renderCard();});
}
function renderCard(){
  stopTimer();
  const q=order[idx];
  const star=q.star?`<div class="star" role="group" aria-label="STAR checklist">${[["S","Situation"],["T","Task"],["A","Action"],["R","Result"]].map(([l,n])=>`<label><input type="checkbox" id="st-${l}"><b>${l}</b>${n}</label>`).join("")}</div>`:"";
  $("#pcard").innerHTML=`
    <div class="cardtop"><span class="tag">${CATS[q.c]}</span><span class="count">Card ${idx+1} of ${order.length}</span>${timerHTML("pt")}</div>
    <p class="q">${fillHTML(q.q)}</p>
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
    $("#rev").innerHTML=`<div class="row"><button class="btn primary" id="show">${S.answers[q.id]?"Show my answer":"Show sample answer"}</button><button class="btn ghost" id="skip">Skip</button></div>`;
    $("#show").onclick=()=>{revealed=true;stopTimer();renderReveal();};
    $("#skip").onclick=next;
    return;
  }
  const mine=S.answers[q.id];
  const sample=`<div class="sample"><h4>Sample answer${mine?"":" · make it yours"}</h4>${fillHTML(q.a)}</div>`;
  let body;
  if(editingAns) body=`<div class="mybox"><label for="myans"><b>Your answer</b> <span class="tip">Write it the way you'd say it. Replace anything in [brackets].</span></label>
      <textarea id="myans">${esc(mine??fillText(q.a))}</textarea>
      <div class="row"><button class="btn primary" id="mySave">Save my answer</button><button class="btn ghost" id="myCancel">Cancel</button>${mine?`<button class="btn ghost" id="myDel">Delete mine, use the sample</button>`:""}</div></div>
    <details><summary class="tip">Show the sample for reference</summary>${sample}</details>`;
  else if(mine) body=`<div class="sample mine"><h4>Your answer</h4>${esc(mine)}</div>
    <div class="row"><button class="btn" id="myEdit">Edit my answer</button></div>
    <details><summary class="tip">Compare with the sample</summary>${sample}</details>`;
  else body=`${sample}<div class="row"><button class="btn" id="myEdit">${canEdit()?"Write my own version":"Log in to save your own version"}</button></div>`;
  $("#rev").innerHTML=`
    ${body}
    ${q.tip?`<p class="tip"><b>Coach's note:</b> ${fillHTML(q.tip)}</p>`:""}
    <p class="tip" style="margin:0">How did that go?</p>
    <div class="rate">
      <button class="g" data-r="g">Nailed it<small>+10 XP</small></button>
      <button class="m" data-r="m">Getting there<small>+5 XP</small></button>
      <button class="l" data-r="l">Practice more<small>+2 XP</small></button>
    </div>`;
  if($("#myEdit")) $("#myEdit").onclick=()=>{if(!canEdit()) return openLogin(); editingAns=true; renderReveal(); $("#myans").focus();};
  if($("#myCancel")) $("#myCancel").onclick=()=>{editingAns=false; renderReveal();};
  if($("#mySave")) $("#mySave").onclick=()=>{
    if(!canEdit()) return openLogin();
    const t=$("#myans").value.trim(), snap=snapshot();
    if(t) S.answers[q.id]=t; else delete S.answers[q.id];
    save(); editingAns=false; renderReveal();
    offerUndo(t?"Your answer is saved":"Using the sample answer",snap,()=>{if(order[idx]===q&&revealed) renderReveal();});
  };
  if($("#myDel")) $("#myDel").onclick=()=>{
    const snap=snapshot();
    delete S.answers[q.id]; save(); editingAns=false; renderReveal();
    offerUndo("Your answer was deleted",snap,()=>{if(order[idx]===q&&revealed) renderReveal();});
  };
  document.querySelectorAll("#rev .rate button").forEach(b=>b.onclick=()=>{
    const r=b.dataset.r, snap=snapshot(), notes=$("#ans").value, back={order:[...order],idx,cat};
    S.ratings[q.id]=r;
    logAttempt(q,r,notes,ELAP.pt,"cards");
    award({g:10,m:5,l:2}[r],{g:"Bravo!",m:"Nice rep",l:"Every rehearsal counts"}[r],{snap,then:()=>{
      // Go back to the card that was rated, answer revealed, so it can be re-rated.
      cat=back.cat; order=back.order; idx=back.idx; revealed=true; editingAns=false;
      renderCats(); renderCard(); $("#ans").value=notes;
    }});
    renderCats(); next();
  });
}
function next(){idx=(idx+1)%order.length; if(idx===0) buildDeck(); revealed=false; editingAns=false; renderCard();}
function renderDots(){
  $("#pdots").innerHTML=order.map((q,i)=>`<span class="dot ${S.ratings[q.id]||""} ${i===idx?"cur":""}" title="${esc(qText(q))}"></span>`).join("");
}

/* ---------- QUIZ ---------- */
let qz=null;
const freshQuiz=items=>({items,i:0,score:0,picked:null,picks:[],missed:[],logged:null});
function newQuiz(){qz=freshQuiz([...QUIZ].sort(()=>Math.random()-.5).slice(0,10)); renderQuiz();}
function renderQuiz(){
  const c=$("#qcard");
  if(!qz){c.innerHTML=`<p class="q">Ready for 10 questions?</p><p class="want">Best score so far: <b>${S.quizBest}/10</b></p><div class="row"><button class="btn primary" id="qs">Start quiz</button></div>`;$("#qs").onclick=newQuiz;return;}
  if(qz.i>=qz.items.length){
    if(qz.score>S.quizBest){S.quizBest=qz.score;}
    if(!qz.logged){qz.logged={at:Date.now(),score:qz.score,total:qz.items.length,missed:qz.missed}; S.session.quizzes.push(qz.logged);}
    save();
    const msg=qz.score>=9?"Standing ovation.":qz.score>=7?"Strong show. Review the misses and run it again.":"Good rehearsal. Run it again tomorrow and watch the score climb.";
    c.innerHTML=`<span class="tag">Final score</span><p class="q">${qz.score} / 10</p><div class="meter"><i style="width:${qz.score*10}%"></i></div><p class="want">${msg}</p>
      <div class="row"><button class="btn primary" id="qre">Retake these questions</button><button class="btn" id="qa">New quiz</button><button class="btn ghost" id="qrev">Review my answers</button><button class="btn ghost" id="qdrop">Don't count this quiz</button></div>
      <div id="qreview"></div>`;
    $("#qa").onclick=newQuiz;
    $("#qre").onclick=()=>{qz=freshQuiz(qz.items); renderQuiz();};
    $("#qrev").onclick=()=>{
      const r=$("#qreview"); if(r.innerHTML){r.innerHTML="";$("#qrev").textContent="Review my answers";return;}
      $("#qrev").textContent="Hide review";
      r.innerHTML=`<div class="qreview">${qz.items.map((it,i)=>{const ok=qz.picks[i]===it.a;return `<div class="feedback"><b class="${ok?"ok":"no"}">${ok?"✓":"✗"} ${esc(it.q)}</b><br>${ok?"":`Your answer: ${esc(it.o[qz.picks[i]])}<br>`}Correct: <b>${esc(it.o[it.a])}</b>. ${esc(it.e)}</div>`;}).join("")}</div>`;
    };
    $("#qdrop").onclick=()=>{
      const snap=snapshot(), done=qz;
      S.session.quizzes=S.session.quizzes.filter(z=>z!==qz.logged); unaward(qz.score*5); save(); renderStats();
      qz=null; renderQuiz();
      offerUndo("This quiz won't count toward your session",snap,()=>{qz=done; qz.logged=S.session.quizzes[S.session.quizzes.length-1]||null; renderQuiz();});
    };
    return;
  }
  const it=qz.items[qz.i], answered=qz.picked!==null, ok=answered&&qz.picked===it.a;
  c.innerHTML=`
    <div class="cardtop"><span class="tag">Question ${qz.i+1} of 10</span><span class="count">Score ${qz.score}</span></div>
    <div class="meter"><i style="width:${qz.i*10}%"></i></div>
    <p class="q">${esc(it.q)}</p>
    <div class="opts">${it.o.map((o,j)=>`<button class="opt ${answered&&j===it.a?"right":answered&&j===qz.picked?"wrong":""}" data-j="${j}" ${answered?"disabled":""}><span class="k">${"ABCD"[j]}</span><span>${esc(o)}</span></button>`).join("")}</div>
    <div id="qf">${answered?`<div class="feedback"><b class="${ok?"ok":"no"}">${ok?"Correct.":"Not quite."}</b> ${esc(it.e)}</div>
      <div class="row" style="margin-top:12px"><button class="btn primary" id="qn">${qz.i===9?"See score":"Next question"}</button><button class="btn" id="qchg">Change my answer</button></div>`:""}</div>
    <div class="row"><button class="btn ghost" id="qrestart">Start over</button>${qz.i>0&&!answered?`<span class="tip">Answers so far: ${qz.score} correct</span>`:""}</div>`;
  document.querySelectorAll("#qcard .opt").forEach(b=>b.onclick=()=>{
    if(qz.picked!==null) return;
    const j=+b.dataset.j; qz.picked=j; qz.picks[qz.i]=j;
    if(j===it.a){qz.score++;award(5,"Correct");} else qz.missed.push(it.q);
    renderQuiz(); $("#qn").focus();
  });
  if(answered){
    $("#qn").onclick=()=>{qz.i++;qz.picked=null;renderQuiz();};
    $("#qchg").onclick=()=>{
      if(qz.picked===it.a){qz.score--; unaward(5);} else qz.missed=qz.missed.filter(m=>m!==it.q);
      qz.picked=null; qz.picks[qz.i]=undefined; save(); renderStats(); renderQuiz();
    };
  }
  $("#qrestart").onclick=()=>{
    if(!confirm("Start this quiz over? Your answers so far will be cleared.")) return;
    unaward(qz.score*5); save(); renderStats();
    qz=freshQuiz(qz.items); renderQuiz();
  };
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
      <button class="btn ghost" id="rb">Reset code</button>
      ${solvedNow?`<span class="badge done">Solved this session</span><button class="btn" id="ub">Unmark solved</button>`:`<button class="btn primary" id="mb">${S.solved[p.id]?"Mark solved again":"Mark solved"}</button>`}
    </div>
    <div id="hint"></div><div id="sol"></div>`;
  $("#cd").value=drafts[p.id]??p.starter;
  bindTimer("ct",p.lvl==="Medium"?900:600);
  $("#ct-b").textContent="Start timer";
  $("#hb").onclick=()=>{
    const open=!!$("#hint").innerHTML; help.hint=true;
    $("#hint").innerHTML=open?"":`<div class="feedback"><b>Hint:</b> ${esc(p.hint)}</div>`;
    $("#hb").textContent=open?"Show hint":"Hide hint";
  };
  $("#sb").onclick=()=>{
    const open=!!$("#sol").innerHTML; help.sol=true;
    $("#sol").innerHTML=open?"":`<pre>${esc(p.sol)}</pre><p class="tip">Test the edge cases too: an empty list, one item, the biggest and smallest values.</p>`;
    $("#sb").textContent=open?"Show solution":"Hide solution";
  };
  $("#rb").onclick=()=>{
    const prev=$("#cd").value; if(prev===p.starter) return toast("Already the starter code");
    $("#cd").value=p.starter; drafts[p.id]=p.starter;
    toast("Code reset to the starter",()=>{if(cur===p.id&&$("#cd")) $("#cd").value=prev; drafts[p.id]=prev;});
  };
  if($("#mb")) $("#mb").onclick=()=>{
    const first=!S.solved[p.id]; S.solved[p.id]=1; saveDraft();
    S.session.code.push({id:p.id,at:Date.now(),help:help.sol?"sol":help.hint?"hint":"none",secs:ELAP.ct||0,text:$("#cd").value,first});
    award(15,"Problem solved");renderPlist();renderCode();};
  if($("#ub")) $("#ub").onclick=()=>{
    const list=S.session.code, i=list.map(x=>x.id).lastIndexOf(p.id), entry=list[i];
    saveDraft(); list.splice(i,1); unaward(15);
    if(entry.first&&!S.history.some(h=>h.code.some(x=>x.id===p.id))) delete S.solved[p.id];
    save(); renderStats(); renderPlist(); renderCode(); toast("Unmarked. You can mark it solved again anytime");
  };
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
      <select id="role">${Object.entries(ROLE).map(([k,v])=>`<option value="${k}" ${pv("role")===k?"selected":""}>${v}</option>`).join("")}</select>
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
    <p class="q">"${fillHTML(q.q)}"</p>
    <p class="want"><b>Listening for:</b> ${esc(q.want)}</p>
    <label for="mans" class="tip">Key points you said (optional, saved to your session)</label>
    <textarea id="mans" placeholder="My answer…"></textarea>
    <div id="msamp">${mk.show?(S.answers[q.id]?`<div class="sample mine"><h4>Your answer</h4>${esc(S.answers[q.id])}</div>`:`<div class="sample"><h4>Sample answer</h4>${fillHTML(q.a)}</div>`):""}</div>
    <p class="tip" style="margin:0">Rate this answer to save it and move on:</p>
    <div class="rate" id="mrate">
      <button class="g" data-r="g">Nailed it<small>+10 XP</small></button>
      <button class="m" data-r="m">Getting there<small>+5 XP</small></button>
      <button class="l" data-r="l">Practice more<small>+2 XP</small></button>
    </div>
    <div class="row">
      <button class="btn" id="peek">${mk.show?"Hide answer":S.answers[q.id]?"Peek at my answer":"Peek at sample"}</button>
      <button class="btn ghost" id="mn">${mk.i===mk.qs.length-1?"Finish without rating":"Skip rating"}</button>
      <button class="btn ghost" id="mquit">Start over</button>
    </div></div>`;
  $("#mans").value=mk.notes[mk.i]||"";
  $("#mans").oninput=e=>{mk.notes[mk.i]=e.target.value;};
  bindTimer("mt",90,!mk.show&&!mk.started[mk.i]);
  mk.started[mk.i]=1;
  $("#peek").onclick=()=>{mk.el[mk.i]=Math.max(mk.el[mk.i]||0,ELAP.mt||0);mk.show=!mk.show;renderMock();};
  // Rating or skipping moves on; Undo in the toast comes back to this question.
  const here=mk.i, run=mk, last=mk.i===mk.qs.length-1;
  const goBack=()=>{mk=run; mk.i=here; mk.show=false; renderCats(); renderMock();};
  const advance=(xp,msg,snap)=>{
    stopTimer(); mk.i++; mk.show=false;
    if(last){xp+=25; msg=msg?msg+" · Screen complete":"Mock screen complete";}
    if(xp) award(xp,msg,{snap,then:goBack}); else offerUndo("Question skipped",snap,goBack);
    renderMock();
  };
  $("#mn").onclick=()=>advance(0,"",snapshot());
  $("#mquit").onclick=()=>{if(!confirm("Start over with a new screen? Answers you've already rated stay saved.")) return; stopTimer(); mk=null; renderMock();};
  document.querySelectorAll("#mrate button").forEach(b=>b.onclick=()=>{
    const r=b.dataset.r, snap=snapshot(); S.ratings[q.id]=r;
    logAttempt(q,r,$("#mans").value,Math.max(mk.el[mk.i]||0,ELAP.mt||0),"mock");
    renderCats(); advance({g:10,m:5,l:2}[r],{g:"Bravo!",m:"Nice rep",l:"Every rehearsal counts"}[r],snap);
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
  const snap=snapshot(), done=S.session; done.ended=Date.now();
  S.history.push(done); S.session=newSession(); save();
  cmpA=done.id; cmpB=null;
  renderStats(); saveDraft(); renderCode(); renderProgress();
  offerUndo(sessLabel(done)+" saved · Session "+S.session.n+" started",snap,()=>{cmpA=cmpB=null; renderCode(); renderProgress();});
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
    h+=`<div class="hgroup"><h4>${v}</h4>${xs.map(a=>{const q=QS.find(x=>x.id===a.q);return `<div class="hq">${esc(q?qText(q):a.q)}</div>${answerBox(a)}`;}).join("")}</div>`;
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
      ${both.length?`<h3 style="margin-top:8px">Same question, both sessions</h3>${both.map(q=>`<div class="qpair"><b>${esc(qText(q))}</b><div class="grid2" style="gap:10px">${answerBox(lastA[q.id])}${answerBox(lastB[q.id])}</div></div>`).join("")}`:`<p class="tip" style="margin:0">Answer the same question in both sessions to see your answers side by side.</p>`}
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
    if(!x||!confirm("Delete "+sessLabel(x)+"?")) return;
    const snap=snapshot(); S.history=S.history.filter(h=>h!==x); save(); renderProgress();
    offerUndo(sessLabel(x)+" deleted",snap,renderProgress);
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
      const before=snapshot();
      applyState(d); save();
      const mark=S.updatedAt;
      toast("Backup restored",()=>{if(S.updatedAt!==mark) return toast("Too late to undo. Something else changed since."); applyState(JSON.parse(before)); save(); toast("Undone");});
    }).catch(()=>toast("That file isn't a Callback Coach backup"));
  };
}

$("#copyEmail").onclick=()=>{
  const txt=$("#email").textContent;
  navigator.clipboard.writeText(txt).then(()=>toast("Template copied")).catch(()=>{
    const r=document.createRange(); r.selectNodeContents($("#email")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Selected. Copy with Ctrl/Cmd+C");
  });
};
/* ---------- PROFILE ---------- */
function renderProfile(){
  const el=$("#profile");
  if(!canEdit()){
    el.innerHTML=`<div class="stage">
      <span class="tag" style="align-self:flex-start">Make it yours</span>
      <h2>Personalize your practice</h2>
      <p class="lede">With a free account you can add your background, best project and goals. They fill into the sample answers, the playbook and the thank-you email automatically. You can also save your own version of any answer, and it all follows you to any device.</p>
      <div class="row"><button class="btn primary" id="profLogin">Log in or create a free account</button></div>
    </div>
    <div class="card"><h3>Here's the idea</h3>
      <p class="tip" style="margin:0">Without a profile, answers show <mark class="ph">[highlighted slots]</mark> for you to fill in out loud. With one, they read like this:</p>
      <div class="sample"><h4>Tell me about yourself · preview</h4>I've spent most of my career in <span class="fill">teaching</span>. Most recently I was <span class="fill">a 7th-grade science teacher</span>, where I <mark class="ph">[one thing you're proud of]</mark>…</div></div>`;
    $("#profLogin").onclick=openLogin;
    return;
  }
  const P=S.profile, mine=QS.filter(q=>S.answers[q.id]);
  const field=k=>`<label class="field${k==="proud"?" wide":""}">${TOK[k][1]}<input type="text" data-k="${k}" value="${esc(P[k]||"")}" placeholder="e.g. ${esc(TOK[k][2])}" maxlength="160"></label>`;
  el.innerHTML=`
    <div class="card"><h3>About you</h3>
      <p class="tip" style="margin:0">These fill into the <mark class="ph">[highlighted slots]</mark> in sample answers, the playbook and the thank-you email. Leave anything blank to keep the slot. Changes save automatically${ACCOUNTS?" to your account":" in this browser"}.</p>
      <div class="pgrid">
        ${field("name")}
        <label class="field">Target role<select data-k="role"><option value="">Not sure yet</option>${Object.entries(ROLE).map(([k,v])=>`<option value="${k}" ${P.role===k?"selected":""}>${v}</option>`).join("")}</select></label>
        ${["background","recentRole","proud","program","goal","project","projectWhat","location","startDate","salary","linkedin"].map(field).join("")}
      </div></div>
    <div class="card"><h3>Preview</h3>
      <div class="sample" id="profPrev"></div>
      <p class="tip" style="margin:0">Highlighted parts are details only you can add. Say them out loud, or save your own version of the answer in Question cards.</p></div>
    <div class="card"><h3>Your answers <span class="count">${mine.length} of ${QS.length}</span></h3>
      ${mine.length?mine.map(q=>`<div class="qpair"><b>${esc(qText(q))}</b><div class="ans">${esc(S.answers[q.id])}</div><div class="row"><button class="btn ghost" data-delans="${q.id}">Delete</button></div></div>`).join(""):`<p class="tip" style="margin:0">None yet. In Question cards, reveal an answer and choose <b>Write my own version</b>. Your answers replace the samples everywhere, including the mock pre-screen.</p>`}</div>
    <div class="card"><h3>Start fresh</h3>
      <p class="tip" style="margin:0">Remove your details or your saved answers. Your practice history, scores and XP aren't affected, and you can undo right after.</p>
      <div class="row"><button class="btn" id="pclear">Clear my profile details</button><button class="btn" id="pclearans">Delete all my answers</button></div></div>
    <div class="card"><h3>Profile file</h3>
      <p class="tip" style="margin:0">Save your profile and answers as a file, or load one. Loading adds to what's here and replaces matching fields and answers. Your practice history isn't affected.</p>
      <div class="row"><button class="btn" id="pexp">Export profile</button><button class="btn" id="pimpB">Import profile</button><input type="file" id="pimp" accept="application/json,.json" hidden></div></div>`;
  const prev=()=>{$("#profPrev").innerHTML=`<h4>Tell me about yourself</h4>${fillHTML(QS[0].a)}`;};
  prev();
  let t;
  el.querySelectorAll("[data-k]").forEach(inp=>inp.addEventListener(inp.tagName==="SELECT"?"change":"input",()=>{
    const v=inp.value.trim(); if(v) S.profile[inp.dataset.k]=v; else delete S.profile[inp.dataset.k];
    prev(); renderTokens(); clearTimeout(t); t=setTimeout(save,400);
  }));
  el.querySelectorAll("[data-delans]").forEach(b=>b.onclick=()=>{
    const snap=snapshot(); delete S.answers[b.dataset.delans]; save(); renderProfile();
    offerUndo("Answer deleted",snap,renderProfile);
  });
  $("#pclear").onclick=()=>{
    if(!Object.keys(S.profile).length) return toast("Your profile is already empty");
    if(!confirm("Clear all your profile details? Your saved answers and practice history stay.")) return;
    const snap=snapshot(); S.profile={}; save(); renderTokens(); renderProfile(); if(!mk) renderMock();
    offerUndo("Profile details cleared",snap,()=>{renderProfile(); if(!mk) renderMock();});
  };
  $("#pclearans").onclick=()=>{
    const n=Object.keys(S.answers).length; if(!n) return toast("You haven't saved any answers yet");
    if(!confirm(`Delete all ${n} of your saved answers? The samples will show again.`)) return;
    const snap=snapshot(); S.answers={}; save(); renderProfile(); if(revealed) renderReveal();
    offerUndo(`${n} answer${n===1?"":"s"} deleted`,snap,()=>{renderProfile(); if(revealed) renderReveal();});
  };
  $("#pexp").onclick=()=>{
    const data={type:"callback-coach-profile",version:1,profile:S.profile,answers:S.answers};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}), a=document.createElement("a");
    a.href=URL.createObjectURL(blob); a.download="callback-coach-profile.json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  };
  $("#pimpB").onclick=()=>$("#pimp").click();
  $("#pimp").onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    f.text().then(txt=>{
      const d=JSON.parse(txt);
      const prof=d.profile||{}, ans=d.answers||{};
      if(typeof prof!=="object"||typeof ans!=="object") throw 0;
      const n=Object.keys(ans).filter(k=>QS.some(q=>q.id===k)).length;
      if(!confirm(`Load this profile and ${n} answer${n===1?"":"s"}?`)) return;
      const snap=snapshot();
      for(const [k,v] of Object.entries(prof)) if((k in TOK||k==="role")&&typeof v==="string"&&v.trim()) S.profile[k]=v.trim().slice(0,160);
      for(const [k,v] of Object.entries(ans)) if(QS.some(q=>q.id===k)&&typeof v==="string"&&v.trim()) S.answers[k]=v.trim();
      save(); renderTokens(); renderProfile(); if(revealed) renderReveal();
      offerUndo("Profile loaded",snap,()=>{renderProfile(); if(revealed) renderReveal();});
    }).catch(()=>toast("That file isn't a Callback Coach profile"));
  };
}

/* ---------- ACCOUNT BRIDGE (used by auth.js) ---------- */
function applyState(obj){
  stopTimer(); saveDraft();
  S=Object.assign(DEFAULTS(),obj||{}); ensureSession(); writeLocal();
  qz=null; mk=null; cmpA=cmpB=null; drafts={};
  editingAns=false;
  buildDeck(); renderCats(); renderCard(); renderQuiz(); renderPlist(); renderCode(); renderMock(); renderStats(); renderTokens();
  if(!$("#p-progress").hidden) renderProgress();
  if(!$("#p-profile").hidden) renderProfile();
  if(!$("#p-glossary").hidden) renderGlossary();
}
window.CC={
  BASE_KEY,
  get state(){return S;},
  get key(){return KEY;},
  useKey(k){KEY=k;try{if(k===BASE_KEY) localStorage.removeItem(ACTIVE_KEY); else localStorage.setItem(ACTIVE_KEY,k);}catch(e){}},
  readLocal(k){try{const r=localStorage.getItem(k);return r?JSON.parse(r):null;}catch(e){return null;}},
  hasProgress:o=>!!o&&(o.xp>0||(o.history||[]).length>0||(o.session&&((o.session.attempts||[]).length||(o.session.quizzes||[]).length||(o.session.code||[]).length))>0),
  applyState, toast,
  setSignedIn(v){signedIn=!!v; editingAns=false; if(revealed) renderReveal(); if(!$("#p-profile").hidden) renderProfile();},
  onSave:null
};

/* ---------- BOOT ---------- */
buildDeck(); renderCats(); renderCard(); renderQuiz(); renderPlist(); renderCode(); renderMock(); renderStats(); renderTokens();
if(firstVisit) $("#t-guide").click();
