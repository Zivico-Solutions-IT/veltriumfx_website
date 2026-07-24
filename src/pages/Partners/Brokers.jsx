import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/intoBro.png";
import bannerImg from "../../assets/images/banner_brokers.jpg";
import {
  ChevronRight,
  Headphones,
  CircleDollarSign,
  Zap,
  Globe,
  UserPlus,
  Users,
  Coins,
  ArrowRight
} from "lucide-react";

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
    const current = elementRef.current;
    if (!current) return;

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

    observer.observe(current);

    const rect = current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      observer.unobserve(current);
    }

    return () => {
      observer.disconnect();
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

export default function IntroducingBrokers() {
  // ================= FEATURES =================
  const features = [
    {
      title: "24/7 Support",
      description: "Dedicated partner support available anytime you need assistance.",
      icon: <Headphones className="h-8 w-8 text-white" />
    },
    {
      title: "High Commissions",
      description: "Earn competitive commissions from every active trader.",
      icon: <CircleDollarSign className="h-8 w-8 text-white" />
    },
    {
      title: "Fast Withdrawals",
      description: "Quick and secure withdrawals with smooth transactions.",
      icon: <Zap className="h-8 w-8 text-white" />
    },
    {
      title: "Global Reach",
      description: "Expand your partnership network across worldwide markets.",
      icon: <Globe className="h-8 w-8 text-white" />
    },
  ];

  // ================= STEPS =================
  const steps = [
    {
      number: "01",
      title: "Register Your Account",
      description: "Create your Introducing Broker account and receive your personal referral link instantly.",
      action: "Get Started",
      icon: <UserPlus className="h-10 w-10 text-[#00674F]" />
    },
    {
      number: "02",
      title: "Invite New Traders",
      description: "Share your referral link with traders and grow your client network worldwide.",
      action: "Verify Now",
      icon: <Users className="h-10 w-10 text-[#00674F]" />
    },
    {
      number: "03",
      title: "Earn Commissions",
      description: "Receive commissions automatically whenever your referred clients trade.",
      action: null,
      icon: <Coins className="h-10 w-10 text-[#00674F]" />
    },
  ];

  return (
    <div className="w-full bg-[#f8faf9] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#2d3748] px-4 py-10 sm:min-h-[560px] sm:px-6 lg:min-h-[600px]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={heroBg}
              alt="Introducing Brokers Hero"
              className="h-full w-full object-cover object-center brightness-75"
            />
          </div>
        </div>
        {/* Ash Color Overlay */}
        <div className="absolute inset-0 bg-gray-700/40 animate-[fadeIn_1.5s_ease-out] mix-blend-multiply"></div>

        {/* Hero Content */}
        <div className="market-hero-content relative z-10 mx-auto max-w-5xl text-center">
          <ScrollReveal delay={0} threshold={0.1} direction="up">
            <p className="market-hero-copy mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#D3D3D3] md:text-base">
              VeltriumFX Partnership Program
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} threshold={0.1} direction="up">
            <h1 className="market-hero-title text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Introducing Brokers
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200} threshold={0.1} direction="up">
            <p className="market-hero-copy mt-4 max-w-3xl px-2 text-sm leading-6 text-white/90 sm:text-base md:mt-5 md:leading-7">
              Build a powerful passive income stream by referring traders
              to VeltriumFX and earning commissions from every successful trade.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} threshold={0.1} direction="up">
            <button
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              className="button-shine mt-6 animate-[fadeInUp_1.2s_ease-out] rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
            >
              Explore More
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PARTNERSHIP BENEFITS SECTION ================= */}
      <section className="px-4 py-16 sm:py-20 md:px-8 lg:px-16 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <ScrollReveal delay={0} threshold={0.3} direction="up">
              <p className="text-[#00674F] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3">
                PARTNERSHIP BENEFITS
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Refer Traders & Build Passive Income
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200} threshold={0.3} direction="up">
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-gray-600 font-regular text-sm sm:text-base leading-relaxed">
                  Join the VeltriumFX Introducing Broker program and unlock unlimited earning opportunities
                  by referring traders to our trusted platform.
                </p>
                <p className="text-gray-600 font-regular text-sm sm:text-base leading-relaxed">
                  Our IB program is designed to help partners grow with reliable payouts, advanced tools,
                  professional support and global market access.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggeredCard key={index} index={index}>
                <div className="flex flex-col items-center text-center rounded-xl bg-white p-8 sm:p-10 shadow-[0_4px_25px_rgb(0,0,0,0.04)] h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00674F] mb-6 shadow-lg shadow-[#00674F]/20">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-lg sm:text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 font-regular text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggeredCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DARK INFO BANNER ================= */}
      <section className="px-4 pb-4 pt-0 sm:px-6 md:px-8 lg:px-16 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0} threshold={0.1} direction="up">
            <div className="overflow-hidden bg-[#0d1b16] rounded-xl text-white shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b16] via-[#0d1b16]/90 to-transparent z-10 hidden md:block"></div>
              <div className="grid items-center gap-0 lg:grid-cols-2 relative z-20">
                {/* CONTENT */}
                <div className="p-8 sm:p-10 lg:p-12 lg:pr-4">
                  <h3 className="text-2xl font-bold leading-tight sm:text-4xl text-white">
                    Build Your Network, <br className="hidden sm:block" />
                    <span className="text-[#00c88f]">Grow Your Income</span>
                  </h3>
                  <div className="mt-4 h-1 w-12 bg-[#00674F]"></div>
                  <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-relaxed max-w-lg">
                    Whether you're an experienced financial professional or an ambitious networker, the VeltriumFX IB program is designed to help you earn competitive commissions by connecting traders to a world-class platform.
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative h-[250px] w-full sm:h-[350px] lg:h-[100%] order-first lg:order-last">
                  <img
                    src={bannerImg}
                    alt="Introducing Brokers Network"
                    className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b16] to-transparent lg:bg-gradient-to-l opacity-80 md:opacity-60"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PARTNERSHIP PROCESS SECTION ================= */}
      <section className="px-4 py-16 sm:py-20 md:px-8 lg:px-16 bg-gradient-to-b from-[#eaf4f0] to-[#f8faf9] relative overflow-hidden">
        {/* Subtle Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#00674F 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal delay={0} threshold={0.3} direction="up">
              <p className="text-[#00674F] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3">
                PARTNERSHIP PROCESS
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Start Earning in 3 Steps
              </h2>
            </ScrollReveal>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
            {/* Dotted lines for desktop */}
            <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] border-t-2 border-dashed border-[#00674F]/30 z-0"></div>

            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StaggeredCard index={index}>
                  <div className="flex flex-col items-center text-center rounded-xl bg-white p-8 sm:p-10 shadow-[0_4px_25px_rgb(0,0,0,0.06)] w-full max-w-[340px] h-full relative z-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgb(0,0,0,0.1)] border border-gray-100">
                    
                    {/* Number Badge */}
                    <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#00674F] text-white font-bold shadow-md">
                      {step.number}
                    </div>

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f1ec] mb-6 mt-4">
                      {step.icon}
                    </div>
                    
                    <h3 className="mb-4 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-500 font-regular text-sm leading-relaxed mb-6 flex-grow">
                      {step.description}
                    </p>

                    {step.action && (
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center w-full rounded-lg bg-[#00674F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#00513e] hover:shadow-lg mt-auto"
                      >
                        {step.action}
                      </Link>
                    )}
                  </div>
                </StaggeredCard>

                {/* Mobile/Tablet Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden text-[#00674F]/50 my-4 flex items-center justify-center">
                    <ChevronRight size={32} />
                  </div>
                )}
                
                {/* Desktop Arrow Indicator on Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex z-10 w-8 h-8 bg-[#00674F] rounded-full text-white items-center justify-center">
                    <ChevronRight size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* Keyframe Animations */
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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