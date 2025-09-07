import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group relative bg-[#1B263B] rounded-2xl p-8 h-[450px] max-w-[350px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#415A77] overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D1B2A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Icon container */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0D1B2A] rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-6 h-6 text-[#778DA9] group-hover:text-[#415A77]" />
        </div>
        <h3 className="text-xl font-semibold text-[#E0E1DD] mb-3">
          {service.title}
        </h3>
        <p className="text-[#778DA9] mb-6">{service.description}</p>
        <Link
          to={`/services/`}
          className="group/btn  text-white py-2 cursor-pointer font-semibold "
        >
          Learn More
          <ChevronRight className="inline-block w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ServiceCard;
