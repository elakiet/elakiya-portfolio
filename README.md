# Elakiya RS — Portfolio

A sleek, interactive portfolio built with **React JS** in a bold **Red & Black** theme with smooth AOS scroll animations, typing effects, and full responsiveness.

---

## 🚀 Quick Start (VS Code)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# Opens at http://localhost:3000
```

---

## 📦 Deploy to GitHub Pages (Free — shareable link for resume!)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
# Create a repo on github.com named: elakiya-portfolio
git remote add origin https://github.com/YOUR_USERNAME/elakiya-portfolio.git
git push -u origin main
```

### Step 2 — Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3 — Add to package.json
Open `package.json` and add:
```json
"homepage": "https://YOUR_USERNAME.github.io/elakiya-portfolio",
```
Also add under `"scripts"`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### Step 4 — Deploy!
```bash
npm run deploy
```

Your portfolio will be live at:
**`https://YOUR_USERNAME.github.io/elakiya-portfolio`**

Put this link on your resume! ✅

---

## 🌐 Alternative: Deploy to Netlify (Even Easier)

1. Run `npm run build` — creates a `build/` folder
2. Go to [netlify.com](https://netlify.com) → drag & drop the `build/` folder
3. Get a live URL instantly (e.g. `elakiya-rs.netlify.app`)

---

## 📁 Project Structure

```
src/
├── App.js                  ← Main app, imports all sections
├── index.js                ← Entry point
├── index.css               ← Global styles & CSS variables
├── assets/
│   └── profile.jpg         ← Your profile photo
└── components/
    ├── Cursor.js           ← Custom red cursor
    ├── Navbar.js           ← Sticky nav + hamburger mobile menu
    ├── Hero.js             ← Red hero + typing animation
    ├── About.js            ← About section with photo
    ├── Skills.js           ← 6 skill cards
    ├── Experience.js       ← Timeline
    ├── Projects.js         ← 6 project cards
    ├── Achievements.js     ← Awards & recognition
    ├── Education.js        ← Degree cards
    ├── Contact.js          ← Contact + links
    ├── Footer.js           ← Footer
    └── WaveDivider.js      ← SVG wave transitions
```

---

## ✏️ Customization

- **Photo** → Replace `src/assets/profile.jpg` with your photo
- **Content** → Edit data arrays in each component file
- **Colors** → Change `--red` in `src/index.css`
- **Links** → Update GitHub, LinkedIn, email in `Contact.js` and `About.js`

---

## 🛠 Built With

- React JS (Create React App)
- AOS (Animate On Scroll)
- CSS Variables
- Google Fonts (Bebas Neue, Outfit, JetBrains Mono)
