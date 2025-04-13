import React from "react";
import { workGallery } from "../lib/jsondata";
import Footer from "../sections/Footer";

const WorkGalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          <span className="relative">
            Our Work Gallery
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full"></span>
          </span>
        </h2>

        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workGallery.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkGalleryPage;
