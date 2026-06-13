"use client"
import { motion } from 'framer-motion'

export default function WhatsAppButton(){
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href="https://wa.me/923087502198"
      target="_blank"
      rel="noreferrer"
      className="fixed left-6 bottom-6 z-50"
    >
      <div className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-xl pulse">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.002c0-4.97-4.03-9-9-9-4.97 0-9 4.03-9 9 0 1.59.37 3.09 1.07 4.44L3 21l4.71-1.3c1.33.73 2.84 1.13 4.29 1.13 4.97 0 9-4.03 9-9z" stroke="#fff" strokeWidth="0" fill="#25D366" />
          <path d="M16.6 11.2c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4 0-.6.1-.2.1-.6.3-.8.4-.2.1-.4.1-.6-.1-.2-.2-.9-.6-1.6-1-.6-.4-.9-.9-1-1.2-.1-.3 0-.6.1-.8.1-.3.1-.5 0-.7-.1-.2-.6-1.3-.8-1.8-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.4s1 2.8 1.2 3.1c.2.3 2.1 3.3 5 4.5 2.9 1.2 2.9.8 3.4.7.5-.1 1.6-.6 1.8-1.6.2-1 .2-1.8-.2-2.3-.4-.6-1-1-1.2-1.1z" fill="#fff" />
        </svg>
      </div>
    </motion.a>
  )
}
