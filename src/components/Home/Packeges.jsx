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
    <section className="overflow-hidden bg-white border-b border-[#D3D3D3] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
          <span className="text-[#00674F] font-bold uppercase tracking-widest text-[11px]">Pricing Plans</span>
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
        </div>
        
        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          Match Your Trading Style
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          Account options designed around different capital levels, strategies, and market experience. Choose the tier that gives you the best edge.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={`
                group relative flex flex-col justify-between
                rounded-sm p-8
                border transition-all duration-500 ease-out

                ${plan.highlight 
                  ? "bg-[#00674F] border-[#00674F] shadow-2xl scale-105 z-10" 
                  : "bg-white border-[#D3D3D3] shadow-sm hover:border-[#00674F]/50"}
              `}
            >

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-sm bg-[#D3D3D3] px-4 py-1.5 text-[11px] font-bold text-[#00674F] shadow-md uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className={`mb-6 text-xl font-bold uppercase tracking-widest ${plan.highlight ? "text-[#D3D3D3]" : "text-[#00674F]"}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  <span className={`inline-block text-4xl font-extrabold leading-none ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <div className={`mt-2 text-xs font-semibold uppercase tracking-wider ${plan.highlight ? "text-[#D3D3D3]" : "text-gray-500"}`}>
                    {plan.deposit}
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-10 space-y-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4"
                    >
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${
                        plan.highlight ? "bg-[#D3D3D3] text-[#00674F]" : "bg-[#00674F]/10 text-[#00674F]"
                      }`}>
                        ✓
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? "text-white" : "text-gray-700"}`}>
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
                className={`
                  relative overflow-hidden w-full rounded-sm py-4
                  font-bold text-sm tracking-widest uppercase
                  transition-all duration-300 ease-out
                  ${plan.highlight 
                    ? "bg-[#D3D3D3] text-[#00674F] hover:bg-white" 
                    : "bg-[#00674F] text-white hover:bg-[#005541]"
                  }
                `}
              >
                Open Account
              </button>
            </motion.div>
          ))}
          
        </div>


        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/account-type")}
            className="
              group inline-flex items-center gap-2
              text-sm font-bold uppercase tracking-widest text-[#00674F]
              transition-colors duration-300 hover:text-[#004f3c]
            "
          >
            View all accounts
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>

      </div>

    </section>
  );
}
