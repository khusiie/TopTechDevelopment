import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageCircle, ArrowUp } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Md Ahiduzzaman",
      role: "CEO & Founder",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      feedback: "Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise. Completely extend leveraged customer service rather than performance based imperatives. magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Digital Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      feedback: "Outstanding service and exceptional results! The team delivered beyond our expectations with their innovative approach and professional execution. Their expertise in digital transformation has significantly improved our business operations.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      feedback: "Incredible technical expertise and seamless project management. They transformed our complex requirements into elegant solutions that exceeded all performance benchmarks. Highly recommended for any technology project.",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Growth Dynamics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      feedback: "Working with this team has been a game-changer for our product development. Their innovative solutions and attention to detail helped us achieve our goals faster than we ever imagined possible.",
      rating: 5
    },
    {
      id: 5,
      name: "David Park",
      role: "Operations Head",
      company: "Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      feedback: "Exceptional quality and professional service delivery. The team's commitment to excellence and their ability to understand complex business requirements made our collaboration incredibly successful.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 relative overflow-hidden font-rajdhani">
      {/* Large Quote Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-9xl font-bold text-gray-400">"</div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 left-0 w-16 h-16 bg-indigo-100 rounded-full opacity-25"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 font-medium">
            <MessageCircle size={16} />
            Testimonial
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer's Awesome Feedback
          </h1>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative transition-all duration-500"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Profile Images Row */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index === currentIndex 
                    ? 'scale-110 ring-4 ring-blue-500 ring-offset-2' 
                    : 'scale-90 opacity-60 hover:opacity-80 hover:scale-95'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-light">
              "{testimonials[currentIndex].feedback}"
            </p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Author Info */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 mb-2">{testimonials[currentIndex].role}</p>
              <p className="text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

  
       
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1 hover:shadow-xl z-50"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}