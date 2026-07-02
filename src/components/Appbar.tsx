import { motion } from 'framer-motion'
import { Download, MessageSquare } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'

interface AppbarProps {
  onChatClick: () => void
}

export const Appbar: React.FC<AppbarProps> = ({ onChatClick }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050507]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="group flex items-center gap-3 transition-all" href="/">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-blue-600 font-bold text-black shadow-accent-sm">
            KS
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">Kumar Shankar</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/csshankar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          </a>
          
          <ThemeSwitcher />

          <a href="Resume_kumar.pdf" download className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Download className="w-4 h-4" /> Resume
          </a>
          <button 
            onClick={onChatClick}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-black shadow-accent-sm transition-all hover:scale-105 hover:shadow-accent"
          >
            <MessageSquare className="w-4 h-4" /> AI Chat
          </button>
        </div>
      </div>
    </motion.header>
  )
}