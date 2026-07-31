
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, y: { type: "spring", stiffness: 50 } }}
      className="bg-red-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          
          {/* Services Section */}
          <div>
            <h2 className="text-lg font-semibold underline mb-4">
              Car Key & Auto Security Services
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              <li>
                <a href="/spare-key-programming" className="hover:underline">
                  Spare Key Programming
                </a>
              </li>
              <li>
                <a href="/all-keys-lost" className="hover:underline">
                  All Keys Lost Programming
                </a>
              </li>
              <li>DPF Delete</li>
              <li>
                <a href="/car-unlocking" className="hover:underline">
                  Car Door Unlocking
                </a>
              </li>
              <li>Fleet & Fuel Management</li>
              <li>Car Computer Repair</li>
              <li>Car Tracking Devices</li>
              <li>Car Electronics & Wiring</li>
              <li>Car Alarm Installation</li>
              <li>Dash Cameras</li>
              <li>Reverse Cameras</li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-lg font-semibold underline mb-4">
              Visit or Call Car Key Experts
            </h2>

            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-3">
                <FaLocationDot size={22} className="mt-1" />
                <span>
                  Along Kiambu Road, Near AAR Hospital, <br />
                  Nairobi, Kenya
                </span>
              </div>
            </address>

            <p className="text-sm mt-4 leading-relaxed">
              We provide professional car key programming, replacement,
              unlocking, and vehicle security services across Nairobi and
              allover kenya.
            </p>

            <div className="mt-5">
              <a
                href="tel:+254714615233"
                className="inline-block text-2xl font-bold tracking-wide hover:underline"
              >
                0714 615 233
              </a>
              <p className="text-xs mt-1 opacity-90">
                Call us for fast assistance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-red-500 pt-5 text-center text-sm">
          <p>
            &copy; {currentYear}{" "}
            <strong>Car Key Experts Kenya</strong>. All rights reserved.
          </p>
          <p className="mt-1 text-blue-200 font-semibold">
            Crafted By WebCraftersKE
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
