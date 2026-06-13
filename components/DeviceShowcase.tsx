"use client"
import { motion } from "framer-motion"

export default function DeviceShowcase() {
  return (
    <div className="relative w-[320px] sm:w-[380px] lg:w-[420px]">
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [ -10, 10, -10 ] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="relative"
      >
        <div className="phone-mockup mx-auto rounded-3xl overflow-hidden shadow-xl">
          <div className="w-full h-[700px] bg-white/80 flex items-start justify-center p-4">
            <div className="w-full max-w-[300px] h-[620px] bg-gradient-to-b from-white to-slate-50 rounded-xl overflow-hidden animate-auto-scroll">
              {/* Placeholder for looping website demo */}
              <div className="p-6">
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-4" />
                <div className="h-3 bg-slate-100 rounded w-full mb-2" />
                <div className="h-3 bg-slate-100 rounded w-5/6 mb-2" />
                <div className="mt-6 h-40 bg-gradient-to-r from-sky-100 to-indigo-100 rounded" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.98, rotate: -2 }}
          animate={{ scale: [0.98, 1], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="laptop-mockup absolute right-[-60px] top-10 w-[360px] h-[220px] rounded-2xl bg-white/60 shadow-2xl border border-white/20"
        >
          <div className="w-full h-full p-4">
            <div className="h-6 bg-slate-200 rounded w-1/3 mb-3" />
            <div className="h-24 bg-gradient-to-r from-white to-slate-50 rounded mb-3" />
            <div className="h-8 bg-slate-100 rounded w-2/3" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
