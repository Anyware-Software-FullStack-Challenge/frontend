import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Home = () => {
  // For Features
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  // For Testimonials
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  // For Contact
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section animates in on mount */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>
      {/* Features Section animates in on scroll */}
      <motion.div
        ref={featuresRef}
        variants={fadeInUp}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <FeaturesSection />
      </motion.div>
      {/* Testimonials Section animates in on scroll */}
      <motion.div
        ref={testimonialsRef}
        variants={fadeInUp}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <TestimonialsSection />
      </motion.div>
      {/* Contact Section animates in on scroll */}
      <motion.div
        ref={contactRef}
        variants={fadeInUp}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <ContactSection />
      </motion.div>
    </>
  );
};

export default Home;
