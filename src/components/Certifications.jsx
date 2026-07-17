"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// Update these with your actual certifications
const certs = [
  {
    name: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    year: "2025",
    link: "/certificates/spoken-tutorial-python.pdf"
  },
  {
    name: "PHP and MySQL Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    year: "2026",
    link: "/certificates/spoken-tutorial-php_mysql.pdf"
  },
  {
    name: "Google Cloud Career Launchpad – Generative AI Leader Track",
    issuer: "Google Cloud",
    year: "2025",
    link: "/certificates/google-cloud-generative-ai.pdf"
  },
  {
    name: "Cambridge English B1 – ESOL International (Entry 3)",
    issuer: "Cambridge Assessment English",
    year: "2022",
    link: "/certificates/cambridge-english.pdf"
  },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", year: "2024" },
  { name: "React Developer", issuer: "Meta / Coursera", year: "2024" },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

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
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">
              Certifications
            </p>
          </div>
          <span className="text-zinc-700 text-xs font-mono">{certs.length} credentials</span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.06] rounded-lg overflow-hidden">
          {certs.map((c, i) => {
            const hasLink = !!c.link;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                onClick={() => hasLink && setActiveCert(c)}
                className={`group bg-[#09090b] hover:bg-[#0f0f12] transition-colors duration-200 px-5 py-5 flex flex-col gap-2 ${hasLink ? 'cursor-pointer' : ''}`}
              >
                <p className="text-white text-sm font-medium leading-snug group-hover:text-[#c9a227] transition-colors duration-200 flex items-start justify-between gap-2">
                  <span>{c.name}</span>
                  {hasLink && (
                    <span className="text-zinc-600 group-hover:text-[#c9a227] transition-colors duration-200 text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </span>
                  )}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-zinc-600 text-xs">{c.issuer}</span>
                  <span className="font-mono text-zinc-700 text-xs">{c.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal Backdrop & Iframe Viewer */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              className="relative w-full max-w-6xl h-[90vh] bg-[#0c0c0e] border border-white/[0.08] rounded-xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-[#09090b]">
                <div>
                  <h3 className="text-white text-sm font-semibold">{activeCert.name}</h3>
                  <p className="text-zinc-500 text-xs mt-0.5">{activeCert.issuer} • {activeCert.year}</p>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="text-zinc-500 hover:text-white transition-colors duration-150 p-1.5 hover:bg-white/[0.04] rounded-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              {/* PDF Frame */}
              <div className="flex-1 bg-[#141416]">
                <iframe
                  src={`${activeCert.link}#toolbar=0&view=FitH`}
                  className="w-full h-full"
                  title={activeCert.name}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
