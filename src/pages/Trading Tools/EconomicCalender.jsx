import React, { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCreditCard, FaUserAlt, FaArrowRight } from "react-icons/fa";
import ecoCalImg from "../../assets/images/economicCalander.jpeg";
import bannerImg from "../../assets/images/banner_calendar.jpg";

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

// Staggered Card Component
const StaggeredCard = ({ children, index }) => {
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

const TradingViewEconomicCalendar = memo(function TradingViewEconomicCalendar() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.height = "calc(100% - 32px)";
    widget.style.width = "100%";

    const copyright = document.createElement("div");
    copyright.className = "tradingview-widget-copyright";
    copyright.innerHTML =
      '<a href="https://www.tradingview.com/markets/currencies/economic-calendar/" rel="noopener nofollow" target="_blank"><span class="blue-text">Economic Calendar</span></a><span class="trademark"> by TradingView</span>';

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false,
      width: "100%",
      height: "100%",
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    containerRef.current.appendChild(widget);
    containerRef.current.appendChild(copyright);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container h-full w-full overflow-hidden"
    />
  );
});

export default function EconomicCalendar() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#0b1f16]">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[calc(100vh-72px)] w-full overflow-hidden bg-[#00674F] sm:h-[calc(100vh-80px)] lg:h-[calc(100vh-84px)]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={ecoCalImg}
              alt="Economic Calendar Hero"
              className="h-full w-full object-cover object-center hero-image"
            />
          </div>
        </div>
        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center hero-content md:px-6">
          <h1 className="text-4xl font-bold text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">
            Economic Calendar
          </h1>

          <p className="mt-4 max-w-3xl px-2 text-sm leading-6 text-white animate-[fadeInUp_1s_ease-out] sm:text-base md:mt-5 md:leading-7">
            Track high-impact market events, economic releases and global
            announcements with VeltriumFX.
          </p>
          <button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="button-shine mt-6 animate-[fadeInUp_1.2s_ease-out] rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Calendar Widget Section */}
      <section className="mx-auto max-w-6xl px-3 pb-4 pt-8 text-center sm:px-6 sm:pb-6 sm:pt-12">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="calendar-widget-frame mx-auto h-[560px] w-full max-w-[980px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-[540px] md:h-[580px]">
            <TradingViewEconomicCalendar />
          </div>
        </ScrollReveal>
      </section>


      {/* ================= DARK INFO BANNER ================= */}
      <section className="px-4 pb-4 pt-0 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0} threshold={0.1} direction="up">
            <div className="overflow-hidden bg-[#0d1b16] rounded-xl text-white shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b16] via-[#0d1b16]/90 to-transparent z-10 hidden md:block"></div>
              <div className="grid items-center gap-0 lg:grid-cols-2 relative z-20">
                {/* CONTENT */}
                <div className="p-8 sm:p-10 lg:p-12 lg:pr-4">
                  <h3 className="text-2xl font-bold leading-tight sm:text-4xl text-white">
                    Stay Ahead of <br className="hidden sm:block" />
                    <span className="text-[#00c88f]">Every Market Move</span>
                  </h3>
                  <div className="mt-4 h-1 w-12 bg-[#00674F]"></div>
                  <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-relaxed max-w-lg">
                    Whether you're a seasoned trader or just starting out, the Economic Calendar gives you the edge you need — tracking high-impact global events, central bank decisions, and economic releases in real time.
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative h-[250px] w-full sm:h-[350px] lg:h-[100%] order-first lg:order-last">
                  <img
                    src={bannerImg}
                    alt="Economic Calendar Insight"
                    className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b16] to-transparent lg:bg-gradient-to-l opacity-80 md:opacity-60"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-6xl bg-white px-4 pb-4 pt-6 text-center sm:px-5 sm:pb-6 sm:pt-8">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
            <p className="text-sm font-semibold text-gray-700">Market Planning Flow</p>
            <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} threshold={0.2} direction="up">
          <h2 className="mb-12 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-14 md:text-4xl">
            Plan Market Moves with{" "}
            <span className="text-[#00674F]">VeltriumFX</span>
          </h2>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map(({ Icon, ...step }, index) => (
            <StaggeredCard key={step.number} index={index}>
              <div className="relative flex justify-center">
                {index !== steps.length - 1 && (
                  <div className="absolute top-16 -right-8 hidden items-center gap-2 md:flex">
                    <span className="h-2 w-2 rounded-full bg-[#00674F]"></span>
                    <span className="h-2 w-2 rounded-full bg-[#00674F]"></span>
                  </div>
                )}

                <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#00674F]/20 border-b-[4px] border-b-[#00674F] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-6">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div className="process-icon flex h-14 w-14 items-center justify-center rounded-full bg-[#00674F] text-xl text-white shadow-lg shadow-[#00674F]/20 transition-all duration-300 hover:scale-110 hover:bg-[#D3D3D3]">
                      <Icon />
                    </div>
                  </div>

                  <div className="absolute left-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#00674F] text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#00674F]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </StaggeredCard>
          ))}
        </div>

        <ScrollReveal delay={400} threshold={0.2} direction="up">
          <p className="mx-auto mt-12 max-w-md text-sm leading-relaxed text-gray-700 sm:mt-14 sm:text-base">
            Everything you need to trade Forex in one place.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500} threshold={0.2} direction="up">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="button-shine mt-5 w-full max-w-[220px] rounded-full bg-[#00674F] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto"
          >
            Trade Now
          </button>
        </ScrollReveal>
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
        
        @keyframes economicHeroZoom {
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

        @keyframes widgetIn {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        .hero-image {
          animation: economicHeroZoom 1.5s ease-out both;
        }

        .animate-fade-down {
          animation: fadeDown 0.85s ease-out both;
        }

        .animate-fade-up {
          animation: fadeUp 0.85s ease-out 0.18s both;
        }

        .animate-widget-in {
          animation: widgetIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @media (max-width: 640px) {
          .calendar-widget-frame {
            border-left: 0;
            border-right: 0;
            border-radius: 0;
            margin-left: -0.75rem;
            margin-right: -0.75rem;
            width: calc(100% + 1.5rem);
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          
          .hero-image,
          .hero-content,
          .animate-fade-down,
          .animate-fade-up,
          .animate-widget-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
