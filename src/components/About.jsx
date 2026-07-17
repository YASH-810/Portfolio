"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
});

const skills = [
  { category: "Frontend",   items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend",    items: ["Node.js", "Express", "REST APIs", "Firebase", "Python"] },
  { category: "Mobile",     items: ["Android (Java)", "Kotlin", "React Native"] },
  { category: "Tooling",    items: ["Git", "Docker", "Figma", "MongoDB", "PostgreSQL"] },
];

const timeline = [
  {
    period: "Dec 2025 – Present",
    role: "Website & CMS Development Intern",
    org: "Pillai College of Engineering",
    desc: "Working on the Pillai University website and content management system (CMS) as part of ongoing internship — contributing to both front-end development and CMS architecture/features.",
  },
  {
    period: "Dec 2024 – Dec 2025",
    role: "Web Development Intern",
    org: "Pillai College of Engineering",
    desc: "Developed the CTFC website for the college during internship.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* ── Header ───────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">About</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] leading-tight">
            Background &amp; Skills
          </h2>
        </motion.div>

        {/* ── Bio + Redesigned Sidebar ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-10 sm:gap-14 lg:gap-16 items-start mb-16 sm:mb-24">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I&apos;m a Full Stack Developer and IT student based in Mumbai, India, focused on building web platforms, AI-integrated systems, and native applications.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              My work spans building end-to-end products — from designing APIs and data models to crafting responsive front-end interfaces — with a strong interest in AI-powered tools and systems that run efficiently on their own.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Outside of core development, I explore game development, local AI systems, and self-hosted infrastructure as personal projects.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Terminal Card */}
            <div className="border border-white/[0.08] bg-[#0a0a0c] rounded-lg overflow-hidden font-mono text-[11px] sm:text-xs">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111114] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                <span className="ml-2 text-zinc-600 text-[10px]">yash@portfolio ~ %</span>
              </div>
              {/* Terminal body */}
              <div className="p-4 space-y-3 leading-relaxed">
                <div>
                  <span className="text-[#c9a227]">$ </span>
                  <span className="text-zinc-300">whoami</span>
                </div>
                <p className="text-zinc-500 pl-3">Full Stack Developer &amp; IT Student</p>

                <div>
                  <span className="text-[#c9a227]">$ </span>
                  <span className="text-zinc-300">cat location.txt</span>
                </div>
                <p className="text-zinc-500 pl-3">Mumbai, India (GMT+5:30)</p>

                <div>
                  <span className="text-[#c9a227]">$ </span>
                  <span className="text-zinc-300">cat focus.txt</span>
                </div>
                <p className="text-zinc-500 pl-3">Web Platforms, AI Systems, Native Apps</p>

                <div>
                  <span className="text-[#c9a227]">$ </span>
                  <span className="text-zinc-300">cat status.txt</span>
                </div>
                <p className="text-emerald-400 pl-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for opportunities
                </p>

                <div className="flex items-center">
                  <span className="text-[#c9a227]">$ </span>
                  <span className="text-zinc-300 ml-1">_</span>
                  <span className="w-1.5 h-4 bg-[#c9a227] ml-0.5 animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section rule ─────────────────────────── */}
        <div className="border-t border-white/[0.06] mb-24" />

        {/* ── Skills ───────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium mb-12">
            Technical Skills
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-lg overflow-hidden">
            {skills.map((col, ci) => (
              <motion.div
                key={ci}
                variants={fadeUp(ci * 0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#09090b] hover:bg-[#0f0f12] transition-colors duration-200 p-5 sm:p-6"
              >
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.14em] mb-5">
                  {col.category}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2.5 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-[#c9a227] shrink-0 opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Section rule ─────────────────────────── */}
        <div className="border-t border-white/[0.06] mb-24" />

        {/* ── Experience ───────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium mb-12">
            Experience
          </p>

          <div className="divide-y divide-white/[0.06]">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 py-8 hover:bg-white/[0.015] -mx-4 px-4 rounded-md transition-colors duration-200"
              >
                <p className="text-zinc-600 text-xs font-mono pt-1">{item.period}</p>
                <div>
                  <p className="text-white text-sm font-medium mb-0.5 group-hover:text-[#c9a227] transition-colors duration-200">
                    {item.role}
                  </p>
                  <p className="text-zinc-600 text-xs mb-3">{item.org}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Section rule ────────────────── */}
        <div className="border-t border-white/[0.06] mb-16 sm:mb-20" />

        {/* ── GitHub Contribution Graph ─────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-zinc-600 uppercase tracking-[0.14em] font-medium">GitHub Activity</p>
            <a
              href="https://github.com/yash-810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200 flex items-center gap-1"
            >
              @yash-810
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" /></svg>
            </a>
          </div>
          <div className="border border-white/[0.06] rounded-lg overflow-hidden bg-[#0d0d10] p-4 sm:p-6">
            <img
              src="https://ghchart.rshah.org/c9a227/yash-810"
              alt="Yash Londhe's GitHub contribution graph"
              className="w-full h-auto opacity-80"
              style={{ filter: 'brightness(0.9) contrast(1.1)' }}
            />
          </div>
          <p className="text-zinc-700 text-xs mt-3 text-right font-mono">Last 12 months</p>
        </motion.div>

      </div>
    </section>
  );
}
