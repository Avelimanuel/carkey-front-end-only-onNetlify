import LocationBar from "./components/LocationBar";
import Nav from "./components/Nav";
import ServiceCard from "./components/OurCars";
import CarsWeWorkOn from "./sections/CarsWeWorkOn";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PremiumServices from "./sections/PremiumServices";
import Services from "./sections/Services";


const App = () =>{
  return (
    <main className="relative">
      <Nav />
      <LocationBar/>
      <section className="container mx-auto">
        <Hero/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <PremiumServices/>
      </section>

      <section>
        
      </section>
      
      <section>
        <Footer/>
      </section>
     
    </main>
  );
}

export default App
