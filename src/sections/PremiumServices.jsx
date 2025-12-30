import React from "react";
import { motion } from "framer-motion";

const PremiumServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="bg-white py-20 px-4 sm:px-6 lg:px-20"
      aria-labelledby="premium-services-heading"
    >
      {/* Section Header */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          id="premium-services-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900"
        >
          Premium Automotive Services in Kenya
        </motion.h1>

        <p className="mt-4 text-lg text-gray-600">
          Professional car key programming, GPS tracking installation, ECU
          repair, and advanced vehicle security solutions.
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Car Key Cutting",
            description:
              "Precision car key cutting for all vehicle makes. Ideal for lost keys, spare keys, and replacements using advanced equipment.",
            image: "/images/carkeycutting.jpg",
            alt: "Professional car key cutting service in Kenya",
          },
          {
            title: "Car GPS Tracking Installation",
            description:
              "Real-time vehicle tracking with geofencing, speed alerts, and trip history for enhanced security.",
            image: "/images/car-gps-tracking-installation.png",
            alt: "Car GPS tracking system installation",
          },
          {
            title: "Fleet Management Systems",
            description:
              "Monitor fuel usage, vehicle location, and driver efficiency with our advanced fleet management solutions.",
            image: "/images/fleetmanagement.jpg",
            alt: "Fleet management and fuel monitoring system",
          },
          {
            title: "EGR Error Solution",
            description:
              "Professional EGR diagnostics and error resolution for diesel vehicles to restore performance.",
            image: "/images/egr.jpg",
            alt: "EGR error repair service for diesel engines",
          },
          {
            title: "ECU Repair Services",
            description:
              "Advanced ECU diagnostics and repairs to fix error codes and restore engine performance.",
            image: "/images/ecurepair.jpg",
            alt: "Vehicle ECU repair and diagnostics service",
          },
          {
            title: "Catalytic Converter Error Solution",
            description:
              "ECU software solutions to eliminate catalytic errors without triggering limp mode.",
            image: "/images/catdelete.jpg",
            alt: "Catalytic converter error solution",
          },
          {
            title: "DPF Error Solution",
            description:
              "DPF software solutions for improved engine performance and fuel efficiency.",
            image: "/images/dpf.jpg",
            alt: "DPF error delete service",
          },
        ].map((service, index) => (
          <motion.article
            key={index}
            {...fadeIn}
            viewport={{ once: true }}
            className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default PremiumServices;
