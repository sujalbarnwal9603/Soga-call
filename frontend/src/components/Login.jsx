import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // You can later add real backend login logic here
    navigate("/"); // redirect to home after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0b1739] to-[#1a2a6c] text-white px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome Back 👋</h2>
        <p className="text-gray-200 mb-6">
          Log in to your <span className="text-blue-400">Soga</span> account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="mt-3 bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white py-3 rounded-lg font-semibold hover:opacity-80 transition-all"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
