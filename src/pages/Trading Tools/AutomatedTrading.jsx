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
import heroBg from "../../../public/Auto 1.jpeg";
import heroBg1 from "../../../public/Auto 2.jpg";

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
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-black sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-84px)]">
        <div className="absolute inset-0 hero-parallax">
          <img
            src={heroBg}
            alt="Automated Trading Hero"
            className="h-full w-full object-cover object-center hero-image"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-14 text-center hero-content sm:min-h-[calc(100vh-80px)] md:px-6 lg:min-h-[calc(100vh-84px)]">
          <h1 className="animate-fade-down text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Automated Trading
          </h1>

          <p className="mt-4 max-w-3xl px-1 text-sm leading-6 text-white animate-fade-up sm:px-2 sm:text-base md:mt-5 md:leading-7">
            Revolutionizing financial markets with precision-driven
            algorithmic strategies, intelligent market analysis, and
            lightning-fast execution designed for modern traders.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f8f4_100%)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#014421]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
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
              <p className="text-xs font-semibold uppercase tracking-wide text-[#014421] sm:text-sm">
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
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-4">
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
                  <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#014421]/20 border-b-[4px] border-b-[#014421] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="process-icon flex h-14 w-14 items-center justify-center rounded-full bg-[#014421] text-xl text-white shadow-lg shadow-[#014421]/20">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#014421]">
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

          {/* EXTRA BLOCK */}
          <FadeInUp delay={450}>
            <div className="mt-10 overflow-hidden bg-white sm:mt-12">
              <div className="grid items-center gap-0 lg:grid-cols-2">
                {/* IMAGE */}
                <div className="relative">
                  <div
                    className="relative h-[220px] w-full bg-cover bg-center sm:h-[340px]"
                    style={{
                      backgroundImage: `url(${heroBg1})`,
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="bg-white p-5 sm:p-8 lg:p-10">
                  <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700 sm:h-12 sm:w-12">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight sm:text-3xl">
                      Is Automated Trading for Everyone?
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-justify leading-7 text-gray-600 sm:text-base sm:leading-relaxed">
                    Whether you're a professional trader seeking scalable
                    execution or a beginner exploring algorithmic systems,
                    automated trading platforms can be tailored to suit different
                    investment goals and strategies.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="bg-white px-4 pb-8 pt-0 sm:px-6 lg:pb-10 lg:pt-1">
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="w-full bg-white p-0 sm:p-6 lg:p-7">
            <FadeInUp delay={0}>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#014421]">
                Why Choose Automated Trading?
              </p>

              <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
                Built for Speed, Precision & Consistency
              </h2>
            </FadeInUp>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Clock3 />,
                  title: "24/7 Market Monitoring",
                  text: "Track market movements continuously without interruption.",
                },
                {
                  icon: <Zap />,
                  title: "Fast & Efficient Execution",
                  text: "Execute trades in milliseconds with optimized algorithms.",
                },
                {
                  icon: <Scale />,
                  title: "Emotion-Free Decisions",
                  text: "Trade based on data, logic and disciplined strategies.",
                },
                {
                  icon: <ClipboardList />,
                  title: "Reliable Consistency",
                  text: "Maintain structured execution aligned with your strategy.",
                },
              ].map((item, index) => (
                <FadeInUp key={index} delay={index * 100}>
                  <div className="group flex gap-3 rounded-xl border border-gray-100 bg-[#f7faf7] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#014421]/20 hover:bg-white hover:shadow-md sm:gap-4 sm:p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#014421]/10 text-[#014421] transition-all duration-300 group-hover:bg-[#014421] group-hover:text-white group-hover:scale-110 sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-950 transition-all duration-300 group-hover:text-[#014421]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes automatedHeroZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }

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

        .hero-image {
          animation: automatedHeroZoom 1.5s ease-out both;
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