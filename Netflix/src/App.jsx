import { useState } from 'react'
import './App.css'
import image from '../public/bg2.jpg'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  


  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: ' linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url(../public/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'

      }}
    >
      <div className='p-10 flex items-center justify-between md:mx-32'>
        <h1 className='text-4xl font-bold text-red-700'>NETFLIX</h1>
        <div className=''>
          <button onClick={() => setIsOpen(!open)} className=' sign-in-button text-white font-bold bg-red-700 flex p-1 rounded-lg hover:scale-110 duration-300 '>Sign In</button>

        </div>
      </div>

      <div className='flex justify-center items-center  text-white  p-28 flex-col gap-6'>
        <h1 className='text-5xl font-bold'>
          Unlimited movies, TV shows, and more</h1>
        <p className='text-2xl'>Watch anywhere. Cancel anytime.</p>
        <p className='text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div>
          <input type="email" name="" placeholder='Email' className='h-14 bg-transparent border-1  p-5'/>
          <button>Send</button>
        </div>
     </div>
     
    </div>
  )
}

export default App
