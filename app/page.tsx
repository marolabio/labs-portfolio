
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      <section
        id="home"
        className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:flex-row md:items-center md:py-20"
      >
        {/* Left column */}
        <div className="flex-1 space-y-8">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D54E33]/40 bg-[#D54E33]/10 px-3 py-1 text-xs font-medium text-[#ffd0c5]">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Available for Freelance Work
          </div>

          {/* Heading & subheading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-[3.1rem] md:leading-[1.05]">
              I&apos;m Omar.
              <br />
              <span className="text-[#D54E33]">Freelance Web</span>
              <br />
              Developer.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300/80 md:text-base">
              I build modern websites and web apps that help businesses grow and
              solve real problems. Specializing in high‑performance React &amp;
              Node.js applications.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#D54E33] px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-[rgba(213,78,51,0.4)] transition-transform hover:translate-y-[1px] hover:bg-[#e66346]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800/60"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons (simple placeholders for now) */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Follow
            </span>
            <a
              href="https://github.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/40 text-sm hover:border-slate-500 hover:text-slate-100"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/40 text-sm hover:border-slate-500 hover:text-slate-100"
            >
              in
            </a>
            <a
              href="https://x.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/40 text-xs hover:border-slate-500 hover:text-slate-100"
            >
              X
            </a>
          </div>

          {/* Tech stack strip */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
            <span>Next.js</span>
            <span>React.js</span>
            <span>Tailwind CSS</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* Right column - avatar card */}
        <div className="flex-1">
          <div className="relative mx-auto flex h-80 w-80 max-w-full items-center justify-center rounded-[2.2rem] border border-slate-700/70 bg-[radial-gradient(circle_at_top,_rgba(252,165,165,0.18)_0,_transparent_55%),_oklch(0.16_0_0)] shadow-[0_0_120px_rgba(0,0,0,0.8)]">
            {/* Online badge */}
            <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200 shadow-lg shadow-black/40">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-[3px]" />
              </span>
              Online &amp; Ready
            </div>

            {/* Avatar circle */}
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-tr from-[#D54E33] via-[#ffb199] to-[#ffe0d6] shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
              <span className="text-5xl">👨‍💻</span>
            </div>

            {/* Testimonial bubble */}
            <div className="absolute -right-4 bottom-10 w-40 rounded-2xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-[0.7rem] text-slate-200 shadow-xl shadow-black/50">
              “Best developer I&apos;ve worked with!”
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
