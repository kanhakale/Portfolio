import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './Components/Toggle.jsx'
import Background from './Components/Background.jsx'
import TechCard from './Components/TechCard.jsx'
import DragCards from './Components/DragCards.jsx'
import TechData from './Data/TechData.json'
import QRs from './Data/Qr.json'
import CreativeData from './Data/CreativeData.json'
import { motion, AnimatePresence } from 'framer-motion';
import Testimonials from './Components/Testimonials.jsx'
import DottedButton from './Components/DottedButton.jsx'
import TimeGreeting from './Components/TimeGreeting.jsx'
import QR from './Components/QR.jsx'

const testimonialItems = [
  {
    id: 1,
    content: "Kanha is a great teammate! Super reliable and creative.",
    name: "Aditi Verma",
    designation: "UI Designer, IIIT-Delhi"
  },
  {
    id: 2,
    content: "Really enjoyed collaborating with Kanha on our portfolio projects.",
    name: "Rahul Singh",
    designation: "Frontend Dev"
  },
  {
    id: 3,
    content: "Fantastic attention to detail and super quick with implementation.",
    name: "Neha Sharma",
    designation: "Mentor, Design Club"
  }
];

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [techList, setTechList] = useState([])
  const [creativeList, setCreativeList] = useState([])

  const [count, setCount] = useState(0)
  // console.log(TechData);

  return (
    <>
      <section className="relative w-full h-[80vh] sm:min-h-screen bg-black overflow-hidden">
  <Background />

  {/* Welcome image */}
  <div className='flex justify-center relative z-10 mr-0 sm:mr-[70px]'>
        <img src='./welcome.png' className='h-[250px] sm:h-[500px] max-w-full object-contain' />
    </div> 

  {/* Hero image */}
  <img
    src="./Hero.png"
    alt="Hero"
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-[120px] sm:h-[350px] max-w-full object-contain"
  />
</section>


      <section className='bg-white h-fit flex flex-wrap w-screen'>

        <img src ='./me.jpg' className='h-[600px] mr-10 grayscale hover:grayscale-0 transition duration-300' />

        <div className="text-black font-semibold  flex flex-col max-w-xl w-full mt-5">
        <TimeGreeting/>
        <h1 className="text-black font-bold text-3xl ">About Me</h1>

        <h3 className='mt-4'>Hi there!! I'm Kanha, a Delhi-born Maharashtrian guy. I'm currently a second-year B.Tech Computer Science and Design student at IIIT-Delhi, expected to graduate in 2027!</h3>

          <h3 className="mt-4">
            I primarily specialize and am interested in UI/UX, Web Development, Graphic and Game Design, and I'm fairly experienced with tools like Figma, React, TailwindCSS, Adobe Creative Cloud, Unity, etc.
          </h3>

        </div>

        
    <div className="min-h-fit flex flex-col justify-center items-center text-black mt-5">
  {/* Testimonials stays vertically centered */}
  <h1 className='text-black text-3xl font-bold mb-8'>Testimonials</h1>
  <Testimonials items={testimonialItems} />

  {/* Text appears right below */}
  <h2 className='text-black mt-2'>Want yours on here?</h2>
  <a href = 'https://docs.google.com/forms/d/e/1FAIpQLScA8XKEWNAjj8acZnCh4IVrSctK5UwRsW46E7UuYOovM4OF2g/viewform?usp=sharing'>
  <DottedButton/>  
  </a>
</div>
      

      </section>
      <section className={`h-fit w-screen flex flex-col items-center justify-start pt-10 transition-all duration-500 ease-in-out ${isChecked ?  'bg-pink-700':'bg-blue-500'}`}>

        <div>
          <Toggle isChecked = {isChecked} setIsChecked = {setIsChecked}/>
        </div>
        <p className='font-light '>Toggle to switch between fields</p>
          
        <div >
        {isChecked? 
          <div className='flex flex-wrap justify-center'>
          <img src = './avatar/artist.png' className='h-[100px]'/>
          <h2 className='text-center mt-8 text-black font-bold text-5xl'>
            Here's some of my creative works
        </h2>
        </div>:
          
          <div className='flex flex-wrap justify-center'>
            <img src = './avatar/worker.png' className='h-[100px]'/>
            <h2 className='text-center mt-8 text-black font-bold text-5xl'>
            A couple of my technical projects
          </h2>
          </div>
          
          }

        <AnimatePresence mode="wait">
  <motion.div
    key={isChecked ? 'creative' : 'tech'}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="flex flex-wrap gap-4 justify-center"
  >

    {isChecked

      ? CreativeData.map((create) => <TechCard key={create.id} Data = {create} />)
      : TechData.map((tech) => <TechCard key={tech.id} Data = {tech} />)}
  </motion.div>
</AnimatePresence>

        
        </div>

      </section>

      <section className='bg-black'>
        <DragCards/>

        <div className='flex flex-wrap justify-center'>
        <img src = "./avatar/wink.png" className='h-[100px]'/>
        <h2 className='font-bold'>Keep up with what i'm upto!</h2>
        </div>
        <p className='text-center justify-center font-thin'>scan or click the QRs</p>
        <div className='flex flex-wrap justify-center'>

        {QRs.map((qr) =><a
      key={qr.id}
      href={qr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="m-2"
    >
      <QR Data={qr} />
    </a>)}
        </div>

      </section>
    </>
  )
}

export default App
