import { motion } from 'framer-motion'

export const products = [
  {
    description: "Payments app with features to add money and perform peer-to-peer (P2P) payments through wallet",
    target: "https://payments.csshankar.in",
    project: "Payment-App",
    thumb: "payments.webp",
    tech1: "Nextjs",
    tech2: "TypeScript",
    tech3: "TailwindCSS",
    tech4: "Nodejs",
    tech5: "Postgres"
  },
  {
    description: "Blogging platform, featuring user authentication (signup/login) & user-friendly interface.",
    target: "https://blog.csshankar.in/",
    project: "Blog-Me",
    thumb: "Blog.webp",
    tech1: "React",
    tech2: "TypeScript",
    tech3: "TailwindCSS",
    tech4: "Prisma",
    tech5: "Nodejs"
  },
  {
    description: "YT-clone is a video-sharing platform where users can watch, like, comment, and share videos",
    target: "https://video.csshankar.in/",
    project: "Youtube Clone frontend",
    thumb: "ytclone.webp",
    tech1: "Nextjs",
    tech2: "TypeScript",
    tech3: "TailwindCSS",
    tech4: "Nodejs",
    tech5: "Vercel"
  },
  {
    description: "A content based recommendation system using NLP Models (Bag of words and TF-IDF)",
    target: "https://github.com/csshankar/Ai_Mafia/blob/main/recommendation.ipynb",
    project: "Apparel Recommendation",
    thumb: "recommendation.webp",
    tech1: "Python",
    tech2: "BoW",
    tech3: "TF-IDF",
    tech4: "Word2Vec",
    tech5: "NLP"
  },
  {
    description: "Applied KNN classification algorithm in face recognition using opencv and HaarCascades",
    target: "https://github.com/csshankar/Ai_Mafia/blob/main/face_recognition.py",
    project: "Face Recognition System",
    thumb: "face.webp",
    tech1: "Python",
    tech2: "OpenCV",
    tech3: "HaarCascades",
    tech4: "KNN",
    tech5: "CNN"
  }
]

export interface Product {
  description: string;
  target: string;
  project: string;
  thumb: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  tech5: string;
  index: number;
}

export const List: React.FC<Product> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: props.index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-600/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm transition-colors duration-500 hover:bg-[#111] md:flex-row md:items-center">
        
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl md:h-36 md:w-64">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          <img 
            src={props.thumb} 
            alt={props.project} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <a href={props.target} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white transition-colors hover:text-sky-300">
              <h3 className="font-display text-2xl font-bold tracking-tight">{props.project}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </a>
          </div>
          
          <p className="mt-3 text-slate-400 leading-relaxed text-sm md:text-base">
            {props.description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {[props.tech1, props.tech2, props.tech3, props.tech4, props.tech5].map((tech, i) => (
              <span key={i} className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default List;