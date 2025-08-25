import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-rajdhani">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image */}
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg"
            alt="Support"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div>
          <p className="text-blue-600 font-semibold">Have Any Questions...!</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Get In Touch With Us</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name..."
                className="bg-gray-100 p-4 rounded-md outline-none w-full"
              />
              <input
                type="email"
                placeholder="E-Mail..."
                className="bg-gray-100 p-4 rounded-md outline-none w-full"
              />
              <input
                type="tel"
                placeholder="Phone..."
                className="bg-gray-100 p-4 rounded-md outline-none w-full"
              />
              <input
                type="text"
                placeholder="Subject..."
                className="bg-gray-100 p-4 rounded-md outline-none w-full"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Message..."
              className="bg-gray-100 p-4 w-full rounded-md outline-none"
            />

            {/* Submit Buttons */}
            <div className="flex flex-col items-start space-y-4">
              
              {/* Submit Your Request Button */}
              <button
                type="submit"
                className="bg-[#001336] hover:bg-[#001a44] text-white px-6 py-3 rounded-md font-medium"
              >
                Submit Your Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
