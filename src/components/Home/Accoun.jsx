import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";

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

// Scroll Animation Component for Cards
const ScrollRevealCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
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

// Individual Card Component
const StepCard = ({ step, index, isActive, onActivate }) => {
  const { Icon, number, title, desc } = step;
  
  return (
    <ScrollRevealCard delay={index * 150}>
      <button
        type="button"
        onClick={() => onActivate(index)}
        className={`process-card relative z-10 flex min-h-[280px] w-full max-w-[360px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border bg-white px-8 py-12 text-center shadow-[0_18px_42px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-4 md:min-h-[300px] mx-auto ${
          isActive
            ? "border-[#D4AF37] shadow-[0_28px_48px_rgba(212,175,55,0.2)]"
            : "border-[#014421]/15 hover:border-[#014421]/40 hover:shadow-[0_28px_60px_rgba(1,68,33,0.16)]"
        }`}
        aria-pressed={isActive}
      >
        {/* Top Progress Bar */}
        <span
          className={`absolute left-0 top-0 h-1.5 w-full origin-left rounded-t-2xl transition-all duration-300 ${
            isActive ? "scale-x-100 bg-[#D4AF37]" : "scale-x-0 bg-[#D4AF37]"
          }`}
        ></span>

        {/* Step Number Badge */}
        <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-md border border-[#014421]/15 bg-[#f5f7f2] text-xs font-bold text-[#014421] transition-all duration-300">
          {number}
        </div>

        {/* Selected Badge */}
        {isActive && (
          <div className="absolute right-5 top-5 rounded-full bg-[#D4AF37] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
            Selected
          </div>
        )}

        {/* Icon Container */}
        <div
          className={`process-icon mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#014421] text-2xl text-white shadow-sm transition-all duration-300 ${
            isActive ? "scale-110 bg-[#0d6b36]" : ""
          }`}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold text-[#014421] transition-all duration-300 sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-center text-sm leading-relaxed text-gray-500 transition-all duration-300 sm:text-base">
          {desc}
        </p>
      </button>
    </ScrollRevealCard>
  );
};

export default function Account() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
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
      className="w-full overflow-hidden bg-[#f5f6f7] px-4 py-10 text-center sm:px-5 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Small Heading */}
        <div
          ref={headerRef}
          className={`mb-4 flex items-center justify-center gap-3 transition-all duration-700 ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
          <p className="text-sm font-semibold text-gray-700">How It Works</p>
          <span className="h-[2px] w-8 bg-[#014421] sm:w-10"></span>
        </div>

        {/* Main Heading */}
        <h2
          className={`mb-10 text-2xl font-bold leading-tight text-gray-900 transition-all duration-700 delay-100 sm:text-3xl md:mb-14 md:text-4xl ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Trading Made Simple with{" "}
          <span className="text-[#014421]">NOVAFXM</span>
        </h2>

        {/* Steps with Scroll Animation */}
        <div className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
          {/* Animated Progress Line - Desktop Only */}
          <div className="absolute left-[18%] right-[18%] top-1/2 hidden h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[#014421]/15 md:block">
            <span
              className="step-line-progress block h-full rounded-full bg-[#D4AF37] transition-all duration-500 ease-out"
              style={{
                width: activeStep !== null ? "33.333%" : "0%",
                transform: activeStep !== null ? `translateX(${activeStep * 100}%)` : "translateX(-100%)",
                opacity: activeStep !== null ? 1 : 0,
              }}
            ></span>
          </div>

          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isActive={activeStep === index}
              onActivate={setActiveStep}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p
          className={`mx-auto mt-12 max-w-md text-justify text-sm leading-relaxed text-gray-700 transition-all duration-700 delay-500 sm:mt-14 sm:text-center sm:text-base ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Everything you need to trade Forex in one place.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className={`button-shine relative mt-5 w-full max-w-[220px] overflow-hidden rounded-full bg-[#014421] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#014421] hover:shadow-lg hover:shadow-[#014421]/20 active:translate-y-0 sm:w-auto ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Trade Now
        </button>
      </div>

      <style jsx>{`
        /* Button Shine Effect */
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

        /* Hover Scale for Icon */
        .process-card:hover .process-icon {
          transform: scale(1.05);
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .button-shine::before {
            animation: none;
            transition: none;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .process-card {
            min-height: 260px;
            padding: 1.5rem;
          }
          
          .process-icon {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}