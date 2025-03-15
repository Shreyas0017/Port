import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/index'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const categories = ['all', ...new Set(PROJECTS.map(project => project.category.toLowerCase()))]
  
  const filters = categories.map(category => ({
    id: category,
    name: category === 'all' ? 'All Projects' : `${category.charAt(0).toUpperCase() + category.slice(1)}`
  }))

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category.toLowerCase() === activeFilter)

  return (
    <div className="py-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold tracking-tight"
      >
        My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-wrap justify-center gap-4"
      >
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-purple-600 text-white'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </motion.div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-2xl bg-neutral-900/60 backdrop-blur-sm transition-all hover:bg-neutral-800/60"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="rounded-full bg-purple-900/40 px-3 py-1 text-xs font-medium text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>
            
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects