import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#00f0ff] to-purple-600"></div>
      </div>

      <div className="relative border-l border-white/10 pl-6 sm:pl-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          <div className="absolute -left-[35px] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-[0_0_15px_rgba(0,240,255,0.2)] sm:-left-[43px]">
            <Briefcase className="h-5 w-5 text-[#00f0ff]" />
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 hover:border-[#00f0ff]/30 transition-colors">
            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold text-white">Full Stack AI Developer</h3>
              <span className="text-sm font-medium text-[#00f0ff]">Present</span>
            </div>
            <p className="text-slate-400">
              Building next-generation applications focusing on scalable architectures and integrating intelligent features using React, Next.js, Node.js, and modern AI pipelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}