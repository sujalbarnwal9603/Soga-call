import FeaturesSlider from "./FeaturesSlider";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Collaboration");

  const tabs = [
    "Collaboration",
    "Customer support",
    "Marketing",
    "Sales",
    "Employee engagement",
  ];

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <div className="flex justify-center items-center flex-col text-center p-20">
        <h1 className="text-5xl font-semibold leading-snug">
          Connect with friends and enjoy <br /> your sweet time
        </h1>
        <p className="text-xl pt-7">
          Whether you're chatting with teammates or supporting customers, Soga makes it easier to connect,
          collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>
        <div className="flex justify-center items-center gap-5 pt-7">
          <button className="mt-5 bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white py-2 px-6 rounded hover:opacity-80 transition-all">
            Get Started
          </button>
          <button className="mt-5 bg-white text-[#0b1739] font-bold py-2 px-6 rounded hover:opacity-80 transition-all">
            View Plans
          </button>
        </div>
      </div>

      {/* ===== SLIDER SECTION ===== */}
      <FeaturesSlider />

      {/* ===== NEW ZOOM-LIKE COLLABORATION SECTION ===== */}
      <section className="w-full flex flex-col items-center justify-center bg-white text-[#0e0e0e] px-6 py-20">
        {/* Headings */}
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-snug mb-6">
            One platform. <br />
            <span className="text-[#1a2a6c]">Endless ways to work together.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From client pitches to global all-hands, patient consults to classrooms,
            Soga delivers the flexibility and reliability you need. And with built-in AI,
            every interaction is faster, easier, and more productive.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#1a2a6c] text-white border-[#1a2a6c]"
                  : "bg-transparent border-gray-300 text-gray-700 hover:border-[#1a2a6c] hover:text-[#1a2a6c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-14 flex flex-col md:flex-row items-center gap-10 max-w-6xl">
          {/* Text */}
          <div className="flex-1 space-y-4 text-left">
            <p className="text-lg text-gray-700">
              AI-first UCaaS for team collaboration lets you work together without friction
              using Meetings, Chat, Docs, and more, all built into Soga Workspace.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Unify how teams connect:</strong> Meetings, Phone, Chat, and more are all in one platform.
              </li>
              <li>
                <strong>Consolidate your tools:</strong> Replace scattered apps with one all-in-one solution.
              </li>
              <li>
                <strong>Support hybrid and remote work:</strong> Reliable video calls, chat, and shared docs.
              </li>
              <li>
                <strong>Keep workflows moving:</strong> From brainstorms to check-ins, stay in sync easily.
              </li>
              <li>
                <strong>Do more with AI:</strong> Built-in AI summarizes meetings and drafts next steps.
              </li>
            </ul>

            <button className="mt-6 bg-[#0b1739] hover:opacity-80 text-white py-3 px-6 rounded-lg font-semibold transition-all">
              Get started
            </button>
          </div>

          {/* Image / Video Preview */}
          <div className="flex-1">
            <img
              src="https://source.unsplash.com/featured/?video-conference,team-meeting"
              alt="Soga collaboration"
              className="rounded-2xl shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
