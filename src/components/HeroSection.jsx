"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const socials = [
  { label: "GitHub",   href: "https://github.com/yash-810" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yash-londhe-969a242a2" },
  { label: "Twitter",  href: "https://x.com/yourusername" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle top-right glow — restrained, single */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at top right, #c9a227, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 w-full pt-32 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Status */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs text-zinc-500 tracking-wide">
              Available for new projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-[-0.02em] leading-[1.05] mb-6"
          >
            Yash Londhe
          </motion.h1>

          {/* Role line */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-400 font-normal mb-6 tracking-tight"
          >
            Full Stack Developer &amp; Android Engineer
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-500 text-base leading-relaxed max-w-lg mb-12"
          >
            I build fast, accessible, and well-crafted digital products.
            Focused on clean architecture, thoughtful UX, and code that
            scales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-md transition-colors duration-200 hover:bg-white/[0.04]"
            >
              View Work
            </a>
            <a
              href="mailto:londheyash07@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#c9a227] transition-colors duration-200"
            >
              londheyash07@gmail.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-6 right-6 max-w-5xl mx-auto flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
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
