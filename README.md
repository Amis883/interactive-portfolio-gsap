# Hoda Kakhki — Frontend Developer Portfolio

A fully responsive personal portfolio website built from scratch with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Designed to showcase frontend skills, work experience, case studies, and contact information with smooth scroll-triggered animations throughout.

🔗 **Live:** [hoda-portfolio-m0c8zsv98-amis883s-projects.vercel.app](https://hoda-portfolio-m0c8zsv98-amis883s-projects.vercel.app/)

---

## Preview

| Section | Description |
|---|---|
| Hero | Dark landing with animated CTA and glowing button |
| Case Studies | Alternating image/text rows with color-coded tags |
| My Skills | Floating skill cards with animated progress bars |
| Education & Experience | Two-column pastel timeline |
| Get In Touch | Contact form with green glow submit |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Animations:** GSAP 3 + ScrollTrigger
- **Typography:** JetBrains Mono (Google Fonts)
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/Amis883/your-portfolio.git
cd your-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx               # Root layout, metadata, global CSS
│   ├── page.tsx                 # Page entry — renders all sections
│   └── globals.css              # Tailwind base + JetBrains Mono font
│
├── components/
│   ├── Header.tsx               # Sticky nav + LinkedIn / Behance / Twitter icons
│   ├── Hero.tsx                 # Name, intro, CTA button, avatar, "Worked with" logos
│   ├── CaseStudies.tsx          # 3 case study rows — Fintech, EdTech, Pharma
│   ├── MySkills.tsx             # 3-panel skill cards with scroll-animated progress bars
│   ├── EducationExperience.tsx  # Split timeline — experience left, education right
│   └── GetInTouch.tsx           # Contact form (email, mobile, message) + footer
│
├── public/                      # Static assets (add your photo here)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Click Deploy — Vercel auto-detects Next.js, no config needed

### Manual Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## Dependencies

```json
{
  "next": "15.1.0",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "gsap": "^3.12.5",
  "typescript": "^5",
  "tailwindcss": "^3.4.1"
}
```

---

## License

MIT — free to use, adapt, and build on.

---

*Hoda Kakhki — Frontend Developer · Passau, Germany*  
*hodakakhki51@gmail.com · [linkedin.com/in/hoda-kakhki](https://linkedin.com/in/hoda-kakhki) · [github.com/Amis883](https://github.com/Amis883)*
