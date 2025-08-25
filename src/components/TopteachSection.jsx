import React from "react";

const steps = [
  {
    icon: "📋",
    title: "Account Register",
    subtitle: [
      "Opportunities before extensible market",
      "Dramatically pursue user",
    ],
  },
  {
    icon: "💳",
    title: "Add New Card",
    subtitle: [
      "Opportunities before extensible market",
      "Dramatically pursue user",
    ],
  },
  {
    icon: "👤",
    title: "Varyfied Account",
    subtitle: [
      "Opportunities before extensible market",
      "Dramatically pursue user",
    ],
  },
];

const ToptechSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 font-rajdhani">
      {/* Heading + Subscribe */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h2 className="text-3xl md:text-[34px] font-bold text-center md:text-left">
          Get Latest Update from Toptech
        </h2>
        <div>

          <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="p-2 px-4 rounded-l-md text-black w-full md:w-64"
          />
          <button className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-300">
            Subscribe
          </button>
        </div>

        </div>
     

      </div>

      {/* Steps Section */}
      <div className="bg-[#eaf3fd] text-black rounded-2xl max-w-7xl mx-auto px-8 py-16 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Circle Icon */}
              <div className="w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center border-2 border-dashed border-[#0056b3] text-white text-3xl">
                {step.icon}
              </div>

              {/* Curved Arrow */}
              {index < steps.length - 1 && (
                <svg
                  viewBox="0 0 120 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block absolute top-12 left-full w-28 h-auto"
                >
                  <path
                    d="M0 50C40 0 80 0 120 50"
                    stroke="#b8c2cc"
                    strokeWidth="4"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="10"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#b8c2cc" />
                    </marker>
                  </defs>
                </svg>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold mt-6 mb-2">{step.title}</h3>

              {/* Subtitles */}
              {step.subtitle.map((line, i) => (
                <p key={i} className="text-sm text-gray-700">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToptechSection;
