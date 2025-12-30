import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0e0e0e] via-[#292f44] to-[#9eb1b7] text-white">
        <Navbar />
        <div className='flex justify-center items-center flex-col text-center p-10'>
          <h1 className='text-5xl font-semibold text-center leading-snug'>Connect with friend's and enjoy <br/> your sweet time</h1>
          <p className='text-xl pt-7'>Whether you're chatting with teammates or supporting customers, Soga makes it easier to connect, <br /> collaborate, and reach goals — all with built-in AI doing the heavy lifting.</p>
          <div className='flex justify-center items-center gap-5 pt-7'>
            <button className="mt-5 bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white py-2 px-6 rounded hover:opacity-80 transition-all">Get Started</button>
             <button className="mt-5 bg-gradient-to-r bg-white to-[#1a2a6c] text-[#0b1739] font-bold py-2 px-6 rounded hover:opacity-80 transition-all">View Plans</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
