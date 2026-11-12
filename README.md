# Callback Coach

A practice app for tech job interviews. You rehearse answers against a clock, rate yourself, and track how you improve from one practice session to the next.

It's built for career changers moving into tech roles such as customer success, solutions engineering, AI prompt engineering and software engineering.

## Features

- **How it works:** an in-app guide to every feature, with a suggested 20-minute practice routine, how scoring works and answers to common questions. It opens automatically on your first visit.
- **Playbook:** the six stages of a typical tech hiring process, what each stage checks, and how to prepare. It also has interview checklists, common mistakes, a thank-you email template, offer negotiation tips and links to trusted resources.
- **Glossary:** 150+ tech terms in nine topics (Web & APIs, Code, Data, Cloud & security, AI, Product & Agile, Business & customers, Workplace talk, Hiring & pay). Each has a plain-English definition and an example of how it's used at work. You can search, filter, star terms into "My list", and quiz yourself with flashcards that track which terms you know.
- **Question cards:** 40+ interview questions in seven categories (Opening, Behavioral, Logistics, Software engineer, AI / prompt, Customer success, Solutions engineer). Each card has a 90-second timer, what the interviewer is listening for, a sample answer and a STAR checklist for behavioral questions. Cards you rate lower come back sooner.
- **Quick quiz:** 10 random multiple-choice questions on APIs, HTTP status codes, SQL, Git and AI terms.
- **Code warm-ups:** HackerRank-style JavaScript and SQL problems with a timer, a hint and a solution.
- **Mock pre-screen:** a 7-question recruiter screen for your chosen role, in the order a real call usually follows, with a timer that starts on its own for each question.
- **Progress:** saves your answers, scores and times by session. You can compare sessions department by department and see your answers to the same question side by side.
- **My profile:** sample answers are written for anyone, with highlighted slots for personal details. Signed-in users add their name, background, best project, goals and more, and those details fill in across the app, including the playbook and thank-you email. They can also save their own version of any answer, which replaces the sample in Question cards and the mock pre-screen.
- **Free accounts:** sign up with email and password or Google, log in and out, and your progress syncs to the cloud so you can switch between devices. Without an account, the app works in guest mode.
- **Works on any device:** the layout adapts to phones, tablets and desktops, with light and dark themes. On a phone you can add it to your home screen and it opens full screen like an app.
- **XP, levels and a daily streak** to keep you practicing.
- **Undo and re-do:** most actions show an **Undo** button for a few seconds afterward. Quizzes have **Change my answer**, **Start over**, **Retake these questions** and **Don't count this quiz**. Code warm-ups have **Unmark solved** and **Reset code**. My profile has **Clear my profile details** and **Delete all my answers**.

## Getting started

You don't need to install or build anything.

**Try it on your computer:** clone or download this repository and open `index.html` in a web browser. Everything works except accounts, which need the site to be served over `http(s)` (see below).

**Put it on the web (GitHub Pages, free):**

1. Push this repository to GitHub.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`. Share that link. It works on phones, tablets and computers.

Any other static host (Netlify, Vercel, Cloudflare Pages) works too. Just upload the folder.

## Setting up accounts

Accounts use [Firebase](https://firebase.google.com/) for sign-in and storage. The free Spark plan covers this app comfortably. Until you complete these steps, the app runs in guest mode and the **Log in** button stays hidden.

1. **Create a project.** Go to the [Firebase console](https://console.firebase.google.com/), click **Add project**, name it (for example `callback-coach`) and finish. Google Analytics is optional.
2. **Register the web app.** In the project overview, click the **Web** icon (`</>`), give it a nickname and register it. Copy the `firebaseConfig` values it shows into [`firebase-config.js`](firebase-config.js).
3. **Turn on sign-in.** Go to **Build → Authentication → Get started → Sign-in method** and enable **Email/Password**. Optionally enable **Google** too. If you don't, the "Continue with Google" button shows an error message when clicked.
4. **Create the database.** Go to **Build → Firestore Database → Create database**, pick a location near your users, and start in **production mode**.
5. **Protect each person's data.** In Firestore, open the **Rules** tab, replace the contents with the rules in [`firestore.rules`](firestore.rules), and click **Publish**. These rules let each signed-in user read and write only their own progress.
6. **Allow your website.** Go to **Authentication → Settings → Authorized domains** and add your site's domain, such as `your-username.github.io`. `localhost` is already allowed for local testing.
7. Commit and push `firebase-config.js`. The values in it are not secret. Firebase uses them to find your project, and the rules from step 5 are what protect the data.

To test accounts on your own computer, serve the folder instead of opening the file directly, for example with `python3 -m http.server 8000` and then `http://localhost:8000`.

