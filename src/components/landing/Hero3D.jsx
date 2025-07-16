import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TypeAnimation } from 'react-type-animation';

// 3D টেক্সট কম্পোনেন্ট
const ThreeDText = () => {
  const textRef = useRef();
  
  useFrame(({ clock }) => {
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <Float speed={3} rotationIntensity={0.5}>
      <Text
        ref={textRef}
        fontSize={1.5}
        maxWidth={10}
        lineHeight={1.2}
        color="#4f46e5"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvao7CIPrQ.ttf"
      >
        AI TOOLS
        <meshStandardMaterial 
          metalness={0.9} 
          roughness={0.2} 
          emissive="#4f46e5"
        />
      </Text>
    </Float>
  );
};

// পার্টিকেল ব্যাকগ্রাউন্ড
const Particles = () => {
  const particlesRef = useRef();
  const count = 500;
  
  useEffect(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial 
        size={0.03} 
        color="#8b5cf6" 
        transparent 
        opacity={0.8} 
      />
    </points>
  );
};

const Hero3D = () => {
  return (
    <div className="relative h-screen">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ThreeDText />
        <Particles />
        <OrbitControls enableZoom={false} />
      </Canvas>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-6xl font-bold text-white mb-6">
          <TypeAnimation
            sequence={[
              'Discover 1000+ AI Tools',
              1000,
              'Boost Your Productivity',
              1000,
              'Future is Now',
              1000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-xl text-indigo-200 max-w-2xl">
          World's largest AI tools directory curated for professionals
        </p>
      </div>
    </div>
  );
};

export default Hero3D;
