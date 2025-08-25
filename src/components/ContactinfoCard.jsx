import React from 'react';
import { FiPhoneCall, FiMail, FiClock } from 'react-icons/fi';

const ContactInfoCard = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 font-rajdhani">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Phone Card */}
        <div className="group bg-white hover:bg-[#0B5FE0] text-black hover:text-white p-6 rounded-md flex items-center gap-4 shadow-lg transition-all duration-300 cursor-pointer">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-[#0B5FE0] bg-white border-2 border-[#0B5FE0] group-hover:border-white group-hover:text-white group-hover:bg-transparent transition-all duration-300">
            <FiPhoneCall size={28} />
          </div>
          <div>
            <p className="text-base font-medium group-hover:text-gray-200">+123 (4567) 890</p>
            <h2 className="text-2xl font-bold">Call Us Anytime</h2>
          </div>
        </div>

        {/* Email Card */}
        <div className="group bg-white hover:bg-[#0B5FE0] text-black hover:text-white p-6 rounded-md flex items-center gap-4 shadow-lg transition-all duration-300 cursor-pointer">
          <div className="w-20 h-20 bg-[#0B5FE0] group-hover:bg-white text-white group-hover:text-[#0B5FE0] rounded-full flex items-center justify-center text-2xl transition-all duration-300">
            <FiMail size={28} />
          </div>
          <div>
            <p className="text-base font-medium">Send E-Mail</p>
            <h2 className="text-2xl font-bold">info@gmail.com</h2>
          </div>
        </div>

        {/* Hours Card */}
        <div className="group bg-white hover:bg-[#0B5FE0] text-black hover:text-white p-6 rounded-md flex items-center gap-4 shadow-lg transition-all duration-300 cursor-pointer">
          <div className="w-20 h-20 bg-[#0B5FE0] group-hover:bg-white text-white group-hover:text-[#0B5FE0] rounded-full flex items-center justify-center text-2xl transition-all duration-300">
            <FiClock size={28} />
          </div>
          <div>
            <p className="text-base font-medium">Opening Hours</p>
            <h2 className="text-2xl font-bold">Mon - Fri (8.00 - 5.00)</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfoCard;
