"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { FileCode2, ExternalLink, Github, Codepen, Database, Layout, Laptop, ShoppingCart, Users } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      name: "Portfolio Website", 
      desc: "A sleek personal website built with Next.js and Tailwind CSS.", 
      modalDesc: "This personal portfolio website serves as a central hub for showcasing my skills, projects, and professional background. Built with performance and aesthetics in mind, it leverages the power of Next.js for server-side rendering and SEO optimization. The styling is crafted with Tailwind CSS for a fully responsive and custom design. Key features include smooth Framer Motion animations, a dynamic particle background, and a glassmorphism design language that provides a modern, premium feel. It is fully accessible and optimized for all devices.",
      status: "Completed",
      icon: Laptop,
      techStack: [
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "Next.js" },
        { icon: <Codepen className="w-5 h-5 text-gray-300" />, name: "Tailwind CSS" },
        { icon: <FileCode2 className="w-5 h-5 text-gray-300" />, name: "React" },
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "Framer Motion" },
        { icon: <FileCode2 className="w-5 h-5 text-gray-300" />, name: "Lucide Icons" }
      ],
      demoLink: "#",
      repoLink: "https://github.com/yash-810/portfolio"
    },
    { 
      name: "E-Commerce Dashboard", 
      desc: "Admin dashboard to manage products, users, and orders.", 
      modalDesc: "A comprehensive e-commerce administration dashboard designed to streamline online store management. This application provides real-time analytics on sales, user growth, and revenue through interactive charts. Authentication is secured via NextAuth.js, ensuring safe access for administrators. The dashboard includes complex state management with Redux Toolkit to handle product inventories, order statuses, and user notifications efficiently. It also features a dark/light mode toggle and a fully responsive layout for on-the-go management.",
      status: "Coming Soon",
      icon: ShoppingCart,
      techStack: [
        { icon: <FileCode2 className="w-5 h-5 text-gray-300" />, name: "React" },
        { icon: <Database className="w-5 h-5 text-gray-300" />, name: "Node.js" },
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "Redux" },
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "Recharts" },
        { icon: <Database className="w-5 h-5 text-gray-300" />, name: "MongoDB" }
      ],
      demoLink: "#",
      repoLink: "#"
    },
    { 
      name: "NSS Portal", 
      desc: "Volunteer management platform with event tracking and QR attendance.", 
      modalDesc: "The NSS Portal is a specialized platform developed to digitize the operations of the National Service Scheme unit. It simplifies volunteer enrollment, event scheduling, and attendance tracking using unique QR codes generated for each event. The system automates certificate generation for active volunteers and provides detailed reports for program officers. Built with Firebase for real-time database capabilities and authentication, it ensures instant data synchronization across all user devices, making administrative tasks significantly faster and error-free.",
      status: "Completed",
      icon: Users,
      techStack: [
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "Next.js" },
        { icon: <Database className="w-5 h-5 text-gray-300" />, name: "MongoDB" },
        { icon: <FileCode2 className="w-5 h-5 text-gray-300" />, name: "Firebase" },
        { icon: <Layout className="w-5 h-5 text-gray-300" />, name: "TypeScript" },
        { icon: <Codepen className="w-5 h-5 text-gray-300" />, name: "Tailwind" }
      ],
      demoLink: "#",
      repoLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-[#d4b527] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#d4b527] opacity-[0.03] blur-[100px] rounded-full" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-3">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Recent Projects</h1>
          <div className="w-24 h-1 bg-[#d4b527] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                onClick={() => setSelectedProject(project)}
                className="h-full bg-white/5 border-white/10 text-gray-200 hover:border-[#d4b527]/50 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-md shadow-lg relative overflow-hidden flex flex-col cursor-pointer rounded-2xl"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4b527]/0 to-[#d4b527]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <CardHeader className="relative z-10 p-6 pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-2 ${
                      project.status === "Completed" 
                        ? "bg-green-500/10 border-green-500/20 text-green-400" 
                        : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "Completed" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                      }`}></span>
                      {project.status.toUpperCase()}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-[#d4b527] transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 p-6 pt-2 flex-grow flex flex-col justify-between">
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center text-[#d4b527] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#19354a] border border-[#d4b527]/30 rounded-2xl overflow-hidden max-w-5xl w-full relative shadow-[0_0_50px_rgba(212,181,39,0.1)] flex flex-col min-h-[70vh]"
            >
              {/* iOS-style Header */}
              <div className="bg-[#0f2130]/50 px-6 py-3 flex items-center justify-between border-b border-white/5 backdrop-blur-md shrink-0">
                <div className="flex gap-2">
                  <button onClick={() => setSelectedProject(null)} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-gray-400 text-xs font-mono">project-details.json</div>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 grow h-full">
                {/* Main Content: Header & Desc */}
                <div className="flex flex-col h-full">
                   <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span>Detailed Overview</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2 ${
                        selectedProject.status === "Completed" 
                          ? "bg-green-500/10 border-green-500/20 text-green-400" 
                          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                      }`}>
                         <span className={`w-2 h-2 rounded-full ${
                           selectedProject.status === "Completed" ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                         }`}></span>
                        {selectedProject.status}
                      </div>
                   </div>
                   
                   <div className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#d4b527]/30 pl-4 py-4 bg-white/5 rounded-r-lg grow">
                      {selectedProject.modalDesc}
                   </div>
                </div>

                {/* Sidebar: Tech Stack & Actions */}
                <div className="flex flex-col justify-between h-full bg-[#0f2130]/30 rounded-xl p-6 border border-white/5">
                   <div>
                      <h4 className="text-xs font-bold text-[#d4b527] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Database className="w-3 h-3" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.techStack.map((tech, i) => (
                          <div key={i} className="bg-[#0f2130] px-3 py-1.5 rounded-md border border-white/5 hover:border-[#d4b527]/30 transition-colors flex items-center gap-2 group/tech cursor-default">
                            {tech.icon}
                            <span className="text-gray-300 text-xs group-hover/tech:text-white transition-colors">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="space-y-3">
                      <a 
                        href={selectedProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-[#d4b527] text-black text-sm font-bold rounded-lg hover:bg-[#b09620] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a 
                        href={selectedProject.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all hover:scale-[1.02] border border-white/10 flex items-center justify-center gap-2"
                      >
                        <Github size={16} /> Source Code
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
