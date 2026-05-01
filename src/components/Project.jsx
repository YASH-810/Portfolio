"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Layers, Database, FileCode2, Code, Monitor, ShoppingCart, Users, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Portfolio Website",
    tagline: "Personal showcase built with Next.js",
    desc: "A sleek personal website built with Next.js and Tailwind CSS.",
    modalDesc:
      "This personal portfolio website serves as a central hub for showcasing my skills, projects, and professional background. Built with performance and aesthetics in mind, it leverages the power of Next.js for server-side rendering and SEO optimization. The styling is crafted with Tailwind CSS for a fully responsive and custom design. Key features include smooth Framer Motion animations, a dynamic particle background, and a glassmorphism design language that provides a modern, premium feel.",
    status: "Completed",
    gradient: "from-yellow-500/10 via-transparent to-transparent",
    icon: Monitor,
    accentColor: "#d4b527",
    techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    demoLink: "#",
    repoLink: "https://github.com/yash-810/portfolio",
  },
  {
    name: "E-Commerce Dashboard",
    tagline: "Admin panel with real-time analytics",
    desc: "Admin dashboard to manage products, users, and orders.",
    modalDesc:
      "A comprehensive e-commerce administration dashboard designed to streamline online store management. This application provides real-time analytics on sales, user growth, and revenue through interactive charts. Authentication is secured via NextAuth.js, ensuring safe access for administrators. The dashboard includes complex state management with Redux Toolkit to handle product inventories, order statuses, and user notifications efficiently. It also features a dark/light mode toggle and a fully responsive layout for on-the-go management.",
    status: "Coming Soon",
    gradient: "from-blue-500/10 via-transparent to-transparent",
    icon: ShoppingCart,
    accentColor: "#60a5fa",
    techStack: ["React", "Node.js", "Redux", "Recharts", "MongoDB"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    name: "NSS Portal",
    tagline: "Volunteer management with QR attendance",
    desc: "Volunteer management platform with event tracking and QR attendance.",
    modalDesc:
      "The NSS Portal is a specialized platform developed to digitize the operations of the National Service Scheme unit. It simplifies volunteer enrollment, event scheduling, and attendance tracking using unique QR codes generated for each event. The system automates certificate generation for active volunteers and provides detailed reports for program officers. Built with Firebase for real-time database capabilities and authentication, it ensures instant data synchronization across all user devices.",
    status: "Completed",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    icon: Users,
    accentColor: "#34d399",
    techStack: ["Next.js", "MongoDB", "Firebase", "TypeScript", "Tailwind"],
    demoLink: "#",
    repoLink: "#",
  },
];

function StatusBadge({ status }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${
        isCompleted
          ? "bg-green-500/10 border-green-500/20 text-green-400"
          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isCompleted
            ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
            : "bg-yellow-500 shadow-[0_0_6px_rgba(234,179,8,0.6)] animate-pulse"
        }`}
      />
      {status.toUpperCase()}
    </span>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b527] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Recent Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4b527] to-[#f0d060] mx-auto rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative p-6 flex flex-col h-full">
                  {/* Icon + Status */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}
                    >
                      <Icon size={22} style={{ color: project.accentColor }} />
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4b527] transition-colors">{project.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{project.tagline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-500 text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#d4b527] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f2130] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl"
            >
              {/* Mac titlebar */}
              <div className="flex items-center gap-2 px-6 py-4 bg-[#0a1a26] border-b border-white/5">
                <button
                  onClick={() => setSelected(null)}
                  className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-90 transition flex items-center justify-center"
                >
                  <X size={8} className="opacity-0 hover:opacity-100 transition" />
                </button>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                <span className="ml-auto text-xs text-gray-500 font-mono">{selected.name.toLowerCase().replace(/ /g, "-")}.md</span>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
                {/* Left */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{selected.name}</h3>
                      <p className="text-gray-500 text-sm">{selected.tagline}</p>
                    </div>
                    <StatusBadge status={selected.status} />
                  </div>

                  <div className="bg-white/5 border-l-2 border-[#d4b527]/50 rounded-r-xl pl-5 pr-4 py-5 text-gray-300 text-sm leading-relaxed">
                    {selected.modalDesc}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <p className="text-[10px] font-bold text-[#d4b527] uppercase tracking-widest mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[#d4b527]/30 rounded-lg text-gray-300 text-xs transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a
                      href={selected.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-[#d4b527] text-black font-bold text-sm rounded-xl hover:bg-[#b09620] transition-all hover:scale-[1.02]"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    <a
                      href={selected.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 text-white font-medium text-sm rounded-xl hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]"
                    >
                      <Github size={15} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
