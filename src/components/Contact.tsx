import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

interface ContactProps {
  onChatClick: () => void
}

export const Contact: React.FC<ContactProps> = ({ onChatClick }) => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 to-blue-950/20 p-8 sm:p-16 text-center glow-card"
      >
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"></div>
        
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Ready to build the future?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Whether you have a wild idea, an AI feature you need implemented, or just want to chat about tech, I'm always open to new conversations. You can also{' '}
          <button 
            onClick={onChatClick} 
            className="text-accent hover:text-accent/80 hover:underline cursor-pointer transition-colors font-semibold"
          >
            chat with my AI clone
          </button>{' '}
          instantly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:c.s.shankar97@gmail.com"
            className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 font-bold text-black transition-transform hover:scale-105"
          >
            <Mail className="h-5 w-5" /> Send an Email
          </a>
          <a
            href="https://wa.me/917384428903"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/50 px-8 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}