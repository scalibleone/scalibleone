'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See What's <span className="gradient-text">Possible</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5 text-gray-900" />
                </button>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              {/* Category Badge */}
              <span className="inline-block text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Want AI Prototype CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Want to See an AI Prototype First?
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Not ready to commit? Try our AI prototype generator. Get a quick mockup 
          of your idea in minutes—completely free!
        </p>
        <button
          onClick={() => {
            const footer = document.getElementById('contact-form');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-secondary"
        >
          Generate Free Prototype
        </button>
      </motion.div>
    </section>
  );
}