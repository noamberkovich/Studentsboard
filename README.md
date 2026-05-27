# Student Dashboard

A bilingual (Hebrew / English) student productivity dashboard built with vanilla HTML, CSS, and JavaScript. Tasks, exams, weekly schedule, friends leaderboard, calendar export, and local account storage — no backend required.

https://studentsboard.netlify.app/


## Features

- **Tasks** — categories, filters, priorities, due dates, reminders, file attachments  
- **Exams** — course, date, type, file uploads  
- **Schedule** — weekly timetable with color-coded courses  
- **Friends** — progress tracking, activity heatmap, leaderboard  
- **Calendar** — month view and `.ics` export (Apple Calendar / Google Calendar)  
- **Auth** — sign up, login, preview workspace (local-only, `localStorage`)  
- **Settings** — profile, theme, accent color, language (RTL / LTR)

## Tech stack

- HTML5, CSS3, JavaScript (no frameworks)
- Web Crypto API (password hashing)
- `localStorage` for persistence
- PWA-ready (`manifest.json`)

## Run locally

1. Clone or download this repository  
2. Open `index.html` in a modern browser  
   - Or use a simple static server, for example:  
     `npx serve .`  
3. No build step required

## Project structure

```
student-dashboard/
├── index.html    # App shell and modals
├── styles.css    # Layout and themes
├── app.js        # Logic, i18n, storage
├── manifest.json # PWA manifest
├── icon.svg      # App icon
└── netlify.toml  # Static deploy config
```

## Notes

- User data is stored **only in the browser** on the device used to sign up.  
- Suitable as a portfolio / coursework project demonstrating UI, state management, and client-side architecture.

