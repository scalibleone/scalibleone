'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'How We Work', scrollTo: 'how-it-works' },
  { name: 'About', scrollTo: 'about-section' },
  { name: 'Services', scrollTo: 'services' },
  { name: 'Portfolio', scrollTo: 'demo-section' },
  { name: 'Pricing', scrollTo: 'pricing' }, // Will be added later
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll
  const handleScroll = (scrollTo: string) => {
    setIsMobileMenuOpen(false);
    
    if (scrollTo === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(scrollTo);
    if (element) {
      const offset = 70; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F14]/95 backdrop-blur-lg shadow-lg border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Name */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleScroll('top')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/logo.svg" 
                alt="ScalibleOne Logo" 
                width={45} 
                height={45} 
                className="w-[45px] h-[45px]"
              />
              <span className="text-lg font-bold text-[#E5E7EB]">
                ScalibleOne
              </span>
            </motion.div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.scrollTo)}
                  className="text-sm font-medium text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right: Login/Signup + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Desktop: Login/Signup */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-sm font-medium text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#E5E7EB] hover:bg-[#11161C] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-[#0B0F14]/98 backdrop-blur-lg border-b border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleScroll(link.scrollTo)}
                  className="block w-full text-left px-4 py-3 text-[#9CA3AF] font-medium hover:bg-[#11161C] hover:text-[#E5E7EB] rounded-lg transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile: Login/Signup */}
              <div className="pt-4 space-y-3 border-t border-gray-800">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#9CA3AF] font-medium hover:bg-[#11161C] hover:text-[#E5E7EB] rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}