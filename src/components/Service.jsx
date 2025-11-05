"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Palette, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      desc: "Building responsive, high-performance websites using React & Next.js.",
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 text-pink-500" />,
      desc: "Designing modern, user-centric interfaces with Figma & Tailwind CSS.",
    },
    {
      title: "Backend Integration",
      icon: <Database className="w-6 h-6 text-green-500" />,
      desc: "Connecting APIs and databases for smooth and secure data flow.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Services</h2>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-xl transition-shadow duration-300 border-none"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                {service.icon}
                <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
