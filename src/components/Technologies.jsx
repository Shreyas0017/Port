import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap justify-center gap-4">
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center">REACTJS</p>
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaFlutter className="text-7xl text-gray-10" />
          <p className="text-center">FLUTTER</p>
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql className="text-7xl text-blue-400" />
          <p className="text-center">MY SQL</p>
        </motion.div>
        <motion.div
          variants={iconvariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <p className="text-center">NODE JS</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
