import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import profilePic from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 w-full text-center lg:mb-0 lg:w-1/2 lg:text-left"
          >
            <h3 className="mb-4 text-lg font-medium text-purple-400">
              Hello, I'm
            </h3>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Shreyas Saha
              </span>
            </h1>
            <h2 className="mb-8 text-2xl font-medium text-neutral-300 md:text-3xl">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'App Developer',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-purple-400"
                repeat={Infinity}
              />
            </h2>
            <p className="mb-10 max-w-lg text-lg text-neutral-400 lg:mx-0">
              Creating beautiful and functional web and app experiences that leave a lasting impression.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 text-center font-medium text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-transparent px-8 py-3 text-center font-medium text-white ring-2 ring-purple-500 transition-all hover:bg-purple-900/20"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-75 blur-lg"></div>
              <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-neutral-900">
              <motion.img 
            initial={{ x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:1.5, duration:1}}
            src={profilePic} alt="Shreyas Saha" />
              </div>
              
              <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/80 text-white shadow-lg shadow-purple-500/20">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-900/80 text-white shadow-lg shadow-cyan-500/20">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-neutral-400 hover:text-purple-400">
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero