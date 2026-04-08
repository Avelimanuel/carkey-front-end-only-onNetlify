import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const images = [
  "https://images.unsplash.com/photo-1710006548781-eff5670376fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1761264889404-a194af20ae90?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710006548781-eff5670376fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1653032587043-937ba1eb6a3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1658244452559-feb8476fe49c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710006548777-bb4c5c159f86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // slow premium transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gray-900"
      role="banner"
      aria-label="Car Key Experts - Car Key Programming and Locksmith Services in Kenya"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${images[index]})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark premium overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-32 lg:py-48 text-center text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Car Key Programming & Locksmith Services in Kenya
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300"
        >
          Lost your car key or need a spare?{" "}
          <span className="text-white font-semibold">CarKey Experts</span>{" "}
          offers fast mobile car key replacement, programming, and emergency
          locksmith services across Kenya.
        </motion.h2>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Call */}
          <a
            href="tel:+254716884011"
            className="flex items-center gap-4 bg-yellow-500 text-black px-6 py-4 rounded-full shadow-xl hover:scale-105 transition"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              <FaPhoneVolume className="text-2xl" />
            </motion.div>
            <span className="text-xl font-bold">0716 884 011</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254716884011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl hover:scale-105 transition"
          >
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
