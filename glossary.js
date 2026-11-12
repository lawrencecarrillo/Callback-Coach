/* ---------- GLOSSARY ----------
   Tech terms in plain English. Each entry: t (term), c (category key), d (definition),
   e (an example of how you'd hear or use it), aka (other names, optional; searched too).
   Uses helpers from script.js ($, esc, S, save, toast). Starred and known terms live in S.gloss. */
const GCATS={
  web:"Web & APIs", code:"Code & engineering", data:"Data", cloud:"Cloud & security",
  ai:"AI", product:"Product & Agile", biz:"Business & customers", work:"Workplace talk", hire:"Hiring & pay"
};
const GLOSSARY=[
 // Web & APIs
 {t:"API",c:"web",aka:"application programming interface",d:"A set of rules that lets two programs talk to each other. One sends a request, the other sends back data.",e:"\"Our app pulls the weather from a third-party API.\""},
 {t:"Endpoint",c:"web",d:"A specific address in an API that does one job, like /users or /orders.",e:"\"Call the /orders endpoint to get a customer's order history.\""},
 {t:"REST",c:"web",aka:"RESTful",d:"A common style for designing web APIs using URLs and standard HTTP methods like GET and POST.",e:"\"It's a REST API, so you can test it from the browser or Postman.\""},
 {t:"HTTP / HTTPS",c:"web",d:"The language browsers and servers use to send web pages and data. HTTPS is the encrypted, secure version.",e:"\"Make sure the login page uses HTTPS.\""},
 {t:"GET, POST, PUT, DELETE",c:"web",aka:"HTTP methods",d:"The main kinds of API requests: read data, create data, update data and remove data.",e:"\"The form sends a POST request when you click Save.\""},
 {t:"Status code",c:"web",aka:"200 404 500 401 403",d:"A three-digit number a server sends back. 200 means OK, 404 means not found, 401 means not logged in, 500 means the server broke.",e:"\"The integration is failing with a 401, so the API key probably expired.\""},
 {t:"JSON",c:"web",d:"A simple text format for sending data between programs, written as labels and values in curly braces.",e:"\"The API returns the customer record as JSON.\""},
 {t:"Webhook",c:"web",d:"An automatic message one app sends to another when something happens, instead of the other app asking over and over.",e:"\"Stripe sends us a webhook every time a payment goes through.\""},
 {t:"Frontend",c:"web",aka:"client side",d:"The part of an app people see and click: layout, buttons and forms.",e:"\"The bug is in the frontend; the data is right but the page shows it wrong.\""},
 {t:"Backend",c:"web",aka:"server side",d:"The behind-the-scenes part of an app: servers, databases and the logic that saves and fetches data.",e:"\"The backend team is adding a new field to the database.\""},
 {t:"Full stack",c:"web",d:"Working on both the frontend and the backend.",e:"\"We're hiring a full-stack engineer who's comfortable with React and Node.\""},
 {t:"DNS",c:"web",aka:"domain name system",d:"The internet's phone book. It turns a name like google.com into the address of a server.",e:"\"The site was down because of a DNS problem.\""},
 {t:"Cache",c:"web",aka:"caching",d:"A saved copy of data kept close by so it loads faster next time.",e:"\"Try clearing your cache. You might be seeing an old version of the page.\""},
 {t:"Cookie",c:"web",d:"A small piece of data a website stores in your browser, often to keep you logged in or remember settings.",e:"\"The login cookie expires after 30 days.\""},
 {t:"Latency",c:"web",d:"The delay between asking for something and getting it back. Lower is faster.",e:"\"Users in Europe see higher latency because our servers are in the US.\""},
 {t:"SDK",c:"web",aka:"software development kit",d:"A ready-made toolkit that makes it easier to build on a product or API.",e:"\"Use the JavaScript SDK instead of calling the API by hand.\""},
 {t:"Integration",c:"web",d:"A connection that lets two products share data or work together.",e:"\"Our Slack integration posts an alert when a ticket is escalated.\""},

 // Code & engineering
 {t:"Algorithm",c:"code",d:"A step-by-step set of instructions for solving a problem.",e:"\"The recommendation algorithm suggests products based on past orders.\""},
 {t:"Bug",c:"code",d:"A mistake in code that makes software behave the wrong way.",e:"\"There's a bug where the total doesn't update after a discount.\""},
 {t:"Debugging",c:"code",d:"Finding and fixing the cause of a bug.",e:"\"I spent the morning debugging the checkout flow.\""},
 {t:"Repository",c:"code",aka:"repo",d:"The folder where a project's code and its full change history are stored, often on GitHub.",e:"\"I'll send you the link to the repo.\""},
 {t:"Git",c:"code",aka:"version control",d:"A tool that tracks every change to code so teams can work together and undo mistakes.",e:"\"Everything is in Git, so we can roll back if needed.\""},
 {t:"Commit",c:"code",d:"A saved snapshot of code changes, with a short message describing them.",e:"\"I'll commit this fix and push it up.\""},
 {t:"Branch",c:"code",d:"A separate copy of the code where you can work on a change without affecting the main version.",e:"\"I'm building the new feature on its own branch.\""},
 {t:"Pull request",c:"code",aka:"PR, merge request, MR",d:"A request to merge your branch into the main code, so teammates can review it first.",e:"\"Can you review my PR before lunch?\""},
 {t:"Merge conflict",c:"code",d:"When two people changed the same lines of code and Git needs a human to decide which version to keep.",e:"\"I had to fix a merge conflict before my PR could go in.\""},
 {t:"Code review",c:"code",d:"Teammates reading and commenting on code before it's merged, to catch problems and share knowledge.",e:"\"Code review caught a security issue.\""},
 {t:"Deploy",c:"code",aka:"ship, release",d:"Putting new code live so users can use it.",e:"\"We deploy every Tuesday and Thursday.\""},
 {t:"Production",c:"code",aka:"prod, live",d:"The real version of the app that customers use.",e:"\"Don't test that in production!\""},
 {t:"Staging",c:"code",aka:"test environment, sandbox",d:"A practice copy of the app that looks like production, used for testing before release.",e:"\"It works in staging, so we're ready to deploy.\""},
 {t:"CI/CD",c:"code",aka:"continuous integration, continuous delivery",d:"Automation that tests and releases code every time someone makes a change.",e:"\"CI/CD runs the tests automatically on every pull request.\""},
 {t:"Unit test",c:"code",aka:"testing",d:"A small automated check that one piece of code does what it should.",e:"\"I added unit tests for the new pricing function.\""},
 {t:"Framework",c:"code",d:"A set of tools and rules for building apps faster, like React for websites.",e:"\"Our frontend is built with the React framework.\""},
 {t:"Library",c:"code",aka:"package, dependency",d:"Code someone else wrote that you can reuse in your project.",e:"\"We use a library to format dates.\""},
 {t:"Open source",c:"code",d:"Software whose code is public, so anyone can use it, read it and contribute.",e:"\"I contributed a feature to an open-source project.\""},
 {t:"Refactor",c:"code",d:"Cleaning up or restructuring code without changing what it does.",e:"\"Before adding features, we need to refactor this file.\""},
 {t:"Technical debt",c:"code",aka:"tech debt",d:"Shortcuts in code that save time now but make future changes harder.",e:"\"We're spending this sprint paying down tech debt.\""},
 {t:"Legacy code",c:"code",d:"Older code that still runs but is hard to change, often written by people who've left.",e:"\"The billing system is legacy code, so changes take longer.\""},
 {t:"Scalability",c:"code",aka:"scale",d:"How well a system keeps working as more users or data are added.",e:"\"Will this design scale to a million users?\""},
 {t:"IDE",c:"code",aka:"code editor, VS Code",d:"The app developers write code in, like VS Code.",e:"\"Open the project in your IDE and run it locally.\""},
 {t:"Localhost",c:"code",aka:"running locally",d:"Running an app on your own computer instead of on the internet.",e:"\"It's running on localhost:3000.\""},
 {t:"Documentation",c:"code",aka:"docs",d:"Written guides explaining how a product, API or code works.",e:"\"Check the docs before asking. It's probably covered there.\""},

 // Data
 {t:"Database",c:"data",aka:"DB",d:"An organized place to store data so it can be searched and updated.",e:"\"Customer orders are stored in the database.\""},
 {t:"SQL",c:"data",d:"The standard language for asking a database questions, like \"show me all orders from New York.\"",e:"\"I wrote a SQL query to count signups by week.\""},
 {t:"Query",c:"data",d:"A question or request you send to a database.",e:"\"That query is slow because the table is huge.\""},
 {t:"Table, row, column",c:"data",d:"How databases organize data, like a spreadsheet: a table has rows (records) and columns (fields).",e:"\"Each row in the users table is one customer.\""},
 {t:"Primary key",c:"data",aka:"ID",d:"A unique value that identifies each row in a table, like a customer ID.",e:"\"Look the order up by its primary key.\""},
 {t:"JOIN",c:"data",d:"Combining rows from two tables using a matching column.",e:"\"JOIN the orders and customers tables on customer_id.\""},
 {t:"Schema",c:"data",d:"The structure of a database: which tables exist and what columns each has.",e:"\"We need a schema change to store phone numbers.\""},
 {t:"NoSQL",c:"data",d:"Databases that store data in flexible formats like documents instead of strict tables.",e:"\"We store user settings in a NoSQL database.\""},
 {t:"Data pipeline",c:"data",aka:"ETL",d:"An automated process that moves data from one place to another and cleans it along the way.",e:"\"The pipeline loads yesterday's sales into the dashboard every morning.\""},
 {t:"Dashboard",c:"data",d:"A screen of charts and numbers that shows how something is doing at a glance.",e:"\"I'll add churn to the customer success dashboard.\""},
 {t:"Metric",c:"data",aka:"KPI",d:"A number you track to measure performance. A KPI (key performance indicator) is one of the most important ones.",e:"\"Our main KPI this quarter is weekly active users.\""},
 {t:"Analytics",c:"data",d:"Collecting and studying data to understand what's happening and why.",e:"\"Analytics show most users drop off at the payment step.\""},

 // Cloud & security
 {t:"Cloud",c:"cloud",d:"Running software and storing data on someone else's servers over the internet instead of your own machines.",e:"\"We moved everything to the cloud last year.\""},
 {t:"AWS, Azure, Google Cloud",c:"cloud",aka:"GCP",d:"The three biggest cloud providers, from Amazon, Microsoft and Google.",e:"\"Our infrastructure runs on AWS.\""},
 {t:"Server",c:"cloud",d:"A computer that runs software and answers requests from other computers.",e:"\"The server went down, so the site was offline.\""},
 {t:"Container",c:"cloud",aka:"Docker",d:"A packaged-up app with everything it needs to run, so it works the same on any computer.",e:"\"Spin up the app in a Docker container.\""},
 {t:"Uptime",c:"cloud",aka:"downtime, outage",d:"How much of the time a system is working. Downtime or an outage is when it isn't.",e:"\"We promise 99.9% uptime.\""},
 {t:"Authentication",c:"cloud",aka:"authn, login",d:"Proving who you are, like logging in with a password.",e:"\"Authentication failed, so check the password.\""},
 {t:"Authorization",c:"cloud",aka:"authz, permissions",d:"What you're allowed to do once you're logged in.",e:"\"She's logged in but doesn't have authorization to edit billing.\""},
 {t:"SSO",c:"cloud",aka:"single sign-on",d:"Logging in once with one account (like your work Google account) to access many apps.",e:"\"Enterprise customers want SSO before they'll sign.\""},
 {t:"2FA / MFA",c:"cloud",aka:"two-factor, multi-factor authentication",d:"Logging in with a second proof besides your password, like a code texted to your phone.",e:"\"Turn on 2FA for all admin accounts.\""},
 {t:"Encryption",c:"cloud",d:"Scrambling data so only people with the right key can read it.",e:"\"All customer data is encrypted at rest and in transit.\""},
 {t:"API key",c:"cloud",aka:"token, secret",d:"A password-like code that lets a program use an API. Keep it private.",e:"\"Never paste your API key into a public repo.\""},
 {t:"Phishing",c:"cloud",d:"Fake emails or messages that trick people into giving up passwords or clicking dangerous links.",e:"\"Report anything that looks like phishing to IT.\""},
 {t:"Compliance",c:"cloud",aka:"SOC 2, GDPR, HIPAA",d:"Following the laws and standards for handling data. SOC 2, GDPR and HIPAA are common ones.",e:"\"Healthcare customers need HIPAA compliance.\""},

 // AI
 {t:"Artificial intelligence",c:"ai",aka:"AI",d:"Software that does tasks that normally need human thinking, like understanding language or recognizing images.",e:"\"We're adding AI to help agents draft replies.\""},
 {t:"Machine learning",c:"ai",aka:"ML",d:"A kind of AI that learns patterns from examples instead of following hand-written rules.",e:"\"The fraud filter uses machine learning to spot unusual payments.\""},
 {t:"LLM",c:"ai",aka:"large language model",d:"An AI model trained on huge amounts of text that can read and write language, like Claude or ChatGPT.",e:"\"We use an LLM to summarize support tickets.\""},
 {t:"Model",c:"ai",d:"The trained AI system itself, the thing that takes input and produces output.",e:"\"Switching to a newer model improved accuracy.\""},
 {t:"Prompt",c:"ai",d:"The instructions and context you give an AI model.",e:"\"Add an example to the prompt so the format is consistent.\""},
 {t:"Prompt engineering",c:"ai",d:"Designing and testing prompts so an AI gives reliable, useful results.",e:"\"Prompt engineering cut the error rate in half.\""},
 {t:"System prompt",c:"ai",d:"Background instructions that set an AI's role and rules for a whole conversation.",e:"\"The system prompt tells it to answer only from our help docs.\""},
 {t:"Token",c:"ai",d:"A small chunk of text, roughly part of a word, that AI models read and are often priced by.",e:"\"Long documents use more tokens, so they cost more.\""},
 {t:"Context window",c:"ai",d:"How much text an AI model can consider at once: the prompt, documents and conversation.",e:"\"The whole contract fits in the context window.\""},
 {t:"Hallucination",c:"ai",d:"When an AI confidently states something that's false or made up.",e:"\"We ground answers in our docs to reduce hallucinations.\""},
 {t:"RAG",c:"ai",aka:"retrieval-augmented generation",d:"Searching your own documents first, then giving the relevant pieces to the AI to answer from.",e:"\"The help bot uses RAG over our knowledge base.\""},
 {t:"Embedding",c:"ai",aka:"vector, vector database",d:"Turning text into a list of numbers that captures its meaning, so similar ideas can be found. Stored in a vector database.",e:"\"We use embeddings to find articles similar to the customer's question.\""},
 {t:"Fine-tuning",c:"ai",d:"Training an existing model a bit more on your own examples so it behaves a certain way.",e:"\"We tried prompting first before paying for fine-tuning.\""},
 {t:"Temperature",c:"ai",d:"A setting that controls how random an AI's output is. Lower means more consistent; higher means more creative.",e:"\"Set temperature low for data extraction.\""},
 {t:"AI agent",c:"ai",aka:"agentic",d:"An AI that can take actions in steps, like searching, using tools or filling forms, to finish a task.",e:"\"The agent books the meeting after checking everyone's calendar.\""},
 {t:"Evals",c:"ai",aka:"evaluation",d:"Repeatable tests that measure how well an AI system performs, so you can compare versions fairly.",e:"\"The new prompt scored better on our evals.\""},
 {t:"Guardrails",c:"ai",d:"Rules and checks that keep AI output safe, on-topic and accurate.",e:"\"Guardrails stop the bot from giving legal advice.\""},
 {t:"Human in the loop",c:"ai",aka:"HITL",d:"Having a person review or approve AI output before it's used.",e:"\"Refunds over $500 keep a human in the loop.\""},
 {t:"Multimodal",c:"ai",d:"AI that can work with more than text, such as images, audio or video.",e:"\"A multimodal model can read the screenshot the customer sent.\""},
 {t:"Training data",c:"ai",d:"The examples a model learned from. Gaps or bias in it show up in the model's behavior.",e:"\"The model struggles with that dialect because it's rare in the training data.\""},
 {t:"Copilot",c:"ai",aka:"AI assistant",d:"An AI tool built into other software to help you work faster, like suggesting code or drafting emails.",e:"\"Our support agents use a copilot to draft first replies.\""},

 // Product & Agile
 {t:"Agile",c:"product",d:"A way of working in short cycles, shipping small pieces often and adjusting based on feedback.",e:"\"We're an Agile team, so plans change every couple of weeks.\""},
 {t:"Scrum",c:"product",d:"A popular Agile method with set roles, short sprints and regular meetings.",e:"\"Our Scrum master runs the standups.\""},
 {t:"Sprint",c:"product",d:"A short, fixed work period, usually one or two weeks, with a set list of goals.",e:"\"That's not in this sprint. Let's add it to the next one.\""},
 {t:"Standup",c:"product",aka:"daily scrum",d:"A quick daily team check-in: what you did, what you're doing next, and anything blocking you.",e:"\"I'll mention it at standup tomorrow.\""},
 {t:"Retro",c:"product",aka:"retrospective",d:"A meeting at the end of a sprint to discuss what went well and what to improve.",e:"\"Let's bring that up in the retro.\""},
 {t:"Backlog",c:"product",d:"The prioritized to-do list of features, fixes and ideas not started yet.",e:"\"Good idea. I'll add it to the backlog.\""},
 {t:"Ticket",c:"product",aka:"issue, story, Jira",d:"A single tracked task or request in a tool like Jira, Linear or GitHub Issues.",e:"\"Can you file a ticket for that bug?\""},
 {t:"User story",c:"product",d:"A feature described from the user's view: \"As a [user], I want [goal] so that [reason].\"",e:"\"As a manager, I want to export reports so I can share them with my boss.\""},
 {t:"MVP",c:"product",aka:"minimum viable product",d:"The simplest version of a product that's still useful, built to learn fast.",e:"\"Let's ship an MVP and see if anyone uses it.\""},
 {t:"Roadmap",c:"product",d:"A plan of what a team intends to build over the coming months.",e:"\"Mobile support is on the roadmap for Q3.\""},
 {t:"Product manager",c:"product",aka:"PM",d:"The person who decides what to build and why, balancing users, business goals and engineering time.",e:"\"Check with the PM before promising that feature.\""},
 {t:"UX / UI",c:"product",aka:"user experience, user interface",d:"UX is how easy and pleasant a product is to use. UI is how it looks: screens, buttons, colors.",e:"\"The UI looks great, but the UX is confusing.\""},
 {t:"Wireframe",c:"product",aka:"mockup, prototype",d:"A rough sketch of a screen's layout before it's designed or built.",e:"\"Here's a wireframe of the new signup page.\""},
 {t:"A/B test",c:"product",aka:"split test, experiment",d:"Showing two versions to different users to see which performs better.",e:"\"The A/B test showed the green button got more clicks.\""},
 {t:"QA",c:"product",aka:"quality assurance",d:"Testing a product to find problems before customers do.",e:"\"It's in QA now and should ship Friday.\""},
 {t:"Feature flag",c:"product",aka:"feature toggle",d:"A switch that turns a feature on or off for certain users without new code.",e:"\"It's behind a feature flag, so only beta customers see it.\""},
 {t:"Beta",c:"product",d:"An early version released to a small group to test before everyone gets it.",e:"\"Want to join the beta?\""},
 {t:"Stakeholder",c:"product",d:"Anyone affected by or with a say in a project, like managers, other teams or customers.",e:"\"Let's update stakeholders before we change the launch date.\""},
 {t:"Scope creep",c:"product",d:"When a project keeps growing with extra requests beyond the original plan.",e:"\"Adding reporting now is scope creep. Let's save it for phase two.\""},
 {t:"Edge case",c:"product",d:"An unusual situation that might break things, like an empty list or a very long name.",e:"\"What happens in the edge case where the customer has no orders?\""},

 // Business & customers
 {t:"SaaS",c:"biz",aka:"software as a service",d:"Software you pay for by subscription and use online instead of installing, like Slack or Salesforce.",e:"\"We're a B2B SaaS company.\""},
 {t:"B2B / B2C",c:"biz",d:"Business-to-business (selling to companies) versus business-to-consumer (selling to individuals).",e:"\"B2B sales cycles are longer than B2C.\""},
 {t:"ARR / MRR",c:"biz",aka:"annual/monthly recurring revenue",d:"The predictable subscription revenue a company earns each year or month.",e:"\"We crossed $10M in ARR this year.\""},
 {t:"Churn",c:"biz",aka:"churn rate",d:"Customers who cancel or don't renew, usually shown as a percentage.",e:"\"Churn went down after we improved onboarding.\""},
 {t:"Retention",c:"biz",aka:"NRR, net revenue retention",d:"Keeping customers over time. NRR also counts upgrades, so it can be over 100%.",e:"\"Our NRR is 115%, so existing customers are spending more.\""},
 {t:"Onboarding",c:"biz",d:"Getting a new customer (or employee) set up and successful in their first weeks.",e:"\"Onboarding takes about 30 days for enterprise accounts.\""},
 {t:"Adoption",c:"biz",aka:"usage",d:"How much customers actually use a product or feature after buying it.",e:"\"Adoption of the reporting feature is low, so let's run a training.\""},
 {t:"Time to value",c:"biz",aka:"TTV",d:"How long it takes a new customer to get real benefit from the product.",e:"\"Shorter time to value means fewer early cancellations.\""},
 {t:"CSAT / NPS",c:"biz",aka:"customer satisfaction, net promoter score",d:"Survey scores for customer happiness. NPS asks how likely they are to recommend you.",e:"\"CSAT dipped after the outage.\""},
 {t:"CRM",c:"biz",aka:"Salesforce, HubSpot",d:"Software for tracking customers, deals and conversations, like Salesforce or HubSpot.",e:"\"Log the call notes in the CRM.\""},
 {t:"Upsell / cross-sell",c:"biz",aka:"expansion",d:"Selling a customer a bigger plan (upsell) or an additional product (cross-sell).",e:"\"They're hitting their seat limit, so it's an upsell opportunity.\""},
 {t:"Renewal",c:"biz",d:"When a customer's contract ends and they decide whether to sign again.",e:"\"Their renewal is in 60 days, so let's check in now.\""},
 {t:"Enterprise / SMB",c:"biz",aka:"mid-market",d:"Customer sizes: enterprise means large companies; SMB means small and medium businesses.",e:"\"I manage our enterprise accounts.\""},
 {t:"SLA",c:"biz",aka:"service level agreement",d:"A promise about service, like uptime or how fast support replies.",e:"\"Our SLA is a first response within four hours.\""},
 {t:"Escalation",c:"biz",aka:"escalate",d:"Passing an issue to someone with more authority or expertise.",e:"\"I escalated the bug to engineering with the logs attached.\""},
 {t:"Tier 1 / Tier 2 support",c:"biz",d:"Support levels. Tier 1 handles common questions; Tier 2 and up handle harder technical issues.",e:"\"Tier 1 resolves most password issues.\""},
 {t:"POC",c:"biz",aka:"proof of concept, pilot",d:"A small trial to prove a product works for a customer before they commit.",e:"\"They want a two-week POC before signing.\""},
 {t:"Implementation",c:"biz",d:"Setting up and configuring a product for a customer so it fits their workflow.",e:"\"Implementation includes data migration and admin training.\""},
 {t:"Use case",c:"biz",d:"A specific way someone uses a product to solve a problem.",e:"\"Their main use case is tracking shipments.\""},
 {t:"Pain point",c:"biz",d:"A problem or frustration a customer has.",e:"\"Their biggest pain point is manual data entry.\""},
 {t:"Go-to-market",c:"biz",aka:"GTM",d:"The plan for launching a product and reaching customers: sales, marketing and support.",e:"\"The GTM team is preparing launch materials.\""},
 {t:"Enablement",c:"biz",aka:"sales enablement, AI enablement",d:"Training and tools that help teams or customers do their jobs better with a product.",e:"\"The enablement team runs monthly AI tool workshops.\""},

 // Workplace talk
 {t:"Async / sync",c:"work",d:"Async means communicating on your own time (messages, docs). Sync means at the same time (meetings, calls).",e:"\"Let's handle this async instead of booking a meeting.\""},
 {t:"Bandwidth",c:"work",d:"How much time or capacity someone has for more work.",e:"\"I don't have bandwidth this week, but I can help next week.\""},
 {t:"Circle back",c:"work",aka:"follow up, touch base",d:"Come back to a topic later.",e:"\"Let's circle back on pricing Friday.\""},
 {t:"Ping",c:"work",d:"Send someone a quick message.",e:"\"Ping me on Slack when it's ready.\""},
 {t:"Blocker",c:"work",aka:"blocked",d:"Something stopping you from making progress.",e:"\"My blocker is waiting on API access.\""},
 {t:"Action items",c:"work",aka:"next steps, AIs",d:"The specific tasks agreed on in a meeting, with an owner for each.",e:"\"I'll send out the action items after the call.\""},
 {t:"EOD / EOW",c:"work",d:"End of day / end of week.",e:"\"I'll have it to you by EOD.\""},
 {t:"OOO / PTO",c:"work",d:"Out of office / paid time off.",e:"\"I'm OOO Friday, so ping Sam instead.\""},
 {t:"1:1",c:"work",aka:"one-on-one",d:"A regular private meeting between you and your manager or a teammate.",e:"\"Let's talk about it in our 1:1.\""},
 {t:"All-hands",c:"work",aka:"town hall",d:"A meeting for the whole company.",e:"\"The CEO will announce it at the all-hands.\""},
 {t:"OKRs",c:"work",aka:"objectives and key results",d:"Goals (objectives) plus measurable results that show progress toward them.",e:"\"How does this project support our OKRs?\""},
 {t:"Deep dive",c:"work",d:"A detailed look into one topic.",e:"\"Let's do a deep dive on why churn spiked.\""},
 {t:"Low-hanging fruit",c:"work",aka:"quick wins",d:"Easy tasks that deliver value quickly.",e:"\"Fixing the typo on the pricing page is low-hanging fruit.\""},
 {t:"Move the needle",c:"work",d:"Make a noticeable difference to an important result.",e:"\"Will this feature actually move the needle on retention?\""},
 {t:"Postmortem",c:"work",aka:"incident review, blameless",d:"A review after something goes wrong to learn why and prevent it, without blaming individuals.",e:"\"We'll write a blameless postmortem for the outage.\""},
 {t:"On-call",c:"work",d:"Being the person responsible for responding to urgent problems during a set period.",e:"\"I'm on-call this weekend.\""},
 {t:"Dogfooding",c:"work",d:"A company using its own product internally.",e:"\"We dogfood every feature before customers see it.\""},
 {t:"LGTM",c:"work",d:"\"Looks good to me.\" Common approval on code reviews and docs.",e:"\"LGTM, ship it!\""},
 {t:"TL;DR",c:"work",d:"\"Too long; didn't read.\" A short summary at the top of a long message.",e:"\"TL;DR: the launch moves to Monday.\""},
 {t:"North star metric",c:"work",d:"The one number a company focuses on most as a sign of success.",e:"\"Our north star metric is weekly active teams.\""},

 // Hiring & pay
 {t:"ATS",c:"hire",aka:"applicant tracking system",d:"Software companies use to collect and filter job applications, often by keywords.",e:"\"Mirror the job post's wording so the ATS picks up your resume.\""},
 {t:"Recruiter screen",c:"hire",aka:"phone screen, pre-screen",d:"A short first call with a recruiter about your background, interest, pay range and timing.",e:"\"I have a recruiter screen Tuesday.\""},
 {t:"Technical screen",c:"hire",aka:"tech screen",d:"An interview that tests the hands-on skills for the role, often coding or problem-solving.",e:"\"The technical screen is a 45-minute live coding session.\""},
 {t:"Take-home",c:"hire",aka:"take-home assignment",d:"A project you complete on your own time and submit as part of an interview.",e:"\"The take-home should take about three hours.\""},
 {t:"Behavioral interview",c:"hire",d:"An interview about how you've handled real situations, usually answered with STAR.",e:"\"The hiring manager round is mostly behavioral.\""},
 {t:"STAR method",c:"hire",d:"A way to structure stories: Situation, Task, Action, Result.",e:"\"Use STAR so your answer has a clear ending.\""},
 {t:"Onsite / final round",c:"hire",aka:"panel, loop",d:"The last set of interviews, often several back-to-back, in person or on video.",e:"\"I made it to the final round!\""},
 {t:"Base salary",c:"hire",aka:"base",d:"Your fixed yearly pay, before bonuses or stock.",e:"\"The base is $90K plus a bonus.\""},
 {t:"Total compensation",c:"hire",aka:"TC, total comp",d:"Everything you're paid: base salary plus bonus, stock and benefits.",e:"\"Compare offers by total comp, not just base.\""},
 {t:"Equity / RSUs",c:"hire",aka:"stock, stock options",d:"Ownership in the company, often given as RSUs (restricted stock units) or stock options.",e:"\"The offer includes $40K in RSUs over four years.\""},
 {t:"Vesting",c:"hire",aka:"cliff",d:"Earning your equity over time. A cliff is the waiting period, often a year, before any of it is yours.",e:"\"It vests over four years with a one-year cliff.\""},
 {t:"Sign-on bonus",c:"hire",d:"A one-time payment for accepting an offer.",e:"\"They couldn't raise the base, so they added a sign-on bonus.\""},
 {t:"IC",c:"hire",aka:"individual contributor",d:"Someone who does hands-on work rather than managing people.",e:"\"I want to stay an IC for now instead of managing.\""},
 {t:"Junior / mid / senior",c:"hire",aka:"level, L3 L4",d:"Experience levels that set expectations and pay. Companies often label them with numbers like L3 or L4.",e:"\"This is a mid-level role, about 2 to 4 years of experience.\""},
 {t:"Contract-to-hire",c:"hire",aka:"C2H",d:"Starting as a contractor with the possibility of becoming a full-time employee.",e:"\"It's a six-month contract-to-hire role.\""},
 {t:"W-2 / 1099",c:"hire",d:"US tax forms. W-2 means you're an employee; 1099 means you're an independent contractor who handles your own taxes.",e:"\"Is this role W-2 or 1099?\""},
 {t:"Referral",c:"hire",d:"When someone at a company recommends you for a job. It often gets your application seen faster.",e:"\"A former classmate gave me a referral.\""},
 {t:"Portfolio",c:"hire",d:"A collection of your projects that shows what you can do, often a website or GitHub profile.",e:"\"Link your portfolio at the top of your resume.\""}
];

