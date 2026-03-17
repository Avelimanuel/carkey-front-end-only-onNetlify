import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="relative bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=1080&auto=format&fit=crop&q=80')] bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-overlay"
      role="banner"
      aria-label="Car Key Experts - Car Key Programming and Locksmith Services in Kenya"
    >
      {/* SEO Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-32 lg:py-48 text-center text-white">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-xl"
        >
          Car Key Programming & Locksmith Services in Kenya
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 font-medium"
        >
          Lost your car key or need a spare?{" "}
          <span className="text-white font-semibold">CarKey Experts</span>{" "}
          offers professional car key replacement, programming, and emergency
          locksmith services across Nairobi and Kenya. We’re mobile—so we come
          to you fast!
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Phone Button */}
          <a
            href="tel:+254716884011"
            className="flex items-center gap-4 bg-yellow-500 text-black px-6 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            aria-label="Call CarKey Experts"
          >
            <motion.div
              animate={{
                x: [0, -2, 2, -2, 2, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <FaPhoneVolume className="text-2xl" />
            </motion.div>
            <span className="text-xl font-bold">0716 884 011</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254716884011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.11.55 4.17 1.6 6L0 24l6.25-1.63a12.08 12.08 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.46-8.39ZM12.05 22a10.1 10.1 0 0 1-5.15-1.41l-.37-.22-3.71.96 1-3.62-.24-.37a10.1 10.1 0 1 1 8.47 4.66Zm5.49-7.61c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.07 1.04-1.07 2.54 0 1.49 1.1 2.94 1.26 3.14.15.2 2.17 3.32 5.26 4.66.74.32 1.31.51 1.76.65.74.23 1.42.2 1.95.12.6-.09 1.79-.73 2.04-1.43.25-.7.25-1.29.17-1.43-.08-.14-.28-.22-.58-.37Z" />
            </svg>

            <span className="text-xl font-semibold">Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
