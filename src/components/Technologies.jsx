import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  // Technology data from the previous code structure
  const technologies = [
    { name: 'REACTJS', icon: 'react', category: 'frontend', color: 'text-cyan-400', duration: 2.5 },
    { name: 'FLUTTER', icon: 'flutter', category: 'mobile', color: 'text-gray-10', duration: 4 },
    { name: 'MY SQL', icon: 'mysql', category: 'backend', color: 'text-blue-400', duration: 3 },
    { name: 'NODE JS', icon: 'nodejs', category: 'backend', color: 'text-green-500', duration: 3.5 }
  ];

  // Animation variants
  const iconvariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  // Tech icon component
  const TechIcon = ({ name }) => {
    switch (name) {
      case 'react':
        return <RiReactjsLine className="text-7xl text-cyan-400" />;
      case 'flutter':
        return <FaFlutter className="text-7xl text-gray-10" />;
      case 'mysql':
        return <DiMysql className="text-7xl text-blue-400" />;
      case 'nodejs':
        return <FaNodeJs className="text-7xl text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"
      >
        Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
      </motion.h2>
      
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconvariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TechIcon name={tech.icon} />
            <p className="text-center">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;