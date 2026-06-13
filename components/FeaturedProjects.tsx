"use client"
import { motion } from 'framer-motion'

const projects = [
  { title: 'CreatorAI Universal', href: '#', tech: ['Next.js','AI'] },
  { title: 'AuraCV', href: '#', tech: ['React','Design'] },
  { title: 'FutureAI', href: '#', tech: ['AI','Cloud'] },
  { title: 'OraCV', href: '#', tech: ['UI','Web'] },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.href}
              key={p.title}
              whileHover={{ y: -6 }}
              className="glass p-4 rounded-xl block"
            >
              <div className="h-40 bg-slate-100 rounded mb-3" />
              <div className="font-medium">{p.title}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map(t => (<span key={t} className="px-2 py-1 text-xs bg-white/40 rounded">{t}</span>))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
