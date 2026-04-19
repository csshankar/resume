import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-12"
      >
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/20 blur-[80px]"></div>
        
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="h-6 w-6 text-[#00f0ff]" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About Me</h2>
        </div>
        
        <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
          I'm a full-stack developer obsessed with the intersection of excellent product design and cutting-edge artificial intelligence. 
          I build sleek, performant web applications using React, Next.js, and Node.js.
          <br /><br />
          <strong className="text-[#00f0ff]">Fun fact:</strong> I turned my love for AI into production apps that process real-world data and solve genuine problems.
        </p>
      </motion.div>
    </section>
  )
}