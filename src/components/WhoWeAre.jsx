import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800 font-rajdhani">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            decoding="async"
            width="593"
            height="590"
            src="https://wp.ditsolution.net/toptech-multipurpose/wp-content/uploads/2024/09/img.png"
            className="attachment-large size-large wp-image-16029"
            alt="IT team at work"
          />

     
        </div>

        {/* RIGHT CONTENT */}
        <div>
           <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                  Who We Are 
                </span>
              </div>
         
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get Exclusive IT Solutions & Services With{' '}
            <span className="text-blue-700">TopTech</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which is best for IT solution service
            and consulting for your business.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {[
              {
                title: 'Certified Company',
                description:
                  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin lorem awesome.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                )
              },
              {
                title: 'Internal Networking',
                description:
                  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                )
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA and Profile */}
          <div className="mt-10 flex flex-col sm:flex-row items-center  gap-6">
            {/* Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-bold flex items-center gap-2 hover:bg-blue-700 transition">
              ABOUT MORE
              <span className="inline-block bg-white text-blue-600 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/kevin.jpeg"
                alt="Kevin Martin"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Kevin Martin</h4>
                <p className="text-sm text-gray-500">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
