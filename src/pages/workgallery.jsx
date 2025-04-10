import React from "react";
import { workGallery } from "../lib/jsondata";

const WorkGalleryPage = () => {
  return (
    <div className="px-4 py-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        Our Work Gallery
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {workGallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
              src={item.image}
              alt={item.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                We specialize in high-quality car key programming and repair
                services. Each job is done with precision and care.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkGalleryPage;
