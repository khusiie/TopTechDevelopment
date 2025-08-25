import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Abouttoptech = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16 flex flex-col lg:flex-row items-center gap-10 font-rajdhani">
      {/* Left side - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" // replace with your image
            alt="Person"
            className="w-full rounded-md object-cover"
          />
          <img
            src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg" // replace with your image
            alt="Team"
            className="w-full rounded-md object-cover"
          />
        </div>
        <div className="w-full h-48 bg-blue-600 rounded-md flex items-center justify-center relative">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-blue-600 font-semibold">About Toptech Company</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a122d]">
          About is Over 291+ Company
        </h2>
        <p className="text-gray-600">
          Monotonectaly provede granular markets and front markets dream it company in visualize
          strategic infomediaries am multimedia based models clean calender task state of the art
          infrastructures for about business.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">IT Management</h4>
              <p className="text-gray-600 text-sm">
                Proved granular markets dream team more based models clean.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Award Ceremony</h4>
              <p className="text-gray-600 text-sm">
                Proved granular markets dream team more based models clean.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-blue-600 w-full my-4" />

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Mission
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Vision
          </button>
        </div>
      </div>
    </section>
  );
};

export default Abouttoptech;
