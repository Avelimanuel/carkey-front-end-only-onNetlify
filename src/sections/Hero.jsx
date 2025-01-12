import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNhciUyMGtleXxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-900 bg-blend-overlay">
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      <div className="relative px-6 mx-auto max-w-screen-xl text-center py-32 lg:py-48">
        {/* Heading */}
        <motion.h1
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.8 },
          }}
          className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg"
        >
          Lost Your Car Key or Need a Spare?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.8 },
          }}
          className="mb-10 text-lg font-medium text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          Look no further! At <span className="text-white font-semibold">CarKey Experts</span>, we provide cutting-edge car key programming services to get you back on the road quickly and hassle-free. 
          We program all car keys, and we are mobile—we can come to your location.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 50 },
            opacity: { duration: 1 },
          }}
          className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:justify-center"
        >
          <div className="flex items-center justify-center space-x-4 group">
            <FaPhoneVolume className="text-white text-4xl lg:text-5xl group-hover:text-yellow-500 transition duration-300 ease-in-out" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white group-hover:text-yellow-500 transition duration-300 ease-in-out">
              0716 884 011
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
