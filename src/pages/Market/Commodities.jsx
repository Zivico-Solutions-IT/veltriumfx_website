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
      <section className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-black sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src="/Commodities.png.jpeg"
              alt="Commodities Hero"
              className="object-cover object-center w-full h-full market-hero-image"
            />
          </div>
        </div>
        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="market-hero-content relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] md:px-6 lg:min-h-[calc(100svh-84px)]">
          <h1 className="market-hero-title text-4xl font-bold text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">
            Commodities
          </h1>

          <p className="max-w-3xl px-2 mt-4 text-sm leading-6 text-white market-hero-copy animate-[fadeInUp_1s_ease-out] sm:text-base md:mt-5 md:leading-7">
            Trade global commodities like gold, oil and silver with Novafxm.
            Diversify your portfolio and capture opportunities in fast-moving
            markets.
          </p>
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
                    Trade the Building Blocks of the Economy
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                    From Oil to Gold with NOVAFXM
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200} threshold={0.3} direction="up">
                <p className="mt-4 text-sm text-justify leading-7 text-gray-600 sm:text-base lg:leading-8">
                  Step into the dynamic world of commodities and discover lucrative
                  opportunities in Earth's most essential resources. Commodities are
                  the raw materials that fuel the global economy, including oil,
                  gold and agricultural products. By trading these vital goods, you
                  tap into the core of our economy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} threshold={0.3} direction="up">
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
                  {["Liquidity", "Transparency", "Leverage"].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg"
                    >
                      <span className="text-[#014421] text-xl">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f7f7f7] pb-12 sm:pb-20">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-5 lg:px-6">
          {/* What are Commodities */}
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <div className="bg-white px-5 sm:px-8 lg:px-12 py-6 sm:py-7 rounded-xl sm:rounded-none">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
                What are{" "}
                <span className="text-[#014421]">Commodities?</span>
              </h2>
              <div className="mt-3 sm:mt-4 h-[2px] w-[75px] sm:w-[95px] bg-[#014421]"></div>
              <p className="mt-4 text-justify text-sm font-regular leading-6 text-gray-600 sm:mt-6 sm:pl-7 sm:text-left sm:text-base">
                Commodities are basic goods used in commerce and they can be
                classified into two main categories:
              </p>
              <div className="mt-4 space-y-4 sm:space-y-3 sm:pl-7">
                <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                  <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#014421] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                    <GiGoldBar className="text-[10px]" />
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#014421]">Hard Commodities</span>
                  <span className="font-bold text-black">:</span>
                  <span className="flex-1 text-justify text-sm font-regular text-gray-600 sm:text-left sm:text-base">
                    Natural resources like oil, gold and metals gas, which are extracted from the Earth.
                  </span>
                </div>
                <div className="flex flex-wrap items-start text-sm leading-6 cursor-pointer gap-x-2 gap-y-2 group">
                  <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#014421] text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125">
                    <GiWheat className="text-[10px]" />
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base transition-colors duration-300 group-hover:text-[#014421]">Soft Commodities</span>
                  <span className="font-bold text-black">:</span>
                  <span className="flex-1 text-justify text-sm font-regular text-gray-600 sm:text-left sm:text-base">
                    Agricultural products or livestock, such as wheat, coffee and sugar.
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Why Trade Commodities */}
          <div className="mt-8 sm:mt-12">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                Why Trade <span className="text-[#014421]">Commodities?</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 mt-7 sm:mt-9 sm:gap-6 md:grid-cols-3">
              <StaggeredCard index={0}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaChartPie className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Diversification</h3>
                    <p className="text-sm leading-6 text-gray-600">Adding commodities to your portfolio can provide exposure to different markets.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <FaShieldAlt className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Hedging</h3>
                    <p className="text-sm leading-6 text-gray-600">Commodities can act as a hedge against inflation and currency fluctuations.</p>
                  </div>
                </div>
              </StaggeredCard>

              <StaggeredCard index={2}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6">
                  <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 md:h-16 md:w-16">
                    <BiTrendingUp className="text-2xl md:text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">Market Dynamics</h3>
                    <p className="text-sm leading-6 text-gray-600">Commodity prices are highly responsive to supply and demand changes.</p>
                  </div>
                </div>
              </StaggeredCard>
            </div>
          </div>

          {/* How Are Commodities Traded */}
          <div className="mt-12 sm:mt-14">
            <ScrollReveal delay={0} threshold={0.2} direction="up">
              <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                How Are <span className="text-[#014421]">Commodities Traded?</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5 mt-7 sm:mt-9 sm:gap-6 md:grid-cols-3">
  {[
    { icon: FaStore, title: "Spot Market", desc: "Immediate delivery of commodities, ideal for short-term trading." },
    { icon: RiExchangeFundsLine, title: "Futures Market", desc: "Contracts to buy or sell a commodity at a predetermined price on a future date—perfect for long-term strategies." },
    { icon: RiStockLine, title: "Exchange-Traded Funds (ETFs)", desc: "Invest in a variety of commodities without purchasing physical assets, offering broad exposure to commodity markets." }
  ].map((item, index) => (
    <StaggeredCard key={index} index={index}>
      <div className="group relative flex h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex-col items-center overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-4 sm:p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-6">
        <div className="relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] transition-all duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
          <item.icon className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <h3 className="mb-2 text-base sm:text-lg font-bold leading-tight text-gray-800 md:text-xl">{item.title}</h3>
        <p className="flex-1 text-sm leading-6 text-gray-600">{item.desc}</p>
      </div>
    </StaggeredCard>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Commodity Prices */}
      <section className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20 pt-4">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] items-center gap-8 lg:gap-12">
            <div className="grid order-2 grid-cols-1 gap-5 sm:grid-cols-2 lg:order-1">
              {[
                { icon: FaChartBar, title: "Supply and Demand", desc: "The balance between production and consumption heavily influences commodity prices." },
                { icon: FaLandmark, title: "Economic Indicators", desc: "Data like GDP growth, inflation and employment rates can indicate market direction and commodity values." },
                { icon: BiWorld, title: "Geopolitical Events", desc: "Political instability, natural disasters and trade policies can cause price volatility in the commodity markets." },
                { icon: MdShowChart, title: "Market Speculation", desc: "Expectations about future price movements often drive the short-term fluctuations of commodities." }
              ].map((item, index) => (
                <StaggeredCard key={index} index={index}>
                  <div className="group rounded-2xl md:rounded-3xl bg-white px-4 sm:px-5 py-6 sm:py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#014421]" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-gray-800 sm:mt-4 md:text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm sm:text-base font-regular leading-relaxed sm:leading-[1.75] text-gray-600">{item.desc}</p>
                  </div>
                </StaggeredCard>
              ))}
            </div>

            <ScrollReveal delay={0} threshold={0.2} direction="right">
              <div className="flex flex-col items-center order-1 lg:order-2">
                <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
                  Factors Affecting<br />
                  <span className="text-[#014421] relative inline-block">Commodity Prices</span>
                </h2>
                <div className="mt-5 sm:mt-7 h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#014421]"></div>
                <div className="mt-6 overflow-hidden rounded-lg sm:mt-9 floating-image">
                  <img
                    src="https://www.suttergoldmining.com/wp-content/uploads/2023/10/where-to-buy-gold-coins-and-bars.jpg"
                    alt="Gold bars representing commodity prices"
                    className="h-[180px] sm:h-[220px] lg:h-[300px] w-full max-w-[430px] object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Popular Commodities Section */}
      <section className="bg-[#f7f7f7] px-4 sm:px-5 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1160px]">
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <h2 className="px-0 text-center text-2xl font-bold leading-tight text-black md:text-4xl">
              Popular <span className="text-[#014421]">Commodities</span>
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-[2px] w-[70px] sm:w-[84px] rounded-full bg-[#014421]"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 mt-10 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: GiGoldBar, name: "Gold", type: "Precious Metal", color: "from-[#014421] to-[#0D7A43]", rotate: "rotate-12" },
              { icon: null, name: "Silver", type: "Precious Metal", color: "from-gray-500 to-gray-400", rotate: "-rotate-12", isSilver: true },
              { icon: GiOilPump, name: "Crude Oil", type: "Energy", color: "from-gray-800 to-gray-700", rotate: "rotate-12" },
              { icon: GiWheat, name: "Wheat", type: "Agriculture", color: "from-amber-600 to-amber-500", rotate: "-rotate-12" },
              { icon: GiCoffeeBeans, name: "Coffee", type: "Agriculture", color: "from-amber-800 to-amber-700", rotate: "rotate-12" }
            ].map((item, index) => (
              <StaggeredCard key={index} index={index}>
                <div className="group rounded-xl bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:${item.rotate}`}>
                    {item.isSilver ? (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" fill="none" />
                        <circle cx="12" cy="12" r="3" fill="white" />
                      </svg>
                    ) : (
                      <item.icon className="text-3xl" />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-black transition-colors duration-300 group-hover:text-[#014421]">{item.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.type}</p>
                </div>
              </StaggeredCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Benefits Section */}
      <section className="bg-gradient-to-r from-[#014421] to-[#014421] px-4 sm:px-5 py-12 sm:py-16 relative overflow-hidden">
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
              Join Novafxm and access global commodity markets with competitive spreads,
              advanced trading tools and dedicated support.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} threshold={0.2} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#014421] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 active:scale-95"
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