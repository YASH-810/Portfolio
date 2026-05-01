"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2+",  label: "Years of Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Firebase", "Python"],
  },
  {
    title: "Mobile",
    skills: ["Android (Java)", "Kotlin", "React Native"],
  },
  {
    title: "Data & Tools",
    skills: ["MongoDB", "SQL", "Git", "Docker", "Figma"],
  },
];

const timeline = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer",
    org: "Freelance & Personal Projects",
    description:
      "Designing and building end-to-end web applications. Focus on performance, accessibility, and scalable architecture.",
  },
  {
    period: "2023 — 2024",
    title: "Android Developer",
    org: "Academic & Open Source",
    description:
      "Developed native Android applications in Java and Kotlin. Integrated REST APIs, local storage, and custom UI components.",
  },
  {
    period: "2022 — 2023",
    title: "Frontend Developer",
    org: "College Projects",
    description:
      "Built responsive UIs with React and learned the fundamentals of component-driven design and state management.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4b527] opacity-[0.03] blur-[140px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Section label ─────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[#d4b527] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Background & Skills
          </h2>
        </motion.div>

        {/* ── Top grid: bio (left) + stats (right) ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 mb-24">

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <p className="text-gray-300 text-lg leading-[1.85] mb-5">
              I'm a Full Stack Developer based in India, focused on building
              clean, performant digital products. I enjoy working across the
              entire stack — from database schema design to polished front-end
              interfaces.
            </p>
            <p className="text-gray-500 text-base leading-[1.85]">
              My background spans web, mobile, and systems programming. I care
              deeply about code quality, developer experience, and shipping
              things that actually work. When I'm not coding, I'm exploring new
              tools or contributing to open-source.
            </p>
          </motion.div>

          {/* Stats — minimal, typographic */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col justify-center gap-0 divide-y divide-white/[0.06]"
          >
            {stats.map((s, i) => (
              <div key={i} className="py-7 flex items-baseline justify-between">
                <span className="text-gray-500 text-sm">{s.label}</span>
                <span className="text-5xl font-bold text-white tabular-nums">{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Divider ───────────────────────────────── */}
        <div className="border-t border-white/[0.06] mb-24" />

        {/* ── Skills grid ───────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-24"
        >
          <p className="text-[#d4b527] text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Technical Skills
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={ci * 0.5 + 1}
                className="bg-[#0d2135] p-8 hover:bg-[#112840] transition-colors duration-300"
              >
                <p className="text-[#d4b527] text-xs font-semibold tracking-[0.15em] uppercase mb-6">
                  {cat.title}
                </p>
                <ul className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <li
                      key={si}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#d4b527] shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Divider ───────────────────────────────── */}
        <div className="border-t border-white/[0.06] mb-24" />

        {/* ── Timeline ──────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p className="text-[#d4b527] text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Experience
          </p>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.6 + 1}
                className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 rounded-xl"
              >
                {/* Period */}
                <div className="pt-1">
                  <span className="text-gray-500 text-sm font-mono tabular-nums">
                    {item.period}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between mb-1 gap-4">
                    <h3 className="text-white text-lg font-semibold group-hover:text-[#d4b527] transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{item.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
