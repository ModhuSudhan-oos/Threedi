import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  // ১০০+ ক্যাটাগরি উদাহরণ
  { id: 1, name: 'Content Generation', icon: '✍️', tools: 142 },
  { id: 2, name: 'Image Processing', icon: '🖼️', tools: 87 },
  { id: 3, name: 'Video Editing', icon: '🎬', tools: 56 },
  { id: 4, name: 'Audio Synthesis', icon: '🎵', tools: 43 },
  { id: 5, name: 'Data Analysis', icon: '📊', tools: 121 },
  { id: 6, name: 'Marketing', icon: '📢', tools: 94 },
  { id: 7, name: 'Programming', icon: '💻', tools: 78 },
  { id: 8, name: 'Education', icon: '🎓', tools: 65 },
  // ... 92 more categories
];

const CategoryCard = ({ category }) => (
  <motion.div
    whileHover={{ 
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.3)"
    }}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30"
  >
    <div className="text-4xl mb-4">{category.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
    <p className="text-indigo-300">{category.tools}+ Tools</p>
  </motion.div>
);

const ToolCategories = () => {
  const [search, setSearch] = useState('');
  
  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore <span className="text-indigo-400">100+</span> Categories
          </h2>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-indigo-900/30 backdrop-blur-md rounded-full py-4 px-6 
                         text-white border border-indigo-500 focus:outline-none focus:ring-2 
                         focus:ring-indigo-500"
            />
            <span className="absolute right-4 top-4 text-indigo-400">⌕</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 
                         hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full 
                         transition-all duration-300 transform hover:scale-105"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolCategories;
