import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/images/ind.bg.png";
import heroBg2 from "../../assets/images/ind pic1.jpeg";

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

// ── Live Indices Ticker Widget ─────────────────────────────────────────────
const INITIAL_INDICES_DATA = [
  { symbol: "S&P 500", name: "US Stock Benchmark", tag: "SPX", price: "5,480.20", change: "+1.01%", direction: "up", tradingViewSymbol: "FOREXCOM:SPX", sparkline: "M2 28 L16 24 L30 20 L44 16 L58 12 L72 9" },
  { symbol: "Dow Jones", name: "Industrial Average", tag: "DJI", price: "39,120.50", change: "+1.07%", direction: "up", tradingViewSymbol: "FOREXCOM:DJI", sparkline: "M2 28 L16 22 L30 26 L44 14 L58 18 L72 8" },
  { symbol: "NASDAQ 100", name: "US Tech Index", tag: "NDX", price: "19,750.40", change: "+1.35%", direction: "up", tradingViewSymbol: "NASDAQ:NDX", sparkline: "M2 28 L16 26 L30 20 L44 18 L58 12 L72 8" },
  { symbol: "FTSE 100", name: "UK Equities Index", tag: "UK100", price: "8,240.15", change: "+0.84%", direction: "up", tradingViewSymbol: "FOREXCOM:UK100", sparkline: "M2 26 L16 24 L30 25 L44 20 L58 22 L72 18" },
  { symbol: "Germany 40", name: "DAX Benchmark", tag: "GER40", price: "18,050.60", change: "+0.81%", direction: "up", tradingViewSymbol: "FOREXCOM:GER30", sparkline: "M2 24 L16 22 L30 23 L44 18 L58 19 L72 15" }
];

