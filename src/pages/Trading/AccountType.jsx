import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/accounts.jpeg";
import {
  FaChartLine,
  FaCheck,
  FaCreditCard,
  FaCrown,
  FaGem,
  FaMedal,
  FaShieldAlt,
  FaSignal,
  FaUserAlt,
} from "react-icons/fa";

const accounts = [
  {
    title: "Standard Account",
    price: "$200",
    Icon: FaMedal,
    features: [
      "Minimum Deposit $200",
      "Spreads from 1.3 pips",
      "Low Commission",
      "Leverage up to 1:400",
      "Support 24/7",
    ],
  },
  {
    title: "Silver Account",
    price: "$5,000",
    Icon: FaShieldAlt,
    popular: true,
    features: [
      "Minimum Deposit $5,000",
      "Spreads from 1 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "Gold Account",
    price: "$15,000",
    Icon: FaCrown,
    features: [
      "Minimum Deposit $15,000",
      "Spreads from 0.8 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
    title: "VIP Account",
    price: "$25,000",
    Icon: FaGem,
    features: [
      "Minimum Deposit $25,000",
      "Spreads from 0.6 pips",
      "Low Commission",
      "Leverage up to 1:500",
      "Support 24/7",
    ],
  },
  {
      title: "VVIP Account",
      price: "$50,000",
      Icon: FaSignal,
      features: [
        "Minimum Deposit $50,000",
        "Spreads from 0.2 pips",
        "Low Commission",
        "Leverage up to 1:500",
        "Support 24/7",
      ],
  },
];

// Scroll Animation Component - Pure Fade In Up
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

// Animated Account Card Component
const AnimatedAccountCard = ({ account, index }) => {
  const { Icon, ...accountData } = account;
  const navigate = useNavigate();
  
  return (
    <ScrollReveal delay={index * 150} threshold={0.1}>
      <div className={`account-type-card relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${
        accountData.popular ? 'is-popular border-[#00674F]/45' : 'border-[#dce9e1]'
      }`}>
        {accountData.popular && (
          <div className="absolute right-4 top-4 z-20">
            <span className="rounded-full bg-[#D3D3D3] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#00674F] shadow-sm">
              Popular
            </span>
          </div>
        )}

        <div className="mb-6 flex items-center gap-3">
          <div className="account-type-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#00674F] text-base text-white shadow-sm shadow-[#00674F]/20">
            <Icon />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00674F]/70">
              Trading Plan
            </p>
            <h2 className="mt-1 text-lg font-extrabold leading-snug text-gray-950 sm:text-xl">{accountData.title}</h2>
          </div>
        </div>

        <h2 className="mb-5 text-3xl font-black tracking-tight text-[#00674F]">{accountData.price}</h2>

        <ul className="mb-7 flex-1 space-y-3 text-sm text-gray-700">
          {accountData.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00674F]/10">
                <FaCheck className="h-2.5 w-2.5 text-[#00674F]" />
              </span>
              <span className="leading-5">{feature}</span>
            </li>
          ))}
        </ul>

      <button
  type="button"
  onClick={() => navigate("/signup")}
  className={`mt-auto w-full rounded-lg border py-3 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
    accountData.popular
      ? "border-[#00674F] bg-[#00674F] text-white hover:shadow-[#00674F]/20"
      : "border-[#00674F]/35 bg-white text-[#00674F] hover:border-[#00674F] hover:bg-[#00674F] hover:text-white hover:shadow-[#00674F]/20"
  }`}
>
  Open Account
