'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for landing pages and simple websites',
    price: '$999',
    period: 'one-time',
    features: [
      'Custom landing page design',
      'Responsive mobile design',
      'Basic SEO optimization',
      'Contact form integration',
      '3 rounds of revisions',
      '2 weeks delivery',
      'Source code included',
      '30 days support',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'For web apps and dynamic applications',
    price: '$2,999',
    period: 'one-time',
    features: [
      'Full web application',
      'Custom dashboard & UI',
      'User authentication',
      'Database integration',
      'API development',
      'Admin panel',
      '5 rounds of revisions',
      '4-6 weeks delivery',
      'Source code included',
      '90 days support',
      'Free hosting setup',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Complete SaaS products and complex systems',
    price: '$7,999+',
    period: 'project-based',
    features: [
      'Full-stack application',
      'Advanced features & integrations',
      'Mobile app (iOS/Android)',
      'AI/ML integration',
      'Payment gateway',
      'Multi-user roles',
      'Unlimited revisions',
      '8-12 weeks delivery',
      'Source code included',
      '1 year support',
      'Free hosting & deployment',
      'Dedicated project manager',
    ],
    popular: false,
    cta: 'Contact Us',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-container bg-[#0B0F14]">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#11161C] px-4 py-2 rounded-full mb-6 border border-gray-800">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-sm font-semibold text-[#E5E7EB]">Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            No hidden fees. No monthly subscriptions. Just one-time payments for 
            professional products that you own forever.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative bg-[#11161C] rounded-2xl p-8 border transition-all duration-300 ${
              plan.popular
                ? 'border-[#8B5CF6] shadow-2xl shadow-purple-500/20 lg:scale-105'
                : 'border-gray-800 hover:border-gray-700'
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{plan.name}</h3>
              <p className="text-[#9CA3AF] text-sm">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#E5E7EB]">{plan.price}</span>
              </div>
              <p className="text-[#9CA3AF] text-sm mt-1">{plan.period}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-[#9CA3AF] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => {
                const footer = document.getElementById('contact-form');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:shadow-xl hover:shadow-purple-500/30'
                  : 'bg-[#0B0F14] text-[#E5E7EB] border border-gray-800 hover:border-[#8B5CF6]'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Custom Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 bg-[#11161C] border border-gray-800 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-[#E5E7EB] mb-3">Need Something Custom?</h3>
        <p className="text-[#9CA3AF] mb-6">
          Every project is unique. Let's discuss your specific needs and create a custom package.
        </p>
        <button
          onClick={() => {
            const footer = document.getElementById('contact-form');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-secondary"
        >
          Schedule a Call
        </button>
      </motion.div>
    </section>
  );
}