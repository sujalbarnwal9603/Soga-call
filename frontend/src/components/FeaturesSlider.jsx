// FeaturesSlider.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Meetings",
    img: "https://source.unsplash.com/featured/800x500?video-call,meeting",
    description: "Connect face-to-face and collaborate seamlessly with your team.",
  },
  {
    title: "AI Companion",
    img: "https://source.unsplash.com/featured/800x500?artificial-intelligence,chat",
    description: "Summarize, plan, and automate with built-in smart assistance.",
  },
  {
    title: "Team Chat",
    img: "https://source.unsplash.com/featured/800x500?chat,teamwork",
    description: "Stay organized with channels, threads, and instant messaging.",
  },
  {
    title: "Phone",
    img: "https://source.unsplash.com/featured/800x500?phone,communication",
    description: "Call, connect, and stay in touch from anywhere.",
  },
];

const FeaturesSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center w-full py-20 px-4 sm:px-6"
    >
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
          FEATURES
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-3">
          Powerful tools in one workspace
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 mx-auto">
          Meetings, chat, calls, and AI — all built to keep your team aligned and moving
          fast.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-10 bg-slate-900/80 border border-white/10 hover:border-cyan-400/70 text-slate-100 rounded-full p-2 sm:p-3 transition-all hover:-translate-x-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slides */}
        <div className="w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-indigo-900/40 p-6 sm:p-8 w-[90%] md:w-[70%] text-center"
            >
              <div className="relative w-full mb-6 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-60 sm:h-72 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{slides[current].title}</h3>
              <p className="text-slate-300 text-base max-w-md">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 z-10 bg-slate-900/80 border border-white/10 hover:border-cyan-400/70 text-slate-100 rounded-full p-2 sm:p-3 transition-all hover:translate-x-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              current === index
                ? "bg-cyan-400 scale-125 shadow-[0_0_0_4px] shadow-cyan-400/20"
                : "bg-slate-500/50 hover:bg-slate-300/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSlider;