let gq="", gcat="all", gmode="browse", gdeck=[], gi=0, gshow=false;
const gstate=()=>{if(!S.gloss) S.gloss={star:{},known:{}}; if(!S.gloss.star) S.gloss.star={}; if(!S.gloss.known) S.gloss.known={}; return S.gloss;};
const gsort=(a,b)=>a.t.localeCompare(b.t,undefined,{sensitivity:"base"});
function gfilter(){
  const g=gstate(), q=gq.trim().toLowerCase();
  return GLOSSARY.filter(x=>(gcat==="all"||(gcat==="star"?g.star[x.t]:x.c===gcat))
    &&(!q||(x.t+" "+(x.aka||"")+" "+x.d).toLowerCase().includes(q))).sort(gsort);
}
function renderGlossary(){
  const g=gstate(), el=$("#gloss"), known=GLOSSARY.filter(x=>g.known[x.t]).length, starred=Object.keys(g.star).filter(t=>g.star[t]).length;
  el.innerHTML=`
    <div class="gtools">
      <input type="search" id="gsearch" placeholder="Search ${GLOSSARY.length} terms, like API or churn" value="${esc(gq)}" aria-label="Search the glossary">
      <div class="seg" role="group" aria-label="View">
        <button class="chip" data-gmode="browse" aria-pressed="${gmode==="browse"}">Browse</button>
        <button class="chip" data-gmode="cards" aria-pressed="${gmode==="cards"}">Flashcards</button>
      </div>
    </div>
    <div class="chips" id="gcats">
      <button class="chip" data-gc="all" aria-pressed="${gcat==="all"}">All<span class="n">${GLOSSARY.length}</span></button>
      <button class="chip" data-gc="star" aria-pressed="${gcat==="star"}">★ My list<span class="n">${starred}</span></button>
      ${Object.entries(GCATS).map(([k,v])=>`<button class="chip" data-gc="${k}" aria-pressed="${gcat===k}">${v}<span class="n">${GLOSSARY.filter(x=>x.c===k).length}</span></button>`).join("")}
    </div>
    <div class="gmeta"><span>You know <b>${known}</b> of ${GLOSSARY.length} terms</span><div class="meter" style="flex:1;max-width:240px"><i style="width:${known/GLOSSARY.length*100}%"></i></div></div>
    <div id="gbody"></div>`;
  const s=$("#gsearch");
  s.oninput=()=>{gq=s.value; gi=0; gshow=false; renderGBody();};
  el.querySelectorAll("[data-gmode]").forEach(b=>b.onclick=()=>{gmode=b.dataset.gmode; gi=0; gshow=false; gdeck=[]; renderGlossary();});
  el.querySelectorAll("[data-gc]").forEach(b=>b.onclick=()=>{gcat=b.dataset.gc; gi=0; gshow=false; gdeck=[]; renderGlossary();});
  renderGBody();
}
function gtoggle(kind,t){const g=gstate(); if(g[kind][t]) delete g[kind][t]; else g[kind][t]=1; save();}
function renderGBody(){
  const g=gstate(), list=gfilter(), body=$("#gbody");
  if(!list.length){
    body.innerHTML=`<div class="card"><p class="tip" style="margin:0">${gcat==="star"&&!gq?"Your list is empty. Tap ☆ on any term to save it here.":"No terms match. Try a shorter word, or check All categories."}</p></div>`;
    return;
  }
  if(gmode==="browse"){
    body.innerHTML=`<p class="count" style="margin:0">${list.length} term${list.length===1?"":"s"}</p><div class="glist">${list.map(x=>`
      <article class="card gterm">
        <div class="cardtop"><h3>${esc(x.t)}</h3><button class="star-btn" data-star="${esc(x.t)}" aria-pressed="${!!g.star[x.t]}" aria-label="${g.star[x.t]?"Remove from":"Add to"} My list: ${esc(x.t)}">${g.star[x.t]?"★":"☆"}</button></div>
        ${x.aka?`<p class="aka">Also: ${esc(x.aka)}</p>`:""}
        <p class="gdef">${esc(x.d)}</p>
        <p class="gex">${esc(x.e)}</p>
        <div class="row" style="justify-content:space-between"><span class="tag">${GCATS[x.c]}</span><button class="btn ghost gknow ${g.known[x.t]?"on":""}" data-known="${esc(x.t)}">${g.known[x.t]?"✓ I know this":"Mark as known"}</button></div>
      </article>`).join("")}</div>`;
    body.querySelectorAll("[data-star]").forEach(b=>b.onclick=()=>{gtoggle("star",b.dataset.star); renderGlossary(); $("#gsearch").blur();});
    body.querySelectorAll("[data-known]").forEach(b=>b.onclick=()=>{gtoggle("known",b.dataset.known); renderGlossary();});
    return;
  }
  // Flashcards: unknown terms first, shuffled within each group.
  const key=list.map(x=>x.t).join("|");
  if(!gdeck.length||gdeck.key!==key){
    const sh=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(p=>p[1]);
    gdeck=[...sh(list.filter(x=>!g.known[x.t])),...sh(list.filter(x=>g.known[x.t]))]; gdeck.key=key; gi=0; gshow=false;
  }
  const x=gdeck[gi%gdeck.length];
  body.innerHTML=`<div class="card gflash">
    <div class="cardtop"><span class="tag">${GCATS[x.c]}</span><span class="count">Card ${gi%gdeck.length+1} of ${gdeck.length}${g.known[x.t]?" · known":""}</span></div>
    <p class="q gbig">${esc(x.t)}</p>
    ${gshow?`${x.aka?`<p class="aka">Also: ${esc(x.aka)}</p>`:""}<p class="gdef">${esc(x.d)}</p><p class="gex">${esc(x.e)}</p>
      <p class="tip" style="margin:0">Did you know it?</p>
      <div class="rate" style="grid-template-columns:repeat(2,minmax(0,1fr))"><button class="g" id="gyes">I knew it<small>Mark as known</small></button><button class="l" id="gno">Still learning<small>Keep in the deck</small></button></div>`
      :`<p class="tip" style="margin:0">Say what it means out loud, then check.</p><div class="row"><button class="btn primary" id="gflip">Show meaning</button><button class="btn ghost" id="gskip">Skip</button></div>`}
  </div>`;
  const nextCard=()=>{gi++; gshow=false; renderGBody();};
  if($("#gflip")){$("#gflip").onclick=()=>{gshow=true; renderGBody();}; $("#gskip").onclick=nextCard;}
  if($("#gyes")){
    $("#gyes").onclick=()=>{gstate().known[x.t]=1; save(); gi++; gshow=false; renderGlossary();};
    $("#gno").onclick=()=>{delete gstate().known[x.t]; save(); nextCard();};
  }
}
