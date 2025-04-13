import LocationBar from "./components/LocationBar";
import Nav from "./components/Nav";
import ServiceCard from "./components/OurCars";
import CarsWeWorkOn from "./sections/CarsWeWorkOn";
import React from "react";

import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PremiumServices from "./sections/PremiumServices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./sections/Services";
import WorkGalleryPage from "./pages/workgallery";

const App = () => {
  return (
    <Router>
      <main className="relative">
        <Nav />
        <LocationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="container mx-auto">
                  <Hero />
                </section>
                <section>
                  <Services />
                </section>
                <section>
                  <PremiumServices />
                </section>
                <section>
                  <Footer />
                </section>
              </>
            }
          />
          <Route path="/workgallery" element={<WorkGalleryPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
