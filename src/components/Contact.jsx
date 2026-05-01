"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 5000);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/[0.1] focus:border-[#c9a227]/60 py-3 text-sm text-zinc-300 placeholder-zinc-700 outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-zinc-700">03</span>
            <p className="text-xs text-[#c9a227] tracking-[0.18em] uppercase font-medium">Contact</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] mb-5">
            Get in Touch
          </h2>
          <p className="text-zinc-500 text-base max-w-md leading-relaxed">
            Open to full-time roles, freelance projects, and interesting
            conversations. Reach out below or email me directly.
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="flex flex-col gap-8"
          >
            <div className="divide-y divide-white/[0.06]">
              {[
                { label: "Email",    value: "londheyash07@gmail.com", href: "mailto:londheyash07@gmail.com" },
                { label: "GitHub",   value: "github.com/yash-810",    href: "https://github.com/yash-810" },
                { label: "LinkedIn", value: "linkedin.com/in/yash-londhe-969a242a2", href: "https://linkedin.com/in/yash-londhe-969a242a2" },
              ].map((item) => (
                <div key={item.label} className="py-5">
                  <p className="text-zinc-600 text-xs mb-1">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-zinc-300 text-sm hover:text-[#c9a227] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {item.value}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <p className="text-zinc-700 text-xs leading-relaxed">
              Based in India (IST). Typically replies within 24 hours.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <p className="text-white text-sm font-medium">Message sent.</p>
                </div>
                <p className="text-zinc-500 text-sm">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-zinc-600 text-xs mb-2 uppercase tracking-[0.12em]">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 text-xs mb-2 uppercase tracking-[0.12em]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-600 text-xs mb-2 uppercase tracking-[0.12em]">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-md transition-colors duration-200 hover:bg-white/[0.04] disabled:opacity-40"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-white/30 border-t-white rounded-full animate-spin" />
                        Sending
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <a
                    href="mailto:londheyash07@gmail.com"
                    className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
                  >
                    or email directly ↗
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
