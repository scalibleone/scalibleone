'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Full-featured online store with payment integration, product management, and order tracking.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Analytics dashboard with real-time data visualization, user management, and API integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'AI Chatbot Platform',
    category: 'AI Integration',
    description: 'Intelligent customer support chatbot with natural language processing and learning capabilities.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
  },
];

export default function DemoSection() {
  return (
    <section id="demo-section" className="section-container gradient-bg">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            See What's <span className="gradient-text">Possible</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            Here are some examples of the digital products we've built. 
            Each project is unique, crafted to meet specific client needs.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group bg-[#11161C] rounded-2xl shadow-xl shadow-black/30 border border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:border-[#8B5CF6] transition-all duration-300"
          >
            {/* Project Image/Gradient */}
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="w-12 h-12 bg-[#11161C] rounded-full flex items-center justify-center hover:scale-110 transition-transform border border-gray-700">
                  <ExternalLink className="w-5 h-5 text-[#E5E7EB]" />
                </button>
                <button className="w-12 h-12 bg-[#11161C] rounded-full flex items-center justify-center hover:scale-110 transition-transform border border-gray-700">
                  <Github className="w-5 h-5 text-[#E5E7EB]" />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              {/* Category Badge */}
              <span className="inline-block text-xs font-semibold text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full mb-3 border border-[#8B5CF6]/20">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3B82F6] group-hover:to-[#8B5CF6] transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9CA3AF] bg-[#0B0F14] px-3 py-1 rounded-full border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon - AI Prototype CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 bg-[#11161C] border border-gray-800 rounded-2xl shadow-xl shadow-black/30 p-8 md:p-12 relative overflow-hidden"
      >
        {/* Coming Soon Badge */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Coming Soon</span>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-[#E5E7EB] mb-4">
          AI Prototype Generator
        </h3>
        <p className="text-lg text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
          Want to see an AI-generated mockup of your idea in minutes? 
          We're building an instant prototype generator—completely free! Stay tuned.
        </p>
        <button
          disabled
          className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-8 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed"
        >
          Coming Soon
        </button>
      </motion.div>
    </section>
  );
}