import { useState } from 'react'
import { Appbar } from './components/Appbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AIAssistant } from './components/AIAssistant'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-slate-200 selection:bg-accent/30 selection:text-accent">
      {/* Subtle accent and blue gradient background for AI vibe */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Appbar onChatClick={() => setIsChatOpen(true)} />
        <main className="flex-1 space-y-32 pb-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact onChatClick={() => setIsChatOpen(true)} />
        </main>
        <Footer />
      </div>

      <AIAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpen={() => setIsChatOpen(true)} />
    </div>
  )
}

export default App
