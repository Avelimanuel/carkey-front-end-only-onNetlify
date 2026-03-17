// LocationBar.js
import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LocationBar = () => {
  return (
    <div className="flex justify-center items-center bg-red-500 p-3 gap-5 text-white max-lg:flex-col">
      <FaLocationDot />
      <h1>Location : Kiambu Road - Nairobi Kenya</h1>
      <h3 className="text-black font-bold text-2xl">We Are Mobile, We Can Come To You</h3>

      <a
        href="tel:+254716884011"
        className="flex items-center gap-4  text-black px-6 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        aria-label="Call CarKey Experts"
      >
        <motion.div
          animate={{
            x: [0, -2, 2, -2, 2, 0], // back and forth
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FaPhoneVolume className="text-2xl" />
        </motion.div>
        <span className="font-bold">0716 884 011</span>
      </a>
      <h3 className="font-bold text-sm">Open 24/7 mobile service</h3>
      <a
        href="https://wa.me/254716884011"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.11.55 4.17 1.6 6L0 24l6.25-1.63a12.08 12.08 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.46-8.39ZM12.05 22a10.1 10.1 0 0 1-5.15-1.41l-.37-.22-3.71.96 1-3.62-.24-.37a10.1 10.1 0 1 1 8.47 4.66Zm5.49-7.61c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.07 1.04-1.07 2.54 0 1.49 1.1 2.94 1.26 3.14.15.2 2.17 3.32 5.26 4.66.74.32 1.31.51 1.76.65.74.23 1.42.2 1.95.12.6-.09 1.79-.73 2.04-1.43.25-.7.25-1.29.17-1.43-.08-.14-.28-.22-.58-.37Z" />
        </svg>

        <span className="text-lg font-semibold">WhatsApp</span>
      </a>

      <Link to="/workgallery" className="font-extrabold text-2xl">
        Work Gallery
      </Link>
    </div>
  );
};

export default LocationBar;