const IndexLiveTicker = () => {
  const [marketData, setMarketData] = useState(INITIAL_INDICES_DATA);

  useEffect(() => {
    let isMounted = true;

    const formatPrice = (val, sym) => {
      if (sym === "XRP") return val.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
      return val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const fetchLivePrices = async () => {
      try {
        const tvRes = await fetch("https://scanner.tradingview.com/global/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbols: {
              tickers: [
                "FOREXCOM:SPX",
                "FOREXCOM:DJI",
                "NASDAQ:NDX",
                "FOREXCOM:UK100",
                "FOREXCOM:GER30"
              ]
            },
            columns: ["close", "change"],
          }),
        });

        if (!isMounted) return;

        if (tvRes.ok) {
          const tvJson = await tvRes.json();
          const livePriceMap = {};
          if (tvJson.data && Array.isArray(tvJson.data)) {
            tvJson.data.forEach((entry) => {
              if (entry.s && entry.d && typeof entry.d[0] === "number") {
                livePriceMap[entry.s] = {
                  close: entry.d[0],
                  change: entry.d[1] || 0,
                };
              }
            });
          }

          setMarketData((prevData) =>
            prevData.map((item) => {
              const symbolKey = item.tradingViewSymbol;
              const liveInfo = livePriceMap[symbolKey];
              if (liveInfo && typeof liveInfo.close === "number") {
                const changeVal = liveInfo.change || 0;
                const isUp = changeVal >= 0;
                return {
                  ...item,
                  price: formatPrice(liveInfo.close, item.symbol),
                  change: `${isUp ? "+" : ""}${changeVal.toFixed(2)}%`,
                  direction: isUp ? "up" : "down",
                  sparkline: isUp
                    ? "M2 30 L16 22 L30 26 L44 14 L58 18 L72 8"
                    : "M2 10 L16 16 L30 12 L44 22 L58 20 L72 28",
                };
              }
              return item;
            })
          );
        }
      } catch (err) {
        console.warn("TradingView scanner API direct fetch failed...", err);
      }
    };

    fetchLivePrices();
    const fetchInterval = setInterval(fetchLivePrices, 10000);

    // Live micro-tick engine every 2.5 seconds
    const tickInterval = setInterval(() => {
      if (!isMounted) return;
      setMarketData((prevData) =>
        prevData.map((item) => {
          if (Math.random() < 0.35) {
            const rawPrice = parseFloat(item.price.replace(/,/g, ""));
            if (!isNaN(rawPrice)) {
              const deltaPct = (Math.random() - 0.48) * 0.0006;
              const newPrice = Math.max(1.0, rawPrice * (1 + deltaPct));
              const oldChangeNum = parseFloat(item.change.replace("%", "").replace("+", "")) || 0;
              const newChangeNum = oldChangeNum + deltaPct * 100;
              const isUp = newChangeNum >= 0;
              return {
                ...item,
                price: formatPrice(newPrice, item.symbol),
                change: `${isUp ? "+" : ""}${newChangeNum.toFixed(2)}%`,
                direction: isUp ? "up" : "down",
                sparkline: isUp
                  ? "M2 30 L16 22 L30 26 L44 14 L58 18 L72 8"
                  : "M2 10 L16 16 L30 12 L44 22 L58 20 L72 28",
              };
            }
          }
          return item;
        })
      );
    }, 2500);

    return () => {
      isMounted = false;
      clearInterval(fetchInterval);
      clearInterval(tickInterval);
    };
  }, []);

  const tickerLoop = [...marketData, ...marketData, ...marketData, ...marketData];

  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="relative w-full overflow-hidden rounded-2xl border border-[#00674F]/30 bg-[#00674F] px-3 py-4 shadow-[0_26px_70px_rgba(0,103,79,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] sm:left-1/2 sm:w-screen sm:-translate-x-1/2 sm:px-6 sm:py-6 md:rounded-[28px] lg:px-8 mb-8 md:mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,211,211,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.18),transparent_42%)]"></div>

        <div className="relative z-10 mb-4 flex items-center justify-between gap-4 px-1 sm:px-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D3D3D3]">
              Live Market
            </p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-3xl">
              Global Indices Prices
            </h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#D3D3D3]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D3D3D3]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Auto Updating
          </div>
        </div>

        <div className="relative z-10 overflow-hidden rounded-xl border border-[#D3D3D3]/40 bg-[#004938]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="market-ticker-track flex w-max items-stretch gap-3">
            {tickerLoop.map((item, index) => (
              <button
                type="button"
                key={`${item.symbol}-${index}`}
                onClick={() => window.open(`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(item.tradingViewSymbol)}`, "_blank", "noopener,noreferrer")}
                className="group relative flex h-[200px] w-[280px] shrink-0 flex-col justify-between rounded-xl border border-white/80 bg-[#D3D3D3] px-4 py-3 text-left shadow-[0_12px_26px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-[360px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-extrabold tracking-wide text-[#00674F]">
                      {item.symbol}
                    </h4>
                    <span className="rounded-full bg-[#00674F] px-2 py-0.5 text-[10px] font-bold text-white">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">{item.name}</p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-2xl font-black leading-none tracking-tight text-gray-950">
                      {item.price}
                    </p>
                    <p
                      className={`mt-2 text-sm font-bold ${
                        item.direction === "up" ? "text-[#00674F]" : "text-red-500"
                      }`}
                    >
                      {item.change}
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 74 34"
                    className="h-10 w-20 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d={item.sparkline}
                      fill="none"
                      stroke={item.direction === "up" ? "#00674F" : "#ef4444"}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

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
        <div className="absolute inset-0 bg-black/40"></div>

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
          <div className="mt-8 animate-[fadeInUp_1.4s_ease-out]">
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="bg-[#D3D3D3] hover:bg-white text-[#00674F] font-semibold tracking-wider text-sm px-8 py-3 rounded transition-colors duration-300 shadow-md"
            >
              EXPLORE MORE
            </button>
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

      <section className="bg-[#D3D3D3] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 lg:pb-12 lg:pt-7">
        <div className="mx-auto max-w-7xl">
          <IndexLiveTicker />
        </div>

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
              <div className="relative h-full flex flex-col justify-between w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center w-full">
                  {/* Centered Icon Container */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F5EE] text-[#00674F] mb-3">
                    {item.icon}
                  </div>
                  
                  {/* Subtitle & Title */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#00674F]">
                      {item.subtitle}
                    </p>
                    <h3 className="text-lg font-bold leading-tight text-[#0f172a] mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(0,103,79,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,103,79,0.14)] md:p-8 h-full">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00674F] text-white shadow-lg shadow-[#00674F]/10 sm:h-16 sm:w-16">
              {card.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#0f172a] sm:text-2xl">
                {card.title}
              </h3>
              <div className="mt-3 h-1.5 w-16 rounded-full bg-[#00674F]" />
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
          <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col items-center">
              {/* Centered Icon Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F5EE] text-[#00674F] mb-4">
                {item.icon}
              </div>
              
              {/* Centered Title */}
              <h3 className="text-base font-bold leading-snug text-[#0f172a] sm:text-lg mb-3">
                {item.title}
              </h3>

              {/* Centered Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>

            {/* Centered Action Link */}
            <div className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#00674F]">
              
              
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