import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";
import { navItems, services } from "../constants/index";
import MainNavigation from "../components/MainNavigation";

const Home = () => {
  return (
    <div id="home" className="bg-[#0d1b2a]">
      <MainNavigation items={navItems} />

      <Hero />

      {/* Services section */}
      <section id="services" className="py-12">
        <div className="p-4 mb-4">
          <h2 className="text-3xl text-center font-bold text-[#E0E1DD] max-w-2xl mx-auto mb-1">
            Our Services
          </h2>
          <p className="text-center text-[#778DA9] max-w-2xl mx-auto mb-4">
            Discover our range of managed IT services designed to empower your
            business.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* About section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Contact Us section */}
      <div id="contact">
        <ContactUsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
