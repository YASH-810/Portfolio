"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    { name: "Portfolio Website", desc: "A sleek personal website built with Next.js and Tailwind CSS." },
    { name: "E-Commerce Dashboard", desc: "Admin dashboard to manage products, users, and orders." },
    { name: "NSS Portal", desc: "Volunteer management platform with event tracking and QR attendance." },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border-blue-100"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
