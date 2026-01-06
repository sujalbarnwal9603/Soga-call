import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  // ✅ Apply background only if navbar is visible (home pages)
  const baseBg = hideNavbar
    ? "bg-[#0b1739]" // dark base for auth pages
    : "bg-gradient-to-b from-[#0e0e0e] via-[#292f44] to-[#9eb1b7]";

  return (
    <div className={`min-h-screen text-white ${baseBg}`}>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
