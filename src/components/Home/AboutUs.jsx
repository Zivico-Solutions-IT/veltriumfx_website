import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, y: 90, scale: 0.92, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      className="reveal-section relative bg-[#f5f6f7] px-4 py-10 sm:px-6 sm:py-12 md:py-12 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.28 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
        {/* Image */}
        <motion.div
          variants={imageReveal}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="button-shine relative overflow-hidden rounded-xl shadow-lg shadow-black/10 md:order-2"
        >
          <img
            src="/image1.png"
            alt="Laptop with code"
            className="h-48 w-full rounded-lg object-cover transition-transform duration-700 hover:scale-105 sm:h-72 md:h-[420px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-xl text-center md:order-1 md:mx-0 md:justify-self-start md:text-left"
        >
          
          <h2 className="text-2xl font-medium leading-tight text-gray-900 sm:text-4xl">
            Discover NOVAFXM
          </h2>

          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#014421] sm:mt-4 sm:w-16 md:mx-0"></div>

          <p
  className="
    mt-4
    max-w-3xl
    text-justify
    text-sm
    leading-7
    text-gray-600

    sm:mt-5
    sm:text-base
    sm:leading-relaxed

    md:text-lg
    md:leading-loose
    md:text-justify
  "
>
  We are a technology-driven broker committed to providing exceptional
  trading conditions. Our platform bridges the gap between retail and
  institutional trading, offering unparalleled access to global financial
  markets.
</p>
          <p className="mt-4 text-justify text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg">
            Built by traders for traders, our mission is to empower your financial decisions with
            cutting-edge tools, transparent pricing and robust security.
          </p>

          <div className="mt-5 flex justify-center sm:mt-6 md:justify-start">
            <Link
              to="/why-us"
              className="button-shine inline-flex  items-center justify-center rounded-full bg-[#014421] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg sm:text-base"
            >
              More About Us 
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
