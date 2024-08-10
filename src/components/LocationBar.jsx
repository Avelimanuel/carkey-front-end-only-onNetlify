import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const LocationBar = () => {
  return (
    <div className='flex justify-center items-center bg-red-500 p-3 gap-5 text-white max-lg:flex-col'>
        <FaLocationDot/>
      <h1>Kiambu Road Near AAR Hospital</h1>
      <FaPhoneVolume/>
      <h1 className='font-extrabold'>0716 884 011</h1>
    </div>
  )
}

export default LocationBar
