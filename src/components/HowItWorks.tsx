'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Users, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Vision',
    description: 'Tell us about your product idea, goals, and target audience. We listen, ask the right questions, and understand your needs.',
    color: 'from-[#3B82F6] to-[#8B5CF6]',
  },
  {
    number: '02',
    icon: Users,
    title: 'We Build Together',
    description: 'Our team combines AI speed with human expertise to develop your product. You get regular updates and can provide feedback throughout.',
    color: 'from-[#8B5CF6] to-[#3B82F6]',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your product, ensure everything works perfectly, and provide ongoing support. Your success is our success.',
    color: 'from-[#3B82F6] to-[#10B981]',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-container bg-[#0B0F14]">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            How <span className="gradient-text">We Work</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            A transparent, collaborative process that puts you in control while we handle the technical complexity.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-700 to-transparent z-0"></div>
              )}

              {/* Card */}
              <div className="relative card hover:scale-105 transition-transform duration-300 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-[#9CA3AF] mb-6">
          Ready to bring your idea to life?
        </p>
        <button
          onClick={() => {
            const footer = document.getElementById('contact-form');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-primary"
        >
          Start Your Project
        </button>
      </motion.div>
    </section>
  );
}