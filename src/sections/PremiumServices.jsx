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
          Trusted automotive specialists in Kenya offering professional car key
          cutting and programming, GPS tracking installation, ECU repair, fleet
          management systems, and advanced vehicle security solutions for both
          personal and commercial vehicles.
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Car Key Cutting",
            description:
              "Professional car key cutting services for all vehicle makes and models in Kenya. We cut and duplicate lost, damaged, or spare car keys using advanced key-cutting machines to ensure accuracy, durability, and full compatibility with your vehicle.",
            image: "/images/carkeycutting.jpg",
            alt: "Professional car key cutting service in Kenya",
          },
          {
            title: "Car GPS Tracking Installation",
            description:
              "Expert car GPS tracking installation in Kenya with real-time vehicle location monitoring, geofencing alerts, speed tracking, and trip history. Ideal for theft prevention, vehicle monitoring, and improved driver accountability.",
            image: "/images/car-gps-tracking-installation.png",
            alt: "Car GPS tracking system installation in Kenya",
          },
          {
            title: "Fleet Management Systems",
            description:
              "Advanced fleet management and fuel monitoring systems for businesses in Kenya. Track vehicle locations, fuel consumption, driver behavior, and fleet performance in real time to reduce costs and improve operational efficiency.",
            image: "/images/fleetmanagement.jpg",
            alt: "Fleet management and fuel monitoring system in Kenya",
          },
          {
            title: "EGR Error Solution",
            description:
              "Reliable EGR error diagnostics and repair services for diesel vehicles. We identify and resolve Exhaust Gas Recirculation system faults to restore engine performance, improve fuel efficiency, and prevent recurring dashboard warning lights.",
            image: "/images/egr.jpg",
            alt: "EGR error repair service for diesel vehicles",
          },
          {
            title: "ECU Repair Services",
            description:
              "Professional ECU repair and diagnostics services for vehicles experiencing error codes, starting issues, or poor performance. Our advanced ECU solutions restore engine efficiency, reliability, and proper communication between vehicle systems.",
            image: "/images/ecurepair.jpg",
            alt: "Vehicle ECU repair and diagnostics service",
          },
          {
            title: "Catalytic Converter Error Solution",
            description:
              "Specialized catalytic converter error solutions through safe ECU software adjustments. We eliminate catalytic fault codes and limp-mode issues, ensuring smooth engine operation without recurring dashboard warnings.",
            image: "/images/catdelete.jpg",
            alt: "Catalytic converter error solution service",
          },
          {
            title: "DPF Error Solution",
            description:
              "Professional DPF error solutions designed to improve engine performance and fuel efficiency. We safely resolve Diesel Particulate Filter software errors, reducing blockages, warning lights, and engine power loss.",
            image: "/images/dpf.jpg",
            alt: "DPF error delete and diagnostics service",
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
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h2>
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