</button>
      </div>
    </ScrollReveal>
  );
};
// Animated Step Card Component
const AnimatedStepCard = ({ step, index, Icon }) => {
  return (
    <ScrollReveal delay={index * 150} threshold={0.1}>
      <div className="relative flex justify-center">
        {/* Connector Dots */}
        {index !== 2 && (
          <div className="hidden md:flex absolute top-16 -right-8 items-center gap-2 z-10">
            <span className="w-2 h-2 bg-[#00674F] rounded-full"></span>
            <span className="w-2 h-2 bg-[#00674F] rounded-full"></span>
          </div>
        )}

        {/* Card */}
        <div className="process-card relative w-full max-w-[320px] rounded-2xl border border-[#00674F]/20 border-b-[4px] border-b-[#00674F] bg-white px-5 pb-8 pt-14 text-center shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:px-6">
          
          {/* Top Circle Icon */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <div className="process-icon w-14 h-14 rounded-full bg-[#00674F] text-white flex items-center justify-center text-xl shadow-lg shadow-[#00674F]/20 transition-all duration-500">
              <Icon />
            </div>
          </div>

          {/* Number Badge */}
          <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#00674F] text-white text-xs font-bold flex items-center justify-center">
            {step.number}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-[#00674F] mb-3">
            {step.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function AccountTypesPage() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#0b1f16] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-start justify-center overflow-hidden bg-[#00674F] px-4 pb-16 pt-24 text-center sm:min-h-[calc(100vh-80px)] sm:items-center sm:px-6 sm:py-16 lg:min-h-[calc(100vh-84px)]">
        
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
              alt="Account Type Hero"
              className="account-hero-image h-full w-full object-cover object-top brightness-110 sm:object-center"
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
              Find Your Perfect
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block animate-[fadeInUp_1s_ease-out] text-[#D3D3D3]">
              Trading Account
            </span>
          </h1>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
              Choose an account that fits your trading style and goals.
              <br className="hidden sm:block" />
              Flexible options for every level of trader.
            </p>
          </div>

         {/* Button - Fade In Up */}
<div className="animate-[fadeInUp_1.4s_ease-out]">
  <button
    className="mt-8 w-full max-w-[260px] rounded-full bg-[#D3D3D3] px-4 py-2 text-xs font-semibold text-[#00674F] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#D3D3D3]/90 hover:shadow-lg hover:shadow-[#D3D3D3]/20 active:translate-y-0 sm:mt-8 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-sm"
    onClick={() => {
      document.getElementById("account-cards")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
  >
    Compare Account Plans
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
  /* Pulse Animation for Badge Dot */
  .animate-pulse {
    animation: gentlePulse 2s ease-in-out infinite;
  }
  
  @keyframes gentlePulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
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
      </section>

      {/* Accounts Section - 5 Cards Fading In Up */}
      <section id="account-cards" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-5 sm:py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {accounts.map((account, index) => (
            <div
              key={account.title}
              className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
            >
              <AnimatedAccountCard account={account} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-5 sm:py-12">
        
        {/* Top Small Heading - Fade In Up */}
        <ScrollReveal delay={0}>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
            <p className="text-sm font-semibold text-gray-700">
              How It Works
            </p>
            <span className="h-[2px] w-8 bg-[#00674F] sm:w-10"></span>
          </div>
        </ScrollReveal>

        {/* Main Heading - Fade In Up */}
        <ScrollReveal delay={100}>
          <h2 className="mb-12 text-2xl font-bold text-gray-900 sm:text-3xl md:mb-14 md:text-4xl">
            Start with a Structured Plan from{" "}
            <span className="text-[#00674F]">VeltriumFX</span>
          </h2>
        </ScrollReveal>

        {/* Steps Cards - All Fade In Up */}
        <div className="relative grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <AnimatedStepCard key={index} step={step} index={index} Icon={step.Icon} />
          ))}
        </div>

        {/* Bottom Text - Fade In Up */}
        <ScrollReveal delay={500}>
          <p className="mx-auto mt-12 max-w-md text-sm leading-relaxed text-gray-700 sm:mt-14 sm:text-base">
            Account options, funding access and trading tools organized in one place.
          </p>
        </ScrollReveal>

        {/* Button - Fade In Up */}
        <ScrollReveal delay={600}>
        <button
  type="button"
  onClick={() => navigate("/login")}
  className="mt-5 w-full max-w-[220px] rounded-full bg-[#00674F] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#00674F] hover:shadow-lg hover:shadow-[#00674F]/20 active:translate-y-0 sm:w-auto"
>
  Trade Now
</button>
        </ScrollReveal>
      </section>

      <style jsx>{`
        .account-type-card {
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .account-type-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(0, 103, 79, 0.08), transparent 42%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .account-type-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 103, 79, 0.38);
          box-shadow: 0 26px 60px rgba(0, 103, 79, 0.14);
        }

        .account-type-card:hover::before,
        .account-type-card.is-popular::before {
          opacity: 1;
        }

        .account-type-card.is-popular {
          box-shadow: 0 24px 56px rgba(0, 103, 79, 0.14);
        }

        /* Process cards - slower hover */
        .process-card {
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .process-card:hover {
          transform: translateY(-4px);
          transition: all 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .process-icon {
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .process-card:hover .process-icon {
          transform: scale(1.05);
          background-color: #D3D3D3;
          transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .process-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .account-type-card {
            transform: translateX(0);
          }
          
          .absolute.-top-3 {
            top: -12px;
          }
        }
      `}</style>
    </div>
  );
}
