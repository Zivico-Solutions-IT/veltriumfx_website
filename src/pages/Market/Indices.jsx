import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/images/tech-analysis-1024x577 1.png";
import heroBg2 from "../../assets/images/image 106.png";
import TradingViewWidget from "../../pages/Market/TradingViewWidget";

import {
  Star,
  BarChart3,
  ArrowUp,
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

/* =========================
   POPULAR INDICES
========================= */

const indices = [
  {
    title: "Wall Street (Dow Jones)",
    desc: "Tracks 30 prominent companies on the NYSE.",
  },
  {
    title: "S&P 500",
    desc: "A comprehensive benchmark for the US stock market.",
  },
  {
    title: "FTSE 100",
    desc: "Measures the top 100 companies by market cap in London.",
  },
  {
    title: "DAX (Germany 40)",
    desc: "Reflects the performance of Germany's 40 largest companies.",
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
        <div className="absolute inset-0 bg-black/70 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="market-hero-content relative z-10 mx-auto max-w-5xl">
          
          {/* Heading - Fade In Up with Staggered Animation */}
          <h1 className="market-hero-title text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Indices
            </span>
          </h1>

          {/* Divider Line - Animated */}
          <div className="animate-[fadeInUp_1s_ease-out]">
            <div className="mx-auto mt-4 flex w-24 items-center justify-center gap-1">
              <span className="h-[2px] flex-1 bg-[#D4AF37]" />
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="h-[2px] flex-1 bg-[#D4AF37]" />
            </div>
          </div>

          {/* Description - Fade In Up */}
          <div className="animate-[fadeInUp_1.2s_ease-out]">
            <p className="market-hero-copy mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-200 md:text-base md:leading-8">
              Unlock a Wide Range of Indices from the World's Leading
              Economies with NOVAFXM
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
                <span className="mt-2 block text-2xl font-semibold text-[#014421] sm:text-3xl">
                  Key Global Indices at NOVAFXM
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
                  <span className="text-[#014421] text-xl">✔</span>
                  Market Exposure
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#014421] text-xl">✔</span>
                  Simplicity
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <span className="text-[#014421] text-xl">✔</span>
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

      <section className="bg-[#f8faf9] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-7">
        
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
            <div className="max-w-5xl border-l-4 border-[#014421] pl-5 sm:pl-7">
              <h2 className="text-2xl font-bold leading-tight text-[#014421] sm:text-3xl">
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
              Popular <span className="text-[#014421]">Indices</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Track major market benchmarks and stay updated with key index
              performance.
            </p>
          </div>
        </ScrollReveal>

        {/* INDEX CARDS - Staggered */}
        <div className="grid grid-cols-1 gap-4 mx-auto mt-6 max-w-6xl sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {indices.map((item, index) => (
            <StaggeredCard key={index} index={index}>
              <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 border-b-[4px] border-b-[#014421] bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:border-b-[5px] lg:p-5">
                <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ee] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Star className="fill-[#014421] text-[#014421]" size={28} />
                </div>
                <h3 className="relative z-10 text-lg font-bold leading-snug text-gray-800">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-gray-500">
                  {item.desc}
                </p>
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
        <span className="text-[#014421]">Calculated?</span>
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
        <div className="rounded-2xl border-b-[4px] border-[#014421] bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl md:border-b-[6px] h-full min-h-[220px]">
          <div className="flex items-start gap-4 p-5 sm:gap-5 sm:p-6 lg:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421] sm:h-16 sm:w-16">
              {card.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>

  
</section>

      {/* =========================================
  WHAT MOVES INDEX PRICE
========================================= */}

<section className="bg-[#f6f7f6] px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 lg:pb-7 lg:pt-12">
  <div className="grid items-center gap-8 mx-auto max-w-7xl lg:grid-cols-3 lg:gap-10">

    {/* LEFT CARDS - Staggered */}
    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:gap-5">
      {factors.map((item, index) => (
        <StaggeredCard key={index} index={index}>
          <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl lg:p-8 h-full min-h-[280px] flex flex-col">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5ee] text-[#014421]">
              {item.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold leading-snug text-gray-800">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 flex-grow">
              {item.desc}
            </p>
          </div>
        </StaggeredCard>
      ))}
    </div>

    {/* RIGHT TEXT AND IMAGE */}
    <ScrollReveal delay={0} threshold={0.2} direction="right">
      <div className="lg:pl-10">
        <h2 className="text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
          What Moves an{" "}
          <span className="text-[#014421]">Index Price</span>
        </h2>
        <div className="mx-auto mb-4 mt-5 h-1 w-20 rounded-full bg-[#014421] sm:mx-0"></div>
        <p className="text-center text-sm leading-7 text-gray-500 sm:text-justify">
          Several factors influence index prices including economic data,
          political events, corporate announcements and industry trends.
        </p>
        
        {/* ADDED IMAGE HERE */}
        <div className="mt-8 flex justify-center lg:mt-10">
          <img
            src="src/assets/images/image.png"
            alt="Index Price Movement Chart"
            className="w-full max-w-[300px] rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl sm:max-w-[350px] lg:max-w-full"
          />
        </div>
      </div>
    </ScrollReveal>
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