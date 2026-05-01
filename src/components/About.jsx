"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
});

const stats = [
  { value: "2+",  label: "Years experience" },
  { value: "15+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
];

const skills = [
  { category: "Frontend",   items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend",    items: ["Node.js", "Express", "REST APIs", "Firebase", "Python"] },
  { category: "Mobile",     items: ["Android (Java)", "Kotlin", "React Native"] },
  { category: "Tooling",    items: ["Git", "Docker", "Figma", "MongoDB", "PostgreSQL"] },
];

const timeline = [
  {
    period: "2024 – Present",
    role: "Full Stack Developer",
    org: "Freelance",
    desc: "End-to-end development of web applications. Focus on performance, accessibility, and scalable front-to-back architecture.",
  },
  {
    period: "2023 – 2024",
    role: "Android Developer",
    org: "Academic & Open Source",
    desc: "Native Android apps in Java and Kotlin. REST API integration, local storage, and custom UI systems.",
  },
  {
    period: "2022 – 2023",
    role: "Frontend Developer",
    org: "College Projects",
    desc: "Built responsive interfaces with React. Learned component architecture, state management, and CSS layout systems.",
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
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-zinc-700">01</span>
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">About</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] leading-tight">
            Background &amp; Skills
          </h2>
        </motion.div>

        {/* ── Bio + Stats ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-10 sm:gap-14 lg:gap-16 items-start mb-16 sm:mb-24">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-zinc-300 text-base leading-[1.9] mb-5">
              I'm a Full Stack Developer based in India. I care about writing
              clean code that's maintainable, and building interfaces that feel
              intuitive and fast. I enjoy the full stack — database design,
              APIs, and polished front-end work.
            </p>
            <p className="text-zinc-500 text-base leading-[1.9]">
              My background spans web, mobile, and systems programming. When I'm
              not building, I'm reading about software architecture or contributing
              to open source.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.06]"
          >
            {stats.map((s, i) => (
              <div key={i} className="py-5 flex items-baseline justify-between gap-4">
                <span className="text-zinc-500 text-sm">{s.label}</span>
                <span className="text-4xl font-semibold text-white tabular-nums tracking-tight">{s.value}</span>
              </div>
            ))}
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
