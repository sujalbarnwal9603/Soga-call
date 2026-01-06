// Home.jsx
import { useState } from "react";
import FeaturesSlider from "./FeaturesSlider";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Collaboration");

  const tabs = [
    "Collaboration",
    "Customer support",
    "Marketing",
    "Sales",
    "Employee engagement",
  ];

  const tabSubtitles = {
    Collaboration: "Bring teams together across meetings, chat, and docs.",
    "Customer support": "Delight customers with fast, AI-assisted support.",
    Marketing: "Run campaigns, reviews, and standups from one place.",
    Sales: "Keep deals moving with instant updates and follow-ups.",
    "Employee engagement": "Build a connected, informed, and happy team.",
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="inline-flex items-center text-xs font-medium tracking-[0.35em] uppercase text-cyan-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
            ALL-IN-ONE COMMUNICATION
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Connect with people
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              and enjoy your sweet time.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
            Whether you&apos;re chatting with teammates or supporting customers, Soga makes it
            easier to connect, collaborate, and reach goals — with built-in AI doing the
            heavy lifting.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white py-3 px-7 rounded-xl font-semibold shadow-lg shadow-indigo-500/40 hover:opacity-90 transition-all">
              Get started for free
            </button>
            <button className="py-3 px-7 rounded-xl border border-white/15 bg-white/5 text-slate-100 font-medium hover:border-cyan-400/70 hover:bg-white/10 transition-all">
              View plans
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 pt-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.9% uptime</span>
            </div>
            <span>•</span>
            <span>Trusted by remote teams worldwide</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex-1 w-full">
          <div className="relative rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl shadow-indigo-900/60 p-4 sm:p-5">
            <img
              src="https://source.unsplash.com/featured/900x600?remote-team,video-call"
              alt="Soga workspace"
              className="rounded-2xl w-full h-72 sm:h-80 object-cover"
            />
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900/95 border border-cyan-400/40 rounded-2xl px-4 py-3 text-xs sm:text-sm flex flex-col gap-1 shadow-lg shadow-cyan-500/30">
              <span className="text-slate-200 font-semibold">
                AI summary ready
              </span>
              <span className="text-slate-400">
                3 key decisions • 5 action items
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SLIDER */}
      <FeaturesSlider />

      {/* SOLUTIONS SECTION */}
      <section
        id="solutions"
        className="w-full flex flex-col items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-b from-transparent via-slate-950/40 to-transparent"
      >
        {/* Headings */}
        <div className="text-center max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            USE CASES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-3 mb-4">
            One platform.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Endless ways to work together.
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            From client pitches to global all-hands, patient consults to classrooms, Soga
            delivers the flexibility and reliability you need — with AI superpowers built in.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-white text-slate-900 border-transparent shadow-md shadow-cyan-400/30"
                  : "bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10 max-w-6xl">
          {/* Text */}
          <div className="flex-1 space-y-4 text-left bg-slate-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-slate-950/60">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              {activeTab}
            </p>
            <h3 className="text-2xl font-semibold">
              AI-first UCaaS to keep every conversation in one place.
            </h3>
            <p className="text-base text-slate-300">
              {tabSubtitles[activeTab]}
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm sm:text-base pt-2">
              <li>
                <strong className="text-slate-100">Unify how teams connect:</strong> Meetings,
                Phone, Chat, and more all in one secure platform.
              </li>
              <li>
                <strong className="text-slate-100">Consolidate your tools:</strong> Replace
                scattered apps with a single AI-powered workspace.
              </li>
              <li>
                <strong className="text-slate-100">Support hybrid work:</strong> Reliable video,
                chat, and shared docs — wherever people are.
              </li>
              <li>
                <strong className="text-slate-100">Keep workflows moving:</strong> From
                brainstorms to check-ins, stay perfectly in sync.
              </li>
              <li>
                <strong className="text-slate-100">Do more with AI:</strong> Summaries, next
                steps, and suggested replies out of the box.
              </li>
            </ul>

            <button className="mt-6 bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90 text-white py-3 px-6 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/40">
              Talk to our team
            </button>
          </div>

          {/* Image / Video Preview */}
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/60 overflow-hidden">
              <img
                src="https://source.unsplash.com/featured/900x600?video-conference,team-meeting"
                alt="Soga collaboration"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple footer / contact anchor */}
      <footer
        id="contact"
        className="border-t border-white/10 mt-10 py-8 text-center text-xs text-slate-500"
      >
        Built with Soga • Contact: hello@soga.app
      </footer>
    </div>
  );
};

export default Home;
