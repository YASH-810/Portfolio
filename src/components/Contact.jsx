"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Textarea placeholder="Your Message" rows="5" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
