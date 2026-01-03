import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Meetings",
    img: "https://source.unsplash.com/featured/?video-call,meeting",
    description: "Connect face-to-face and collaborate seamlessly with your team.",
  },
  {
    title: "AI Companion",
    img: "https://source.unsplash.com/featured/?artificial-intelligence,chat",
    description: "Summarize, plan, and automate with built-in smart assistance.",
  },
  {
    title: "Team Chat",
    img: "https://source.unsplash.com/featured/?chat,teamwork",
    description: "Stay organized with chat channels and instant messaging.",
  },
  {
    title: "Phone",
    img: "https://source.unsplash.com/featured/?phone,communication",
    description: "Call, connect, and stay in touch effortlessly.",
  },
];

const FeaturesSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 text-white">
      <h2 className="text-4xl font-semibold mb-10">Our Key Features</h2>

      <div className="relative flex items-center justify-center w-full max-w-6xl overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slides */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 w-[85%] md:w-[60%] text-center"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="rounded-2xl mb-6 w-full h-64 object-cover"
          />
          <h3 className="text-2xl font-bold mb-3">{slides[current].title}</h3>
          <p className="text-gray-200 text-lg">{slides[current].description}</p>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-8">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-blue-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSlider;
