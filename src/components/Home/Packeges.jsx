import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Startup",
    price: "$100",
    deposit: "min. deposit",
    features: [
      "Spreads from 1.5 pips",
      "Zero Commission",
      "Leverage Up to 1:400",
      "24/7 Support",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    price: "$1,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 1 pips",
      "Zero Commission",
      "Leverage Up to 1:500",
      "24/7 Support",
    ],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "RT VIP",
    price: "$15,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 0.2 pips",
      "Low Commission",
      "Leverage Up to 1:500",
      "24/7 Support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();
  const cardReveal = {
    hidden: { opacity: 0, y: 110 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.18,
        duration: 1.05,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f5f9f6] to-white px-4 py-10 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto text-center max-w-7xl">

        {/* Heading */}
        <h2 className="reveal-up mb-3 text-2xl font-bold leading-tight text-[#014421] sm:mb-4 sm:text-4xl md:text-5xl">
          Choose Your Account
        </h2>

        <p className="reveal-up reveal-delay-1 mx-auto mb-7 max-w-2xl text-justify text-sm leading-6 text-gray-600 sm:mb-8 sm:text-center sm:text-base">
          Tailored trading conditions to suit every trader's style and experience level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={`
                account-plan-card
                group relative flex flex-col justify-between
                rounded-2xl p-5 sm:p-7 md:rounded-3xl md:p-8
                bg-[#fcfdfc] border border-[#dce9e1]
                shadow-md
                transition-all duration-500 ease-out

                ${plan.highlight ? "ring-2 ring-[#D4AF37]" : ""}
              `}
            >

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[#014421]/5 opacity-0 group-hover:opacity-100 transition duration-500 md:rounded-3xl"></div>

              {/* Badge */}
              {plan.badge && (
                <div className="account-popular-badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-3 py-1 text-[11px] font-semibold text-white shadow-lg sm:-top-4 sm:px-4 sm:py-1.5 sm:text-xs">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold leading-tight text-[#014421] sm:mb-5 sm:text-2xl">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4 sm:mb-7">
                  <span className="account-plan-price inline-block text-3xl font-extrabold leading-none text-gray-900 sm:text-4xl">
                    {plan.price}
                  </span>
                  <div className="mt-1 text-sm text-gray-500">
                    {plan.deposit}
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2.5 text-left sm:mb-10 sm:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#014421]/10 text-[#014421] text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="
                  button-shine
                  relative overflow-hidden
                  w-full rounded-xl py-3.5 sm:py-4
                  bg-[#014421] text-white
                  font-semibold text-sm sm:text-base
                  transition-all duration-300 ease-out

                  hover:scale-105 hover:shadow-xl hover:shadow-[#014421]/20
                  active:scale-95

                  before:absolute before:top-0 before:left-[-120%]
                  before:w-full before:h-full
                  before:bg-white/20
                  before:skew-x-12
                  hover:before:left-[120%]
                  before:transition-all before:duration-700
                "
              >
                Get Started
              </button>
            </motion.div>
          ))}
          
        </div>


        <div className="mt-6 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={() => navigate("/account-type")}
            className="
              group inline-flex items-center gap-2
              text-sm font-semibold text-[#014421]
              transition-colors duration-300
              hover:text-[#D4AF37]
              focus:outline-none focus-visible:text-[#D4AF37]
            "
          >
            See more
            <ArrowRight
              size={18}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>

      </div>

    </section>
  );
}
