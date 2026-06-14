"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="relative"
    >
      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">
        <div className="w-full h-full rounded-full bg-white/80 flex items-center justify-center shadow-lg overflow-hidden">
          <Image
            src="/images/profile.svg"
            alt="Musab Bin Umair"
            width={320}
            height={320}
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
      <div className="absolute -inset-1 rounded-full blur-md opacity-30" />
    </motion.div>
  );
}
