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
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        ref={featuresRef}
        variants={fadeInUp}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <FeaturesSection />
      </motion.div>
      <motion.div
        ref={testimonialsRef}
        variants={fadeInUp}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <TestimonialsSection />
      </motion.div>
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
