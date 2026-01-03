import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0e0e0e] via-[#292f44] to-[#9eb1b7] text-white">
        <Navbar />
        <Home/>
      </div>
    </>
  )
}

export default App
