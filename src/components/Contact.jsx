"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4b527] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-3">What's Next?</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Get In Touch</h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            I am currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out. I'll do my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:londheyash07@gmail.com">
              <Button className="group bg-[#d4b527] hover:bg-[#b09620] text-black border border-[#d4b527] px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,181,39,0.3)] flex items-center gap-3">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-bold">Say Hello</span>
              </Button>
            </a>
            
            <a
              href="https://linkedin.com/in/yash-londhe-969a242a2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group bg-transparent hover:bg-white/5 text-gray-300 border border-white/20 hover:border-[#d4b527] px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-3 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#d4b527] transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="group-hover:text-[#d4b527] transition-colors">LinkedIn</span>
              </Button>
            </a>

            <a
              href="https://github.com/yash-810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group bg-transparent hover:bg-white/5 text-gray-300 border border-white/20 hover:border-[#d4b527] px-8 py-6 text-lg rounded-full transition-all hover:scale-105 flex items-center gap-3 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#d4b527] transition-colors">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5A5.403 5.403 0 0 0 19 6c.28-1.15.28-2.35 0-3.5C19 2 18 2 16 3.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.6.8-1 1.5-1 3.5v4" />
                  <path d="M9 18C4.5 20 4 16 2 16" />
                </svg>
                <span className="group-hover:text-[#d4b527] transition-colors">GitHub</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
