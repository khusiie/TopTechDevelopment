import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites using React, Next.js, and more.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 12h16" />
        <path d="M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on great user experience.',
    icon: (
      <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94" />
        <path d="M9.69 8h11.48" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description: 'Creating smooth, performant mobile applications for Android and iOS.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploy and manage scalable cloud infrastructure with ease and security.',
    icon: (
      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 15a4 4 0 0 1 4-4h1" />
        <path d="M7 15v-3a4 4 0 0 1 8 0v3" />
        <path d="M14 15h1a4 4 0 0 1 4 4v1" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility and ranking on search engines.',
    icon: (
      <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M16 8a4 4 0 1 0-8 0" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to grow your business online presence.',
    icon: (
      <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white font-rajdhani">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/pDWUf_g2zsc?autoplay=1&mute=1&controls=0&loop=1&playlist=pDWUf_g2zsc&modestbranding=1&showinfo=0&rel=0"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-12 ">
        {/* Section Label */}
        <div className="flex justify-center items-center mb-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
          <span className="text-blue-500 font-bold text-[11px] uppercase py-30 tracking-wider">
            Service We Provide
          </span>
        </div>

        {/* Heading */}
        <p className="text-2xl font-extrabold mb-12 text-white text-center leading-relaxed">
          All Professional We’re Offering Best<br />
          IT Solutions & <span className="text-blue-500">Services</span>
        </p>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {services.map(({ title, description, icon }, idx) => (
            <div key={idx} className="w-full h-64 cursor-pointer perspective-1000">
              <div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-white/10 border border-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="mb-4 flex justify-center">{icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                  <p className="leading-relaxed text-sm text-center text-white/90">{description}</p>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-blue-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3">{title} Details</h3>
                  <p className="leading-relaxed text-sm text-center">
                    More info about {title.toLowerCase()} will be here.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