## How sessions work

Everything you do counts toward the **current session**:

| Where | What gets saved |
|---|---|
| Question cards | Your rating, your notes and how long you were on the clock |
| Mock pre-screen | Your rating and notes for each question you rate |
| Quick quiz | Your score and the questions you missed |
| Code warm-ups | Your code, your time, and whether you used the hint or the solution |

When you finish practicing, open **Progress** and click **End & save session**. A new session starts right away. You can also give a session a name, like "Before Acme screen".

### Scoring

Each department gets a score out of 100 for each session:

- **Interview questions:** Nailed it = 100, Getting there = 60, Practice more = 20. The score is the average of your latest rating for each question.
- **Quick quiz:** the average percent you got right.
- **Code warm-ups:** 100 if you solved it without help, 70 with the hint, 40 after viewing the solution.

The **Growth by department** grid shows these scores for each session. The ▲/▼ arrows show the change from the last session where you practiced that department.

### Your data

- **With an account:** progress is stored in your Firebase project under `users/{uid}`, one document per user, and synced automatically a moment after each change. A copy is also kept in the browser, so the app opens instantly and keeps working offline. It syncs again when you're back online. Logging out removes that local copy from the device.
- **As a guest:** progress is saved in the browser only. Clearing browser data or switching devices loses it.
- **Either way:** **Progress → Export backup** downloads a copy of everything, and **Import backup** restores it.

If someone uses the app on two devices at once, the most recently saved version wins when they next log in.

## Project structure

```
index.html             Page markup, tab layout and the sign-in dialog
styles.css             Styles: light and dark themes, phone/tablet/desktop layouts
script.js              Question data, practice logic, sessions and progress tracking
glossary.js            Glossary terms and the Glossary tab
auth.js                Accounts: sign up, log in and out, cloud sync (Firebase)
firebase-config.js     Your Firebase project settings (empty = guest mode)
firestore.rules        Database security rules to paste into Firebase
manifest.webmanifest   Lets phones install the app to the home screen
icons/                 App icons
```

It's plain HTML, CSS and JavaScript with no frameworks or build step. Fonts load from Google Fonts, and the Firebase SDK loads from Google's CDN only when accounts are set up.

## Customizing

All the content is at the top of `script.js`:

- `QS`: interview questions, sample answers and coach's notes. Sample answers are templates:
  - `{{key}}` fills in from the user's profile, for example `{{project}}` or `{{background}}`. The keys and their form labels are in `TOK`.
  - `[text in brackets]` marks details only the user can supply, and is highlighted on screen.
- `QUIZ`: quiz questions. `a` is the index of the correct option.
- `CODE`: coding problems with starter code, a hint and a solution.
- `CATS`: question categories.
- `GLOSSARY` and `GCATS` in `glossary.js`: glossary terms and topics. Each term has `t` (term), `c` (topic), `d` (definition), `e` (example) and optional `aka` (other names, also searchable).

The playbook and thank-you email in `index.html` use `<span data-tok="key"></span>` for the same profile slots.

Editing the profile and saving your own answers requires logging in once accounts are set up. If accounts aren't set up, anyone can personalize, and it's saved in their browser.
