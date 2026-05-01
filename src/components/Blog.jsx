"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const articles = [
  {
    index: "01",
    title: "Building a Full-Stack Portfolio with Next.js 15",
    desc: "Architecture decisions, animation philosophy, and performance trade-offs when building a modern developer portfolio.",
    date: "May 2025",
    readTime: "5 min",
    href: "#",
  },
  {
    index: "02",
    title: "Firebase Real-Time Sync: Lessons from NSS Portal",
    desc: "How I used Firestore's real-time listeners to replace a manual attendance system and reduce admin overhead by 80%.",
    date: "Jan 2025",
    readTime: "7 min",
    href: "#",
  },
  {
    index: "03",
    title: "Android to Web: What Java Taught Me About JavaScript",
    desc: "Cross-platform development lessons — type safety, lifecycle management, and why strong typing matters.",
    date: "Nov 2024",
    readTime: "4 min",
    href: "#",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease } },
});

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-zinc-700">04</span>
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">Writing</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">
            Articles &amp; Notes
          </h2>
        </motion.div>

        {/* Article list */}
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {articles.map((a, i) => (
            <motion.a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp(i * 0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group grid grid-cols-[40px_1fr_auto] md:grid-cols-[48px_1fr_120px_48px] items-start gap-3 md:gap-8 py-5 sm:py-7 hover:bg-white/[0.02] -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-md transition-colors duration-200"
            >
              <span className="text-zinc-700 text-xs font-mono pt-0.5">{a.index}</span>

              <div>
                <p className="text-white text-sm font-medium mb-1.5 group-hover:text-[#c9a227] transition-colors duration-200">
                  {a.title}
                </p>
                <p className="text-zinc-600 text-xs leading-relaxed hidden sm:block">{a.desc}</p>
              </div>

              <div className="hidden md:flex flex-col items-end gap-1 pt-0.5">
                <span className="text-zinc-600 text-xs">{a.date}</span>
                <span className="text-zinc-700 text-xs">{a.readTime} read</span>
              </div>

              <div className="text-zinc-700 group-hover:text-[#c9a227] transition-colors pt-0.5 flex justify-end">
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
