## Next.js + Tailwind Baseline – Project Guide

This repo is a baseline for your future Next.js + Tailwind CSS projects. Keep this file updated as you refine your personal standards.

### 1. Project Structure

- **`app/`**
  - `layout.tsx` – root shell, fonts, theme, global providers.
  - `page.tsx` – page-level composition only; keeps logic in smaller components.
  - `api/*` – route handlers (e.g. `api/contact`) for simple server logic.
- **`components/sections/`**
  - One file per page section (`Hero`, `ProjectsSection`, `ContactSection`, etc.).
  - Sections are mostly presentational; accept props instead of reading data directly when reused.
- **`lib/`**
  - `projects.ts` – typed data and helpers; prefer colocating domain data and small utilities here.

### 2. Styling Conventions (Tailwind)

- **Color system**
  - Primary brand color: `#D54E33` – use this for CTAs, pills, and subtle accents.
  - Backgrounds come from CSS variables in `app/globals.css` (`--background`, `--card`, `--popover`) so you can tweak the palette in one place.
  - Keep gradients and shadows subtle; default to `bg-background` / `bg-card` rather than hard-coded hex unless you need a special effect.
- **Spacing & layout**
  - Use a `max-w-6xl` or `max-w-7xl` center container with `px-6` for consistent horizontal rhythm.
  - Prefer `gap-*` utilities over margins between items when using flex/grid.
  - Use `py-16` / `py-20` for vertical section spacing; stay consistent across pages.
- **Typography**
  - Headings use semantic tags (`h1`, `h2`, `h3`) with matching Tailwind classes.
  - Limit font sizes and weights to a small scale; reuse existing patterns from the hero and project sections.

### 3. Components & Patterns

- **Sections as building blocks**
  - Each major page section is a React component in `components/sections`.
  - Keep them **pure** where possible: no side effects in render, no global state access.
  - Use props for variations (e.g. alternate copy, different CTA labels) instead of duplicating layouts.
- **Data-driven UIs**
  - Store repeatable content (projects, features, tech stacks, FAQs) in typed arrays under `lib/`.
  - When you add a new project, only touch `lib/projects.ts`—the UI should update automatically.
  - Prefer `type` definitions over `interface` for simple data models in shared libraries.
- **Routing**
  - Use dynamic routes (e.g. `app/projects/[slug]/page.tsx`) for detail pages.
  - Add helpers like `getProjectBySlug` in `lib/` to keep route files small.

### 4. Server vs Client Components

- **Server components (default)**
  - Use for static or data-driven sections that don’t need interactivity (hero, project lists).
  - Ideal place to call databases, CMS APIs, or `lib/*` helpers.
- **Client components**
  - Add `"use client";` only when you need hooks (`useState`, `useEffect`) or browser APIs.
  - Example: `ContactSection` is a client component because it manages form state and calls `/api/contact`.
  - Keep client components small; prefer lifting heavy work to server routes or server components when possible.

### 5. Forms & API Routes

- **Contact form pattern**
  - Use a client component form that posts JSON to an `/api/*` route with `fetch`.
  - Handle three states: `idle`, `submitting`, `success/error` with simple `useState`.
  - Validate on both client and server; return structured JSON `{ ok: boolean, error?: string }`.
- **API route basics**
  - Implement `POST` handlers in `app/api/.../route.ts`.
  - Keep them small and focused; call out to helper functions or external services (email, CRM) from there.

### 6. Production Checklist

- Remove unused starter files and dependencies (icons, demo components, shadcn/Radix scaffolding).
- Run `npm run lint` and `npm run build` before pushing or deploying.
- Keep `package.json` minimal; only add libraries when you are sure you need them.
- Document any new patterns or decisions here so future projects follow the same standards.

