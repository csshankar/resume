import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-[#00f0ff]/20 bg-gradient-to-br from-[#00f0ff]/10 to-purple-900/20 p-8 sm:p-16 text-center"
      >
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#00f0ff]/10 blur-[100px]"></div>
        
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Ready to build the future?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Whether you have a wild idea, an AI feature you need implemented, or just want to chat about tech, I'm always open to new conversations.
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
      
      {/* Floating AI Chatbot Button Placeholder */}
      <button className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-purple-600 px-6 font-bold text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]">
        <MessageCircle className="h-5 w-5" /> Ask AI Assistant
      </button>
    </section>
  )
}