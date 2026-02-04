import React from "react";
import { workGallery } from "../lib/jsondata";
import Footer from "../sections/Footer";

const WorkGalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-16">
        {/* SEO H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-tight">
          Car Key Programming & Auto Security Work Gallery
        </h1>

        {/* SEO Intro Text */}
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-base md:text-lg mb-14 leading-relaxed">
          Explore real projects completed by <strong>Car Key Experts Kenya</strong>.
          This gallery showcases our professional car key programming, lost car key
          replacement, car unlocking, vehicle tracking installation, and automotive
          electronics work across <strong>Nairobi and surrounding areas</strong>.
        </p>

        {/* Gallery Grid */}
        <section
          aria-label="Car Key Experts completed projects gallery"
          className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {workGallery.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                  alt={`${item.title} – Car Key Experts Nairobi`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* SEO Supporting Text */}
        <section className="max-w-4xl mx-auto mt-20 text-gray-600 text-sm leading-relaxed">
          <p>
            Each project in this gallery reflects our hands-on experience in
            modern vehicle security systems, smart key programming, car computer
            diagnostics, and automotive electronics installations. We use
            professional tools and industry-approved methods to ensure safe and
            reliable results for every vehicle we work on.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkGalleryPage;
