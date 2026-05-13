# Baba Baba Car — Landing Page

A premium, mobile-first landing page for a Nigerian intercity ride-sharing startup.

## Tech Stack
- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  globals.css     — Custom CSS, fonts, animations
  layout.tsx      — Root layout with metadata
  page.tsx        — Main page (composes all sections)

components/
  Navbar.tsx      — Sticky navbar with scroll blur & mobile menu
  Hero.tsx        — Full-screen hero with animated app mockup
  TrustStrip.tsx  — 4-pillar trust section
  Problem.tsx     — Problem statement cards
  HowItWorks.tsx  — 3-step flow
  Comfort.tsx     — Comfort differentiators (dark section)
  Safety.tsx      — Safety & verification features
  Routes.tsx      — Popular route cards
  Driver.tsx      — Driver recruitment section
  Waitlist.tsx    — Waitlist signup form with success state
  Footer.tsx      — Dark footer with navigation
```

## Design System

- **Primary Blue:** `#1D4ED8`
- **Accent Orange:** `#F59E0B`
- **Display Font:** Bricolage Grotesque
- **Body Font:** Plus Jakarta Sans
- **Radii:** `rounded-xl` / `rounded-2xl` / `rounded-3xl`

## Notes

- The waitlist form is front-end only — connect to your backend/Supabase/Airtable
- Replace logo SVG in `Navbar.tsx` and `Footer.tsx` with your actual logo
- Routes in `Routes.tsx` are configurable via the data array
- All sections use Framer Motion scroll-triggered animations
