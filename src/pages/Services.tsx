import Footer from "../components/Footer";
import { services } from "../constants/index";
import { Link } from "react-router-dom";
import ContactUsSection from "../components/ContactUsSection";

const Services = () => {
  return (
    <div className="bg-[#0d1b2a] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="fixed bg-[#1B263B] w-full px-4 py-4 border-b border-[#415A77]/20 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[#778DA9]">
          <Link
            to="/"
            className="hover:text-[#E0E1DD] transition-colors duration-300 flex items-center gap-2"
          >
            <span>Home</span>
            <span>/</span>
          </Link>
          <span className="text-[#E0E1DD]">Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E0E1DD] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of managed IT services designed to
            empower your business with cutting-edge technology solutions and
            expert support.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex gap-12 items-center mb-20`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-[#E0E1DD] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#415A77] font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-[#778DA9] text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[#E0E1DD] font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[#778DA9]"
                        >
                          <span className="text-[#415A77] mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#E0E1DD] font-semibold mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[#778DA9]"
                        >
                          <span className="text-[#415A77] mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      const contactForm = document.getElementById("contact");
                      const nameInput = document.querySelector(
                        "input[name='fullName']"
                      );
                      if (contactForm) {
                        contactForm.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        if (nameInput instanceof HTMLInputElement) {
                          setTimeout(() => nameInput.focus(), 800);
                        }
                      }
                    }}
                    className="bg-[#415A77] hover:bg-[#778DA9] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Get Started with {service.title}
                  </button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 max-w-md rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      {/* <div className="bg-gradient-to-r from-[#415A77] to-[#778DA9] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-[#E0E1DD] mb-8">
            Let's discuss how our services can help your business thrive in the
            digital age.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                const contactForm = document.getElementById("contact");
                const nameInput = document.querySelector("input[name='fullName']");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
                  if (nameInput instanceof HTMLInputElement) {
                    setTimeout(() => nameInput.focus(), 800);
                  }
                }
              }}
              className="bg-white text-[#415A77] px-8 py-3 rounded-lg font-semibold hover:bg-[#E0E1DD] transition-colors duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div> */}

      {/* Contact Form */}
      <div id="contact">
        <ContactUsSection />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
