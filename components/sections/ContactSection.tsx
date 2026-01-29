 "use client";

import { FormEvent, useState } from "react";
function ContactItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/30 text-sm text-[#ffd0c5]">
        {icon}
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-sm font-medium text-slate-100">{value}</div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus("idle");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        {/* Left */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300/80 md:text-base">
              Have a project in mind? I&apos;m currently available for freelance
              projects. Let&apos;s turn your idea into reality.
            </p>
          </div>

          <div className="space-y-5">
            <ContactItem
              label="Email"
              value="marolabio@gmail.com"
              icon="✉"
            />
            <ContactItem label="Phone" value="09770823368" icon="☎" />
            <ContactItem
              label="Location"
              value="Bolinao, Pangasinan"
              icon="⌁"
            />
          </div>
        </div>

        {/* Right form */}
        <div className="rounded-2xl border border-slate-800/70 bg-slate-950/20 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-medium text-slate-300">Name</label>
              <input
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-800/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#D54E33]/60 focus:ring-2 focus:ring-[rgba(213,78,51,0.35)]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-300">Email</label>
              <input
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-800/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#D54E33]/60 focus:ring-2 focus:ring-[rgba(213,78,51,0.35)]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-none rounded-xl border border-slate-800/70 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#D54E33]/60 focus:ring-2 focus:ring-[rgba(213,78,51,0.35)]"
              />
            </div>

            {status === "success" && (
              <p className="text-xs font-medium text-emerald-400">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && error && (
              <p className="text-xs font-medium text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-xl bg-[#D54E33] px-5 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-[rgba(213,78,51,0.35)] transition-transform hover:translate-y-[1px] hover:bg-[#e66346] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}{" "}
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-8 text-xs text-slate-500 md:flex-row">
        <div className="font-semibold tracking-[0.18em] text-slate-300/80">
          maro<span className="text-[#D54E33]">Labs</span>
        </div>
        <div>© 2026 Maro Labio | Web Developer. All rights reserved.</div>
      </footer>
    </section>
  );
}

