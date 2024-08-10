import React from "react";

const OurCars = ({imgURL, label }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  shadow-3xl px-10 py-16">
      <div className=" flex  justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" width={100} height={100}  />
      </div>
      <h3 className="m-2 font-bold italic text-center">{label}</h3>
      
    </div>
  );
};

export default OurCars;
