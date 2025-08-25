import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioComponent from '../components/Portfoliocomponent';
const Portfolio = () => {
  return (
    <div>
     <div className="bg-black fixed top-0 w-full z-50">
         <Navbar/>
        </div> 
        {/* Hero Section */}
      <div className="relative bg-blue-900 h-[400px] flex items-center text-white     font-Rajdhani;">
        <img
          src="/background.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 pl-12">
          <div className="bg-gray-800 px-4 py-2 inline-flex items-center rounded">
            <span className="text-sm">HOME</span>
            <span className="mx-2">›</span>
            <span className="text-sm">PORTFOLIO</span>
          </div>
          <h1 className="text-4xl font-bold mt-4">PORTFOLIO</h1>
        </div>
      </div>
      <PortfolioComponent/>

      <Footer/>
    </div>
  );
}

export default Portfolio;
