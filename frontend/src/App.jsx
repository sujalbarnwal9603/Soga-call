import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

function AppContent(){
  const location=useLocation();

  const hideNavbar=location.pathname==='/login' || location.pathname==='/register'; // return true/false value

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e0e0e] via-[#292f44] to-[#9eb1b7] text-white">
        {!hideNavbar && <Navbar />}   {/* if- else condition ✅ Navbar hidden on login */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
  )

}


function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  )
}

export default App
