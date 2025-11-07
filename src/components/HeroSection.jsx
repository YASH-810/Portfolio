"use client";
import React from "react";
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
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden text-white"
    >
      {/* <StarsBackground /> */}

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

      {/* CENTER CONTENT */}
      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold mb-4">
          Crafting <span className="text-blue-400">Digital Experiences</span> that Inspire 🚀
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          I’m a web developer focused on building fast, responsive, and elegant websites using React & Next.js.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
              View Projects
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="border-blue-400 text-blue-700 hover:bg-blue-50/10 hover:text-white px-6 py-3 text-lg">
              Contact Me
            </Button>
          </a>
        </div>
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
