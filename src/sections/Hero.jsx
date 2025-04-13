import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=1080&auto=format&fit=crop&q=80')] bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-overlay">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-32 lg:py-48 text-center text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-xl"
        >
          Lost Your Car Key or Need a Spare?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 font-medium"
        >
          Look no further! At <span className="text-white font-semibold">CarKey Experts</span>, we provide cutting-edge car key programming services to get you back on the road quickly and hassle-free. We program all car keys and we’re mobile—we come to you!
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <div className="flex items-center gap-4 bg-yellow-500 text-black px-6 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <FaPhoneVolume className="text-2xl" />
            <span className="text-xl font-bold">0716 884 011</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
