import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Highly subtle and professional institutional easing
const institutionalEasing = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: institutionalEasing } 
  }
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, ease: institutionalEasing } 
  }
};

export default function AboutUs() {
  return (
    <section className="bg-white py-12 lg:py-16 font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="order-2 lg:order-1 relative rounded-sm overflow-hidden border border-gray-200 shadow-sm"
          >
            <motion.img
              transition={{ duration: 0.8, ease: institutionalEasing }}
              src="/image1.png"
              alt="Institutional trading environment"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f16]/90 to-transparent pointer-events-none"></div>
            <motion.div 
              variants={fadeUpVariants}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/95 border border-gray-200 rounded-sm p-5 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-1">Refined Trading Environment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Engineered for speed, clarity, and institutional-grade control.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#00674F]"></span>
              <span className="text-[#00674F] font-semibold uppercase tracking-widest text-[11px]">Corporate Overview</span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Inside VeltriumFX
            </motion.h2>
            
            <motion.div variants={fadeUpVariants} className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gray-900 font-semibold">VeltriumFX</strong> brings market access, execution technology, and client support together in one refined trading environment. The experience is built for traders who value speed, clarity, and control across global instruments.
              </p>
              <p>
                From transparent pricing to practical platform tools, every detail is shaped to help you plan carefully, respond faster, and trade with greater confidence.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mt-8">
              <Link
                to="/why-us"
                className="inline-flex items-center justify-center bg-[#00674F] text-white px-8 py-3 rounded-sm font-semibold text-sm transition-colors hover:bg-[#004f3c] border border-[#00674F]"
              >
                Explore Our Story
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
