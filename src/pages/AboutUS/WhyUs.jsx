import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Scale,
  Users,
  Star,
  TrendingUp,
  Globe,
  Headphones,
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

/* ================= DATA ================= */

const values = [
  {
    title: "Transparency",
    description:
      "We prioritize open communication and integrity, ensuring our clients have full access to the information necessary to make informed decisions and trade confidently.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description:
      "Trust is the foundation of our reputation. We are committed to upholding the highest standards of integrity in all our actions and interactions.",
    icon: Scale,
  },
  {
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We focus on providing personalized solutions tailored to each trader’s specific needs.",
    icon: Users,
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Advanced & Cutting-Edge\nPlatform",
    color: "text-[#014421]",
    bg: "bg-green-100",
    iconColor: "text-[#014421]",
    border: "bg-[#014421]",
    description:
      "Enjoy a seamless trading experience with our state-of-the-art technology, featuring fast execution and advanced trading tools.",
  },
  {
    icon: Globe,
    title: "Diverse Range of\nProducts",
    color: "text-[#D4AF37]",
    bg: "bg-yellow-100",
    iconColor: "text-[#D4AF37]",
    border: "bg-[#D4AF37]",
    description:
      "Access global markets including forex, commodities, indices and more with flexible trading solutions.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    color: "text-[#014421]",
    bg: "bg-green-100",
    iconColor: "text-[#014421]",
    border: "bg-[#014421]",
    description:
      "Our professional support team is available anytime to assist throughout your trading journey.",
  },
];

/* ================= COMPONENTS ================= */

const SectionTitle = ({ top, title }) => (
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="text-center mb-10">
      <p className="text-[#D4AF37] uppercase tracking-[3px] text-sm font-semibold">
        {top}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
      <div className="w-20 h-1 bg-[#D4AF37] rounded-full mx-auto mt-3"></div>
    </div>
  </ScrollReveal>
);

/* ================= FEATURE CARD ================= */

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  bg,
  iconColor,
  border,
}) => (
  <div
    className="
      relative
      bg-white
      rounded-[16px]
      border border-gray-100
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      hover:-translate-y-2
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      transition-all duration-300
      overflow-hidden
      pt-24
      pb-7
      px-7
      min-h-[330px]
      flex flex-col items-center
      text-center
    "
  >
    {/* ICON */}
    <div
      className={`
        absolute
        top-5
        left-1/2
        -translate-x-1/2
        w-[70px]
        h-[70px]
        rounded-full
        ${bg}
        border-[6px]
        border-white
        shadow-lg
        flex items-center justify-center
      `}
    >
      <Icon
        className={`${iconColor} w-9 h-9 transition-all duration-300 group-hover:scale-110`}
        strokeWidth={2.3}
      />
    </div>

    {/* TITLE */}
    <h3
      className={`
        whitespace-pre-line
        ${color}
        text-[21px]
        leading-[32px]
        font-bold
        min-h-[96px]
        flex items-center justify-center
      `}
    >
      {title}
    </h3>

    {/* LINE */}
    <div className={`w-14 h-[3px] rounded-full mb-4 ${border}`}></div>

    {/* DESCRIPTION */}
    <p
      className="
        text-gray-500
        text-[15px]
        leading-[28px]
        flex-1
        flex items-start justify-center
      "
    >
      {description}
    </p>

    {/* BOTTOM BAR */}
    <div
      className={`
        absolute
        bottom-0
        left-0
        w-full
        h-[5px]
        ${border}
      `}
    ></div>
  </div>
);

/* ================= VALUE CARD ================= */

const ValueCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 flex gap-4 items-start border border-gray-100">
    <div className="min-w-[60px] h-[60px] rounded-full bg-[#e4e4e4] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
      <Icon className="w-7 h-7 text-[#014421]" />
    </div>
    <div>
      <h3 className="text-xl font-semibold 
      ">
        {title}
      </h3>
      <p className="mt-1.5 text-gray-600 leading-relaxed text-base">
        {description}
      </p>
    </div>
  </div>
);

/* ================= MAIN ================= */

