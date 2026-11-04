# Tailwind Workshop — Abdulaziz Imran CV

A responsive student CV website updated using **Tailwind CSS** and **FetchAPI**.

## FetchAPI clock assignment

The World clock section loads the city and current time from:

`https://timeapi.io/api/Time/current/zone?timeZone=Asia%2FBangkok`

- `fetch()` requests the API and `response.json()` reads the response.
- The displayed city comes from `data.timeZone` (`Asia/Bangkok` → `Bangkok`).
- The initial clock time comes from `data.dateTime`, rather than the computer's clock.
- The clock advances every second and resynchronizes with the API every five minutes.
- A failed request shows an error message and a **Try again** button.
- Internet access and JavaScript are required for the clock.

To check: open the page, find **World clock**, and check that **Bangkok** and a ticking time appear. In browser developer tools, the Network tab shows the TimeAPI request and its JSON response.

## Open the website

Open `index.html` in a browser. The generated `assets/styles.css` file is included, so the website works without installing packages or loading a CDN. Keep the `assets` folder beside `index.html`.

## Features

- Responsive layout using Tailwind breakpoints (`sm:` and `lg:`).
- Tailwind typography, colors, spacing, Flexbox, Grid, borders, and hover states.
- Personal information, skills, languages, projects, education, and activities.
- Original Your Tech branding with an inline SVG logo.
- Keyboard navigation, a skip link, and reduced-motion support.
- Print / Save PDF button and a print-friendly layout.
- A live city clock using FetchAPI.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | CV content and Tailwind utility classes |
| `assets/styles.css` | Compiled Tailwind CSS, ready to use |
| `src/input.css` | Tailwind import, theme colors, and print styles |
| `package.json` and `package-lock.json` | Reproducible build dependencies |
| `scripts/build.mjs` | Copies the finished website into `dist/` |

## Rebuild after editing

Requires Node.js and npm:

```bash
npm ci
npm run build
```

The Tailwind CLI scans `index.html` and generates `assets/styles.css`.
Official instructions: https://tailwindcss.com/docs/installation/tailwind-cli

## Upload to GitHub

1. Create a public repository, for example `tailwind-workshop-cv`.
2. Choose **Add file → Upload files**.
3. Upload the extracted project contents, keeping the folder structure. Do not upload only the ZIP file or `node_modules`.
4. Select **Commit changes**.
5. Submit the repository URL to your teacher.

Optional GitHub Pages: **Settings → Pages → Deploy from a branch → main → / (root) → Save**. The root `index.html` and `assets` folder are ready for this.

## خطوات سريعة بالعربي

1. فك الضغط عن ملف المشروع.
2. افتح `index.html` للمعاينة؛ لازم يكون مجلد `assets` بجانبه.
3. أنشئ مستودعًا عامًا في GitHub، وارفع الملفات والمجلدات المستخرجة مع الحفاظ على ترتيبها.
4. اضغط **Commit changes** ثم انسخ رابط المستودع وسلّمه للدكتور.

**Student:** Abdulaziz Imran  
**Major:** Information Technology (IT)

