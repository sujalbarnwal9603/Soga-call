// Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up:", name, email, password);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#050816] via-[#111827] to-[#020617] text-slate-100 px-4">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-slate-950/70 p-8 sm:p-10">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Create your Soga account
        </h2>
        <p className="text-slate-400 mb-8 text-center text-sm">
          Start collaborating with AI-powered meetings, chat, and calls in minutes.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-left text-sm">
            <label className="block mb-1 text-slate-300">Full name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-slate-950/60 text-slate-100 placeholder-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            />
          </div>

          <div className="text-left text-sm">
            <label className="block mb-1 text-slate-300">Email address</label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-slate-950/60 text-slate-100 placeholder-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            />
          </div>

          <div className="text-left text-sm">
            <label className="block mb-1 text-slate-300">Create password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-slate-950/60 text-slate-100 placeholder-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/40"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-slate-400 mt-6 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-cyan-300 hover:text-cyan-200 hover:underline"
          >
            Log in
          </button>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full text-xs text-slate-500 hover:text-slate-200 transition"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
};

export default Signup;
