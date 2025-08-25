import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import ServicesSection from "../components/ServiceSection";
import Work from "../components/Work";
import WhoWeAre from "../components/WhoWeAre";
import Faqs from "../components/Faqs";
import PortfolioSection from "../components/Portfolio";
import Members from "../components/Members";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-indigo-900/80 z-0"></div>
        <div>
                    <Navbar/>
           

          <Hero />
        </div>
      </div>
   
       
      

      <div className="mt-10 px-4 md:px-16">
        <Card />
      </div>

      <WhoWeAre />

      <ServicesSection />
      {/*work Process */}
      <Work />
      <Faqs />
      <PortfolioSection />
      <Members />

      <Testimonials />
      <Blog />
      <Footer />
    </div>

  );
};

export default Home;