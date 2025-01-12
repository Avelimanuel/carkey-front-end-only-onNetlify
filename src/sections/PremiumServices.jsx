import React from "react";
import { motion } from "framer-motion";

const PremiumServices = () => {
  return (
    <section className="bg-gray-50 py-20 px-5">
      {/* Section Heading */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        className="text-center text-4xl font-extrabold text-gray-800 sm:text-5xl mb-10"
      >
        Our <span className="text-red-500">Premium Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "EGR Error Solution",
            description:
              "When we talk about upgrading vehicle performance, one of the most sought-after ECU tuning services is the EGR delete. In diesel engines, the Exhaust Gas Recirculation (EGR) system is one of the most important but also one of the most problematic components. We provide specialized solutions for resolving EGR errors. Our expert technicians use advanced diagnostic tools to accurately identify and fix EGR issues, ensuring that your vehicle runs smoothly and efficiently. Trust us to keep your engine performing at its best.",
            image: "/images/egr.jpg",
          },
          {
            title: "Catalytic Error Solution",
            description:
              "Removing a catalytic converter (CAT) may increase power and slightly decrease fuel consumption. On some vehicles, physically removing the CAT can eventually lead to an engine malfunction, causing the vehicle to enter safety or limp mode. We can resolve this issue on most vehicles by removing the CAT function from the engine control unit (ECU) software. This means the ECU will no longer recognize the catalytic converter, preventing the vehicle from entering safety mode or limp mode.",
            image: "/images/catdelete.jpg",
          },
          {
            title: "DPF Error Solution",
            description:
              "At CarKey Experts, we provide professional DPF (Diesel Particulate Filter) delete services directly from your vehicle's computer software. Our experienced technicians use advanced diagnostic tools to safely and effectively remove the DPF system from your vehicle's software, enhancing engine performance and fuel efficiency. This service is ideal for off-road or competition vehicles where regulations permit. Trust us to deliver a seamless DPF delete process that optimizes your vehicle's performance and reliability.",
            image: "/images/dpf.jpg",
          },
          {
            title: "Car Track Installation",
            description:
              "At CarKey Experts, we are dedicated to enhancing the security and convenience of your vehicle. We offer professional installation of advanced car tracking devices that provide real-time location tracking and comprehensive monitoring of your vehicle. Our state-of-the-art tracking systems ensure you always know where your car is, giving you peace of mind against theft and unauthorized use. With features like geofencing, speed alerts, and detailed trip history, our car tracking devices are designed to keep you informed and in control. Trust our experienced technicians to install your tracking device seamlessly and efficiently, ensuring optimal performance and security. Protect your investment and stay connected with our reliable car tracking solutions.",
            image: "/images/gpsmap.jpg",
          },
          {
            title: "Fleet Management Systems",
            description:
              "At CarKey Experts, we specialize in providing top-notch fleet and fuel management system installations to optimize your business operations. Our cutting-edge systems offer comprehensive monitoring and control over your entire fleet, allowing you to track vehicle locations, manage fuel consumption, and ensure driver efficiency. With our advanced technology, you can receive real-time data and analytics, helping you make informed decisions to reduce costs, improve productivity, and enhance overall fleet performance. Our expert technicians ensure a seamless installation process, customized to meet the specific needs of your business. Enhance your fleet management with our reliable and efficient solutions, and take control of your operational efficiency and fuel expenses like never before.",
            image: "/images/fleetmanagement.jpg",
          },
          {
            title: "Car Key Cutting",
            description:
              "We offer specialized car key cutting services to ensure you have a dependable key for any situation. Our team of professionals uses state-of-the-art tools to accurately cut keys for a wide range of vehicle makes and models. Whether you need an extra key, have lost your original, or need a complete replacement, we provide quick and effective solutions. Trust CarKey Experts for precise key cutting that guarantees you always have a perfectly functioning key when you need it.",
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
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="mt-20 space-y-16">
        {/* Car Alarm Installation */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <img
            src="/images/caralarm.jpg"
            alt="Car Alarm"
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Car Alarm Installation
            </h2>
            <p className="text-gray-600">
              We provide professional car alarm installation services to enhance
              the security of your vehicle. Our skilled technicians are
              experienced in installing advanced alarm systems that deter theft
              and provide peace of mind. We offer a range of high-quality alarm
              options tailored to fit various car makes and models, ensuring
              optimal protection. With our precise installation process, you can
              trust that your car's alarm system will function reliably and
              effectively. Choose CarKey Experts for top-notch car alarm
              installations that keep your vehicle safe and secure.
            </p>
          </div>
        </motion.div>

        {/* Car Key Battery Replacement */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-10"
        >
          <img
            src="/images/batteries.jpg"
            alt="Car Key Battery Replacement"
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Car Key Battery Replacement
            </h2>
            <p className="text-gray-600">
              We understand the inconvenience of a malfunctioning car key due to
              a dead or weak battery. That's why we offer fast and reliable car
              key battery replacement services to ensure your key fob is always
              functioning at its best. Our skilled technicians can quickly
              replace the battery in your car key, restoring its full
              functionality so you can get back on the road without delay. We
              use high-quality batteries to guarantee long-lasting performance.
              Visit us today for a hassle-free car key battery replacement
              experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-10"
        >
          <img
            src="/images/batteries.jpg"
            alt="Car Key Battery Replacement"
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ignition & door lock repair.
            </h2>
            <p className="text-gray-600">
              At CarKey Experts, we specialize in comprehensive ignition and
              door lock repair services for all car models. Our team of
              experienced technicians is equipped with the knowledge and tools
              to diagnose and fix a wide range of issues, from broken keys and
              jammed locks to malfunctioning ignition systems. Whether your car
              is a domestic model or a foreign make, we have the expertise to
              handle it all. We understand how crucial it is to have a fully
              functioning ignition and secure door locks, which is why we strive
              to provide prompt and reliable service. Our repairs are conducted
              with precision and care, using high-quality parts to ensure
              long-lasting results. At CarKey Experts, we are committed to
              getting you back on the road quickly and safely, with the peace of
              mind that your vehicle's security is intact. Trust us for all your
              ignition and door lock repair needs and experience the exceptional
              service that sets us apart.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;
