import React, { useEffect, useRef } from "react";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";
import {
  ShieldCheck,
  TrendingUp,
  ScanSearch,
  Clock3,
  Zap,
  Scale,
  ClipboardList,
  Users,
} from "lucide-react";
import heroBg from "../../assets/images/automatedTrading.png";
import bannerImg from "../../assets/images/banner_automated.jpg";

// Fade In Up Animation Component
const FadeInUp = ({ children, delay = 0, threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
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

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const steps = [
  {
    number: "01",
    title: "Choose Account",
    desc: "Choose the account that suits you best",
    Icon: FaUserAlt,
  },
  {
    number: "02",
    title: "Fund",
    desc: "Fund your account securely",
    Icon: FaCreditCard,
  },
  {
    number: "03",
    title: "Start Trading",
    desc: "Start trading and achieve your goals.",
    Icon: FaChartLine,
  },
];

export default function AutomatedTradingPage() {
  return (
    <div className="bg-[#f7f7f5] text-gray-800 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-[#00674F] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-84px)]">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={heroBg}
              alt="Automated Trading Hero"
              className="h-full w-full object-cover object-center blur-md brightness-[0.20]"
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-14 text-center hero-content sm:min-h-[calc(100vh-80px)] md:px-6 lg:min-h-[calc(100vh-84px)]">
          <h1 className="animate-fade-down text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Automated Trading
          </h1>

          <p className="mt-4 max-w-3xl px-1 text-sm leading-6 text-white animate-fade-up sm:px-2 sm:text-base md:mt-5 md:leading-7">
            Revolutionizing financial markets with precision-driven
            algorithmic strategies, intelligent market analysis, and
            lightning-fast execution designed for modern traders.
          </p>
          <button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="button-shine mt-6 animate-[fadeInUp_1.2s_ease-out] rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f8f4_100%)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00674F]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D3D3D3]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <FadeInUp delay={0}>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl md:text-[34px]">
                Revolutionizing the Way You Trade
              </h2>

              <p className="mx-auto mt-4 max-w-5xl text-center text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base md:text-lg md:leading-8">
                Automated trading, also known as algorithmic trading is transforming the financial markets by leveraging the power of technology to execute trades with precision and speed. This innovative approach eliminates the emotional biases of manual trading and enables traders to capitalize on opportunities across global markets, even while they sleep.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* TITLE */}
          <FadeInUp delay={0}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#00674F] sm:text-sm">
                How Does Automated Trading Work?
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-[34px]">
                Intelligent Trading Process
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base md:text-lg md:leading-relaxed">
                Automated trading relies on technical indicators, statistical models and pre-defined conditions set by the trader. Once the system is activated:
              </p>
            </div>
          </FadeInUp>

          {/* CARDS */}
          <div className="mx-auto mt-16 sm:mt-20 grid max-w-5xl grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-6">
            {[
              {
                icon: <ScanSearch className="w-8 h-8" />,
                title: "Market Scanning",
                text: "Continuously monitors global financial markets to identify profitable opportunities in real-time.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Trade Execution",
                text: "Executes trades instantly based on predefined strategies and optimized algorithmic parameters.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Risk Management",
                text: "Implements stop-loss, take-profit and portfolio protection strategies to reduce exposure.",
              },
            ].map((card, index) => (
              <FadeInUp key={index} delay={index * 150}>
                <div className="relative flex justify-center">
                  <div className="process-card group relative w-full max-w-[320px] rounded-2xl border border-[#00674F]/20 border-b-[4px] border-b-[#00674F] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,103,79,0.15)] sm:px-6">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="process-icon flex h-14 w-14 items-center justify-center rounded-full bg-[#00674F] text-xl text-white shadow-lg shadow-[#00674F]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#00674F]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {card.text}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DARK INFO BANNER ================= */}
      <section className="px-4 pb-4 pt-0 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp delay={450}>
            <div className="overflow-hidden bg-[#0d1b16] rounded-xl text-white shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b16] via-[#0d1b16]/90 to-transparent z-10 hidden md:block"></div>
              <div className="grid items-center gap-0 lg:grid-cols-2 relative z-20">
                {/* CONTENT */}
                <div className="p-8 sm:p-10 lg:p-12 lg:pr-4">
                  <h3 className="text-2xl font-bold leading-tight sm:text-4xl text-white">
                    Is Automated Trading <br className="hidden sm:block" />
                    for <span className="text-[#00c88f]">Everyone?</span>
                  </h3>
                  <div className="mt-4 h-1 w-12 bg-[#00674F]"></div>
                  <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-relaxed max-w-lg">
                    Whether you're a professional trader seeking scalable
                    execution or a beginner exploring algorithmic systems,
                    automated trading platforms can be tailored to suit different
                    investment goals and strategies.
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative h-[250px] w-full sm:h-[350px] lg:h-[100%] order-first lg:order-last">
                  <img
                    src={bannerImg}
                    alt="Automated Trading for Everyone"
                    className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b16] to-transparent lg:bg-gradient-to-l opacity-80 md:opacity-60"></div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="bg-gradient-to-b from-[#f7f7f5] to-[#e4ede9] px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <FadeInUp delay={0}>
            <div className="text-center">
              <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl md:text-4xl">
                Why Choose <span className="text-[#00674F]">Automated Trading?</span>
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="h-[2px] w-12 bg-[#00674F]/40"></div>
                <p className="text-sm sm:text-base font-semibold text-gray-700 uppercase tracking-wide">
                  Built for Speed, Precision & Consistency
                </p>
                <div className="h-[2px] w-12 bg-[#00674F]/40"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Clock3 className="h-9 w-9" />,
                title: "24/7 Market Monitoring",
                text: "Track market movements continuously without interruption.",
              },
              {
                icon: <Zap className="h-9 w-9" />,
                title: "Fast & Efficient Execution",
                text: "Execute trades in milliseconds with optimized algorithms.",
              },
              {
                icon: <Scale className="h-9 w-9" />,
                title: "Emotion-Free Decisions",
                text: "Trade based on data, logic and disciplined strategies.",
              },
              {
                icon: <ClipboardList className="h-9 w-9" />,
                title: "Reliable Consistency",
                text: "Maintain structured execution aligned with your strategy.",
              },
            ].map((item, index) => (
              <FadeInUp key={index} delay={index * 100}>
                <div className="flex h-full flex-col items-center justify-start rounded-xl bg-white p-8 text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgb(0,0,0,0.1)]">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#00674F] border-[2px] border-[#00674F]">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <style>{`

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
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



        .hero-content {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-fade-down {
          animation: fadeDown 0.85s ease-out both;
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out 0.18s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-content,
          .animate-fade-down,
          .animate-fade-up {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}