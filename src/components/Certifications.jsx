"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// Update these with your actual certifications
const certs = [
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", year: "2024" },
  { name: "React Developer", issuer: "Meta / Coursera", year: "2024" },
  { name: "Python Essentials", issuer: "Cisco NetAcad", year: "2023" },
  { name: "Android Development", issuer: "Google Developers", year: "2023" },
  { name: "SQL (Basic)", issuer: "HackerRank", year: "2023" },
  { name: "Cloud Computing Basics", issuer: "Coursera", year: "2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex items-baseline justify-between mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-700">05</span>
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">
              Certifications
            </p>
          </div>
          <span className="text-zinc-700 text-xs font-mono">{certs.length} credentials</span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.06] rounded-lg overflow-hidden">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="bg-[#09090b] hover:bg-[#0f0f12] transition-colors duration-200 px-5 py-5 flex flex-col gap-2"
            >
              <p className="text-white text-sm font-medium leading-snug">{c.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-zinc-600 text-xs">{c.issuer}</span>
                <span className="font-mono text-zinc-700 text-xs">{c.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
