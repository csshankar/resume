import './App.css'
import { Appbar } from './components/Appbar'
import { Footer } from './components/Footer'

import { Hero } from './components/Hero'
import { List, products } from './components/List'


function App() {

  return (
    <div className='bg-black'>
      <div  className='px-4 mx-auto sm:max-w-4xl flex flex-col min-h-screen'>
        <Appbar/>
        <Hero/>
      
      <div className="flex flex-col gap-4 mt-16">
        <h2 className='text-white text-pretty font-semibold '>Recent Projects</h2>
        {products.map((product, index) => (
          <List
            key={index}
            description={product.description}
            target={product.target}
            project={product.project}
            thumb={product.thumb}
            tech1={product.tech1}
            tech2={product.tech2}
            tech3={product.tech3}
            tech4={product.tech4}
            tech5={product.tech5}
          />
        ))}
      </div>
     
      <Footer />
      </div>
     
    </div>
  )
}

export default App
