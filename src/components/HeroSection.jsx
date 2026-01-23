"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import StarsBackground from "./Particles";
import { motion } from "framer-motion";

// STAGGER ANIMATION VARIANTS
const iconContainer = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.25, // delay between each icon
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const roles = ["Full Stack Developer", "Android Developer", "UI/UX Designer"];

  useEffect(() => {
    if (isWaiting) return;

    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      // Finished typing
      if (!isDeleting && text === currentRole) {
         setIsWaiting(true);
         setTimeout(() => {
           setIsWaiting(false);
           setIsDeleting(true);
         }, 2000); 
         return;
      } 
      
      // Finished deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      
      const newText = isDeleting 
        ? currentRole.substring(0, text.length - 1) 
        : currentRole.substring(0, text.length + 1);

      setText(newText);
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, isWaiting]);

  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden text-white"
    >
      {/* SOCIAL ICONS LEFT */}
      <motion.div
        variants={iconContainer}
        initial="hidden"
        animate="visible"
        className="fixed left-0 bottom-0 m-4 flex flex-col gap-5 text-gray-300 items-center"
      >
        <motion.a
          variants={iconItem}
          href="https://github.com/yash-810"
          target="_blank"
          className="hover:text-white transition"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5A5.403 5.403 0 0 0 19 6c.28-1.15.28-2.35 0-3.5C19 2 18 2 16 3.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.6.8-1 1.5-1 3.5v4" />
            <path d="M9 18C4.5 20 4 16 2 16" />
          </svg>
        </motion.a>

        <motion.a
          variants={iconItem}
          href="https://linkedin.com/in/yash-londhe-969a242a2"
          target="_blank"
          className="hover:text-white transition"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </motion.a>

        <motion.a
          variants={iconItem}
          href="https://instagram.com/yashh_londhe"
          target="_blank"
          className="hover:text-white transition"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="20" x="2" y="2" rx="5" />
            <path d="M16 11.5A4 4 0 1 1 12.5 8 4 4 0 0 1 16 11.5z" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </motion.a>

        <motion.a
          variants={iconItem}
          href="https://x.com/yourusername"
          target="_blank"
          className="hover:text-white transition"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 4s-.7 2.1-2 3.4C21.6 17.4 11.6 24.7 3 19c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </motion.a>

        <motion.div variants={iconItem} className="w-0.5 h-24 bg-gray-600" />
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="container max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                duration: 0.8
              }
            }
          }}
          className="text-left"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-2xl md:text-3xl animate-pulse">👋</span>
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#d4b527] to-[#fbf7e8] bg-clip-text text-transparent">
              Hello, I am
            </span>
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Yash <br className="hidden md:block" />
            <span className="text-gray-400">Londhe</span>
          </motion.h1>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-10 mb-6 flex items-center">
             <span className="text-xl md:text-3xl text-gray-300 font-bold mr-2">{text}</span>
             <span className={`w-1 h-8 bg-[#d4b527] inline-block ${isWaiting ? "animate-cursor-blink" : ""}`} />
          </motion.div>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
            I build exceptional digital experiences that are fast, accessible, and visually stunning. Passionate about turning complex problems into elegant solutions.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-4">
            <a href="#projects">
              <Button className="bg-[#d4b527] hover:bg-[#b09620] text-black font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,181,39,0.3)]">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-[#d4b527] text-[#d4b527] hover:bg-[#d4b527]/10 px-8 py-6 text-lg rounded-full transition-all hover:scale-105">
                Contact Me
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: AVATAR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-[#d4b527] blur-[100px] opacity-20 rounded-full scale-75" />
          
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-[#d4b527]/30 bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(212,181,39,0.1)]">
            {/* Placeholder for Avatar Image */}
            <div className="text-center p-6">
              <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                {/* Replace this div with: <img src="/your-avatar.jpg" alt="Yash Londhe" className="w-full h-full object-cover" /> */}
                <span className="text-6xl opacity-20">Avatar</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* EMAIL RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className="fixed right-0 mr-8 flex items-center gap-4 text-gray-300 rotate-90 origin-bottom-right"
      >
        <div className="w-20 h-0.5 bg-gray-600" />
        <p className="tracking-widest whitespace-nowrap hover:text-white transition select-none">
          londheyash07@gmail.com
        </p>
      </motion.div>
    </section>
  );
}
