"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiLinkedin,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { contactLinks } from "@/lib/data";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "Chat instantly",
    href: contactLinks.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    value: "hello@musab.dev",
    href: contactLinks.email,
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: contactLinks.linkedin,
    icon: FiLinkedin,
  },
];

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Placeholder submit logic — replace with API route / email service
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">great together</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Have a project in mind? Send a message or reach out directly
            &mdash; I usually respond within a couple of hours.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact methods */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-glass transition-shadow hover:shadow-glass-lg"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {method.label}
                      </p>
                      <p className="text-xs text-ink-soft">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              <div className="mt-2 flex-1 rounded-2xl glass p-6 shadow-glass">
                <p className="font-display text-sm font-semibold text-ink">
                  Currently available
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  I&apos;m currently accepting new freelance and contract
                  projects. Whether it&apos;s a quick landing page or a
                  full-scale web application, let&apos;s talk about how I can
                  help.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-6 shadow-glass-lg sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-line bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-line bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project..."
                    className="w-full resize-none rounded-xl border border-line bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary disabled:opacity-70 sm:w-auto sm:px-8"
              >
                {status === "success" ? (
                  <>
                    Message Sent
                    <FiCheckCircle />
                  </>
                ) : status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-accent"
                >
                  Thanks for reaching out! I&apos;ll get back to you shortly.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
