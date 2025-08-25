import React from 'react';

const services = [
  {
    title: 'Cloud Services',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '🌐', // Replace with proper icon/image
  },
  {
    title: 'IT Management',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '📊',
  },
  {
    title: 'Software Renew',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '⚙️',
  },
  {
    title: 'Machine Learning',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '🧠',
  },
  {
    title: 'Digital Marketing',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '📺',
  },
  {
    title: 'Data Analysis',
    description:
      'Monotonectal grants to business visualize provid solution services business provid done',
    icon: '📈',
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-[#f6f9fe] py-20 text-center font-rajdhani px-4">
      {/* Header */}
      <h3 className="text-blue-600 font-medium mb-2">What We Provides?</h3>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        Provide Interective IT Solution
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl pt-14 pb-8 px-6 shadow-md hover:shadow-xl transition"
          >
            {/* Icon Circle */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-2xl text-blue-600">{service.icon}</span>
            </div>

            {/* Card Content */}
            <h4 className="font-bold text-xl text-gray-900 mb-3">
              {service.title}
            </h4>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Button */}
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold transition inline-flex items-center">
              Learn More <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
