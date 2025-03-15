import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-70 h-12"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/shreyas-saha" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Shreyas0017" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Shreyas17OP" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
      </a>
      <a href="https://www.instagram.com/shreyas17_op" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  </nav>
  );
}

export default Navbar
