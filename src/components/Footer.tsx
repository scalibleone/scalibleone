'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            idea: formData.idea,
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', idea: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact-form" className="bg-gradient-to-br from-[#0B0F14] via-[#1a1f2e] to-[#0B0F14] text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#11161C] backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-800">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-sm font-semibold text-[#E5E7EB]">Let's Build Together</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E5E7EB]">
              Have an Idea? <br />
              <span className="gradient-text">
                Let's Build It
              </span>
            </h2>
            
            <p className="text-lg text-[#9CA3AF] mb-8">
              Fill out the form and we'll get back to you within 24 hours. 
              Whether you need a full product or just want to explore possibilities—we're here to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:scalibleone@gmail.com" 
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#11161C] border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-[#8B5CF6] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>scalibleone@gmail.com</span>
              </a>

              <a 
                href="https://wa.me/your_number" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#11161C] border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-[#8B5CF6] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#11161C] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#8B5CF6] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#11161C] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#8B5CF6] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#11161C] backdrop-blur-lg rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#E5E7EB]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#E5E7EB] placeholder-[#9CA3AF]"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#E5E7EB]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#E5E7EB] placeholder-[#9CA3AF]"
                  placeholder="john@example.com"
                />
              </div>

              {/* Idea Field */}
              <div>
                <label htmlFor="idea" className="block text-sm font-semibold mb-2 text-[#E5E7EB]">
                  Describe Your Idea
                </label>
                <textarea
                  id="idea"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#E5E7EB] placeholder-[#9CA3AF] resize-none"
                  placeholder="Tell us about your project, goals, and what you want to build..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <p className="text-[#10B981] font-semibold">
                      Message sent! We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center"
                >
                  <p className="text-red-400 font-semibold">
                    ✗ Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF] text-sm">
              © 2025 ScalibleOne. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#9CA3AF]">
              <a href="#" className="hover:text-[#E5E7EB] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#E5E7EB] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}