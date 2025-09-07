import {
  Cloudy,
  Database,
  ShieldAlert,
  Home,
  User,
  Briefcase,
  FileText,
} from "lucide-react";

export const services = [
  {
    id: "managed",
    title: "Managed IT Services",
    subtitle: "Complete Infrastructure Management",
    description:
      "We provide proactive infrastructure management and technical support tailored to your operations.",
    features: [
      "Scalable support for SMEs and nonprofits",
      "Endpoint security and compliance",
      "Virtualization and Windows Server automation",
      "•	Hybrid cloud and on-premise networking",
      "24/7 Network Monitoring & Support",
    ],
    benefits: [
      "Reduced downtime and increased productivity",
      "Predictable IT costs with fixed monthly pricing",
      "Access to enterprise-level expertise",
      "Focus on core business while we handle IT",
    ],
    icon: Cloudy,
    // icon: "🖥️",
    image: "/images/ai.jpg",
  },
  {
    id: "csp",
    title: "Microsoft CSP Solutions",
    subtitle: "Scalable & Secure Cloud Infrastructure",
    description:
      "As a certified Microsoft Cloud Solution Provider, we help you harness the full power of Microsoft’s ecosystem.",
    features: [
      "Azure, Microsoft 365, and Dynamics 365 licensing",
      "Subscription management and consolidated billing",
      "Migration, security, and governance support",
      "Cloud architecture design and optimization",
      "Data backup and disaster recovery solutions",
      "Ongoing cloud performance monitoring",
    ],
    benefits: [
      "Streamlined IT management and support",
      "Access to expert guidance and best practices",
      "Improved operational efficiency",
      "Increased competitiveness in the market",
    ],
    icon: Database,
    // icon: "☁️",
    image: "/images/cloud.jpg",
  },
  {
    id: "ai",
    title: "AI Software Resale & Integration",
    subtitle: "",
    description:
      "We curate and resell intelligent software solutions from trusted partners and vendors.",
    features: [
      "AI-powered productivity and automation tools (TAAP)",
      "Integration into existing workflows and platforms",
      "Ethical deployment with community impact in mind",
      "Access to exclusive partner incentives",
      "Ongoing support and training",
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced decision-making capabilities",
      "Increased competitiveness in the market",
      "Access to cutting-edge technology solutions",
      "Scalable and flexible software options",
    ],
    icon: ShieldAlert,
    // icon: "🔒",
    image: "/images/ai.jpg",
  },
];

export const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Services", url: "#services", icon: Briefcase },
  { name: "About", url: "#about", icon: User },
  { name: "Contact", url: "#contact", icon: FileText },
];
