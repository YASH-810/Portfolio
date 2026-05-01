"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Coffee, Box, FileJson, FileCode, Cpu, Globe, Smartphone, Database, Layers, Zap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+", icon: "🚀" },
  { label: "Projects Completed", value: "15+", icon: "✅" },
  { label: "Technologies", value: "10+", icon: "⚙️" },
];

const skills = [
  { name: "JavaScript / TypeScript", level: 95, icon: FileJson, color: "from-yellow-400 to-yellow-600" },
  { name: "React & Next.js", level: 92, icon: Layers, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js & Express", level: 85, icon: Terminal, color: "from-green-400 to-emerald-600" },
  { name: "Python", level: 88, icon: Box, color: "from-blue-400 to-indigo-500" },
  { name: "Android (Java/Kotlin)", level: 80, icon: Smartphone, color: "from-green-500 to-teal-600" },
  { name: "Databases (SQL/NoSQL)", level: 82, icon: Database, color: "from-orange-400 to-red-500" },
];

const techBadges = [
  { name: "C", icon: Terminal },
  { name: "C++", icon: Cpu },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Box },
  { name: "JavaScript", icon: FileJson },
  { name: "TypeScript", icon: FileCode },
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Zap },
  { name: "REST APIs", icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#d4b527] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4b527] to-[#f0d060] rounded-full" />
        </motion.div>

        {/* Top: Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-5">
              I am a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b527] to-[#f0d060]">
                Full Stack Developer
              </span>{" "}
              based in India.
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              I specialize in building high-quality websites and applications that are both functional and visually appealing. My passion lies in solving complex problems through clean and efficient code.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With a strong foundation in modern technologies like React, Next.js, and Node.js, I strive to create seamless user experiences. I am constantly learning and evolving to keep up with the latest trends in the tech world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group bg-white/5 border border-white/10 hover:border-[#d4b527]/40 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <h4 className="text-3xl font-black text-[#d4b527]">{stat.value}</h4>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-5 bg-[#d4b527] rounded-full inline-block" />
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={15} className="text-gray-400" />
                      <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-[#d4b527] text-xs font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Badge Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 text-center">Tech I Work With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-[#d4b527]/40 hover:bg-[#d4b527]/5 rounded-xl text-gray-300 hover:text-white transition-all cursor-default text-sm"
              >
                <tech.icon size={14} className="text-[#d4b527]" />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
