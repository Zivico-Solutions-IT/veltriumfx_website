import React, { useEffect, useRef, useState } from "react";
import heroBg5 from "/platform.png";
import heroBg6 from "../../assets/images/Rectangle 90.png";
import {
  BarChart3,
  UserRound,
  Zap,
  CheckCircle,
} from "lucide-react";

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2 }) => {
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

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated Card Component
const AnimatedCard = ({ card, index }) => {
  return (
    <ScrollReveal delay={index * 150} threshold={0.1}>
      <div className="flex h-full flex-col rounded-2xl border-b-4 border-[#014421] bg-white p-5 transition duration-300 hover:-translate-y-1 sm:p-8">
        {/* Header */}
        <div className="flex min-h-[72px] items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              card.color === "green"
                ? "border-[#014421] text-[#014421] bg-[#014421]/10"
                : card.color === "gold"
                ? "border-[#014421] border-[#014421] bg-[#D4AF37]/10"
                : "border-[#014421] text-[#014421] bg-[#014421]/10"
            }`}
          >
            {card.icon}
          </div>

          <h3 className="text-sm font-bold text-[#1f1f1f] leading-snug sm:text-base">
            {card.title}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-3 min-h-[72px] text-justify text-sm leading-relaxed text-gray-600 sm:text-left">
          {card.description}
        </p>

        {/* Bullet Points */}
        <div className="space-y-3">
          {card.points.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle
                size={18}
                className={`mt-1 ${
                  card.color === "green"
                    ? "text-[#014421]"
                    : card.color === "gold"
                    ? "text-[#D4AF37]"
                    : "text-[#014421]"
                }`}
              />
              <p className="text-justify text-sm text-gray-700 sm:text-left">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function TradingPage() {
  const [shineActive, setShineActive] = useState(false);
  const buttonRef = useRef(null);

  const triggerShine = (e) => {
    // Prevent multiple rapid triggers
    if (shineActive) return;
    
    setShineActive(true);
    
    // Remove the class after animation completes
    setTimeout(() => {
      setShineActive(false);
    }, 800);
  };

  const cards = [
    {
      title: "Real-Time Market Insights & Analytics",
      icon: <BarChart3 size={22} />,
      color: "green",
      description:
        "At Novafxm we equip you with cutting-edge tools and data to make smart trading decisions with ease.",
      points: [
        "Real-time data updates",
        "Advanced charting solutions",
        "Comprehensive technical analysis tools",
      ],
    },

    {
      title: "Seamless and User-Friendly Interface",
      icon: <UserRound size={22} />,
      color: "green",
      description:
        "Designed to enhance your trading journey, Novafxm provides an intuitive experience for both beginners and pros.",
      points: [
        "Customizable dashboard options",
        "Quick access to preferred tools",
        "Personalized alerts and notifications",
      ],
    },

    {
      title: "Swift and Reliable Execution",
      icon: <Zap size={22} />,
      color: "green",
      description:
        "Experience unmatched speed and dependability in every trade with Novafxm.",
      points: [
        "Ultra-fast execution speeds",
        "Minimal delays or slippage",
        "Stability even during high-volume trading hours",
      ],
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION WITH ANIMATIONS ================= */}
      <section className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-black px-4 py-10 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 sm:py-16 lg:min-h-[calc(100svh-84px)]">
        
        {/* Animated Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{
              transformOrigin: 'center',
            }}
          >
            <img
              src={heroBg5}
              alt="Trading Platform"
              className="account-hero-image h-full w-full object-cover object-center brightness-110"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)] animate-[fadeIn_1.8s_ease-out]" />

        <div className="relative z-10 w-full max-w-4xl -translate-y-4 sm:translate-y-0">
          
          {/* Platform Badge - Slide In From Top */}
          <div className="animate-[slideInDown_0.6s_ease-out]">
            <span className="mb-2 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Platform
            </span>
          </div>

          {/* Main Heading - Staggered Fade In Up */}
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Navigate Your
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D4AF37]">
              Trading Success!
            </span>
          </h1>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
              Trade smarter with a fast, secure, and user-friendly platform.
              <br className="hidden sm:block" />
              Everything you need to navigate the markets with confidence.
            </p>
          </div>

          {/* Button - Fade In Up with Pulse & Shine Effect - MOBILE RESPONSIVE */}
          <div className="animate-[fadeInUp_1.4s_ease-out]">
            <button
              ref={buttonRef}
              className={`explore-button ${shineActive ? 'shine-active' : ''} mt-4 w-full max-w-[200px] rounded-full bg-[#014421] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm`}
              onClick={() => {
                document.getElementById("platform-overview")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              onTouchStart={triggerShine}
              onTouchEnd={() => {
                // Optional: handle touch end
              }}
              onMouseDown={triggerShine}
            >
              Explore Platform
            </button>
          </div>
        </div>

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
          
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes gentlePulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.03);
            }
          }
          
          /* Button Shine Effect - Enhanced for Mobile */
          .explore-button {
            position: relative;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            cursor: pointer;
            z-index: 1;
          }
          
          .explore-button::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -100%;
            width: 60%;
            height: 200%;
            background: linear-gradient(
              115deg,
              transparent,
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transform: skewX(-25deg);
            transition: all 0.4s ease;
            opacity: 0;
            pointer-events: none;
            z-index: -1;
          }
          
          /* Hover effect for desktop */
          .explore-button:hover::before {
            animation: shine 0.8s ease-in-out 1;
            opacity: 1;
          }
          
          /* Touch/Click effect for mobile - ensures shine works on all devices */
          .explore-button:active::before,
          .explore-button.shine-active::before {
            animation: shine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1;
            opacity: 1;
          }
          
          /* Additional touch feedback for mobile */
          .explore-button:active {
            transform: scale(0.97);
            transition: transform 0.1s ease;
          }
          
          @keyframes shine {
            0% {
              left: -100%;
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            100% {
              left: 150%;
              opacity: 0;
            }
          }
          
          /* Gentle Pulse Animation */
          .explore-button {
            animation: gentlePulse 3s ease-in-out infinite;
          }
          
          .explore-button:hover {
            animation: none;
          }
          
          /* Reduced Motion Support */
          @media (prefers-reduced-motion: reduce) {
            .transition-all,
            [class*="animate-"],
            .explore-button {
              animation: none !important;
              transition: none !important;
            }
            .explore-button::before {
              display: none;
            }
          }
          
          /* Mobile-specific enhancements */
          @media (max-width: 640px) {
            .explore-button {
              -webkit-tap-highlight-color: transparent;
              touch-action: manipulation;
            }
            
            /* Ensure shine works on mobile touch */
            .explore-button.shine-active::before {
              animation: shine 0.6s ease-in-out 1;
            }
          }
        `}</style>
      </section>

      {/* ================= SECOND SECTION - NAVIGATE YOUR SUCCESS (WITH SCROLL ANIMATION) ================= */}
      <section
        id="platform-overview"
        className="bg-[#f8f8f8] px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 items-center md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT - Animated */}
          <ScrollReveal delay={0} threshold={0.3}>
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                The Perfect Map
              </p>

              <h2 className="text-2xl md:text-4xl font-bold leading-tight text-[#014421]">
                Navigate Your
                <br />
                <span className="text-[#014421]">
                  Trading Success!
                </span>
              </h2>

              <div className="w-24 h-1 bg-[#014421] rounded-full mt-6 mb-8"></div>

              <p className="mt-4 text-justify text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-left sm:text-lg md:text-justify">
                <span className="font-bold text-black">NOVAFXM</span> is your
                gateway to mastering the financial markets. Whether you're an
                experienced trader or just starting your journey, our
                cutting-edge platform offers a smooth and intuitive trading
                experience designed to adapt to your unique needs.
              </p>

              {/* Features with staggered animation */}
              <div className="mt-12 space-y-6 text-sm">
                {[
                  "Real-Time Market Insights & Analytics",
                  "Seamless and User-Friendly Interface",
                  "Swift and Reliable Execution",
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 100} threshold={0.3}>
                    <div className="flex items-center gap-3 bg-white shadow-md rounded-full px-3 py-1 hover:shadow-xl transition duration-300">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-[#014421] text-lg">✓</span>
                      </div>
                      <p className="text-left font-medium text-gray-700">
                        {item}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT IMAGE - Animated */}
          <ScrollReveal delay={200} threshold={0.3}>
            <div className="relative flex min-h-[32svh] items-center justify-center sm:min-h-[46svh] md:min-h-0">
              <img
                src={heroBg6}
                alt="Trading"
                className="relative z-10 w-full max-w-[360px] sm:max-w-[500px] md:w-[500px] md:max-w-none transition-all duration-500 hover:scale-105"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= THIRD SECTION - WHY NOVAFXM (WITH SCROLL ANIMATION) ================= */}
      <section className="w-full bg-[#efefe7] px-4 py-10 sm:px-6 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading - Animated */}
          <ScrollReveal delay={0} threshold={0.2}>
            <div className="mb-9 text-center sm:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                Why NOVAFXM is Your Perfect Trading Partner?
              </h2>

              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="w-16 h-[2px] bg-[#014421]"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                <div className="w-16 h-[2px] bg-[#D4AF37]"></div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARDS - Animated with staggered delay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} />
            ))}
          </div>

          {/* Bottom Text - Animated */}
          <ScrollReveal delay={500} threshold={0.2}>
            <div className="text-center mt-14">
              <p className="text-base md:text-xl font-medium text-[#1f1f1f] leading-relaxed">
                NOVAFXM is where innovation meets precision helping you thrive in
                the{" "}
                <span className="text-[#D4AF37] font-semibold">
                  fast-paced world of trading!
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}