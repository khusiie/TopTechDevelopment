import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex justify-between items-center h-20 font-rajdhani">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://wp.ditsolution.net/toptech-multipurpose/wp-content/uploads/2024/10/logo-tr.png"
            alt="TopTech Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Menu */}
        <ul
          className={`font-rajdhani items-center gap-6 md:gap-9
          ${isMobileMenuOpen ? "flex" : "hidden"} 
          md:flex flex-col md:flex-row 
          absolute md:static top-full left-0 right-0 
          bg-black/80 md:bg-transparent 
          backdrop-blur-md md:backdrop-blur-0 
          p-6 md:p-0 shadow-xl md:shadow-none 
          transition-all z-20`}
        >
          {["home", "contact", "aboutus", "portfolio", "services"].map(
            (route, i) => (
              <li key={i} className="relative group">
                <Link
                  to={route === "home" ? "/" : `/${route}`}
                  onClick={closeMobileMenu}
                  className="text-white uppercase text-sm font-semibold tracking-wide hover:text-blue-200 flex items-center transition-all"
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </Link>
                <div className="absolute bottom-[-5px] left-1/2 w-0 h-[2px] bg-blue-200 group-hover:w-full transition-all duration-300 transform -translate-x-1/2" />
              </li>
            )
          )}
          <li>
            <Link
              to="/quote"
              onClick={closeMobileMenu}
              className="bg-gradient-to-r from-[#0c5adb] to-[#0c5adb] text-white font-bold text-sm uppercase py-3 px-7 rounded-50 shadow-lg hover:from-[#0a4b9b] hover:to-[#0a4b9b] transition-all"
            >
              Get A Quote
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl md:hidden z-40"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
