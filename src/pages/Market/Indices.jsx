import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/images/ind.bg.png";
import heroBg2 from "../../assets/images/ind pic1.jpeg";
import TradingViewWidget from "../../pages/Market/TradingViewWidget";

import {
  Star,
  BarChart3,
  ArrowUp,
  ArrowRight,
  Clock3,
  Search,
  Landmark,
  TrendingUp,
  Briefcase,
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
      className={`h-full transition-all duration-700 ease-out ${
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

/* =========================
   POPULAR INDICES
========================= */

const indices = [
  {
    title: "Wall Street",
    subtitle: "Dow Jones",
    desc: "Tracks 30 prominent companies on the NYSE.",
    value: "38,921.23",
    change: "+412.75",
    changePercent: "+1.07%",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "S&P 500",
    subtitle: "US Stock Market",
    desc: "A comprehensive benchmark for the US stock market.",
    value: "5,234.18",
    change: "+52.18",
    changePercent: "+1.01%",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "FTSE 100",
    subtitle: "UK Equities",
    desc: "Measures the top 100 companies by market cap in London.",
    value: "8,275.63",
    change: "+68.73",
    changePercent: "+0.84%",
    icon: <ArrowUp size={24} />,
  },
  {
    title: "DAX",
    subtitle: "Germany 40",
    desc: "Reflects the performance of Germany's 40 largest companies.",
    value: "18,516.65",
    change: "+148.67",
    changePercent: "+0.81%",
    icon: <TrendingUp size={24} />,
  },
];

/* =========================
   INDEX CALCULATION CARDS
========================= */

const topCards = [
  {
    icon: <BarChart3 size={22} />,
    title: "Market Capitalization-Based Indices",
    desc: "Companies' market value influences the index more heavily, so larger firms dominate the movement (e.g., S&P 500, FTSE 100).",
  },
  {
    icon: <ArrowUp size={22} />,
    title: "Price-Weighted Indices",
    desc: "These depend on the stock price of the companies in the index, with higher-priced stocks having more impact (e.g., Dow Jones, Nikkei 225).",
  },
];

const middleCards = [
  {
    icon: <Clock3 size={28} />,
    title: "Diversification",
    desc: "Represents a broad market sector without the need to invest in individual stocks.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Lower Volatility",
    desc: "Since indices track multiple companies, they tend to be more stable than individual stocks.",
  },
  {
    icon: <Search size={28} />,
    title: "Accessibility",
    desc: "Easier to analyze and trade due to their reflection of overall market performance.",
  },
];

/* =========================
   MARKET FACTORS
========================= */

const factors = [
  {
    icon: <Landmark size={26} />,
    title: "Political Events",
    desc: "Elections, policy shifts and international tensions can all move market prices.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Corporate Announcements",
    desc: "Major company news, such as leadership changes, mergers and earnings reports, impacts the indices they are part of.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Economic Data",
    desc: "Employment reports, inflation and central bank policies shape investor sentiment and index performance.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Industry News",
    desc: "News affecting key sectors or industries (e.g. energy or tech) can influence the indices related to those sectors.",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

const IndicesPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
  
        {/* Animated Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{
              transformOrigin: 'center',
            }}
          >
            <img
              src={heroBg}
              alt="Indices Hero"
              className="market-hero-image h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Fade-in Overlays */}
        <div className="absolute inset-0 bg-[#00674F]/65 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="market-hero-content relative z-10 mx-auto max-w-5xl">
          
          {/* Heading - Fade In Up with Staggered Animation */}
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Indices
            </span>
          </h1>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-200 md:text-base md:leading-8">
              Unlock a Wide Range of Indices from the World's Leading
              Economies with VeltriumFX
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT SECTION WITH ANIMATIONS
      ========================================= */}

      <section className="px-4 pb-5 pt-8 mx-auto max-w-7xl sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">

          {/* IMAGE */}
          <ScrollReveal delay={0} threshold={0.3} direction="left">
            <div className="group overflow-hidden rounded-2xl">
              <img
                src={heroBg2}
                alt="Indices"
                className="h-[220px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[360px]"
              />
            </div>
          </ScrollReveal>

          {/* TEXT */}
          <div>
            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h2 className="leading-tight">
                <span className="block text-base font-bold text-[#111827] sm:text-lg">
                  Elevate Your Trading Experience with
                </span>
                <span className="mt-2 block text-2xl font-semibold text-[#00674F] sm:text-3xl">
                  Key Global Indices at VeltriumFX
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200} threshold={0.3} direction="up">
              <p className="mt-4 text-sm text-justify leading-7 text-gray-600 sm:text-base lg:leading-8">
                Stock market indices provide a clear snapshot of a market's performance by calculating the combined value of a selected group of stocks. These indices offer valuable insight into market trends and economic health, representing sectors or entire stock markets. Whether it's the NASDAQ or a country's top corporations like the S&P 500, indices help investors gauge the broader market dynamics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} threshold={0.3} direction="up">
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#00674F] text-xl">✔</span>
                  Market Exposure
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#00674F] text-xl">✔</span>
                  Simplicity
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#00674F] text-xl">✔</span>
                  High Liquidity
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          MARKET OVERVIEW WITH TRADINGVIEW
      ========================================= */}

      <section className="bg-[#D3D3D3] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-7">
        
        {/* TRADINGVIEW WIDGET CARD */}
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
            <div className="h-[300px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
              <TradingViewWidget />
            </div>
          </div>
        </ScrollReveal>

        {/* WHAT ARE INDICES */}
        <ScrollReveal delay={100} threshold={0.2} direction="up">
          <div className="mx-auto mt-8 max-w-7xl rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-sm sm:mt-10 sm:px-8 sm:py-8 lg:px-12">
            <div className="max-w-5xl border-l-4 border-[#00674F] pl-5 sm:pl-7">
              <h2 className="text-2xl font-bold leading-tight text-[#00674F] sm:text-3xl">
                What Are Indices?
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                Indices track the performance of a collection of stocks, helping
                investors assess the strength and overall health of a market
                segment. Instead of focusing on a single company's performance,
                indices like the NASDAQ, S&amp;P 500, FTSE 100, and Nikkei 225
                offer a broader perspective.
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                These indices can be country-specific or sector-focused, making
                it easier for investors to diversify their portfolios.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* TITLE */}
        <ScrollReveal delay={200} threshold={0.2} direction="up">
          <div className="mt-10 text-center sm:mt-12">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Popular <span className="text-[#00674F]">Indices</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Track major market benchmarks and stay updated with key index
              performance.
            </p>
          </div>
        </ScrollReveal>

        {/* INDEX CARDS - Staggered */}
        <div className="grid grid-cols-1 gap-5 mx-auto mt-6 max-w-6xl sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {indices.map((item, index) => (
            <StaggeredCard key={index} index={index}>
              <div className="relative h-full flex flex-col justify-between w-full overflow-hidden rounded-none border border-slate-200 bg-white p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#E7F5EE] text-[#00674F]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#00674F]">
                          {item.subtitle}
                        </p>
                        <h3 className="text-lg font-bold leading-tight text-[#0f172a]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-none border border-slate-300 bg-slate-200/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      LIVE
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div>
                  {/* Price Box */}
                  <div className="mt-4 rounded-none border border-slate-200/80 bg-[#F8F9FA] p-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xl font-bold text-[#0f172a] sm:text-2xl">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-[#00674F]">
                          {item.change} <span className="font-normal text-slate-500">{item.changePercent}</span>
                        </p>
                      </div>
                      <div className="h-7 w-14 shrink-0 rounded-none bg-gradient-to-r from-[#00674F]/70 to-[#b2e2d3]" />
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="mt-4 inline-flex items-center gap-2 rounded-none bg-[#00674F] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#00543e]">
                    VIEW DETAILS
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </StaggeredCard>
          ))}
        </div>
      </section>

      

      {/* =========================================
    HOW INDICES ARE CALCULATED
========================================= */}

<section className="px-4 py-8 bg-white sm:px-6 sm:py-10 lg:py-12">

  {/* HEADER */}
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="text-center">
      <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
        How Are Indices{" "}
        <span className="text-[#00674F]">Calculated?</span>
      </h2>
      <p className="mt-4 text-sm text-gray-500 sm:text-base">
        Indices are calculated in two primary ways
      </p>
    </div>
  </ScrollReveal>

  {/* TOP CARDS - Both cards same size */}
  <div className="grid max-w-6xl gap-5 mx-auto mt-8 lg:mt-10 lg:grid-cols-2">
    {topCards.map((card, index) => (
      <ScrollReveal key={index} delay={index * 150} threshold={0.2} direction="up">
        <div className="rounded-none border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(0,103,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,103,79,0.14)] md:p-8 h-full">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-none bg-[#00674F] text-white shadow-lg shadow-[#00674F]/10 sm:h-16 sm:w-16">
              {card.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#0f172a] sm:text-2xl">
                {card.title}
              </h3>
              <div className="mt-3 h-1.5 w-16 rounded-none bg-[#00674F]" />
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
            {card.desc}
          </p>
        </div>
      </ScrollReveal>
    ))}
  </div>

  
</section>

      {/* =========================================
    WHAT MOVES INDEX PRICE
========================================= */}

<section className="bg-[#f6f7f6] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
  <div className="mx-auto max-w-7xl">
    {/* HEADER */}
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
          What Moves an <span className="text-[#00674F]">Index Price?</span>
        </h2>
        <p className="mt-4 text-sm text-gray-500 sm:text-base max-w-2xl mx-auto">
          Several factors influence index prices including economic data, political events, corporate announcements and industry trends.
        </p>
      </div>
    </ScrollReveal>

    {/* CARDS - 4 Grid Columns */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {factors.map((item, index) => (
        <StaggeredCard key={index} index={index}>
          <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-none border border-slate-200 bg-white p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div>
              {/* Header: Icon & Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#E7F5EE] text-[#00674F]">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold leading-snug text-[#0f172a] sm:text-lg">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>

            {/* Action Link */}
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#00674F]">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </div>
          </div>
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

        /* Ensure card accent lines are always green */
        .group > div[className*="bottom-0"] {
          background-color: #00674F !important;
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

export default IndicesPage;