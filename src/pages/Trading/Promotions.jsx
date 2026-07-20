import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaGift } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const promotions = [
  {
    bonus: "100%",
    title: "100% BONUS",
    description: "Boost your investments with a 100% bonus on all deposits.",
  },
  {
    bonus: "150%",
    title: "150% BONUS",
    description: "Boost your investments with a 150% bonus on all deposits.",
  },
];

const faqs = [
  {
    question: "What happens if my account becomes inactive for three months?",
    answer:
      "If your account holds only Bonus Funds with no deposited funds and remains inactive for three months, your bonus funds will be returned to the platform.",
  },
  {
    question: "Can i withdraw my profits before meeting the withdrawal threshold?",
    answer:
      "Profits can be withdrawn once all bonus terms and withdrawal requirements have been completed.",
  },
  {
    question: "What happens if i do not meet the withdrawal threshold within 90 days?",
    answer:
      "If the threshold is not met within 90 days, the bonus may expire according to the promotion terms.",
  },
  {
    question: "How can i withdraw the bonus received from NOVAFXM?",
    answer:
      "You can request a bonus withdrawal after meeting the required trading volume and account conditions.",
  },
];

function PromoCard({ promo }) {
  const navigate = useNavigate();

  return (
    <article className="bonus-card account-plan-card reveal-up group relative grid min-h-[200px] overflow-hidden rounded-lg bg-white shadow-[0_8px_22px_rgba(15,23,42,0.14)] ring-1 ring-black/10 md:min-h-[260px] md:grid-cols-[1fr_360px]">
      {/* Left side - Content */}
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#004b27_0%,#003d20_42%,#012414_100%)] px-5 py-5 text-white sm:px-8 md:px-8 md:py-8">
        <div className="absolute inset-y-0 right-[-1px] hidden w-24 bg-white [clip-path:polygon(100%_0,100%_100%,0_100%,48%_50%,0_0)] md:block" />
        <div className="bonus-card-sheen absolute inset-y-0 left-[-45%] w-1/3 rotate-12 bg-white/15 blur-sm" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0_54%,rgba(255,255,255,0.05)_54%_66%,transparent_66%_100%)]" />
        <div className="absolute -bottom-16 left-20 h-48 w-48 rounded-full bg-[#00ad3f]/18 blur-3xl" />
        <div className="absolute bottom-4 right-20 h-28 w-40 opacity-20 [background-image:radial-gradient(circle,#d4af37_1.2px,transparent_1.8px)] [background-size:8px_8px]" />

        <span className="relative mb-3 inline-flex items-center gap-2 rounded-full border border-[#014421]/20 bg-[#e9f4e9] px-3 py-1 text-xs font-medium text-[#014421] md:mb-6 md:px-4 md:py-1.5">
          <FaGift className="text-xs text-[#014421] md:text-sm" />
          Promotions
        </span>

        <h2 className="relative text-2xl font-black leading-none tracking-normal text-white sm:text-3xl md:text-4xl md:text-5xl">
          {promo.title}
        </h2>
        <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base md:mt-5 md:text-lg">
          {promo.description}
        </p>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="button-shine relative mt-4 inline-flex items-center gap-3 rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#c79f26] md:mt-7 md:gap-4 md:px-7 md:py-3 md:text-sm"
        >
          View Bonus
          <FaArrowRight className="text-xs" />
        </button>
      </div>

      {/* Right side - Bonus Badge (hidden on mobile, shown on desktop) */}
      <div className="relative hidden min-h-full items-center justify-center overflow-hidden bg-white md:flex">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,rgba(1,68,33,0.12)_48%_49%,transparent_49%_100%)]" />
        <div className="absolute right-[-34px] top-[-14px] h-52 w-52 rotate-45 border border-[#014421]/15" />
        <div className="absolute -bottom-16 left-8 h-56 w-56 rotate-45 border border-[#014421]/10" />
        <div className="absolute bottom-0 right-0 h-44 w-48 opacity-35 [background-image:repeating-linear-gradient(135deg,#014421_0_2px,transparent_2px_12px)]" />
        <div className="absolute right-5 top-5 h-24 w-24 opacity-35 [background-image:radial-gradient(circle,#18a044_1.6px,transparent_2px)] [background-size:10px_10px]" />
        <span className="absolute left-16 top-14 h-4 w-4 rounded-full bg-[#18a044]" />
        <span className="absolute bottom-8 left-9 h-28 w-2 rotate-45 rounded-full bg-[#007f3e]" />
        <span className="absolute bottom-4 right-20 h-36 w-3 rotate-45 rounded-full bg-[#8cc99e]" />

        <div className="relative flex h-52 w-52 rotate-45 items-center justify-center rounded-3xl border-[8px] border-white bg-[linear-gradient(135deg,#008743,#014421)] shadow-[0_14px_28px_rgba(1,68,33,0.32)] outline outline-1 outline-[#014421]/25">
          <div className="-rotate-45 text-center text-white">
            <div className="text-2xl font-black italic leading-none">BONUS</div>
            <div className="text-6xl font-black italic leading-none">{promo.bonus}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f8f7] px-4 pb-8 pt-14 sm:px-6 md:pb-10 md:pt-20"
    >
      <div className="absolute left-10 top-10 h-12 w-12 opacity-45 [background-image:radial-gradient(circle,#014421_1px,transparent_1.5px)] [background-size:10px_10px]" />
      <div className="absolute bottom-8 right-8 h-12 w-12 opacity-45 [background-image:radial-gradient(circle,#014421_1px,transparent_1.5px)] [background-size:10px_10px]" />

      <div className="mx-auto max-w-3xl">
        {/* Header with fade-in animation */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-semibold text-[#014421]">FAQ's</p>
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-none text-[#014421] sm:text-4xl">
            Find Answers to Common
            <span className="block">Questions</span>
          </h2>
          <div className="mx-auto mt-5 flex w-32 items-center justify-center gap-1">
            <span className="h-[2px] flex-1 bg-[#014421]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#014421]" />
            <span className="h-[2px] flex-1 bg-[#014421]" />
          </div>
        </div>

        {/* FAQ Items with staggered animation */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black/[0.03] transition-all duration-700 ${
                  hasAnimated
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <button
                  type="button"
                  className="flex w-full items-stretch text-left transition-all duration-300 hover:bg-gray-50"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span
                    className={`flex w-14 shrink-0 items-center justify-center font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-[#014421] text-xs text-white"
                        : "bg-white text-[#014421]"
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isOpen
                          ? ""
                          : "flex h-7 w-7 items-center justify-center rounded-full bg-[#014421] text-[11px] text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <span className="flex min-h-14 flex-1 items-center justify-between gap-4 px-4 py-3">
                    <span className="text-sm font-extrabold text-[#014421] transition-all duration-300 sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-[#014421] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp size={20} strokeWidth={2.5} />
                      ) : (
                        <ChevronDown size={20} strokeWidth={2.5} />
                      )}
                    </span>
                  </span>
                </button>

                {/* Animated Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-[#dbead9] px-4 py-4 text-sm leading-relaxed text-[#213b2c] sm:pl-[72px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-transform,
          .transition-opacity,
          .transition-colors {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default function Promotions() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !heroAnimated) {
            setHeroAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroAnimated]);

  return (
    <main className="min-h-screen bg-[#f5f7f5] text-[#07140d]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-black px-4 py-16 text-center text-white sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)]"
      >
        {/* Animated Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{
              transformOrigin: 'center',
            }}
          >
            <img
              src="/Promotions.png.jpeg"
              alt=""
              className="account-hero-image h-full w-full object-cover object-center brightness-110"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)] animate-[fadeIn_1.8s_ease-out]" />

        <div className="relative z-10 w-full max-w-4xl">
          {/* Badge - Slide In From Top */}
          <div className="animate-[slideInDown_0.6s_ease-out]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 px-4 py-2 text-xs text-[#D4AF37] sm:mb-6 sm:px-5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Promotions
            </span>
          </div>

          {/* Heading - Staggered Fade In Up */}
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Trade Smarter
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D4AF37]">
              With Year-Round Bonuses
            </span>
          </h1>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
              Unlock more opportunities with year-round trading bonuses designed to boost your trading potential.
            </p>
          </div>

          {/* Button - Fade In Up with Pulse */}
          <div className="animate-[fadeInUp_1.4s_ease-out]">
            <button
              className="button-shine mt-8 w-full max-w-[200px] rounded-full bg-[#014421] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm animate-[gentlePulse_3s_ease-in-out_infinite] hover:animate-none"
              onClick={() => {
                document.getElementById("promotion-cards")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              View Bonuses
            </button>
          </div>
        </div>
      </section>

      {/* Promo Cards Section */}
      <section id="promotion-cards" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-6 sm:px-6 md:py-9">
        <div className="grid gap-5 sm:gap-6 md:gap-8">
          {promotions.map((promo, index) => (
            <div
              key={promo.bonus}
              className={`transition-all duration-700`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: heroAnimated ? 1 : 0,
                transform: heroAnimated ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <PromoCard promo={promo} />
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

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

        /* Pulse Animation for Badge Dot */
        .animate-pulse {
          animation: gentlePulse 2s ease-in-out infinite;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          .button-shine::before {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}