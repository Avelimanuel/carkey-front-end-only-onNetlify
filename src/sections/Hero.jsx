import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1606128031531-52ae98c9707a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNhciUyMGtleXxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-800 bg-blend-multiply">
      <div className="px-6 mx-auto max-w-screen-xl text-center py-32 lg:py-48">
        {/* Heading */}
        <motion.h1
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
          }}
          className="mb-6 text-5xl font-bold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl"
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
            ease: "easeIn",
          }}
          className="mb-10 text-lg font-medium text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          Look no further! At CarKey Experts, we provide cutting-edge car key
          programming services to get you back on the road quickly and hassle-free.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 50 },
            opacity: { duration: 1 },
            ease: "easeOut",
          }}
          className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:justify-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <FaPhoneVolume className="text-white text-4xl lg:text-5xl" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              0716 884 011
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
