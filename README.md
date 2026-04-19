# Hoda Kakhki — Personal Portfolio

A modern, animated personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Features a dark-themed hero, white content sections, scroll-triggered animations, and a fully responsive layout.

---

## Live Demo

> Replace with your deployed URL after pushing to Vercel / Netlify.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.1.0 | React framework & routing |
| React | 19.0.0 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4 | Utility-first styling |
| GSAP | ^3.12.5 | Scroll animations & transitions |
| JetBrains Mono | Google Fonts | Monospace typography |

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, global CSS
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Tailwind directives + JetBrains Mono import
│
├── components/
│   ├── Header.tsx          # Navigation bar + social icons
│   ├── Hero.tsx            # Hero section — name, intro, CTA, logo bar
│   ├── CaseStudies.tsx     # Case studies — alternating image/text rows
│   ├── MySkills.tsx        # Skills — 3-card panel with progress bars
│   ├── EducationExperience.tsx  # Timeline — education & experience
│   └── GetInTouch.tsx      # Contact form + footer
│
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Sections

### Header
- Fixed top navigation with links: Home, Case Studies, Testimonials, Recent Work, Get In Touch
- Social icons: LinkedIn, Behance, Twitter
- GSAP slide-down on page load with staggered nav link animation

### Hero
- Full-viewport dark section (`#0a0a0a`)
- Name heading, intro paragraph, green glowing CTA button
- Circular avatar placeholder (replace with real photo)
- "Worked with" logo bar: ClickUp, Dropbox, Paychex, Elastic, Stripe
- GSAP entrance animations — elements stagger in on load

### Case Studies
- White background section
- 3 case study rows with alternating layout (text left/image right, image left/text right)
- Color-coded tags and CTA buttons: Fintech (amber), EdTech (blue), Pharma (teal)
- GSAP ScrollTrigger — cards slide in from opposite sides on scroll

### My Skills
- Dark background (`#0a0a0a`)
- Large center panel with header card + Frameworks & UI skills
- Two floating side cards: Languages & Core (pink) and Tools & Methods (blue)
- Animated progress bars triggered on scroll
- Three skill categories:
  - **Languages & Core** — JavaScript, TypeScript, HTML/CSS/SASS, MySQL/Node.js
  - **Frameworks & UI** — React/Next.js, Vue 3/Quasar, Tailwind/Bootstrap, Material UI
  - **Tools & Methods** — Git/Figma/Shopify, REST API/AJAX, Responsive Design, Scrum

### Education & Experience
- White background, two-column timeline layout
- Left column — Work experience (3 roles)
- Right column — Education (3 degrees)
- Pastel color palette: warm orange · slate blue · soft mint
- Color-coded spine dots connecting each row
- GSAP ScrollTrigger — left cards slide from left, right cards from right

### Get In Touch + Footer
- Dark section with centered contact form
- Fields: Email, Mobile, Message
- Green submit button with continuous glow pulse animation
- Footer: "Made with ♥" in dark gray

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Customization

### Replace your photo
In `components/Hero.tsx`, find the avatar placeholder div and replace it with:
```tsx
import Image from "next/image";

<Image
  src="/your-photo.jpg"
  alt="Hoda Kakhki"
  fill
  className="object-cover"
/>
```
Place your photo in the `public/` folder.

### Update your name & intro
Edit the heading and paragraph text directly in `components/Hero.tsx`.

### Update case studies
Edit the `caseStudies` array in `components/CaseStudies.tsx` — each entry has `tag`, `title`, `description`, and `layout` fields. Replace the gradient placeholder with a real `<Image />` component.

### Update skills
Edit the `categories` array in `components/MySkills.tsx`. Each skill has a `name` and `pct` (percentage, 0–100).

### Update timeline
Edit the `experiences` and `educations` arrays in `components/EducationExperience.tsx`.

### Update contact info
`components/GetInTouch.tsx` — wire up the form submit handler to your preferred email service (e.g. EmailJS, Resend, Formspree).

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
# Deploy the .next folder via Netlify dashboard or CLI
```

---

## License

MIT — feel free to use and adapt for your own portfolio.

---

*Built with Next.js, TypeScript, Tailwind CSS, and GSAP.*
