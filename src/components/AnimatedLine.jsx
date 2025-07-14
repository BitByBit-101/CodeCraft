import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedLine = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,      // It can reverse on scroll up
    threshold: 0.4,          // Triggers when 40% of the line is visible
  });

  return (
    <div ref={ref} className="relative w-full h-0.5 bg-transparent overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-full bg-orange-600"
      />
    </div>
  );
};

export default AnimatedLine;
