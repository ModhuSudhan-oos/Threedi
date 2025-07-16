import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const features = [
  {
    title: "3D Navigation",
    description: "Immersive 3D interface with intuitive controls",
    icon: "🔄"
  },
  {
    title: "Real-time Search",
    description: "Instant AI-powered search across all tools",
    icon: "🔍"
  },
  {
    title: "Smart Filters",
    description: "Filter tools by complexity, pricing, and specialty",
    icon: "⚡"
  },
  {
    title: "Live Demos",
    description: "Try tools directly in your browser",
    icon: "🚀"
  }
];

const FloatingSphere = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial 
        color="#6366f1" 
        wireframe 
        transparent 
        opacity={0.8} 
      />
    </Sphere>
  </Canvas>
);

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-500/30"
  >
    <div className="text-5xl mb-4">{feature.icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
    <p className="text-indigo-200">{feature.description}</p>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-96">
            <FloatingSphere />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary <span className="text-indigo-400">AI Experience</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Our platform transforms how you discover and interact with AI tools through cutting-edge 3D visualization and real-time interaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
