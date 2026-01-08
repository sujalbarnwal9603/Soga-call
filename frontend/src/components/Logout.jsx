// Logout.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#050816] via-[#111827] to-[#020617] text-slate-100 px-4">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-slate-900/80 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-900/60 p-10 sm:p-12 text-center max-w-md w-full"
      >
        {/* Icon */}
        <div className="mx-auto mb-5 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/40">
          <LogOut className="w-8 h-8 text-white" />
        </div>

        {/* Headings */}
        <h2 className="text-3xl font-bold mb-2">
          You’ve been logged out<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-6">
          Thank you for using <span className="text-cyan-300 font-semibold">Soga</span> — 
          we hope your meetings, chats, and calls went smoothly.
        </p>

        {/* Details */}
        <div className="text-left text-slate-300 text-sm bg-slate-950/50 border border-white/10 rounded-2xl p-4 mb-6">
          <p><span className="font-semibold text-slate-100">User:</span> Sujal Barnwal</p>
          <p><span className="font-semibold text-slate-100">Last session:</span> 45 mins</p>
          <p><span className="font-semibold text-slate-100">Total calls today:</span> 3</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="py-3 px-6 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/40"
          >
            Log back in
          </button>
          <button
            onClick={() => navigate("/")}
            className="py-3 px-6 border border-white/10 bg-white/5 rounded-xl text-slate-100 font-medium hover:border-cyan-400/70 hover:bg-white/10 transition-all"
          >
            Go to home
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs text-slate-500">
          © 2026 Soga Communications Inc. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Logout;
