'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Palette, ShoppingCart, Bot } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages & Websites',
    description: 'Beautiful, conversion-focused websites that make great first impressions.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
  },
  {
    icon: Database,
    title: 'Web Applications',
    description: 'Full-featured web apps with custom dashboards, user management, and databases.',
    features: ['Custom Features', 'User Authentication', 'Real-time Updates', 'API Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native iOS and Android apps, or cross-platform solutions that work everywhere.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Ready'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platforms',
    description: 'Complete online stores with payment processing, inventory, and order management.',
    features: ['Payment Integration', 'Product Management', 'Order Tracking', 'Analytics'],
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Add intelligent features like chatbots, recommendations, and automation to your product.',
    features: ['ChatGPT Integration', 'Smart Automation', 'Data Analysis', 'Custom AI Models'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Professional design that combines aesthetics with usability for maximum impact.',
    features: ['Brand Identity', 'Wireframing', 'Prototyping', 'User Testing'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container bg-[#0B0F14]">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            From simple landing pages to complex SaaS platforms—we have the expertise 
            to bring any digital product to life.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:border-[#8B5CF6] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[#9CA3AF]">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 bg-[#11161C] border border-gray-800 rounded-2xl p-8"
      >
        <p className="text-lg text-[#9CA3AF] mb-4">
          <span className="font-semibold text-[#E5E7EB]">Don't see what you need?</span> We build custom solutions too.
        </p>
        <button
          onClick={() => {
            const footer = document.getElementById('contact-form');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-primary"
        >
          Discuss Your Project
        </button>
      </motion.div>
    </section>
  );
}