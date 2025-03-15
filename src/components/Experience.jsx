import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className="py-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold tracking-tight"
      >
        Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
      </motion.h2>
      
      <div className="relative mx-auto max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-cyan-600 lg:left-1/2"></div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 h-4 w-4 rounded-full bg-purple-500 lg:left-1/2 lg:-ml-2">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-purple-400 opacity-75 blur-sm"></div>
              </div>
              
              {/* Content */}
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'} lg:w-1/2`}
              >
                <div className="overflow-hidden rounded-xl bg-neutral-900/60 p-6 backdrop-blur-sm transition-all hover:bg-neutral-800/60">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300">
                      {experience.year}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-purple-300">
                      {experience.company}
                    </p>
                  </div>
                  
                  <p className="mt-4 text-neutral-300">
                    {experience.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((technology, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-flex items-center rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-700/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience