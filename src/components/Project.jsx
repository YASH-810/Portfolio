"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
});

const projects = [
  {
    index: "01",
    name: "Portfolio Website",
    year: "2025",
    desc: "Personal portfolio built with Next.js 15, Framer Motion, and Tailwind CSS. Focused on typography and performance.",
    detail:
      "A personal showcase built with a focus on clean design, accessibility, and performance. Uses Next.js App Router for fast page loads, Framer Motion for purposeful animations, and a fully custom design system. Zero runtime CSS frameworks.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    repo: "https://github.com/yash-810/portfolio",
    demo: "#",
  },
  {
    index: "02",
    name: "NSS Portal",
    year: "2024",
    desc: "Volunteer management system with QR-based attendance, event scheduling, and automated certificate generation.",
    detail:
      "Built to digitise the National Service Scheme unit's operations. Features QR code generation per event, real-time Firebase sync for attendance, automated PDF certificate generation, and a program-officer reporting dashboard. Reduced manual work by ~80%.",
    stack: ["Next.js", "Firebase", "MongoDB", "TypeScript", "Tailwind CSS"],
    status: "Live",
    repo: "#",
    demo: "#",
  },
  {
    index: "03",
    name: "E-Commerce Dashboard",
    year: "2024",
    desc: "Admin panel with real-time sales analytics, inventory management, and order tracking. Auth via NextAuth.",
    detail:
      "A full-featured admin dashboard for e-commerce operations. Includes interactive Recharts graphs for revenue and user growth, Redux Toolkit for state management, NextAuth.js for secure admin access, and a fully responsive layout. Dark and light modes supported.",
    stack: ["React", "Node.js", "Redux", "MongoDB", "Recharts"],
    status: "In Progress",
    repo: "#",
    demo: "#",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
    </svg>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium mb-4">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">
            Selected Projects
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setSelected(p)}
              className="group grid grid-cols-[40px_1fr_auto] md:grid-cols-[48px_1fr_160px_64px] items-start gap-3 md:gap-8 py-5 sm:py-7 hover:bg-white/[0.02] -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-md cursor-pointer transition-colors duration-200"
            >
              {/* Number */}
              <span className="text-zinc-700 text-xs font-mono pt-1">{p.index}</span>

              {/* Title + desc */}
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-white text-sm font-medium group-hover:text-[#c9a227] transition-colors duration-200">
                    {p.name}
                  </span>
                  {p.status === "In Progress" && (
                    <span className="text-[10px] font-medium text-amber-500/80 border border-amber-500/20 px-2 py-0.5 rounded">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed">{p.desc}</p>
              </div>

              {/* Stack — desktop */}
              <div className="hidden md:flex flex-wrap gap-1.5 pt-0.5">
                {p.stack.slice(0, 3).map((t, ti) => (
                  <span key={ti} className="text-zinc-600 text-xs">
                    {t}{ti < Math.min(p.stack.length, 3) - 1 ? "," : ""}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-start justify-end pt-1 text-zinc-700 group-hover:text-[#c9a227] transition-colors duration-200">
                <ArrowIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail drawer / modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-md bg-[#0f0f12] border-l border-white/[0.07] flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-7 border-b border-white/[0.06]">
                <div>
                  <p className="text-zinc-600 text-xs font-mono mb-2">{selected.index} — {selected.year}</p>
                  <h3 className="text-white text-xl font-semibold tracking-[-0.01em]">
                    {selected.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-zinc-600 hover:text-white transition-colors mt-1"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-8 flex-1">
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-[1.85]">{selected.detail}</p>

                {/* Stack */}
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-[0.14em] font-medium mb-4">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs text-zinc-400 border border-white/[0.07] px-3 py-1.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      selected.status === "Live" ? "bg-emerald-400" : "bg-amber-400"
                    }`}
                  />
                  <span className="text-xs text-zinc-500">{selected.status}</span>
                </div>
              </div>

              {/* Footer links */}
              <div className="p-7 border-t border-white/[0.06] flex gap-4">
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm text-white border border-white/10 hover:border-white/25 py-2.5 rounded-md transition-colors hover:bg-white/[0.04]"
                >
                  Live Demo
                </a>
                <a
                  href={selected.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm text-zinc-400 hover:text-white border border-white/[0.06] hover:border-white/15 py-2.5 rounded-md transition-colors"
                >
                  Source Code
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
