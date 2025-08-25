import { Calendar, Clock, ArrowRight, User, Eye, Heart } from 'lucide-react';

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Advanced Cyber Security Strategies for Modern Enterprises",
      excerpt: "Discover the latest cybersecurity frameworks and methodologies that leading enterprises are implementing to protect their digital assets in 2024.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Cyber Security",
      date: "September 24, 2024",
      readTime: "8 min read",
      author: "Dr. Sarah Mitchell",
      views: 1240,
      likes: 89
    },
    {
      id: 2,
      title: "Zero Trust Architecture: Implementation Guide",
      excerpt: "A comprehensive guide to implementing Zero Trust security models in your organization, including best practices and common pitfalls to avoid.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
      category: "Cyber Security", 
      date: "September 24, 2024",
      readTime: "12 min read",
      author: "Marcus Chen",
      views: 987,
      likes: 76
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-rajdhani">
      {/* Header Section */}
      <div className="text-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-blue-600">Our Blog Update</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured News And{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="font-medium">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-blue-500" />
                    <span className="font-medium">{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      <span className="font-medium">{post.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={16} />
                      <span className="font-medium">{post.likes}</span>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300 text-lg">
                  Read More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}