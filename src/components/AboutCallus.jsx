import React from 'react';

const AboutCallus = () => {
  return (
    <div className="bg-[#010c45] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 relative font-rajdhani">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        {/* Call Icon */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl ring-2 ring-gray-500">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-4.553a1.5 1.5 0 012.121 2.121L17.12 12.12a1.5 1.5 0 01-2.121 0L12 9.12m0 0L7.553 13.553a1.5 1.5 0 01-2.121-2.121L10.88 7.88a1.5 1.5 0 012.121 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg text-blue-400 font-medium">Call Us Anytime</h3>
        </div>

        {/* Phone Number */}
        <h1 className="text-4xl md:text-5xl font-bold">
          +980 123 <span className="text-blue-400">(4567)</span> 890
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-md">
          Professionally optimize interdependent intellectual interoperable best practices. Progressively fabricate.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2">
          <span>Let’s Talk</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
        <img
          src="https://i.ibb.co/hKbg5cC/woman-phone.png"
          alt="woman"
          className="max-w-sm w-full rounded-lg"
        />
        {/* Optional Bubble */}
        <div className="absolute left-0 -top-5 bg-[#010c45] border border-blue-400 rounded-full px-4 py-1 text-xs text-gray-300 italic">
          Need Project?
        </div>
      </div>
    </div>
  );
};

export default AboutCallus;
