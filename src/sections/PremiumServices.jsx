import React from "react";
import { motion } from "framer-motion";

const PremiumServices = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 py-10 px-5">
      {/* Section Heading */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        className="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl"
      >
        Our <span className="text-red-500">Premium Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Card */}
        {[
          {
            title: "EGR Error Solution",
            description:
              "We provide specialized solutions for resolving exhaust gas recirculation (EGR) errors. Our expert technicians use advanced tools to ensure your vehicle runs smoothly.",
            image: "/images/egr.jpg",
          },
          {
            title: "Catalytic Error Solution",
            description:
              "We can remove the catalytic converter function from your ECU, ensuring optimal vehicle performance while avoiding engine malfunctions or limp mode.",
            image: "/images/catdelete.jpg",
          },
          {
            title: "DPF Error Solution",
            description:
              "Our DPF delete services optimize engine performance and fuel efficiency for off-road or competition vehicles. Get expert solutions tailored to your needs.",
            image: "/images/dpf.jpg",
          },
          {
            title: "Car Track Installation",
            description:
              "We install advanced car tracking devices with real-time location tracking, geofencing, and detailed trip histories to enhance security and convenience.",
            image: "/images/gpsmap.jpg",
          },
          {
            title: "Fleet Management Systems",
            description:
              "Optimize your business operations with fleet and fuel management systems. Monitor locations, manage fuel, and enhance productivity with real-time analytics.",
            image: "/images/fleetmanagement.jpg",
          },
          {
            title: "Car Key Cutting",
            description:
              "Need an extra car key or a replacement? Our precise car key cutting services ensure dependable keys for all situations.",
            image: "/images/carkeycutting.jpg",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, type: "spring", stiffness: 80 }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="mt-16 space-y-12">
        {/* Car Alarm Installation */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          <img
            src="/images/caralarm.jpg"
            alt="Car Alarm"
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Car Alarm Installation
            </h2>
            <p className="text-gray-600">
              Enhance your vehicle’s security with professional car alarm
              installations. We offer tailored solutions to deter theft and
              provide peace of mind.
            </p>
          </div>
        </motion.div>

        {/* Car Key Battery Replacement */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
        >
          <img
            src="/images/batteries.jpg"
            alt="Car Key Battery Replacement"
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Car Key Battery Replacement
            </h2>
            <p className="text-gray-600">
              Don’t let a dead car key battery leave you stranded. We offer fast
              and reliable battery replacement services to keep you on the road.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;
