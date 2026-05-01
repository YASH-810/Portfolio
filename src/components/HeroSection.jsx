"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const iconContainer = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1, x: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.6 },
  },
};
const iconItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const GH = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5A5.403 5.403 0 0 0 19 6c.28-1.15.28-2.35 0-3.5C19 2 18 2 16 3.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.6.8-1 1.5-1 3.5v4" />
    <path d="M9 18C4.5 20 4 16 2 16" />
  </svg>
);
const LI = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IG = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.5A4 4 0 1 1 12.5 8 4 4 0 0 1 16 11.5z" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const codeLines = [
  { indent: 0, text: "const yash = {", color: "text-gray-200" },
  { indent: 1, text: 'role: "Full Stack Dev",', color: "text-green-400" },
  { indent: 1, text: 'passion: "Building great UX",', color: "text-blue-400" },
  { indent: 1, text: 'stack: ["Next.js", "React", "Node"],', color: "text-yellow-300" },
  { indent: 1, text: "available: true,", color: "text-purple-400" },
  { indent: 0, text: "};", color: "text-gray-200" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const roles = ["Full Stack Developer", "Android Developer", "UI/UX Designer"];

  useEffect(() => {
    if (isWaiting) return;
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setIsWaiting(true);
        setTimeout(() => { setIsWaiting(false); setIsDeleting(true); }, 2000);
        return;
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, isWaiting]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4b527] rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[130px]"
        />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* SOCIAL ICONS LEFT */}
      <motion.div
        variants={iconContainer}
        initial="hidden"
        animate="visible"
        className="fixed left-4 bottom-8 flex flex-col gap-5 text-gray-400 items-center z-40"
      >
        {[
          { href: "https://github.com/yash-810", icon: <GH /> },
          { href: "https://linkedin.com/in/yash-londhe-969a242a2", icon: <LI /> },
          { href: "https://instagram.com/yashh_londhe", icon: <IG /> },
        ].map((social, i) => (
          <motion.a
            key={i}
            variants={iconItem}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#d4b527] hover:bg-[#d4b527]/10 transition-all duration-200"
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.div variants={iconItem} className="w-px h-20 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>

      {/* EMAIL RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed right-0 bottom-24 flex flex-col items-center gap-3 z-40"
        style={{ transform: "rotate(90deg)", transformOrigin: "right center", right: "-60px" }}
      >
        <a href="mailto:londheyash07@gmail.com" className="text-gray-400 text-xs tracking-widest hover:text-[#d4b527] transition-colors whitespace-nowrap">
          londheyash07@gmail.com
        </a>
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-500" />
      </motion.div>

      {/* MAIN GRID */}
      <div className="container max-w-6xl mx-auto px-6 z-10 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* LEFT: TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="text-left"
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4b527]/10 border border-[#d4b527]/25 mb-6"
          >
            <Sparkles size={14} className="text-[#d4b527]" />
            <span className="text-[#d4b527] text-sm font-semibold tracking-wide">Open to Opportunities</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-lg mb-2 font-medium"
          >
            👋 Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
            className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tight leading-none"
          >
            Yash <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b527] via-[#f0d060] to-[#d4b527] bg-[length:200%_auto] animate-shimmer">
              Londhe
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="h-12 flex items-center mb-6"
          >
            <span className="w-1 h-1 rounded-full bg-[#d4b527] mr-3" />
            <span className="text-xl md:text-2xl text-gray-300 font-bold">{text}</span>
            <span className={`w-0.5 h-7 bg-[#d4b527] ml-1 inline-block ${isWaiting ? "animate-cursor-blink" : ""}`} />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-10"
          >
            I craft exceptional digital experiences — fast, accessible, and visually stunning. Turning complex problems into elegant, scalable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <button className="group relative px-8 py-3.5 text-black font-bold text-base rounded-2xl bg-[#d4b527] hover:bg-[#b09620] transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(212,181,39,0.35)] overflow-hidden">
                <span className="relative z-10">View Projects →</span>
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-3.5 text-[#d4b527] font-semibold text-base rounded-2xl border border-[#d4b527]/40 hover:bg-[#d4b527]/10 hover:border-[#d4b527] transition-all duration-200 hover:scale-105">
                Contact Me
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-[#d4b527]/20 blur-3xl rounded-3xl" />

            {/* Card */}
            <div className="relative bg-[#0f2130]/90 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl w-full max-w-md">
              {/* Mac bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#0a1a26] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-auto text-xs text-gray-500 font-mono">yash.config.js</span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm space-y-1 min-h-[200px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-gray-600 select-none w-4 text-right shrink-0">{i + 1}</span>
                    <span
                      className={line.color}
                      style={{ paddingLeft: `${line.indent * 20}px` }}
                    >
                      {line.text}
                      {i === Math.min(visibleLines - 1, codeLines.length - 1) && (
                        <span className="inline-block w-2 h-4 bg-[#d4b527] ml-0.5 animate-cursor-blink" />
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-500 font-mono">Available for new projects</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#d4b527] text-black text-xs font-black px-3 py-1.5 rounded-full shadow-lg"
            >
              2+ yrs exp
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
