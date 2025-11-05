"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-[90vh] flex items-center justify-center bg-gradient-to-red from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Crafting <span className="text-blue-600">Digital Experiences</span> that Inspire 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          I’m a web developer focused on building fast, responsive, and elegant
          websites using React, Next.js, and modern UI frameworks.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4">
            <a href="#projects">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
            View Projects
          </Button>
            </a>
            <a href="#contact">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg"
          >
            Contact Me
          </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
