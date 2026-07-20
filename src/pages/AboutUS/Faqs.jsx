import { useState, useEffect, useRef } from "react";

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "left":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "right":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getDirectionClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered FAQ Component
const StaggeredFaq = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

const faqs = [
  {
    num: "01",
    question: "What is Forex Trading?",
    answer:
      "Forex trading is the process of buying and selling currencies to profit from changes in their exchange rates. It takes place in a decentralized global market, open 24 hours a day, five days a week.",
  },
  {
    num: "02",
    question: "How Does Forex Trading Work?",
    answer:
      "Forex trading works by simultaneously buying one currency and selling another. Currency pairs like EUR/USD reflect the exchange rate between the two currencies. Traders speculate on whether a currency will rise or fall in value relative to another.",
  },
  {
    num: "03",
    question: "What Are the Major Currency Pairs?",
    answer:
      "The major currency pairs include EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, and USD/CHF. These pairs are the most traded in the forex market and typically have the tightest spreads.",
  },
  {
    num: "04",
    question: "What is Leverage in Forex?",
    answer:
      "Leverage allows traders to control a large position with a relatively small amount of capital. For example, with 1:100 leverage, you can control $10,000 worth of currency with just $100. While leverage can amplify profits, it can also amplify losses.",
  },
  {
    num: "05",
    question: "How Do I Start Forex Trading?",
    answer:
      "To start forex trading, open a trading account with a regulated broker, complete identity verification, deposit funds, download a trading platform, and begin with a demo account to practice before trading with real money.",
  },
  {
    num: "06",
    question: "What is a Pip in Forex?",
    answer:
      "A pip (percentage in point) is the smallest price move that a given exchange rate can make. For most currency pairs, a pip is equal to 0.0001. Pips are used to measure profit and loss in forex trading.",
  },
  {
    num: "07",
    question: "Is Forex Trading Safe?",
    answer:
      "Forex trading carries inherent risks due to market volatility and leverage. Trading with a regulated broker, using proper risk management strategies, and never risking more than you can afford to lose are essential practices for safer trading.",
  },
  {
    num: "08",
    question: "What is Fundamental Analysis in Forex?",
    answer:
      "Fundamental analysis evaluates economic indicators, such as GDP, interest rates, inflation, and political events, to predict currency movements.",
  },
  {
    num: "09",
    question: "What is Technical Analysis in Forex?",
    answer:
      "Technical analysis studies price charts, patterns, and indicators (e.g., Moving Averages, RSI, MACD) to make trading decisions.",
  },
  {
    num: "10",
    question: "What is a Margin Call in Forex?",
    answer:
      "A margin call occurs when your account balance falls below the required margin level. When this happens, the broker may require you to deposit additional funds or close your positions to cover the shortfall.",
  },
  {
    num: "11",
    question: "Is Forex Trading Legal?",
    answer:
      "Forex trading is legal in most countries but is regulated by financial authorities. Always trade with a licensed broker to ensure your funds are protected and operations are compliant with local laws.",
  },
  {
    num: "12",
    question: "How Can I Protect My Capital in Forex?",
    answer:
      "Use stop-loss and take-profit orders, avoid excessive leverage, diversify your trades, and follow a trading plan. Consistent risk management is the key to long-term survival in forex trading.",
  },
  {
    num: "13",
    question: "Can I Trade Forex on My Phone?",
    answer:
      "Yes, we offer a mobile trading platform that allows you to trade anytime, anywhere. Our mobile app provides real-time quotes, charting tools, and full account management features.",
  },
  {
    num: "14",
    question: "What is an Economic Calendar in Forex?",
    answer:
      "An economic calendar lists key financial events (e.g., interest rate decisions, job reports, GDP releases) that impact currency markets. Traders use it to anticipate volatility and plan their trades around high-impact news.",
  },
  {
    num: "15",
    question: "How Much Money Do I Need to Start Forex Trading?",
    answer:
      "Many brokers allow you to start with as little as $200, but a minimum of $500-$1,000 is recommended for better risk management. You can also practice with a demo account first before depositing real funds.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-start overflow-hidden bg-cover bg-center px-6 py-16 sm:min-h-[calc(100vh-80px)] md:px-20 lg:min-h-[calc(100vh-84px)]"
        style={{ backgroundImage: "url('/Faq.png')" }}
      >
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Faq.png')" }}
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/60 animate-[fadeIn_1.5s_ease-out]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-start">
          <div className="max-w-2xl text-left text-white">
            <p className="animate-[fadeInUp_0.6s_ease-out] mb-5 text-sm font-medium uppercase tracking-[4px] text-yellow-400 md:text-base">
              Welcome To NOVAFXM
            </p>

            <h1 className="animate-[fadeInUp_0.8s_ease-out] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Frequently Asked <br />
              <span className="text-[#014421] text-2xl md:text-4xl">
                Questions
              </span>
            </h1>

            <p className="animate-[fadeInUp_1s_ease-out] mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
              Find clear answers about trading, accounts, platforms, and support at NOVAFXM.
            </p>

            <button
              type="button"
              className="button-shine animate-[fadeInUp_1.2s_ease-out] mt-7 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#c89b1d] sm:px-9 sm:text-base"
              onClick={() => {
                document.getElementById("faq-questions")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-questions" className="px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-8 text-center sm:mb-10">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#014421] sm:text-sm">
                FAQ's
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100} threshold={0.2} direction="up">
              <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-[#014421] sm:text-3xl md:text-4xl">
                Find <span className="text-[#D4AF37]">Answers</span> to Common
                Questions
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <StaggeredFaq key={faq.num} index={i}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className={`w-full rounded-xl border p-4 text-left shadow-sm transition-all duration-300 sm:p-5 ${
                      isOpen
                        ? "border-[#014421] bg-[#014421] shadow-[#014421]/15"
                        : "border-gray-200 bg-white hover:border-[#014421]/30"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 sm:h-9 sm:w-9 sm:text-xs ${
                          isOpen
                            ? "bg-white/20 text-white"
                            : "bg-green-100 text-[#014421]"
                        }`}
                      >
                        {faq.num}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex min-w-0 items-start justify-between gap-3">
                          <span
                            className={`min-w-0 flex-1 break-words pt-1 text-sm font-semibold leading-snug transition-all duration-300 sm:text-base ${
                              isOpen ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {faq.question}
                          </span>

                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8 ${
                              isOpen
                                ? "rotate-180 border-white/40 bg-white/10"
                                : "border-gray-300"
                            }`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              aria-hidden="true"
                              className="transition-transform duration-300"
                            >
                              <path
                                d="M2 4L6 8L10 4"
                                stroke={isOpen ? "#fff" : "#6b7280"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </span>

                        {isOpen && (
                          <span className="mt-3 block break-words text-sm leading-7 text-white/90 sm:text-[15px]">
                            {faq.answer}
                          </span>
                        )}
                      </span>
                    </div>
                  </button>
                </StaggeredFaq>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Keyframe Animations */
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Button Shine Effect */
        .button-shine {
          position: relative;
          overflow: hidden;
        }

        .button-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .button-shine:hover::before {
          left: 100%;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}