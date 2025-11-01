'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCTAClick = () => {
    // Scroll to footer form
    const footer = document.getElementById('contact-form');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#11161C] backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-800 mb-8">
            <Users className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-sm font-semibold text-[#E5E7EB]">
              AI-powered, Human-perfected
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#E5E7EB] mb-6 leading-tight">
            We Build Your <br />
            <span className="gradient-text">Digital Product</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#9CA3AF] mb-12 max-w-3xl mx-auto">
            From concept to launch, our expert team turns your ideas into 
            fully-functional products. <br className="hidden md:block" />
            No hassle. No uncertainty. Just results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="btn-primary group flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              Start Your Project
              <ArrowRight 
                className={`w-5 h-5 transition-transform ${
                  isHovered ? 'translate-x-1' : ''
                }`} 
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const about = document.getElementById('about-section');
                about?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Us
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#9CA3AF]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span>Developers + AI Assistants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
              <span>Full project support</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
              <span>AI prototypes available</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}