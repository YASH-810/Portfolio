"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "londheyash07@gmail.com",
    href: "mailto:londheyash07@gmail.com",
    color: "text-[#d4b527]",
    bg: "bg-[#d4b527]/10",
    border: "border-[#d4b527]/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yash-810",
    href: "https://github.com/yash-810",
    color: "text-gray-300",
    bg: "bg-white/5",
    border: "border-white/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yash-londhe-969a242a2",
    href: "https://linkedin.com/in/yash-londhe-969a242a2",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send (replace with real API)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4b527] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4b527] text-sm font-bold tracking-widest uppercase mb-3">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4b527] to-[#f0d060] mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — I'll get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Let's Connect</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border ${item.border} ${item.bg} hover:scale-[1.02] transition-all duration-200 group`}
                    >
                      <div className={`p-2.5 rounded-lg ${item.bg} border ${item.border}`}>
                        <Icon size={18} className={item.color} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">{item.label}</p>
                        <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors truncate max-w-[200px]">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Status card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2.5 bg-green-500/10 border border-green-500/20 rounded-xl mt-0.5">
                <Clock size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Response Time</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  I typically respond within <span className="text-[#d4b527] font-semibold">24 hours</span>. I'm based in <span className="text-gray-300">India (IST)</span>.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2.5 bg-[#d4b527]/10 border border-[#d4b527]/20 rounded-xl mt-0.5">
                <MapPin size={16} className="text-[#d4b527]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Location</p>
                <p className="text-gray-400 text-xs">India · Open to Remote Work</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold text-lg mb-1">Send a Message</h3>

              {/* Status banners */}
              {status === "sent" && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                  <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  <AlertCircle size={16} /> Something went wrong. Please email me directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#d4b527]/60 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#d4b527]/60 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#d4b527]/60 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white/5 border border-white/10 focus:border-[#d4b527]/60 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2.5 py-3.5 bg-[#d4b527] hover:bg-[#b09620] text-black font-bold text-sm rounded-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 shadow-[0_0_25px_rgba(212,181,39,0.3)]"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
