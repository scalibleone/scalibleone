'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap, Code2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our priority. We listen, adapt, and deliver exactly what you need.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Leveraging AI tools to accelerate development without compromising quality.',
  },
  {
    icon: Heart,
    title: 'Transparent Process',
    description: 'Regular updates, open communication, and no hidden surprises. Ever.',
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    description: 'We use the latest technologies to build scalable, maintainable products.',
  },
];

export default function About() {
  return (
    <section id="about-section" className="section-container gradient-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">ScalibleOne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate developers who believe building digital products 
            should be accessible, affordable, and straightforward.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              ScalibleOne was founded with a simple mission: <span className="font-semibold text-gray-900">help founders, 
              small businesses, and creators bring their digital ideas to life without needing a full 
              development team or massive budget.</span>
            </p>
            <p>
              We've seen too many great ideas never launch because traditional development is 
              expensive, slow, and complicated. So we built a better way.
            </p>
            <p>
              By combining <span className="font-semibold gradient-text">AI-powered tools with human 
              expertise</span>, we deliver professional-grade products faster and more affordably 
              than traditional agencies—without sacrificing quality.
            </p>
            <p className="font-semibold text-gray-900">
              Whether you need a landing page, web app, mobile app, or full SaaS platform—we've got you covered.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Let's build something amazing together.
          </p>
          <button
            onClick={() => {
              const footer = document.getElementById('contact-form');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}