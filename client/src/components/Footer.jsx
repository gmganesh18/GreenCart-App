import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { assets } from '../assets/assets.js'
import { SiX } from "react-icons/si";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-18 py-10 bg-gradient-to-b from-emerald-100/10 to-emerald-200">
        <div className="flex items-center ">
            <img className="hover:bg-emerald-100/40 p-2 rounded-2xl cursor-pointer" src={assets.logo} alt="logo" />
        </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-gray-700"> Copyright © 2025{" "}
            <a href="#" className="underline hover:text-emerald-900"> GreenCart </a>
            . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-5 text-2xl">
            <a href="https://www.instagram.com/gmganesh__18?igsh=MTZwMm5sMnE4NG5maQ==" className="hover:-translate-y-0.5 transition-all duration-300 text-purple-600" > <FaInstagram /> </a>
            <a href="https://www.linkedin.com/in/g-m-ganesh-20a031259" className="hover:-translate-y-0.5 transition-all duration-300 text-blue-400" > <FaLinkedinIn /> </a>
            <a href="https://x.com/gmganesh__18?t=wkk0nXIE_Be0JjBAKO5vcA&s=09" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-all duration-300 text-black"><SiX /></a>
            <a href="https://github.com/gmganesh18" className="hover:-translate-y-0.5 transition-all duration-300 text-gray-700" > <FaGithub /> </a>
        </div>
    </footer>
  );
}

export default Footer;
