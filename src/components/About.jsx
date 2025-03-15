import React from 'react'
import aboutImg from '../assets/logo.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold tracking-tight"
      >
        About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-75 blur"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105" 
                src={aboutImg} 
                alt="about me" 
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral-200">
              {ABOUT_TEXT}
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Let's Connect
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About