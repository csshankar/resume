import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative mx-auto mt-24 flex max-w-7xl flex-col items-center px-6 text-center md:mt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        Currently building full-stack AI tools
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl font-sans text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
      >
        Kumar Shankar — Building the Future with <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">React, Next.js & AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl"
      >
        Full Stack • AI Engineer • Passionate about building production-ready apps that scale and deliver magical user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <a
          href="#projects"
          className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-accent px-8 text-base font-bold text-black shadow-accent transition-all hover:scale-105 hover:shadow-accent-lg"
        >
          See My AI Projects <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://cal.com/kumar-shankar"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10"
        >
          <Calendar className="h-5 w-5" /> Book a 15-min Call
        </a>
      </motion.div>
    </section>
  )
}