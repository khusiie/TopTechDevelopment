import React, { useState } from "react";
import { Users, BarChart3, Settings, FileText } from "lucide-react";

const TechWorkflowProcess = () => {
  const [flippedSteps, setFlippedSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const steps = [
    {
      id: 1,
      title: "Select A Project",
      description: "We have the technology and IT expertise to develop.",
      icon: Users,
    },
    {
      id: 2,
      title: "Project Analysis",
      description: "We have the technology and IT expertise to develop.",
      icon: BarChart3,
    },
    {
      id: 3,
      title: "Start Process",
      description: "We have the technology and IT expertise to develop.",
      icon: Settings,
    },
    {
      id: 4,
      title: "Deliver Result",
      description: "We have the technology and IT expertise to develop.",
      icon: FileText,
    },
  ];

  const handleFlip = (stepId) => {
    setFlippedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white font-rajdhani">
      {/* Header */}
      <div className="flex justify-center items-center mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider font-rajdhani">
          WORK PROCESS
        </span>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Working Process For <span className="text-blue-500">Technology</span>
        </h1>
      </div>

      {/* Process Steps */}
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="relative mb-8">
                  {/* Flip Card */}
                  <div
                    className={`relative w-32 h-32 rounded-full cursor-pointer transition-all duration-500 transform-gpu perspective-1000 bg-gray-100 border-2 border-gray-200`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedSteps[step.id]
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                    onClick={() => handleFlip(step.id)}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <step.icon className="w-12 h-12 text-blue-500" />
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center bg-blue-600"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="text-2xl font-bold text-white">✓</div>
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-8">
                  <div className="relative">
                    <svg
                      className="w-full h-8"
                      viewBox="0 0 200 32"
                      fill="none"
                    >
                      <path
                        d="M10 16 Q100 8 190 16"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeDasharray="8,8"
                        fill="none"
                      />
                      <polygon points="185,12 195,16 185,20" fill="#3B82F6" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div
                    className={`w-20 h-20 rounded-full cursor-pointer transition-all duration-500 transform-gpu perspective-1000 bg-gray-100 border-2 border-gray-200`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedSteps[step.id]
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                    onClick={() => handleFlip(step.id)}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <step.icon className="w-8 h-8 text-blue-500" />
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center bg-blue-600"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="text-lg font-bold text-white">✓</div>
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {step.id}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-200 mt-4"></div>
                )}
              </div>

              <div className="flex-1 pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TechWorkflowProcess;
