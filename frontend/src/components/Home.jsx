import FeaturesSlider from "./FeaturesSlider";

const Home = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col text-center p-20'>
        <h1 className='text-5xl font-semibold leading-snug'>
          Connect with friends and enjoy <br /> your sweet time
        </h1>
        <p className='text-xl pt-7'>
          Whether you're chatting with teammates or supporting customers, Soga makes it easier to connect,
          collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>
        <div className='flex justify-center items-center gap-5 pt-7'>
          <button className="mt-5 bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white py-2 px-6 rounded hover:opacity-80 transition-all">
            Get Started
          </button>
          <button className="mt-5 bg-white text-[#0b1739] font-bold py-2 px-6 rounded hover:opacity-80 transition-all">
            View Plans
          </button>
        </div>
      </div>

      {/* Add Slider Section */}
      <FeaturesSlider />
    </div>
  );
};

export default Home;
