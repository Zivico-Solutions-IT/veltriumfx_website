import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/bounas.jpg";
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
    question: "How can i withdraw the bonus received from VeltriumFX?",
    answer:
      "You can request a bonus withdrawal after meeting the required trading volume and account conditions.",
  },
];

function PromoCard({ promo }) {
  const navigate = useNavigate();

  return (
    <article className="promotion-offer-card group relative overflow-hidden rounded-2xl border border-[#00674F]/15 bg-[#fbfdfb] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(0,103,79,0.14)] sm:p-6 md:p-7">
      <div className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,#00674F,#D3D3D3,#20a060)]" />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[24px] border-[#00674F]/10" />
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#00674F]/[0.06]" />

      <div className="relative flex min-h-[260px] flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00674F]/20 bg-white px-3 py-1 text-xs font-semibold text-[#00674F] shadow-sm">
            <FaGift className="text-xs text-[#00674F]" />
            Promotions
          </span>
          <span className="rounded-full bg-[#D3D3D3]/70 px-3 py-1 text-xs font-bold text-[#00674F]">
            Limited Offer
          </span>
        </div>

        <div className="mt-7 grid flex-1 gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00674F]/70">
              Deposit Bonus
            </p>
            <h2 className="mt-2 text-4xl font-black leading-none text-[#07140d] sm:text-5xl">
              {promo.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
              {promo.description}
            </p>
          </div>

          <div className="relative mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_10px_rgba(0,103,79,0.08),0_18px_34px_rgba(0,103,79,0.14)] sm:h-44 sm:w-44">
            <div className="absolute inset-3 rounded-full border border-[#D3D3D3]" />
            <div className="text-center">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-[#00674F]">
                Bonus
              </div>
              <div className="mt-1 text-4xl font-black leading-none text-[#00674F] sm:text-5xl">
                {promo.bonus}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#00674F]/10 pt-5">
          <div className="flex gap-1.5">
            <span className="h-2 w-8 rounded-full bg-[#00674F]" />
            <span className="h-2 w-2 rounded-full bg-[#D3D3D3]" />
            <span className="h-2 w-2 rounded-full bg-[#20a060]" />
          </div>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="inline-flex items-center gap-2 rounded-md bg-[#00674F] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#00674F]/15 transition hover:-translate-y-0.5 hover:bg-[#005640] sm:text-sm"
          >
            View Bonus
            <FaArrowRight className="text-xs" />
          </button>
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
      <div className="absolute left-10 top-10 h-12 w-12 opacity-45 [background-image:radial-gradient(circle,#00674F_1px,transparent_1.5px)] [background-size:10px_10px]" />
      <div className="absolute bottom-8 right-8 h-12 w-12 opacity-45 [background-image:radial-gradient(circle,#00674F_1px,transparent_1.5px)] [background-size:10px_10px]" />

      <div className="mx-auto max-w-3xl">
        {/* Header with fade-in animation */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-semibold text-[#00674F]">FAQ's</p>
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-none text-[#00674F] sm:text-4xl">
            Find Answers to Common
            <span className="block">Questions</span>
          </h2>
          <div className="mx-auto mt-5 flex w-32 items-center justify-center gap-1">
            <span className="h-[2px] flex-1 bg-[#00674F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#00674F]" />
            <span className="h-[2px] flex-1 bg-[#00674F]" />
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
                        ? "bg-[#00674F] text-xs text-white"
                        : "bg-white text-[#00674F]"
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isOpen
                          ? ""
                          : "flex h-7 w-7 items-center justify-center rounded-full bg-[#00674F] text-[11px] text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <span className="flex min-h-14 flex-1 items-center justify-between gap-4 px-4 py-3">
                    <span className="text-sm font-extrabold text-[#00674F] transition-all duration-300 sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-[#00674F] transition-transform duration-300 ${
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
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#00674F] px-4 py-16 text-center text-white sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)]"
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
              src={heroImg}
              alt="Promotions Hero"
              className="account-hero-image h-full w-full object-cover object-center brightness-110"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,60,0.35),transparent_65%)] animate-[fadeIn_1.8s_ease-out]" />

        <div className="relative z-10 w-full max-w-4xl">
          {/* Heading - Staggered Fade In Up */}
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Trade Smarter
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D3D3D3]">
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
              className="mt-8 w-full max-w-[200px] rounded-full bg-[#D3D3D3] px-4 py-2 text-xs font-semibold text-[#00674F] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#D3D3D3]/90 hover:shadow-lg hover:shadow-[#D3D3D3]/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm"
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
      <section id="promotion-cards" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-6 md:py-12">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
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
