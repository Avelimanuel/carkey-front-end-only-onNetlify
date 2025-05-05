import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, x: 50 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
    hover: { scale: 1.03 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Expert solutions for all your car key and lock needs.
          </p>
        </motion.div>

        {/* Lost Key Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Lost Key Services
            </h2>
            <motion.p
              {...fadeIn}
              className="text-gray-700 leading-relaxed text-lg"
            >
              At{" "}
              <span className="font-semibold text-red-500">CarKeyExperts</span>,
              we know losing your car keys can be a hassle. Our{" "}
              <span className="font-semibold text-red-500">
                lost car key services
              </span>{" "}
              are designed to get you back on the road fast. Equipped with
              cutting-edge technology, our skilled locksmiths can{" "}
              <span className="font-semibold text-red-600">
                cut and program new keys
              </span>{" "}
              for any vehicle on the spot. Whether your keys are lost, stolen,
              or damaged, our emergency mobile locksmiths are ready to assist
              you anywhere, anytime. Trust us for quick, reliable, and
              affordable solutions with minimal disruption.
            </motion.p>
          </div>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="whileInView"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <motion.img
              src="/images/lexuslostkey.jpg"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Spare Key Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={imageVariants}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover="hover"
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <motion.img
              src="/images/cx5.png"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Spare Key Services
            </h2>
            <motion.p
              {...fadeIn}
              className="text-gray-700 leading-relaxed text-lg"
            >
              Stay prepared with our reliable spare key services. Our expert
              technicians can quickly cut and program additional keys for any
              vehicle, ensuring you always have a backup. With{" "}
              <span className="font-semibold text-red-500">CarKeyExperts</span>,
              enjoy the peace of mind and convenience that comes with a spare
              key, crafted swiftly and professionally.
            </motion.p>
          </div>
        </div>

        {/* Emergency Car Door Unlocking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Emergency Car Door Unlocking
            </h2>
            <motion.p
              {...fadeIn}
              className="text-gray-700 leading-relaxed text-lg"
            >
              Locked out of your car?{" "}
              <span className="font-semibold text-red-500">CarKeyExperts</span>{" "}
              offers fast and reliable emergency car door unlocking services.
              Whether your keys are lost or left inside, our skilled technicians
              use advanced tools to unlock any vehicle safely and without
              damage. Count on us for prompt, professional service to get you
              back on your way, no matter the time or place.
            </motion.p>
          </div>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="whileInView"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <motion.img
              src="/images/emergencydoorunlocking.jpg"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={imageVariants}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover="hover"
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <motion.img
              src="/images/cx5.png"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={imageVariants}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover="hover"
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <motion.img
              src="/images/keyupgrade.jpg"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Car Key Upgrade
            </h2>
            <motion.p
              {...fadeIn}
              className="text-gray-700 leading-relaxed text-lg"
            >
              Give your car a modern touch with our car key upgrade services.
              Whether you're switching to a flip key, smart key, or adding
              remote locking features, our technicians ensure a seamless upgrade
              process. At{" "}
              <span className="font-semibold text-red-500">CarKeyExperts</span>,
              we enhance your convenience and security with professionally
              upgraded keys tailored to your vehicle.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
