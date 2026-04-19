import { motion } from 'framer-motion'
import { Code2, Database, BrainCircuit, TerminalSquare } from 'lucide-react'

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5 text-[#00f0ff]" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    title: "Backend",
    icon: <Database className="h-5 w-5 text-[#00f0ff]" />,
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"]
  },
  {
    title: "AI & ML",
    icon: <BrainCircuit className="h-5 w-5 text-[#00f0ff]" />,
    skills: ["Python", "NLP", "OpenCV", "KNN", "RAG Patterns"]
  },
  {
    title: "Tools & DevOps",
    icon: <TerminalSquare className="h-5 w-5 text-[#00f0ff]" />,
    skills: ["Git", "Vercel", "Linux", "Docker"]
  }
]

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Expertise</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#00f0ff] to-purple-600"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-6 transition-all hover:border-[#00f0ff]/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f0ff]/10">
              {group.icon}
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
            <ul className="space-y-3">
              {group.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}