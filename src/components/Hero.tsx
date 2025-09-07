import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        // ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        // ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg.jpg')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-blue-900/90"></div>
      </motion.div>

      {/* content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-bold text-white mb-6 leading-tight"
          variants={titleVariants}
        >
          Empowering MSPs with AI Innovation
        </motion.h1>

        {/* Subline */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            <motion.span
              className="text-blue-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Scalable solutions.
            </motion.span>{" "}
            <motion.span
              className="text-purple-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Intelligent automation.
            </motion.span>{" "}
            <motion.span
              className="text-emerald-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Trusted support.
            </motion.span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in managed IT services, hybrid cloud
            architecture, and AI software solutions. We combine technical
            precision with community values to deliver scalable, secure, and
            future-proof systems for businesses and nonprofits across the UK.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.button
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
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/25"
            whileHover={{
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            <span>Book a Free Consultation</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
