// LocationBar.js
import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LocationBar = () => {
  return (
    <div className="flex justify-center items-center bg-red-500 p-3 gap-5 text-white max-lg:flex-col">
      <FaLocationDot />
      <h1>Kiambu Road Near AAR Hospital</h1>
      <FaPhoneVolume />
      <h1 className="font-extrabold">0716 884 011</h1>
      <Link to="/" className="font-extrabold ">
        Home </Link>

      
      <Link to="/workgallery" className="font-extrabold text-2xl">
        Work Gallery
      </Link>
    </div>
  );
};

export default LocationBar;
