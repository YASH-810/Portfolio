"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m a passionate developer who loves creating innovative and efficient web applications. 
              I specialize in technologies like <strong>React</strong>, <strong>Next.js</strong>, 
              and <strong>Node.js</strong>, focusing on building seamless and user-friendly experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
