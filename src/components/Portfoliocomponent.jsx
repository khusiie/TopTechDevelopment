import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Tech Dashboard',
    image: '/portfolio.jpg',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Brand Refresh',
    image: '/photo.avif',
    category: 'Branding',
  },
  {
    id: 3,
    title: 'Business Analytics',
    image: '/pt3.png',
    category: 'Business',
  },
  {
    id: 4,
    title: 'UX Design Case',
    image: '/photo-1736939681295-bb2e6759dddc.avif',
    category: 'Design',
  },
  {
    id: 5,
    title: 'Marketing Campaign',
    image: 'https://source.unsplash.com/featured/?marketing,campaign',
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'Mobile App',
    image: 'https://source.unsplash.com/featured/?mobile,app',
    category: 'Technology',
  },
];

const categories = ['All', 'Branding', 'Business', 'Design', 'Marketing', 'Technology'];

export default function PortfolioComponent() {
  const [active, setActive] = useState('All');

  const filtered = projects.filter(
    (p) => active === 'All' || p.category === active
  );

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto font-rajdhani">
      <h1 className="text-blue-600 font-semibold text-center mb-2">
        Our Works
      </h1>
      <h2 className="text-3xl font-bold text-center mb-8">
        Browse Latest Works
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition-colors ${
              active === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards with image height adjustment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
