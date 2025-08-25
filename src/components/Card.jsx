import React from 'react';  
import { Database, Cloud, Cpu, Shield, Server, Users, Zap, Lock } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="group perspective-1000 w-72 h-96"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white rounded-sm shadow-lg p-8 h-full flex flex-col  gap-y-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 min-h-full">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center text-blue-600 font-semibold mt-6 mb-4 cursor-pointer group-hover:text-blue-700 transition-colors">
              READ MORE
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">»</span>
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-sm shadow-lg p-8 h-full flex flex-col gap-y-6 text-white min-h-full">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-blue-100 leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center font-semibold mt-6 cursor-pointer hover:text-blue-200 transition-colors">
              LEARN MORE
              <span className="ml-2 transform hover:translate-x-1 transition-transform">»</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RotatingServiceCards = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
    }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 justify-items-center font-rajdhani">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default RotatingServiceCards;
