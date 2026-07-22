import { useState, useEffect, useRef } from "react";
import faqImg from "../../assets/images/Faqs.png";

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
  const [openIndices, setOpenIndices] = useState([0]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (i) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter(index => index !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  const renderFaq = ({ faq, index: i }) => {
    const isOpen = openIndices.includes(i);
    const styleIndex = i % 2;
    const isEven = i % 2 === 0;
    
    let bgClass, borderClass, textQClass, textAClass, iconClass, numClass, accentLineClass;
    
    if (styleIndex === 0) {
      bgClass = isOpen ? "bg-white border-[#00674F]" : "bg-white border-gray-100 hover:border-[#00674F]/50";
      textQClass = isOpen ? "text-[#00674F]" : "text-[#0B132B] group-hover:text-[#00674F]";
      textAClass = "text-gray-600";
      iconClass = isOpen ? "bg-[#00674F] text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-[#e6f4ef] group-hover:text-[#00674F]";
      numClass = isOpen ? "text-[#00674F]" : "text-gray-300";
      accentLineClass = "bg-[#00674F]/20";
    } else {
      bgClass = isOpen ? "bg-[#D3D3D3] border-[#00674F]" : "bg-[#D3D3D3] border-transparent hover:border-[#00674F]/50";
      textQClass = isOpen ? "text-[#00674F]" : "text-[#0B132B] group-hover:text-[#00674F]";
      textAClass = "text-gray-800";
      iconClass = isOpen ? "bg-[#00674F] text-white rotate-180" : "bg-white text-gray-500 group-hover:bg-white group-hover:text-[#00674F]";
      numClass = isOpen ? "text-[#00674F]" : "text-gray-400";
      accentLineClass = "bg-[#00674F]/30";
    }

    return (
      <div key={faq.num} className={`w-[95%] md:w-[80%] lg:w-[75%] ${isEven ? 'self-start' : 'self-end'}`}>
        <StaggeredFaq index={i}>
          <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 border h-full flex flex-col shadow-sm ${bgClass}`}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-between gap-5 sm:gap-8 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex gap-4 sm:gap-6 items-center">
                <span className={`text-sm sm:text-base font-extrabold transition-colors duration-300 ${numClass}`}>
                  {faq.num}
                </span>
                <h3 className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${textQClass}`}>
                  {faq.question}
                </h3>
              </div>
              <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 shadow-sm ${iconClass}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
                   {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                </svg>
              </div>
            </button>
            <div className="grid transition-all duration-500 ease-in-out w-0 min-w-full" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
              <div className="overflow-hidden">
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 pl-[3.5rem] sm:pl-[4.25rem]">
                  <div className={`w-10 h-[2px] mb-4 rounded-full ${accentLineClass}`} />
                  <p className={`leading-relaxed text-[15px] sm:text-[16px] font-medium ${textAClass}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggeredFaq>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-start overflow-hidden bg-cover bg-center px-6 py-16 sm:min-h-[calc(100vh-80px)] md:px-20 lg:min-h-[calc(100vh-84px)]"
        style={{ backgroundImage: `url(${faqImg})` }}
      >
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${faqImg})` }}
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-start">
          <div className="max-w-2xl text-left text-white">
            <p className="animate-[fadeInUp_0.6s_ease-out] mb-5 text-sm font-medium uppercase tracking-[4px] text-[#D3D3D3] md:text-base">
              Help Center
            </p>

            <h1 className="animate-[fadeInUp_0.8s_ease-out] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Frequently Asked <br />
              <span className="text-[#00674F] text-2xl md:text-4xl">
                Questions
              </span>
            </h1>

            <p className="animate-[fadeInUp_1s_ease-out] mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
              Browse practical answers for accounts, platforms, payments and trading services.
            </p>

            <button
              type="button"
              className="button-shine animate-[fadeInUp_1.2s_ease-out] mt-7 rounded-full bg-[#D3D3D3] px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#D3D3D3] sm:px-9 sm:text-base"
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
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-8 text-center sm:mb-10">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#00674F] sm:text-sm">
                FAQ's
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100} threshold={0.2} direction="up">
              <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-[#00674F] sm:text-3xl md:text-4xl">
                Find <span className="text-[#D3D3D3]">Answers</span> to Common
                Questions
              </h2>
            </ScrollReveal>
          </div>

          <div className="mx-auto w-full max-w-3xl flex flex-col gap-3 sm:gap-4 relative">
             {faqs.map((faq, i) => renderFaq({ faq, index: i }))}
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
