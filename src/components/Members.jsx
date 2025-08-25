import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const EngineerCard = ({ image, name, role, delay = 0 }) => {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div className="aspect-[3/4] bg-gray-200">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        
        {/* Name and Role Card */}
        <div className="bg-blue-600 rounded-lg p-4 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
          <p className="text-blue-100 text-sm">{role}</p>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <div className="bg-gray-800/80 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 cursor-pointer">
            <Facebook className="w-5 h-5 text-white" />
          </div>
          <div className="bg-gray-800/80 hover:bg-gray-900 p-3 rounded-full transition-colors duration-300 cursor-pointer">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <div className="bg-gray-800/80 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 cursor-pointer">
            <Youtube className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetOurEngineers = () => {
  const engineers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Frontend Engineer",
      image: "/photo.avif"
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 3,
      name: "Vincent Miree",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Jessica Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 font-rajdhani">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            TEAM MEMBER
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet With Our <span className="text-blue-600">Engineers</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engineers.map((engineer, index) => (
            <EngineerCard
              key={engineer.id}
              image={engineer.image}
              name={engineer.name}
              role={engineer.role}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg">
            Ready to work with our talented team? Let's build something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurEngineers;