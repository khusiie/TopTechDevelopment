import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const res = await fetch("http://localhost:8000/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message || "Subscribed successfully!");
    } catch (error) {
      alert("Subscription failed. Try again.");
    }

    e.target.reset();
  };

  return (
<<<<<<< HEAD
    <footer className="bg-[#06142e] text-white py-20 font-rajdhani">
=======
    <footer className="bg-[#06142e] text-white py-16 font-rajdhani">
>>>>>>> 6f07bd7c4a22e45c858de1e99c8987a6800b5a3d
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://wp.ditsolution.net/toptech-multipurpose/wp-content/uploads/2024/10/logo-tr.png"
              alt="TopTech Logo"
              className="w-full max-w-[150px] h-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-300">
            Monotectally synergize granular top, visualize strategic infomediaries after task-state-of-the-art infrastructures for a digital agency in the north.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded flex items-center space-x-2 hover:bg-blue-700">
            <span>Discover More</span>
            <span>➜</span>
          </button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["About Us", "Our Team", "Pricing Plan", "Latest Blog", "Careers"].map((item) => (
              <li key={item}>
                <a href="#" className="flex items-center space-x-4 hover:text-blue-900 transition-colors duration-300">
                  <span className="text-blue-900">→</span>
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["IT Solutions", "IT Service", "Digital Marketing", "Hosting", "SEO Marketing"].map((item) => (
              <li key={item}>
                <a href="#" className="flex items-center space-x-4 hover:text-blue-900 transition-colors duration-300">
                  <span className="text-blue-900">→</span>
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe our Latest Newsletter</p>
          <form className="space-y-2" onSubmit={handleSubscribe}>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email..."
              required
              className="w-full px-4 py-2 rounded bg-[#0c1c3f] text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© 2024 Toptech. Designed By Dream IT Solution</p>
          <div className="flex items-center space-x-3">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"><FaFacebookF /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"><FaXTwitter /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"><FaLinkedinIn /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"><FaPinterestP /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
