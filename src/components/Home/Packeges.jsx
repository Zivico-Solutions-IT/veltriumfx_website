import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Standard Account",
    price: "$200",
    deposit: "min. deposit",
    features: [
      "Spreads from 1.3 pips",
      "No Commission",
      "Leverage Up to 1:400",
      "24/7 Support",
    ],
    highlight: false,
  },
  {
    name: "Gold Account",
    price: "$5,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 0.8 pips",
      "No Commission",
      "Leverage Up to 1:500",
      "24/7 Support",
    ],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "VVIP Account",
    price: "$15,000",
    deposit: "min. deposit",
    features: [
      "Spreads from 0.2 pips",
      "No Commission",
      "Leverage Up to 1:500",
      "24/7 Support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f5f9f6] to-white px-4 py-10 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto text-center max-w-7xl">

        {/* Heading */}
        <h2 className="reveal-up mb-3 text-2xl font-bold leading-tight text-[#00674F] sm:mb-4 sm:text-4xl md:text-5xl">
          Match Your Trading Style
        </h2>

        <p className="reveal-up reveal-delay-1 mx-auto mb-7 max-w-2xl text-justify text-sm leading-6 text-gray-600 sm:mb-8 sm:text-center sm:text-base">
          Account options designed around different capital levels, strategies and market experience.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                home-package-card
                group relative flex flex-col justify-between
                rounded-2xl p-5 sm:p-7 md:rounded-3xl md:p-8
                bg-[#fcfdfc] border border-[#dce9e1]
                shadow-md

                ${plan.highlight ? "ring-2 ring-[#D3D3D3]" : ""}
              `}
            >

              {/* Badge */}
              {plan.badge && (
                <div className="account-popular-badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D3D3D3] px-3 py-1 text-[11px] font-semibold text-white shadow-lg sm:-top-4 sm:px-4 sm:py-1.5 sm:text-xs">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold leading-tight text-[#00674F] sm:mb-5 sm:text-2xl">
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
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00674F]/10 text-[#00674F] text-sm font-bold">
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
                  w-full rounded-xl py-3.5 sm:py-4
                  bg-[#00674F] text-white
                  font-semibold text-sm sm:text-base
                  transition-all duration-300 ease-out

                  hover:scale-105 hover:shadow-xl hover:shadow-[#00674F]/20
                  active:scale-95
                "
              >
                Open Account
              </button>
            </div>
          ))}
          
        </div>


        <div className="mt-6 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={() => navigate("/account-type")}
            className="
              group inline-flex items-center gap-2
              text-sm font-semibold text-[#00674F]
              transition-colors duration-300
              hover:text-[#D3D3D3]
              focus:outline-none focus-visible:text-[#D3D3D3]
            "
          >
            View all accounts
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
