"use client"
import { motion } from "framer-motion"
import DeviceShowcase from "./DeviceShowcase"
import ProfileImage from "./ProfileImage"

export default function PremiumHero() {
  return (
    <section id="home" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50 to-sky-50" />

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <ProfileImage />
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold">Building Modern Websites & AI Experiences</h1>
                <p className="mt-3 text-slate-600">I help businesses, startups and creators build fast, beautiful and intelligent web experiences.</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="btn-primary">Hire Me</a>
              <a href="#projects" className="btn-ghost">See Projects</a>
            </div>

            <div className="mt-8">
              <div className="typewriter text-slate-700">AI-Powered Web Developer • Frontend • AI Integration • Design</div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <DeviceShowcase />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-slate-500">⌄</div>
      </div>
    </section>
  )
}
