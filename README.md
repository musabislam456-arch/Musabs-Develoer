# Musab — Portfolio Website

A premium, futuristic, single-page portfolio built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Features

- Modern light theme with glassmorphism surfaces, gradient accents, and a grid background
- Animated hero with floating particles (canvas), typing role text, and a floating "code terminal" signature element
- Scroll-reveal animations throughout using a reusable `ScrollReveal` wrapper
- Animated statistics counters in the About section
- Skills section with animated progress bars across 5 categories (Frontend, Backend, AI Integration, UI/UX, Responsive Design)
- Featured Projects with 3D tilt hover cards, tech stack tags, Live Demo & GitHub buttons
- Services, Why Choose Me, and Testimonials sections with premium card animations
- Contact section with WhatsApp, Email, LinkedIn buttons and a working client-side form (wire up to your own API/email service)
- Sticky glass navbar with mobile menu, footer with socials + back-to-top, plus a floating back-to-top button
- Fully responsive, mobile-first, accessible (focus states, reduced-motion support), and SEO-ready metadata

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx       — root layout, fonts, SEO metadata
  page.tsx         — assembles all sections
  globals.css      — tokens, glass utilities, grid background
components/
  Navbar.tsx
  Hero.tsx
  ParticlesBackground.tsx
  TypingText.tsx
  About.tsx
  AnimatedCounter.tsx
  Skills.tsx
  Projects.tsx
  ProjectCard.tsx   — 3D tilt project card
  Services.tsx
  WhyChooseMe.tsx
  Testimonials.tsx
  Contact.tsx
  Footer.tsx
  FloatingBackToTop.tsx
  ScrollReveal.tsx  — reusable scroll animation wrapper
lib/
  data.ts           — all content (skills, projects, services, testimonials, links)
```

## Customizing Content

Almost all text content (skills, projects, services, testimonials, contact links, social links) lives in `lib/data.ts`. Update the placeholders there:

- `contactLinks` — WhatsApp number, email, LinkedIn URL
- `projects` — add real GitHub URLs and project screenshots (replace the placeholder block in `ProjectCard.tsx` with `<Image />` once you have real images)
- `socialLinks` — GitHub / LinkedIn profile URLs

## Contact Form

The form in `components/Contact.tsx` currently simulates submission. Connect it to a real endpoint (e.g. a Next.js API route, Formspree, or an email service like Resend) inside `handleSubmit`.

## Design Tokens

Colors, shadows, gradients, and animations are defined in `tailwind.config.ts`:

- `primary` (indigo/violet `#5B4DF5`) and `accent` (cyan `#0FD3D9`) drive the gradient accents
- `canvas` / `canvas-alt` are the light background tones
- `.glass` / `.glass-strong` utility classes (in `app/globals.css`) implement the glassmorphism surfaces

## Notes

- Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`) load via `next/font/google` and require an internet connection at build time.
- The particles background respects `prefers-reduced-motion`.
