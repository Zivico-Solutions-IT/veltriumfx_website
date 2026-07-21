import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "What does forex trading involve?",
    answer:
      "Forex trading means exchanging one currency against another in the global currency market. Traders study price movement, economic news and market sentiment to identify potential opportunities.",
  },
  {
    id: 2,
    question: "How are currency trades placed?",
    answer:
      "Currencies are quoted in pairs such as EUR/USD or GBP/USD. If a trader expects the first currency to strengthen, they may buy; if they expect weakness, they may sell.",
  },
  {
    id: 3,
    question: "What does a pip measure?",
    answer:
      "A pip is a small unit used to measure movement in a currency pair. For most major pairs, it is represented by the fourth decimal place.",
  
  },
  {
    id: 4,
    question: "How does leverage work?",
    answer:
      "Leverage allows traders to control a larger market position with a smaller margin amount. It can increase both potential gains and potential losses.",
  
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);
  const navigate = useNavigate();

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="flex justify-center bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-24 border-b border-[#D3D3D3]">
      <div className="w-full max-w-4xl">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
          <span className="text-[#00674F] font-bold uppercase tracking-widest text-[11px]">Knowledge Base</span>
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
        </div>

        <h2 className="mb-12 text-center text-3xl font-extrabold leading-tight sm:mb-16 sm:text-4xl md:text-5xl text-gray-900">
          Clear <span className="text-[#00674F]">Guidance</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`rounded-sm border p-5 sm:p-6 transition-all duration-300 ${
                  isOpen 
                    ? "bg-[#00674F] border-[#00674F] shadow-xl translate-y-[-4px]" 
                    : "bg-white border-[#D3D3D3] shadow-sm hover:border-[#00674F]/40"
                }`}
              >
                
                {/* FIXED ROW */}
                <div
                  onClick={() => toggle(item.id)}
                  className="flex cursor-pointer items-start gap-4"
                >
                  
                  {/* Number Badge */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-xs font-bold transition-colors ${
                    isOpen ? "bg-[#D3D3D3] text-[#00674F]" : "bg-[#00674F]/10 text-[#00674F]"
                  }`}>
                    0{item.id}
                  </div>

                  {/* Question + Arrow */}
                  <div className="flex flex-1 items-start justify-between gap-3 pt-1">
                    
                    <h3 className={`text-left text-base font-bold leading-snug transition-colors ${
                      isOpen ? "text-white" : "text-gray-900"
                    }`}>
                      {item.question}
                    </h3>

                    {/* Arrow */}
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className={`text-sm leading-relaxed ${isOpen ? "text-[#D3D3D3]" : "text-gray-600"}`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/faq")}
            className="inline-flex items-center justify-center rounded-sm border border-[#00674F] bg-white px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-[#00674F] shadow-sm transition-colors hover:bg-[#00674F] hover:text-white sm:w-auto"
          >
            More Questions
          </button>
        </div>

      </div>
    </section>
  );
}
