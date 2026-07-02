import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Sparkles, SendHorizontal, X } from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: Date
}

const KNOWLEDGE_BASE = {
  about: "Kumar Shankar is a Full Stack & AI Engineer dedicated to building production-ready applications that scale and deliver magical user experiences. He turned his passion for AI into building real-world apps.",
  skills: "Kumar's technical expertise spans across:\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Vite\n• **Backend**: Node.js, Express, PostgreSQL, Prisma, REST APIs\n• **AI & ML**: Python, NLP (BoW, TF-IDF, Word2Vec), OpenCV, KNN, CNN, RAG Patterns\n• **Tools & DevOps**: Git, Vercel, Linux, Docker",
  projects: "Some of Kumar's featured projects include:\n\n1. **Payment-App**: A full-stack P2P wallet & money transfer application built with Next.js, Node.js, and Postgres.\n2. **Apparel Recommendation**: An NLP-based content recommendation engine using Bag-of-Words and TF-IDF.\n3. **Blog-Me**: A secure blogging platform featuring rich-text editing, Prisma, and React.\n4. **Face Recognition System**: A computer vision system built with OpenCV, KNN, and CNN architectures.",
  experience: "Kumar currently works as a **Full Stack AI Developer**, designing scalable application architectures and integrating smart AI pipelines using React, Next.js, Node.js, and modern machine learning concepts.",
  contact: "You can easily connect with Kumar:\n\n• 📧 **Email**: c.s.shankar97@gmail.com\n• 💬 **WhatsApp**: +91 7384428903\n• 📅 **Book a Call**: cal.com/kumar-shankar\n• 💻 **GitHub**: github.com/csshankar"
}

const QUICK_PROMPTS = [
  { text: "Tell me about Kumar", value: "about" },
  { text: "What are his tech skills?", value: "skills" },
  { text: "Show featured projects", value: "projects" },
  { text: "How can I contact him?", value: "contact" }
]

export const AIAssistant: React.FC<{ isOpen: boolean; onClose: () => void; onOpen: () => void }> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi there! I'm Kumar's AI assistant. Ask me anything about his work, projects, technical skills, or how to contact him!",
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking and replying
    setTimeout(() => {
      let replyText = ""
      const query = text.toLowerCase()

      if (query.includes('about') || query.includes('who is') || query.includes('kumar') || query.includes('bio')) {
        replyText = KNOWLEDGE_BASE.about
      } else if (query.includes('skill') || query.includes('tech') || query.includes('language') || query.includes('stack') || query.includes('use')) {
        replyText = KNOWLEDGE_BASE.skills
      } else if (query.includes('project') || query.includes('work') || query.includes('build') || query.includes('portfolio')) {
        replyText = KNOWLEDGE_BASE.projects
      } else if (query.includes('experience') || query.includes('job') || query.includes('work history') || query.includes('career')) {
        replyText = KNOWLEDGE_BASE.experience
      } else if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('meet') || query.includes('whatsapp') || query.includes('hire')) {
        replyText = KNOWLEDGE_BASE.contact
      } else {
        replyText = `I'm a specialized assistant for Kumar Shankar. I can tell you about his projects, skills, experience, and contact details. Try asking: "What are his skills?" or "Tell me about his projects".`
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={onOpen}
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-blue-600 px-6 font-bold text-black shadow-accent hover:shadow-accent-hover transition-all duration-300 hover:scale-105"
      >
        <Bot className="h-5 w-5" />
        <span className="hidden sm:inline">Ask AI Assistant</span>
      </button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed bottom-24 right-6 z-50 flex h-[580px] w-[calc(100vw-32px)] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c]/95 shadow-accent-lg backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-accent/10 to-blue-950/20 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-blue-600 text-black">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0c] bg-green-500"></span>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white flex items-center gap-1">
                    Kumar's AI Assistant <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                  </h3>
                  <span className="text-[11px] text-slate-400">Always online to help</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-black font-medium rounded-tr-none'
                        : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none whitespace-pre-wrap'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none border border-white/5 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent" style={{ animationDelay: '0ms' }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent" style={{ animationDelay: '150ms' }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Suggested Questions</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt.value}
                      onClick={() => handleSend(prompt.text)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-accent hover:bg-accent/5 hover:text-white transition-all duration-200"
                    >
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(inputText)
              }}
              className="border-t border-white/5 p-4 flex gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-black hover:scale-105 transition-transform"
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
