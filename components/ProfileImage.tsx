"use client"
import { motion } from "framer-motion"

export default function ProfileImage() {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="relative">
      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">
        <div className="w-full h-full rounded-full bg-white/80 flex items-center justify-center shadow-lg overflow-hidden">
          <div className="w-full h-full bg-slate-200 rounded-full" />
        </div>
      </div>
      <div className="absolute -inset-1 rounded-full blur-md opacity-30" />
    </motion.div>
  )
}
