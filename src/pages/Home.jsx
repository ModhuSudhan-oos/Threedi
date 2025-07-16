import React from 'react';
import Hero3D from '../components/landing/Hero3D';
import ToolCategories from '../components/landing/ToolCategories';
import FeatureGrid from '../components/landing/FeatureGrid';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      
      <Hero3D />
      <ToolCategories />
      <FeatureGrid />
      
      {/* 3D Parallax Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Canvas>
            {/* Add complex 3D scene here */}
          </Canvas>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-6xl font-bold text-center max-w-4xl">
            Transform Your Workflow with <span className="text-indigo-400">AI Power</span>
          </h2>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
