// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="py-20 bg-[#E0E1DD] text-[#0d1b2a] text-center">
      <div className="">
        <div className="inline-flex">
          <img src="/logo.png" alt="Intzom logo" className="w-18 h-18" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-600">About us</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
        </nav>

        <p className="mt-6 text-sm">
          Intzom &copy; 2025 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
