<<<<<<< HEAD
import React, { useState } from "react";
import { FaLightbulb, FaTools, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
=======
import React, { useState } from 'react';
>>>>>>> 6f07bd7c4a22e45c858de1e99c8987a6800b5a3d

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80"
  ];

  const [bgIndex, setBgIndex] = useState(0);
<<<<<<< HEAD
  const [typeKey, setTypeKey] = useState(0); // this will force re-render of Typewriter

  const changeBackground = () => {
    setBgIndex((prev) => {
      const next = (prev + 1) % images.length;
      setTypeKey((prevKey) => prevKey + 1); // trigger typewriter reset
      return next;
    });
  };

  const buttons = [
    { icon: <FaLightbulb size={18} />, label: "Our Vision" },
    { icon: <FaTools size={18} />, label: "Our Services" },
    { icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden py-10 font-rajdhani">

      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${images[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-indigo-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-16 text-white min-h-[calc(100vh-5rem)]">
        <div className="max-w-4xl w-full">
          <p className="uppercase text-base tracking-wider text-gray-300">Welcome to TopTech</p>

       <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight text-white">
      <Typewriter
        words={['TOP IT SOLUTION AGENCY IN THE WORLD']}
        loop={0}                
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={0}          
        delaySpeed={1000}
      />
    </h1>

          <p className="text-gray-200 mt-6 text-lg">
            And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role.
            Similarly, In Making Cultivation Business.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
              How IT Works
            </a>
            <a href="#" className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded transition duration-300">
              IT Services
            </a>
          </div>
        </div>

        {/* Change BG Button */}
        <div className="hidden md:block relative z-10">
=======

  const changeBackground = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      className="relative flex items-center py-4 justify-between px-6 md:px-16 overflow-hidden text-white min-h-[calc(100vh-5rem)] z-10 font-rajdhani"
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-indigo-900/80 z-0" />

      {/* Left Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <p className="uppercase text-sm tracking-wider text-gray-300">Welcome to TopTech</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight text-white">
          TOP IT SOLUTION AGENCY <br />
          <span className="text-white">IN THE WORLD</span>
        </h1>

        <p className="text-gray-200 mt-6 text-lg">
          And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role.
          Similarly, In Making Cultivation Business.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-all duration-300 hover:shadow-lg">
            How IT Works
          </a>
          <a href="#" className="border border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded transition-all duration-300">
            IT Services
          </a>
        </div>
      </div>

      {/* Right Image & Play Button */}
      <div className="hidden md:block relative z-10">
        <div className="relative">
>>>>>>> 6f07bd7c4a22e45c858de1e99c8987a6800b5a3d
          <button
            onClick={changeBackground}
            className="absolute top-20 right-5 border-2 border-white text-white font-bold rounded-full w-24 h-24 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg"
          >
            <span className="text-xl">▶</span>
          </button>
        </div>
      </div>
<<<<<<< HEAD

      {/* Right Side Buttons */}
      <div className="hidden md:flex flex-col items-end gap-4 absolute top-1/3 right-6 z-10">
        {buttons.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-end cursor-pointer transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white text-blue-900 rounded-full flex items-center justify-start pl-4 shadow-md group-hover:w-44 group-hover:rounded-full overflow-hidden transition-all duration-300">
              <span className="text-xl">{item.icon}</span>
              <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
=======
>>>>>>> 6f07bd7c4a22e45c858de1e99c8987a6800b5a3d
    </section>
  );
};

export default Hero;
