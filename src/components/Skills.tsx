import { motion } from 'framer-motion'
import { Code2, Database, BrainCircuit, TerminalSquare } from 'lucide-react'

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive, and high-performance interfaces.",
    icon: <Code2 className="h-6 w-6 text-accent" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    title: "Backend Engineering",
    description: "Designing reliable server-side systems, databases, and APIs.",
    icon: <Database className="h-6 w-6 text-accent" />,
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"]
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating intelligent pipelines, computer vision, and NLP.",
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    skills: ["Python", "NLP", "OpenCV", "KNN", "RAG Patterns", "LLM APIs"]
  },
  {
    title: "Tools & DevOps",
    description: "Workflow optimization, version control, and cloud deployments.",
    icon: <TerminalSquare className="h-6 w-6 text-accent" />,
    skills: ["Git", "GitHub Actions", "Vercel", "Linux", "Docker", "AWS"]
  }
]

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Technical Expertise</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-blue-600"></div>
        <p className="mt-4 text-slate-400 max-w-2xl">
          A comprehensive suite of technologies, frameworks, and methodologies I leverage to turn complex problems into robust digital applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d11] p-6 transition-all hover:border-accent/40 hover:bg-white/5 hover:shadow-accent-sm glow-card flex flex-col justify-between"
          >
            <div>
              {/* Icon & Title */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                {group.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white tracking-tight">{group.title}</h3>
              <p className="mb-6 text-xs text-slate-400 leading-relaxed">{group.description}</p>
            </div>
            
            {/* Interactive Badges */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map(skill => (
                <span 
                  key={skill} 
                  className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition-all duration-200 hover:scale-[1.05] hover:bg-accent/10 hover:text-white hover:border-accent/30 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}