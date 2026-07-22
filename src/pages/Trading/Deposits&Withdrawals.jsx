import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaLock,
  FaShieldAlt,
  FaCheckCircle,
  FaCreditCard,
  FaUniversity,
  FaBitcoin,
} from "react-icons/fa";

// Scroll Animation Component - Fade In Up only
const ScrollRevealUp = ({ children, delay = 0, threshold = 0.1 }) => {
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

// Fade In Up Component for Feature Cards
const FeatureCardReveal = ({ children, index, delay = 0 }) => {
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
        threshold: 0.15,
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
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Fade In Up for Payment Methods Cards
const PaymentCardReveal = ({ children, index }) => {
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
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {children}
    </div>
  );
};

export default function DepositWithdrawSection() {
  const navigate = useNavigate();

  const paymentMethods = [
    {
      title: "Credit/Debit Card",
      icon: <FaCreditCard className="text-white" />,
      image: "/Deposits3.png",
      currencies: "USD, EUR, GBP",
      type: "Card Payment",
      fees: "0%",
      time: "Instant",
    },
    {
      title: "Bank Transfer",
      icon: <FaUniversity className="text-white" />,
      image: "/Deposits4.png",
      currencies: "USD/YEN",
      type: "Local Bank Wire",
      fees: "0%",
      time: "24 - 72 hours",
    },
    {
      title: "Cryptocurrency",
      icon: <FaBitcoin className="text-white" />,
      image: "/Deposits5.png",
      currencies: "All Popular Crypto",
      type: "Wallet to wallet",
      fees: "0%",
      time: "Instant",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ea] overflow-hidden">
      
      {/* HERO SECTION WITH FADE IN UP ANIMATIONS */}
      <div className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#00674F] px-4 py-10 text-center sm:min-h-[calc(100vh-80px)] sm:px-6 sm:py-12 lg:min-h-[calc(100vh-84px)]">
        
        {/* Animated Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{
              transformOrigin: 'center',
            }}
          >
            <img
              src="/deposit.png"
              alt=""
              className="account-hero-image h-full w-full object-cover object-center brightness-110"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-[#00674F]/65 animate-[fadeIn_1.5s_ease-out]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)] animate-[fadeIn_1.8s_ease-out]"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          {/* Heading - Staggered Fade In Up */}
          <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl sm:leading-tight md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Move Money on
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D3D3D3]">
              Your Terms
            </span>
          </h1>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-200 sm:mt-4 sm:text-base sm:leading-relaxed">
              Manage deposits and withdrawals through a secure VeltriumFX payment flow.
              <br className="hidden sm:block" />
              Choose trusted methods and keep every transaction simple to track.
            </p>
          </div>

          {/* Button - Fade In Up with Pulse */}
          <div className="animate-[fadeInUp_1.4s_ease-out]">
            <button
              className="mt-6 w-full max-w-[200px] rounded-full bg-[#D3D3D3] px-4 py-2 text-xs font-semibold text-[#00674F] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#D3D3D3]/90 hover:shadow-lg hover:shadow-[#D3D3D3]/20 active:translate-y-0 sm:mt-6 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm"
              onClick={() => {
                document.getElementById("payment-methods")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Explore Payment Options
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gentlePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
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
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          .button-shine:hover::before {
            left: 100%;
          }
          @media (prefers-reduced-motion: reduce) {
            .transition-all, [class*="animate-"] {
              animation: none !important;
              transition: none !important;
            }
            .button-shine::before { transition: none; }
          }
        `}</style>
      </div>

      {/* SECOND SECTION - TAILOR YOUR EARNINGS */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        
        {/* Heading - Fade In Up */}
        <ScrollRevealUp delay={0}>
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 className="text-2xl font-bold leading-tight text-[#0b1f16] sm:text-3xl md:text-4xl">
              Control Your
              <br />
              <span className="text-[#00674F]">
                Funding Experience
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base">
              VeltriumFX keeps funding practical and transparent, so you can move money
              with less friction and keep your trading plan on schedule.
            </p>
            <p className="mt-2 text-sm italic text-[#D3D3D3]">
              Clear movement of funds, built around your pace.
            </p>
          </div>
        </ScrollRevealUp>

        {/* FEATURE CARDS - All Fade In Up */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          
          {/* CARD 1 */}
          <FeatureCardReveal index={0} delay={100}>
            <div className="deposit-feature-card group relative overflow-hidden rounded-2xl border border-[#00674F]/20 border-b-[4px] border-b-[#00674F] bg-white px-5 pb-5 pt-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-8 sm:pt-7">
              <div className="deposit-feature-icon mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[#00674F] text-sm text-white transition-all duration-300 group-hover:scale-110">
                <FaBolt className="text-white" />
              </div>
              <h2 className="text-xl font-bold leading-snug text-[#0b1f16] sm:text-2xl">
                Fast, Flexible
                <br />
                <span className="text-[#00674F]">
                  Money Movement
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-700">
                Experience trading without limits—fast, flexible, and completely
                fee-free. With VeltriumFX, your money moves as quickly as your ideas.
              </p>
              <div className="mt-5 flex h-32 items-end justify-center overflow-hidden rounded-b-xl sm:mt-6 sm:h-36">
                <img
                  src="/Deposits1-veltriumfx.png"
                  alt="Fast deposits and withdrawals illustration"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </FeatureCardReveal>

          {/* CARD 2 */}
          <FeatureCardReveal index={1} delay={250}>
            <div className="deposit-feature-card group relative overflow-hidden rounded-2xl border border-[#00674F]/20 border-b-[4px] border-b-[#00674F] bg-white px-5 pb-5 pt-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-8 sm:pt-7">
              <div className="deposit-feature-icon mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[#00674F] text-sm text-white transition-all duration-300 group-hover:scale-110">
                <FaLock className="text-white" />
              </div>
              <h2 className="text-xl font-bold leading-snug text-[#0b1f16] sm:text-2xl">
                Protected Payments,
                <br />
                <span className="text-[#00674F]">
                  Clear Controls
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-700">
                VeltriumFX applies strong protection standards to help keep every
                payment request, account movement and transaction record secure.
              </p>
              <div className="mt-5 flex h-32 items-end justify-center overflow-hidden rounded-b-xl sm:mt-6 sm:h-36">
                <img
                  src="/Deposits2.png.PNG"
                  alt="Secure transactions illustration"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </FeatureCardReveal>
        </div>

        {/* Feature Pills - Fade In Up */}
        <ScrollRevealUp delay={400}>
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm sm:rounded-full">
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
                <FaBolt className="text-[#ffb000]" />
              </span>
              Fast & Flexible
            </div>
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
                <FaCheckCircle className="text-[#ffb000]" />
              </span>
              Zero Fees
            </div>
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-700 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ffcf60]">
                <FaShieldAlt className="text-[#ffb000]" />
              </span>
              Secure & Protected
            </div>
          </div>
        </ScrollRevealUp>

        {/* PAYMENT METHODS SECTION */}
        <div id="payment-methods" className="mt-10 scroll-mt-24 sm:mt-12 lg:mt-14">
          
          {/* Title - Fade In Up */}
          <ScrollRevealUp delay={500}>
            <div className="mb-7 text-center sm:mb-9">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                <span className="text-black">Deposits</span>{" "}
                <span className="text-[#00674F]">& Withdrawals</span>
              </h2>
              <div className="mt-2 flex items-center justify-center gap-3">
                <div className="w-14 h-[2px] bg-[#d6c49d]"></div>
                <div className="w-3 h-3 rounded-full bg-[#d6a400]"></div>
                <div className="w-14 h-[2px] bg-[#d6c49d]"></div>
              </div>
            </div>
          </ScrollRevealUp>

          {/* Payment Method Cards - All Fade In Up */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {paymentMethods.map((item, index) => (
              <PaymentCardReveal key={index} index={index}>
                <div className=" home-package-card relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6">
                  
                  <div className="mb-4 flex items-center gap-3">
                    <div className="account-plan-icon flex h-9 w-9 items-center justify-center rounded-md bg-[#00674F] text-sm text-white transition-all duration-300 hover:scale-110">
                      {item.icon}
                    </div>
                    <h2 className="text-lg font-bold leading-snug text-[#0b1f16] sm:text-xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="mb-5 flex justify-center sm:mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-36 object-contain transition duration-300 hover:scale-105 sm:h-32 sm:w-40"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                      <span className="max-w-[52%] text-gray-500">Supported Currencies</span>
                      <span className="max-w-[48%] text-right font-semibold text-[#00674F]">
                        {item.currencies}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                      <span className="max-w-[52%] text-gray-500">Type</span>
                      <span className="max-w-[48%] text-right font-semibold text-[#00674F]">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-3 text-xs sm:text-sm">
                      <span className="max-w-[52%] text-gray-500">Fees</span>
                      <span className="max-w-[48%] text-right font-semibold text-[#00674F]">
                        {item.fees}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                      <span className="max-w-[52%] text-gray-500">Processing Time</span>
                      <span className="max-w-[48%] text-right font-semibold text-[#00674F]">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate("/signup")}
                    className="button-shine mt-5 w-full rounded-md border border-[#00674F] bg-[#00674F] py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#00674F] hover:shadow-lg hover:shadow-[#00674F]/20 active:translate-y-0"
                  >
                    Open Your Account
                  </button>
                </div>
              </PaymentCardReveal>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        .button-shine:hover::before {
          left: 100%;
        }
        .deposit-feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .account-plan-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .animate-pulse {
          animation: gentlePulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .transition-all, [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          .button-shine::before { transition: none; }
        }
      `}</style>
    </section>
  );
}
