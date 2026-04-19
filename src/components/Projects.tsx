import { motion } from 'framer-motion'
import { ExternalLink, Bot } from 'lucide-react'

const projects = [
  {
    title: "Payment-App",
    description: "Payments app with features to add money and perform peer-to-peer (P2P) payments through a custom wallet system.",
    target: "https://payments.csshankar.in",
    thumb: "/payments.webp",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Postgres"],
    isAI: false
  },
  {
    title: "Apparel Recommendation",
    description: "A content-based recommendation system using NLP Models (Bag of words and TF-IDF) to suggest apparel accurately.",
    target: "https://github.com/csshankar/Ai_Mafia/blob/main/recommendation.ipynb",
    thumb: "/recommendation.webp",
    tech: ["Python", "BoW", "TF-IDF", "Word2Vec", "NLP"],
    isAI: true
  },
  {
    title: "Blog-Me",
    description: "Blogging platform featuring user authentication, seamless rich-text writing, and a beautiful user-friendly interface.",
    target: "https://blog.csshankar.in/",
    thumb: "/Blog.webp",
    tech: ["React", "TypeScript", "Prisma", "Node.js"],
    isAI: false
  },
  {
    title: "Face Recognition System",
    description: "Applied KNN classification algorithm in face recognition using OpenCV and HaarCascades.",
    target: "https://github.com/csshankar/Ai_Mafia/blob/main/face_recognition.py",
    thumb: "/face.webp",
    tech: ["Python", "OpenCV", "KNN", "CNN"],
    isAI: true
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#00f0ff] to-purple-600"></div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]"
          >
            <div className="relative h-64 w-full overflow-hidden sm:h-72">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>
              <img src={project.thumb} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {project.isAI && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-[#00f0ff]/30 bg-[#0a0a0a]/80 px-3 py-1 text-xs font-bold text-[#00f0ff] backdrop-blur-md">
                  <Bot className="h-3.5 w-3.5" /> AI Powered
                </div>
              )}
            </div>
            
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-slate-400">{project.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href={project.target} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]">
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
                <a href={project.target} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}