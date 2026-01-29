import Link from "next/link";
import { projects } from "@/lib/projects";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D54E33]/40 bg-[#D54E33]/10 px-3 py-1 text-[0.7rem] font-medium text-[#ffd0c5]">
      {children}
    </span>
  );
}

export function ProjectsSection() {
  const freelanceProjects = projects.filter(
    (p) => p.category === "freelance",
  );
  const enterpriseProjects = projects.filter(
    (p) => p.category === "enterprise",
  );
  const automationProjects = projects.filter(
    (p) => p.category === "automation",
  );

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Selected Projects
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300/80 md:text-base">
          A collection of projects that showcase my passion for clean code and
          user-centric design. Each project represents a unique challenge solved
          with modern web technologies.
        </p>
      </div>

      {/* Experience strip */}
      <div className="mt-10 rounded-2xl border border-slate-800/70 bg-[linear-gradient(90deg,_rgba(239,68,68,0.10)_0%,_rgba(15,23,42,0.35)_55%,_rgba(15,23,42,0.15)_100%)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-100">
              Professional Experience
            </div>
            <div className="mt-1 text-xs text-slate-300/70">
              5+ years building web solutions for businesses across industries
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-300/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D54E33]" />
              Enterprise &amp; Startups
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D54E33]" />
              Freelance Projects
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D54E33]" />
              Since 2020
            </span>
          </div>
        </div>
      </div>

      {/* Freelance projects (large cards) */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {freelanceProjects.map((p) => (
          <article
            key={p.slug}
            className="group rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition-colors hover:border-slate-700/70"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-100">
                Freelance Projects
              </div>
              <div className="text-xs text-slate-400">{p.year}</div>
            </div>

            {/* Placeholder cover */}
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_60%),_rgba(2,6,23,0.6)]">
              <div className="aspect-[16/9] w-full" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-50">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
              {p.summary}
            </p>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>
                {p.title} · {p.year}
              </span>
              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-[#D54E33] transition-colors hover:text-[#e96649]"
              >
                View Project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Enterprise single-page web apps */}
      <div className="mt-14 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-[#D54E33]">✦</span> Enterprise Features
            <span className="text-xs font-normal text-slate-400">
              @ Various Corporations
            </span>
          </div>
          <div className="text-xs text-slate-400">
            Single-page web apps focused on specific business use cases.
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {enterpriseProjects.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border border-slate-800/70 bg-slate-950/20 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-colors hover:border-slate-700/70"
            >
              {/* Placeholder cover */}
              <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_60%),_rgba(2,6,23,0.6)]">
                <div className="aspect-[16/10] w-full" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <h3 className="mt-3 text-sm font-semibold text-slate-50 md:text-base">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300/80 md:text-[0.8rem]">
                {p.summary}
              </p>

              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-slate-400">
                <span className="font-medium text-slate-300">
                  {p.year} · Internal Web App
                </span>
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-semibold text-[#D54E33] hover:text-[#e96649]"
                >
                  View Details ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Automation mini web apps */}
      <div className="mt-14 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <span className="text-[#D54E33]">✦</span> Automation Web Apps
          </div>
          <div className="text-xs text-slate-400">
            Lightweight single-page tools that automate everyday business
            processes.
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {automationProjects.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border border-slate-800/70 bg-slate-950/20 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.5)] transition-colors hover:border-slate-700/70"
            >
              <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_60%),_rgba(2,6,23,0.6)]">
                <div className="aspect-[16/10] w-full" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <h3 className="mt-3 text-sm font-semibold text-slate-50 md:text-base">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300/80 md:text-[0.8rem]">
                {p.summary}
              </p>

              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-slate-400">
                <span className="font-medium text-slate-300">
                  {p.year} · Automation Web App
                </span>
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-semibold text-[#D54E33] hover:text-[#e96649]"
                >
                  View Details ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

