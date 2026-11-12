# Callback Coach

A practice app for tech job interviews. You rehearse answers against a clock, rate yourself, and track how you improve from one practice session to the next.

It's built for career changers moving into tech roles such as customer success, solutions engineering, AI prompt engineering and software engineering.

## Features

- **How it works:** an in-app guide to every feature, with a suggested 20-minute practice routine, how scoring works and answers to common questions. It opens automatically on your first visit.
- **Playbook:** the six stages of a typical tech hiring process, what each stage checks, and how to prepare. It also has interview checklists, common mistakes, a thank-you email template, offer negotiation tips and links to trusted resources.
- **Question cards:** 40+ interview questions in seven categories (Opening, Behavioral, Logistics, Software engineer, AI / prompt, Customer success, Solutions engineer). Each card has a 90-second timer, what the interviewer is listening for, a sample answer and a STAR checklist for behavioral questions. Cards you rate lower come back sooner.
- **Quick quiz:** 10 random multiple-choice questions on APIs, HTTP status codes, SQL, Git and AI terms.
- **Code warm-ups:** HackerRank-style JavaScript and SQL problems with a timer, a hint and a solution.
- **Mock pre-screen:** a 7-question recruiter screen for your chosen role, in the order a real call usually follows, with a timer that starts on its own for each question.
- **Progress:** saves your answers, scores and times by session. You can compare sessions department by department and see your answers to the same question side by side.
- **XP, levels and a daily streak** to keep you practicing.

## Getting started

You don't need to install or build anything.

1. Clone or download this repository.
2. Open `index.html` in a web browser.

To host it online, publish the folder with any static host, such as GitHub Pages.

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

Your progress is saved in your browser's local storage. It stays on your device and is never sent anywhere. Clearing your browser data or switching browsers or devices loses it, so use **Progress → Export backup** now and then. **Import backup** restores a backup file.

## Project structure

```
index.html   Page markup and tab layout
styles.css   Styles, including light and dark themes
script.js    Question data, practice logic, sessions and progress tracking
```

It's plain HTML, CSS and JavaScript with no frameworks or build step. Fonts load from Google Fonts.

## Customizing

All the content is at the top of `script.js`:

- `QS`: interview questions, sample answers and coach's notes. The sample answers draw on the author's own background, so rewrite them in your own words.
- `QUIZ`: quiz questions. `a` is the index of the correct option.
- `CODE`: coding problems with starter code, a hint and a solution.
- `CATS`: question categories.

The thank-you email template is in `index.html`.
