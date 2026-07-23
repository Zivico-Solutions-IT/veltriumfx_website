import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaStore,
  FaChartBar,
  FaLandmark,
  FaChartPie,
} from "react-icons/fa";
import {
  GiWheat,
  GiGoldBar,
  GiOilPump,
  GiCoffeeBeans,
  GiFarmer,
  GiGrain,
  GiCow,
} from "react-icons/gi";
import {
  MdAgriculture,
  MdShowChart,
} from "react-icons/md";
import {
  RiExchangeFundsLine,
  RiStockLine,
} from "react-icons/ri";
import {
  BiTrendingUp,
  BiWorld,
} from "react-icons/bi";
import {
  TbCurrencyDollar,
} from "react-icons/tb";

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

export default function CommoditiesSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Hero Section with Animations */}
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-[#00674F] sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src="\src\assets\images\cmd.png"
              alt="Commodities Hero"
              className="object-cover object-center w-full h-full market-hero-image"
            />
          </div>
        </div>
        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="market-hero-content relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] md:px-6 lg:min-h-[calc(100svh-84px)]">
          <h1 className="market-hero-title text-4xl font-bold text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">
            Commodities
          </h1>

          <p className="max-w-3xl px-2 mt-4 text-sm leading-6 text-white market-hero-copy animate-[fadeInUp_1s_ease-out] sm:text-base md:mt-5 md:leading-7">
            Access gold, oil, silver and other essential markets with VeltriumFX.
            
          </p>
          <div className="mt-8 animate-[fadeInUp_1.2s_ease-out]">
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="button-shine mt-2 rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left Image */}
            <ScrollReveal delay={0} threshold={0.3} direction="left">
              <div className="order-2 lg:order-1 about-image">
                <img
                  src="/Commodities1.png.jpeg"
                  alt="Commodities Trading"
                  className="h-[210px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 hover:scale-105 sm:h-[280px] lg:h-[330px]"
                />
              </div>
            </ScrollReveal>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal delay={100} threshold={0.3} direction="up">
                <h2 className="leading-tight">
                  <span className="block text-base font-bold text-[#111827] sm:text-lg">
                    Trade Essential Global Resources
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-[#00674F] sm:text-3xl">
                    Metals, Energy and More with VeltriumFX
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200} threshold={0.3} direction="up">
                <p className="mt-4 text-sm text-justify leading-7 text-gray-600 sm:text-base lg:leading-8">
                  Explore commodity markets tied to energy, metals and agriculture.
                  These instruments reflect global supply, demand and macroeconomic
                  shifts, giving traders another way to diversify beyond currencies
                  and equities.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} threshold={0.3} direction="up">
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
                  {["Liquidity", "Transparency", "Leverage"].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg"
                    >
                      <span className="text-[#00674F] text-xl">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f7f7f7] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5 lg:px-6">
          {/* What are Commodities */}
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <div className="bg-white px-5 sm:px-8 lg:px-12 py-8 sm:py-10 rounded-2xl border border-gray-100 shadow-sm sm:rounded-3xl">
              <div className="max-w-5xl border-l-4 border-[#00674F] pl-5 sm:pl-7">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
                  What are{" "}
                  <span className="text-[#00674F]">Commodities?</span>
                </h2>
                <p className="mt-6 text-justify text-sm font-regular leading-7 text-gray-600 sm:mt-8 sm:text-left sm:text-base">
                  Commodities are basic goods used in commerce and they can be
                  classified into two main categories:
                </p>
                <div className="mt-4 space-y-4 sm:space-y-3">
                  <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                    <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#00674F] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                      <GiGoldBar className="text-[10px]" />
                    </div>
                    <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#00674F]">Hard Commodities</span>
                    <span className="font-bold text-black">:</span>
                    <span className="flex-1 text-justify text-sm font-regular text-gray-600 sm:text-left sm:text-base">
                      Natural resources like oil, gold and metals gas, which are extracted from the Earth.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                    <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#00674F] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                      <GiWheat className="text-[10px]" />
                    </div>
                    <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#00674F]">Soft Commodities</span>
                    <span className="font-bold text-black">:</span>
                    <span className="flex-1 text-justify text-sm font-regular text-gray-600 sm:text-left sm:text-base">
                      Agricultural products or livestock, such as wheat, coffee and sugar.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Trade Commodities */}
          <div className="mt-8 sm:mt-12">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                Why Trade <span className="text-[#00674F]">Commodities?</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 mt-7 sm:mt-9 sm:gap-6 md:grid-cols-3">
              <StaggeredCard index={0}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <div className="flex flex-col items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                      <FaChartPie size={24} />
                    </div>
                    
                    <div className="flex flex-col pt-0.5">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">Diversification</h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">Adding commodities to your portfolio can provide exposure to different markets.</p>
                    </div>
                  </div>
                  <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={1}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <div className="flex flex-col items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                      <FaShieldAlt size={24} />
                    </div>
                    
                    <div className="flex flex-col pt-0.5">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">Hedging</h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">Commodities can act as a hedge against inflation and currency fluctuations.</p>
                    </div>
                  </div>
                  <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={2}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <div className="flex flex-col items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                      <BiTrendingUp size={24} />
                    </div>
                    
                    <div className="flex flex-col pt-0.5">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">Market Dynamics</h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">Commodity prices are highly responsive to supply and demand changes.</p>
                    </div>
                  </div>
                  <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
                </div>
              </StaggeredCard>
            </div>
          </div>

          {/* How Are Commodities Traded */}
          <div className="mt-12 sm:mt-14">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                How Are <span className="text-[#00674F]">Commodities Traded?</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 mt-7 sm:mt-9 sm:gap-6 md:grid-cols-3">
  {[
    { icon: FaStore, title: "Spot Market", desc: "Immediate delivery of commodities, ideal for short-term trading." },
    { icon: RiExchangeFundsLine, title: "Futures Market", desc: "Contracts to buy or sell a commodity at a predetermined price on a future date—perfect for long-term strategies." },
    { icon: RiStockLine, title: "Exchange-Traded Funds (ETFs)", desc: "Invest in a variety of commodities without purchasing physical assets, offering broad exposure to commodity markets." }
  ].map((item, index) => (
    <StaggeredCard key={index} index={index}>
      <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
            <item.icon size={24} />
          </div>
          <div className="flex flex-col pt-0.5">
            <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">{item.title}</h3>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">{item.desc}</p>
          </div>
        </div>
        <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
      </div>
    </StaggeredCard>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Commodity Prices */}
      <section className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20 pt-4">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight text-black md:text-4xl">
              Factors Affecting <span className="text-[#00674F]">Commodity Prices</span>
            </h2>
            <div className="mx-auto mt-5 h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#00674F]"></div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FaChartBar, title: "Supply and Demand", desc: "The balance between production and consumption heavily influences commodity prices." },
              { icon: FaLandmark, title: "Economic Indicators", desc: "Data like GDP growth, inflation and employment rates can indicate market direction and commodity values." },
              { icon: BiWorld, title: "Geopolitical Events", desc: "Political instability, natural disasters and trade policies can cause price volatility in the commodity markets." },
              { icon: MdShowChart, title: "Market Speculation", desc: "Expectations about future price movements often drive the short-term fluctuations of commodities." }
            ].map((item, index) => (
              <StaggeredCard key={index} index={index}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                      <item.icon size={24} />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">{item.title}</h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
                </div>
              </StaggeredCard>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Commodities Section */}
      <section className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1160px]">
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
              Popular <span className="text-[#00674F]">Commodities</span>
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#00674F]"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 mt-10 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: GiGoldBar, name: "Gold", type: "Precious Metal", rotate: "rotate-12" },
              { icon: null, name: "Silver", type: "Precious Metal", rotate: "-rotate-12", isSilver: true },
              { icon: GiOilPump, name: "Crude Oil", type: "Energy", rotate: "rotate-12" },
              { icon: GiWheat, name: "Wheat", type: "Agriculture", rotate: "-rotate-12" },
              { icon: GiCoffeeBeans, name: "Coffee", type: "Agriculture", rotate: "rotate-12" }
            ].map((item, index) => (
              <StaggeredCard key={index} index={index}>
                <div className="group rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`mx-auto flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white transition-all duration-300 group-hover:scale-110 group-hover:${item.rotate}`}>
                    {item.isSilver ? (
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" fill="none" />
                        <circle cx="12" cy="12" r="3" fill="white" />
                      </svg>
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-[#00674F]">{item.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.type}</p>
                </div>
              </StaggeredCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Benefits Section */}
      <section className="bg-gradient-to-r from-[#00674F] to-[#00674F] px-4 sm:px-5 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute w-64 h-64 rounded-full -top-24 -right-24 bg-white/10 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full -bottom-24 -left-24 bg-white/10 blur-3xl"></div>
        
        <div className="mx-auto max-w-[1160px] text-center relative z-10">
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Start Trading Commodities Today
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} threshold={0.2} direction="up">
            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-white/90">
              Join VeltriumFX and access global commodity markets with competitive spreads,
              advanced trading tools and dedicated support.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} threshold={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#00674F] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 active:scale-95"
              >
                Open Account
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .floating-image {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
          .floating-image {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
