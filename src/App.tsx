import './App.css'
import { Appbar } from './components/Appbar'
import { Footer } from './components/Footer'

import { Hero } from './components/Hero'
import { List } from './components/List'

function App() {

  return (
    <div className='bg-black'>
      <div  className='px-4 mx-auto sm:max-w-4xl flex flex-col min-h-screen'>
        <Appbar/>
        <Hero/>
      
      <div className="flex flex-col gap-4 mt-16">
        <h2 className='text-white text-pretty font-semibold '>Recent Projects</h2>
        <List description="Blogging platform, featuring user authentication (signup/login) & user-friendly interface." target="https://blog.crackedxdev.store/" project="Medium-clone" thumb="Blog.webp" tech1="React" tech2="typescript" tech3="tailwindcss" tech4="Prisma" tech5="Nodejs"/>
        <List description="YT-clone is a video-sharing platform where users can watch, like, comment, and share videos" target="https://video.crackedxdev.store/" project="Youtube Clone frontend" thumb="ytclone.webp" tech1="Nextjs" tech2="typescript" tech3="tailwindcss" tech4="Nodejs" tech5="Vercel"/>
        <List description="A content based recommendation system using
 NLP Models (Bag of words and TF-IDF)" target="https://github.com/csshankar/Ai_Mafia/blob/main/recommendation.ipynb" project="Apparel Product Recommendation Engine" thumb="recommendation.webp" tech1="Python" tech2="Bow" tech3="TF-IDF" tech4="Word2Vec" tech5="NLP"/>
        <List description="Applied KNN classification algorithm in face recognition using opencv and HaarCascades" target="https://github.com/csshankar/Ai_Mafia/blob/main/face_recognition.py" project="Face Recognition System" thumb="face.webp" tech1="Python" tech2="opencv" tech3="HaarCascades" tech4="KNN" tech5="CNN"/>
        <List description="A simple Todo app that allows users to add and view todos." target="https://github.com/csshankar/todos" project="Todo-app" thumb="todos.webp" tech1="React" tech2="typescript" tech3="tailwindcss" tech4="Express" tech5="MongoDB"/>

      </div>
     
      <Footer />
      </div>
     
    </div>
  )
}

export default App
