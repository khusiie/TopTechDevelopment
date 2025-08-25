import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f5faff] px-6 md:px-20 py-16 flex flex-col lg:flex-row justify-between items-start font-rajdhani gap-10">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <h4 className="text-blue-600 font-semibold">Why Choose Us?</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a122d]">
          Building your Path to Success
        </h2>
        <p className="text-gray-500">
          Monotonecatlly synergize granular markets front markets. Collaboratively visualize strategic
          infomediaries after multimedia based. Synergistically to task state of the art infrastructures
        </p>

        {/* Progress Bars */}
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold">IT Solutions</h5>
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold">Development</h5>
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '63%' }}></div>
            </div>
          </div>
        </div>

        {/* More About Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center space-x-2">
          <span>More About</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Right Section - Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-6 lg:w-1/2">
        {/* Plan 1 */}
        <div className="bg-white shadow-md p-6 w-full rounded-md">
          <h3 className="text-xl font-semibold mb-2">Busines Plan</h3>
          <p className="text-gray-500 mb-4">The markets and front market</p>
          <h2 className="text-4xl font-bold text-[#0a122d] mb-1">$29</h2>
          <span className="text-gray-500">/Month</span>
          <hr className="my-4" />
          <ul className="text-gray-700 space-y-2">
            <li>10+ user Account</li>
            <li>Moneyback Gaurantee</li>
            <li>Unlimited Database</li>
            <li>24/7 Supports</li>
          </ul>
          <button className="bg-blue-600 text-white w-full py-2 mt-6 rounded-md hover:bg-blue-700">
            Purchases
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-white shadow-md p-6 w-full rounded-md border-2 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Popular Plan</h3>
          <p className="text-gray-500 mb-4">The markets and front market</p>
          <h2 className="text-4xl font-bold text-[#0a122d] mb-1">$39</h2>
          <span className="text-gray-500">/Month</span>
          <hr className="my-4" />
          <ul className="text-gray-700 space-y-2">
            <li>10+ user Account</li>
            <li>Moneyback Gaurantee</li>
            <li>Unlimited Database</li>
            <li>24/7 Supports</li>
          </ul>
          <button className="bg-blue-600 text-white w-full py-2 mt-6 rounded-md hover:bg-blue-700">
            Purchases
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
