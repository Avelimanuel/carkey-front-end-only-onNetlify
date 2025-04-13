import { motion } from "framer-motion";
import React from 'react';


const Services = () => {
  const fadein = {
    initial: { opacity: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <section className="py-10 px-6 lg:px-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
      </div>

      {/* Lost Key Services Section */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="flex flex-col items-center max-w-lg text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Lost Key Services
          </h2>
          <motion.p {...fadein} className="text-gray-700 leading-6">
            At <span className="text-red-500">CarKeyExperts</span>, we
            understand how frustrating and stressful it can be to lose your car
            keys. That's why we offer comprehensive{" "}
            <span className="text-red-500">lost car key services</span> to get
            you back on the road quickly and efficiently. Our team of skilled
            auto locksmiths is equipped with the latest technology to{" "}
            <span className="text-red-600">
              cut and program new keys for all car makes and models on the spot.
            </span>{" "}
            Whether your key is lost, stolen, or damaged, we provide emergency
            mobile locksmith services to reach you wherever you are. With our
            fast, reliable, and affordable service, you can trust CarKeyExperts
            to provide the solution you need with minimal disruption to your
            day. Contact us today for professional assistance.
          </motion.p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="h-72 w-80 border-2 border-red-400 rounded overflow-hidden shadow-lg"
        >
          <motion.img
            src="/images/lexuslostkey.jpg"
            className="h-full w-full object-cover object-center"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>

      {/* Spare Key Services Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="h-72 w-80 border-2 border-red-400 rounded overflow-hidden shadow-lg"
        >
          <motion.img
            src="/images/cx5.png"
            className="h-full w-full object-cover object-center"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
        <div className="flex flex-col items-center max-w-lg text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Spare Key Services
          </h2>
          <motion.p {...fadein} className="text-gray-700 leading-6">
            We offer reliable spare key services to ensure you
            always have a backup for your vehicle. Our expert technicians can
            quickly and accurately cut and program additional keys for all car
            makes and models, providing you with the convenience and peace of
            mind that comes with having a spare. Contact CarKeyExperts today to
            get your spare key made swiftly and professionally.
          </motion.p>
        </div>
      </div>

      {/* Emergency Car Door Unlocking Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
        <div className="flex flex-col items-center max-w-lg text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Emergency Car Door Unlocking
          </h2>
          <motion.p {...fadein} className="text-gray-700 leading-6">
            At CarKey Experts, we understand how frustrating and stressful it
            can be to find yourself locked out of your vehicle, especially when
            your keys are lost or accidentally left inside the car. That's why
            we offer fast and reliable emergency car door unlocking services to
            get you back in your vehicle as quickly as possible. Our skilled
            technicians are equipped with the latest tools and techniques to
            safely and efficiently unlock any car model without causing damage.
            Whether it's a simple lockout or a more complex situation, you can
            count on us for prompt, professional service, ensuring you're never
            stuck for long. Let us help you regain access to your car, no matter
            the time or place.
          </motion.p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="h-72 w-80 border-2 border-red-400 rounded overflow-hidden shadow-lg"
        >
          <motion.img
            src="/images/emergencydoorunlocking.jpg"
            className="h-full w-full object-cover object-center"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
