// LocationBar.js
import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LocationBar = () => {
  return (
    <div className="flex justify-center items-center bg-red-500 p-3 gap-5 text-white max-lg:flex-col">
      <FaLocationDot />
      <h1>Kiambu Road Near AAR Hospital</h1>
      <h3 className="text-black">We Are Mobile, We Can Come To You</h3>
      
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
      <h3 className="font-bold text-sm">Open 24/7</h3>

      
      <Link to="/workgallery" className="font-extrabold text-2xl">
        Work Gallery
      </Link>
    </div>
  );
};

export default LocationBar;
