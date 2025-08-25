import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactinfoCard from '../components/ContactinfoCard';
import ContactPage from '../components/GetInTouchWithUs';
const Contact = () => {
  return (
    <div>
           <div className="bg-black fixed top-0 w-full z-50">
            <Navbar/>
            </div> 
      {/* Hero Section */}
      <div className="relative bg-blue-900 h-[400px] flex items-center text-white  font-Rajdhani">
        <img
          src="/background.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 pl-12">
          <div className="bg-gray-800 px-4 py-2 inline-flex items-center rounded">
            <span className="text-sm">HOME</span>
            <span className="mx-2">›</span>
            <span className="text-sm">CONTACT US</span>
          </div>
          <h1 className="text-4xl font-bold mt-4">CONTACT US</h1>
        </div>
      </div>

    <ContactinfoCard/>
      <ContactPage/>

<section className="w-full h-[350px] mt-16 rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    className="w-full h-full"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>


      <Footer/>
    </div>
  );
}

export default Contact;
