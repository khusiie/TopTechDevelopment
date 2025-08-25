import React, { useRef, useState } from "react";
import { ChevronUp, Eye, ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Team Collaboration Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces",
      description:
        "A comprehensive team collaboration platform with real-time communication features.",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      description:
        "Advanced analytics dashboard with AI-powered insights and data visualization.",
    },
    {
      id: 3,
      title: "Digital Workspace Solution",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      description:
        "Modern digital workspace with intuitive design and seamless user experience.",
    },
    {
      id: 4,
      title: "Enterprise Management System",
      category: "Software Development",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces",
      description:
        "Comprehensive enterprise management system with advanced features.",
    },
    {
      id: 5,
      title: "E-commerce App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?w=600&h=400&fit=crop&crop=center",
      description: "A powerful and responsive e-commerce mobile app.",
    },
    {
      id: 6,
      title: "SaaS Landing Page",
      category: "Frontend Development",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600&h=400&fit=crop&crop=center",
      description: "Landing page designed for a SaaS product with modern UI.",
    },
  ];

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 320; // adjust based on card width

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 font-rajdhani">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-left mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                PORTFOLIOS
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Our Completed <span className="text-blue-500">Projects</span>
            </h1>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => scroll("left")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-50 font-semibold transition-all duration-200 transform hover:scale-105"
            >
              ← PREV
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-50 font-semibold transition-all duration-200 transform hover:scale-105"
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Portfolio Cards */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] bg-white rounded-xl shadow-md relative cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                <div className="flex space-x-3">
                  <button className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
