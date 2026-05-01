"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const socials = [
  { label: "GitHub",   href: "https://github.com/yash-810" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yash-londhe-969a242a2" },
  { label: "Twitter",  href: "https://x.com/yourusername" },
];

const infoRows = [
  { key: "Role",     val: "Full Stack Developer" },
  { key: "Location", val: "India" },
  { key: "Focus",    val: "Web & Mobile" },
  { key: "Status",   val: "Open to work", accent: true },
];

const stack = [
  ["Next.js", "React", "TypeScript"],
  ["Node.js", "Python", "Firebase"],
  ["Android", "REST APIs", "MongoDB"],
];

// ── Tilt + Float card ──────────────────────────────────────────────────────
function TiltCard() {
  const ref = useRef(null);

  // Raw motion values for tilt
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-damped tilt for smooth feel
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), {
    stiffness: 160,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 160,
    damping: 22,
  });

  // Subtle glare position
  const glareX = useTransform(rawX, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(rawY, [-0.5, 0.5], ["15%", "85%"]);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Normalize to [-0.5, 0.5]
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div className="hidden lg:flex items-center justify-center">
      {/* Float wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.7, delay: 0.4, ease },
          y: {
            delay: 1.2,
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{ perspective: 900 }}
      >
        {/* Tilt wrapper */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Subtle drop-shadow that shifts with tilt */}
          <motion.div
            style={{
              rotateX,
              rotateY,
            }}
            className="absolute inset-0 rounded-lg"
            aria-hidden
          />

          {/* Card */}
          <div className="border border-white/[0.08] rounded-lg overflow-hidden bg-[#0f0f12] relative w-[340px]">

            {/* Glare overlay */}
            <motion.div
              style={{
                background: useTransform(
                  [glareX, glareY],
                  ([x, y]) =>
                    `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.04) 0%, transparent 65%)`
                ),
              }}
              className="absolute inset-0 pointer-events-none z-10 rounded-lg"
            />

            {/* Panel header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111114]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="ml-auto font-mono text-[10px] text-zinc-700 select-none">
                yash.config
              </span>
            </div>

            {/* Info rows */}
            <div className="divide-y divide-white/[0.05]">
              {infoRows.map((row) => (
                <div
                  key={row.key}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <span className="font-mono text-[11px] text-zinc-600 uppercase tracking-[0.1em]">
                    {row.key}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      row.accent ? "text-[#c9a227]" : "text-zinc-300"
                    }`}
                  >
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Stack block */}
            <div className="border-t border-white/[0.06] px-5 py-4">
              <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.1em] mb-3">
                Stack
              </p>
              <div className="flex flex-col gap-2">
                {stack.map((row, ri) => (
                  <div key={ri} className="flex items-center gap-2">
                    {row.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-zinc-500 border border-white/[0.06] px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/[0.06] px-5 py-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-700">
                2+ years · 15+ projects shipped
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Single restrained glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle at top right, #c9a227, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full pt-28 pb-20">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[calc(100vh-140px)]">

          {/* ── LEFT: text ───────────────────────────── */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-zinc-500 tracking-wide">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-[4.25rem] font-semibold text-white tracking-[-0.025em] leading-[1.05] mb-5"
            >
              Yash Londhe
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-zinc-400 font-normal mb-5 tracking-tight"
            >
              Full Stack Developer &amp; Android Engineer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-zinc-500 text-sm leading-[1.8] max-w-[420px] mb-10"
            >
              I build fast, accessible, and well-crafted digital products.
              Focused on clean architecture, thoughtful UX, and code that scales.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-md transition-colors duration-200 hover:bg-white/[0.04]"
              >
                View Work
              </a>
              <a
                href="mailto:londheyash07@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-[#c9a227] transition-colors duration-200"
              >
                londheyash07@gmail.com
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: tilt + float config card ─────── */}
          <TiltCard />
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-8 left-6 right-6 max-w-5xl mx-auto flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="flex items-center gap-1.5 text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block"
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
