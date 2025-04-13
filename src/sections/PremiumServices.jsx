import React from "react";
import { motion } from "framer-motion";

const PremiumServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideIn = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12"
      >
        Our <span className="text-red-600">Premium Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Car Key Cutting",
            description:
              "Our specialized car key cutting services ensure you have a reliable key for any situation. Using advanced tools, our professionals cut keys for all vehicle makes and models with precision. Whether you need a spare, lost your original, or require a replacement, we deliver fast, effective solutions for a perfectly functioning key.",
            image: "/images/carkeycutting.jpg",
          },
          {
            title: "Car Track Installation",
            description:
              "Enhance your vehicle's security with our advanced car tracking systems. We install state-of-the-art devices offering real-time location tracking, geofencing, speed alerts, and trip history. Our expert technicians ensure seamless installation for optimal performance, giving you peace of mind against theft and unauthorized use.",
            image: "/images/gpsmap.jpg",
          },
          {
            title: "Fleet Management Systems",
            description:
              "Optimize your business with our fleet and fuel management system installations. Monitor vehicle locations, fuel consumption, and driver efficiency with real-time data and analytics. Our customized solutions help reduce costs and boost productivity, with expert installation tailored to your business needs.",
            image: "/images/fleetmanagement.jpg",
          },
          {
            title: "EGR Error Solution",
            description:
              "Resolve EGR issues with our expert solutions. The Exhaust Gas Recirculation system in diesel engines can be problematic. Using advanced diagnostics, we fix EGR errors to ensure smooth, efficient vehicle performance, keeping your engine at its best.",
            image: "/images/egr.jpg",
          },
          {
            title: "ECU Repair",
            description:
              "Our professional ECU repair services address issues like poor performance or error codes. We use advanced diagnostics to repair your vehicle's Engine Control Unit, restoring optimal functionality. Trust us to get your car back to peak performance quickly and reliably.",
            image: "/images/ecurepair.jpg",
          },
          {
            title: "Catalytic Error Solution",
            description:
              "Removing a catalytic converter can boost power but may cause engine issues. We resolve this by disabling the CAT function in the ECU software, preventing safety or limp mode. Our solution ensures your vehicle runs smoothly without errors.",
            image: "/images/catdelete.jpg",
          },
          {
            title: "DPF Error Solution",
            description:
              "Our DPF delete services enhance engine performance and fuel efficiency by removing the Diesel Particulate Filter from your vehicle's software. Ideal for off-road or competition vehicles, our expert technicians ensure a seamless process for optimal reliability.",
            image: "/images/dpf.jpg",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            {...fadeIn}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto mt-20 space-y-20">
        {/* Car Alarm Installation */}
        <motion.div
          {...slideIn}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/images/caralarm.jpg"
            alt="Car Alarm"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Car Alarm Installation
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Protect your vehicle with our professional car alarm installation services. Our skilled technicians install advanced systems to deter theft, tailored to your car's make and model. Enjoy peace of mind with reliable, high-quality alarms and our precise installation process.
            </p>
          </div>
        </motion.div>

        {/* Car Key Battery Replacement */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/images/batteries.jpg"
            alt="Car Key Battery Replacement"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Car Key Battery Replacement
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Don’t let a dead key fob slow you down. Our fast, reliable car key battery replacement service restores full functionality quickly. Using high-quality batteries, our technicians ensure long-lasting performance for your convenience.
            </p>
          </div>
        </motion.div>

        {/* Ignition & Door Lock Repair */}
        <motion.div
          {...slideIn}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/images/ignitionlock.jpg"
            alt="Ignition & Door Lock Repair"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ignition & Door Lock Repair
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              We specialize in ignition and door lock repairs for all car models. Our expert technicians diagnose and fix issues like broken keys, jammed locks, or faulty ignitions with precision, using high-quality parts to ensure security and reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;