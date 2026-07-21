import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCreditCard, FaUserAlt } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Select Account",
    desc: "Pick a trading setup that matches your goals",
    Icon: FaUserAlt,
  },
  {
    number: "02",
    title: "Add Funds",
    desc: "Move capital with protected payment options",
    Icon: FaCreditCard,
  },
  {
    number: "03",
    title: "Enter Markets",
    desc: "Open positions and manage every move with precision.",
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
        className={`process-card relative z-10 flex min-h-[280px] w-full max-w-[360px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm border bg-white px-8 py-12 text-center shadow-sm transition-colors duration-300 focus:outline-none md:min-h-[300px] mx-auto ${
          isActive
            ? "border-[#00674F] bg-[#00674F]/5"
            : "border-[#D3D3D3] hover:border-[#00674F]/50 hover:bg-gray-50"
        }`}
        aria-pressed={isActive}
      >
        {/* Top Progress Bar */}
        <span
          className={`absolute left-0 top-0 h-1.5 w-full origin-left transition-all duration-500 ${
            isActive ? "scale-x-100 bg-[#00674F]" : "scale-x-0 bg-[#D3D3D3]"
          }`}
        ></span>

        {/* Step Number Badge */}
        <div className={`absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-sm border text-xs font-bold transition-colors duration-300 ${
          isActive ? "border-[#00674F] bg-[#00674F] text-white" : "border-[#D3D3D3] bg-white text-[#00674F]"
        }`}>
          {number}
        </div>

        {/* Selected Badge */}
        {isActive && (
          <div className="absolute right-5 top-5 rounded-sm bg-[#00674F] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            Active
          </div>
        )}

        {/* Icon Container */}
        <div
          className={`process-icon mb-6 flex h-14 w-14 items-center justify-center rounded-sm text-2xl transition-all duration-300 ${
            isActive ? "bg-[#00674F] text-white shadow-md scale-110" : "bg-[#D3D3D3]/30 text-[#00674F]"
          }`}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3 className={`mb-3 text-lg font-bold transition-colors duration-300 sm:text-xl ${isActive ? "text-[#00674F]" : "text-gray-900"}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
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
      className="w-full overflow-hidden bg-white px-4 py-16 text-center sm:px-5 sm:py-24 border-b border-[#D3D3D3]"
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
          <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#00674F]">Getting Started</p>
          <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
        </div>

        {/* Main Heading */}
        <h2
          className={`mb-12 text-3xl font-extrabold leading-tight text-gray-900 transition-all duration-700 delay-100 sm:text-4xl md:mb-16 md:text-5xl ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          A Cleaner Way to Begin with <span className="text-[#00674F]">VeltriumFX</span>
        </h2>

        {/* Steps with Scroll Animation */}
        <div className="relative grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8">
          {/* Animated Progress Line - Desktop Only */}
          <div className="absolute left-[18%] right-[18%] top-[45%] hidden h-[2px] -translate-y-1/2 overflow-hidden bg-[#D3D3D3] md:block">
            <span
              className="step-line-progress block h-full bg-[#00674F] transition-all duration-500 ease-out"
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
          className={`mx-auto mt-12 max-w-md text-center text-sm leading-relaxed text-gray-600 transition-all duration-700 delay-500 sm:mt-16 sm:text-base ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          One guided flow for account setup, funding and market access.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className={`mt-6 inline-flex items-center justify-center rounded-sm border border-[#00674F] bg-[#00674F] px-10 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-[#00674F] sm:w-auto ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Open Platform
        </button>
      </div>

      <style jsx>{`
        /* Hover Scale for Icon */
        .process-card:hover .process-icon {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
