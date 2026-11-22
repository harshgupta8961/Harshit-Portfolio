# Harsh — Minimalist Personal Portfolio Website

A modern, premium, minimalist, and visually stunning personal portfolio built for **Harsh**, Full Stack Developer, aspiring Software Engineer, and Freelance Video Editor.

Inspired by Apple, Linear, Vercel, and high-end digital design studios.

---

## ✦ Key Highlights & Design Philosophy

- **Dark Minimalist Aesthetic**: Deep black background (`#080808`), charcoal glassmorphic cards, crisp white typography, and subtle electric blue / muted purple accents.
- **Generous Whitespace & Visual Hierarchy**: Crafted for clarity, sophistication, and focus without overcrowded elements.
- **Fluid Micro-Interactions**: Subtle cursor glow, smooth section navigation pill, dynamic terminal status, and interactive preview modals.
- **True-to-Life Representation**: No fake percentage bars; showcases genuine technical skills and authentic learning journey.
- **Dual Craft Synergy**: Seamlessly balances Full Stack engineering with cinematic video editing, wedding films, and visual storytelling.

---

## ✦ Project Structure

```
├── index.html                   # HTML entry point with metadata & fonts
├── package.json                 # Dependencies & build scripts
├── tailwind.config.js           # Custom colors, typography, & keyframes
├── vite.config.ts               # Vite bundler configuration
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root layout & active scroll spy
│   ├── index.css                # Tailwind directives & custom glassmorphism styles
│   ├── types.ts                 # TypeScript interfaces for data models
│   ├── data/
│   │   └── portfolioData.ts     # ⭐️ ALL EDITABLE DATA (Bio, Projects, Skills, Links)
│   └── components/
│       ├── BackgroundGlow.tsx   # Ambient mouse light & geometric orbits
│       ├── Navbar.tsx           # Floating glassmorphic navigation bar
│       ├── Hero.tsx             # Full-screen landing & interactive console
│       ├── About.tsx            # Philosophy & 6 core pillars
│       ├── Skills.tsx           # Clean grid of real technologies
│       ├── Projects.tsx         # Large cards with Live Demo & GitHub links
│       ├── CreativeWork.tsx     # Editorial gallery with category filters & lightbox
│       ├── Journey.tsx          # Authentic learning & freelance timeline
│       ├── Contact.tsx          # Interactive form, copy email & social links
│       └── Footer.tsx           # Dynamic copyright year & back-to-top
```

---

## ✦ Customization Guide

All personal information, links, projects, and creative works are centralized in `src/data/portfolioData.ts`:

1. **Update Social Links & Email**:
   - Open `src/data/portfolioData.ts` and update `socialLinks` (GitHub, LinkedIn, Instagram, Email).
2. **Add / Edit Projects**:
   - In `projectsData`, update titles, descriptions, screenshots, live URLs, and GitHub links.
3. **Add / Edit Creative Works**:
   - In `creativeWorksData`, add your wedding films, cinematic reels, and photography series with their respective categories.
4. **Skills & Focus Areas**:
   - Update `skillsData` to reflect new frameworks or tools as you master them.

---

## ✦ Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
npm run preview
```

### Deploy to Vercel / Netlify / GitHub Pages:
The project is built with standard Vite and React and can be deployed with one click by connecting your repository to **Vercel** or **Netlify**.
