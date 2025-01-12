import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  // Getting the current Year
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, y: { type: "spring", stiffness: 50 } }}
      className="bg-red-600 text-white py-8"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Section */}
        <div className="flex flex-wrap justify-between items-start gap-10 lg:flex-nowrap">
          {/* Services Section */}
          <div className="flex-1">
            <h1 className="text-lg font-bold underline mb-4">Our Services</h1>
            <ul className="space-y-2 text-sm">
              <li>Spare Key Programming</li>
              <li>All Keys Lost Programming</li>
              <li>Fleet & Fuel Management</li>
              <li>Car Computer Repair & Programming</li>
              <li>Car Tracking Devices</li>
              <li>Car Electronics & Wiring</li>
              <li>Car Alarms</li>
              <li>Dash Cameras</li>
              <li>Reverse Cameras</li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="flex-1">
            <h1 className="text-lg font-bold underline mb-4">Location</h1>
            <div className="flex items-center gap-2 mb-2">
              <FaLocationDot size={20} className="text-white" />
              <p className="text-sm">Along Kiambu Road Near AAR Hospital</p>
            </div>
            <p className="text-2xl font-bold mt-2">0716 884 011</p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-8 border-t border-red-500 pt-4">
          <h6 className="text-center text-sm">
            &copy; {currentYear} Car Key Experts. All rights reserved.{" "}
            <span className="text-blue-300 font-bold">
              Crafted By WebCraftersKE
            </span>
          </h6>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
