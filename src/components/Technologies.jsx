import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { FaFlutter } from "react-icons/fa6"
import { DiMysql } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            <p className='text-center'>REACTJS</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFlutter className="text-7xl text-gray-10"/>
            <p className='text-center'>FLUTTER</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-blue-400"/>
            <p className='text-center'>MY SQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
            <p className='text-center'>NODE JS</p>
        </div>
    </div>
    </div>
  )
}

export default Technologies
