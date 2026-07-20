import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "What is Forex Trading?",
    answer:
      "Forex trading is the process of buying and selling currencies in the global Forex Market to make a profit. Traders exchange one currency for another and earn by predicting price movements based on market trends and global events.",
  },
  {
    id: 2,
    question: "How Does Forex Trading Work?",
    answer:
      "Forex trading works by exchanging one currency for another in the global Forex Market, where currencies are always traded in pairs like EUR/USD or GBP/USD. When a trader believes that one currency will increase in value compared to another, they place a buy (long) trade and if they expect it to decrease, they place a sell (short) trade.",
  },
  {
    id: 3,
    question: "What is a Pip in Forex?",
    answer:
      "A pip in forex is the smallest price movement in a currency pair within the Forex Market. It is usually the fourth decimal place in most currency pairs.",
  
  },
  {
    id: 4,
    question: "What is Leverage in Forex Trading?",
    answer:
      "Leverage in forex trading allows traders to control a larger position with a smaller amount of money.",
  
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);
  const navigate = useNavigate();

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="reveal-section flex justify-center bg-white px-4 py-10 sm:px-6 sm:py-8 md:py-10 lg:px-8">
      <div className="w-full max-w-4xl">
        
        {/* Heading */}
        <h2 className="mb-6 text-center text-xl font-semibold leading-tight sm:mb-6 sm:text-2xl md:text-3xl">
          Find <span className="text-[#014421]">Answers</span> to Common Questions
        </h2>

        {/* FAQ */}
        <div className="space-y-3 sm:space-y-5">
          {faqData.map((item) => (
            <div key={item.id} className="interactive-card rounded-xl border-b border-gray-300 bg-white/40 p-4 sm:p-4">
              
              {/* FIXED ROW */}
              <div
                onClick={() => toggle(item.id)}
                className="flex cursor-pointer items-center gap-3 sm:gap-4"
              >
                
                {/* Number */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#014421] text-xs font-medium text-white sm:h-7 sm:w-7 sm:text-sm">
                  {item.id}
                </div>

                {/* Question + Arrow */}
                <div className="flex flex-1 items-center justify-between gap-3">
                  
                  <h3 className="text-left text-sm font-semibold leading-snug text-gray-800 sm:text-base">
                    {item.question}
                  </h3>

                  {/* Arrow */}
                  <svg
                    className={`h-3 w-3 shrink-0 text-gray-500 transition-transform duration-300 sm:h-4 sm:w-4 ${
                      openId === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Answer */}
              {openId === item.id && (
                <p className="ml-0 mt-3 text-justify text-xs leading-relaxed text-gray-600 sm:ml-11 sm:text-left sm:text-sm">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/faq")}
            className="button-shine w-full max-w-[220px] rounded-full bg-[#014421] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#014421] hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0 sm:w-auto"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
