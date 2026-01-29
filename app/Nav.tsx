import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-border/40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_55%),_oklch(0.17_0_0)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D54E33]">
            maro
          </span>
          <span className="text-sm font-semibold tracking-[0.28em] text-slate-100">
            Labs
          </span>
        </Link>

        {/* Center navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link href="/#home" className="text-slate-100">
            Home
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-slate-50/90"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="transition-colors hover:text-slate-50/90"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-slate-50/90"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/60 md:inline-flex">
            Resume
          </button>
          <Link
            href="/#contact"
            className="rounded-full bg-[#D54E33] px-4 py-1.5 text-xs font-semibold text-slate-50 shadow-lg shadow-[rgba(213,78,51,0.4)] transition-transform hover:translate-y-[1px] hover:bg-[#e66346]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}