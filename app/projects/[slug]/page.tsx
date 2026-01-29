import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="text-sm text-slate-400">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 hover:text-slate-200"
        >
          <span aria-hidden="true">←</span> Back to Projects
        </Link>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
        {/* Left - title/summary/CTAs */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-[#D54E33]/40 bg-[#D54E33]/10 px-3 py-1 text-[0.7rem] font-medium text-[#ffd0c5]"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-slate-300/80 md:text-base">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.liveUrl ?? "#"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D54E33] px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-[rgba(213,78,51,0.35)] transition-transform hover:translate-y-[1px] hover:bg-[#e66346]"
            >
              Live Preview <span aria-hidden="true">↗</span>
            </a>
            <a
              href={project.caseStudyUrl ?? "#"}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800/70 bg-slate-950/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-700/70 hover:bg-slate-950/35"
            >
              Case Study
            </a>
          </div>
        </div>

        {/* Right - large feature preview placeholder */}
        <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_60%),_rgba(2,6,23,0.6)]">
            <div className="aspect-[16/10] w-full" />
          </div>

          <div className="mt-5">
            <div className="text-xl font-semibold text-slate-50">
              {project.features[0]?.title ?? "Project Feature"}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-300/80">
              {project.features[0]?.description ??
                "Add screenshots and feature explanations here."}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.features.slice(0, 3).map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-lg border border-slate-800/60 bg-slate-950/30"
              >
                <div className="aspect-[16/10] w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business challenge + Tech stack */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-50">
            <span className="text-[#D54E33]">✦</span> The Business Challenge
          </h2>
          <div className="mt-5 rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6 text-sm leading-relaxed text-slate-300/80 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
            <p>{project.businessChallenge?.clientNeed ?? "—"}</p>
            <p className="mt-4">{project.businessChallenge?.goal ?? "—"}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <h3 className="text-sm font-semibold text-slate-100">Tech Stack</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
            {project.techStack.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D54E33]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