const WhyUs = () => {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}

      <section
        className="relative flex min-h-[calc(100svh-72px)] items-center justify-start overflow-hidden bg-cover bg-center px-6 py-16 sm:min-h-[calc(100svh-80px)] md:px-20 lg:min-h-[calc(100svh-84px)]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <div className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/60 animate-[fadeIn_1.5s_ease-out]"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-start">
          <div className="max-w-2xl text-left text-white">
            {/* Small Heading */}
            <div className="animate-[fadeInUp_0.6s_ease-out]">
              <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm md:text-base font-medium mb-4">
                Welcome To NOVAFXM
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] animate-[fadeInUp_0.8s_ease-out]">
              Why Choose <br />
              <span className="text-[#079b4f] text-2xl md:text-4xl">
                NOVAFXM
              </span>
            </h1>

            {/* Description */}
            <div className="animate-[fadeInUp_1s_ease-out]">
              <p className="mt-5 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                Trusted by traders worldwide, NOVAFXM delivers secure innovative trading solutions designed for confidence and long-term success.
              </p>
            </div>

            <div className="animate-[fadeInUp_1.2s_ease-out]">
              <button
                type="button"
                className="button-shine mt-6 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#c89b1d] sm:px-9 sm:text-base"
                onClick={() => {
                  document.getElementById("why-us-about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="why-us-about" className="scroll-mt-20 px-6 pt-12 pb-6 md:px-16 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <ScrollReveal delay={0} threshold={0.3} direction="left">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="building"
                className="rounded-[30px] shadow-2xl w-full h-[380px] md:h-[420px] object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#014421] text-white rounded-2xl px-5 py-4 shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-sm mt-0.5">Years Experience</p>
              </div>
            </div>
          </ScrollReveal>

          {/* TEXT */}
          <div>
            <ScrollReveal delay={100} threshold={0.3} direction="right">
              <p className="text-[#D4AF37] uppercase tracking-[2px] text-sm font-semibold">
                ABOUT NOVAFXM
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} threshold={0.3} direction="right">
              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Why Choose <br />
                <span className="text-[#014421] text-3xl">NOVAFXM</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={250} threshold={0.3} direction="right">
              <div className="w-24 h-[3px] bg-[#D4AF37] rounded-full mt-4"></div>
            </ScrollReveal>

            <ScrollReveal delay={300} threshold={0.3} direction="right">
              <div className="mt-5 space-y-3 text-gray-600 leading-relaxed">
                <p>
                  At NOVAFXM, our mission is to create a trusted and efficient
                  trading environment that empowers our clients to achieve their
                  financial objectives.
                </p>
                <p>
                  We are dedicated to delivering an exceptional trading experience
                  by continuously innovating our platform, expanding our range of
                  products and providing world-class customer service.
                </p>
                <p>
                  Our vision is to make financial markets accessible to everyone,
                  fostering a global community of informed and confident traders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="px-6 pt-14 pb-6 md:px-16 md:py-14 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            top="Why Traders Trust Us"
            title={
              <>
                What Sets{" "}
                <span className="text-[#014421]">NOVAFXM</span> Apart?
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-7 mt-10">
            {features.map((item, i) => (
              <StaggeredCard key={i} index={i}>
                <FeatureCard {...item} />
              </StaggeredCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="bg-[#f5f5f5] px-4 pt-6 pb-6 md:px-10 md:py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[300px_1fr] gap-7 items-stretch">

          {/* LEFT BOX */}
          <ScrollReveal delay={0} threshold={0.2} direction="left">
            <div className="relative self-stretch rounded-[22px] bg-[#00552d] overflow-hidden shadow-2xl h-full transition-all duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-[120px] bg-[#0d6b3f] rounded-b-[100%]" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-8">
                <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-[#D4AF37]/20">
                  <Star className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h2 className="text-white text-3xl font-bold">
                  Our <span className="block text-[#D4AF37]">Core Values</span>
                </h2>
                <div className="w-16 h-[3px] bg-[#D4AF37] rounded-full mt-4"></div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT CARDS */}
          <div className="grid grid-rows-3 gap-4">
            {values.map((item, i) => (
              <StaggeredCard key={i} index={i}>
                <ValueCard {...item} />
              </StaggeredCard>
            ))}
          </div>
        </div>
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
};

export default WhyUs;