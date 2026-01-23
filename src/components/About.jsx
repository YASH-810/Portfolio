"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Coffee, Box, FileJson, FileCode, Cpu } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
];

const languages = [
  { name: "C", level: "Advanced", icon: Terminal },
  { name: "C++", level: "Intermediate", icon: Cpu },
  { name: "Java", level: "Intermediate", icon: Coffee },
  { name: "Python", level: "Advanced", icon: Box },
  { name: "JavaScript", level: "Expert", icon: FileJson },
  { name: "TypeScript", level: "Expert", icon: FileCode },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#d4b527] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4b527] opacity-[0.03] blur-[100px] rounded-full" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-2">Who I Am</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <div className="w-20 h-1 bg-[#d4b527] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              I am a <span className="text-[#d4b527]">Full Stack Developer</span> based in India.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I specialize in building high-quality websites and applications that are both functional and visually appealing. My passion lies in solving complex problems through clean and efficient code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With a strong foundation in modern technologies like React, Next.js, and Node.js, I strive to create seamless user experiences. I am constantly learning and evolving to keep up with the latest trends in the tech world.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm text-center hover:border-[#d4b527]/50 transition-colors">
                  <h4 className="text-3xl font-bold text-[#d4b527] mb-1">{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-[#d4b527]/30 transition-colors"
          >
             <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#d4b527] pl-4">Technical Proficiency</h3>
             
             <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-[#d4b527]/10 hover:border-[#d4b527]/50 transition-all group cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-[#d4b527]/10 text-[#d4b527] group-hover:scale-110 transition-transform">
                      <lang.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">{lang.name}</h4>
                      <p className="text-xs text-gray-500 group-hover:text-[#d4b527] transition-colors">{lang.level}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
