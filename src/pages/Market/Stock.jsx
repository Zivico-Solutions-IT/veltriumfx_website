import React, { useEffect, useRef, useState } from "react";
import {
  ChartNoAxesCombined,
  Check,
  Clock3,
  Landmark,
  Torus,
} from "lucide-react";
import imagePng from "../../assets/images/stk.png";

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

const exchangeIcons = [Landmark, ChartNoAxesCombined, Clock3, Torus];

// ── Live Stocks Ticker Widget ──────────────────────────────────────────────
const INITIAL_STOCK_DATA = [
  { symbol: "AAPL", name: "Apple Inc.", tag: "AAPL", price: "228.60", change: "+1.12%", direction: "up", tradingViewSymbol: "NASDAQ:AAPL", sparkline: "M2 28 L16 22 L30 26 L44 14 L58 18 L72 8" },
  { symbol: "MSFT", name: "Microsoft Corp.", tag: "MSFT", price: "442.80", change: "+1.20%", direction: "up", tradingViewSymbol: "NASDAQ:MSFT", sparkline: "M2 28 L16 26 L30 20 L44 18 L58 12 L72 8" },
  { symbol: "NVDA", name: "NVIDIA Corp.", tag: "NVDA", price: "122.30", change: "+2.80%", direction: "up", tradingViewSymbol: "NASDAQ:NVDA", sparkline: "M2 26 L16 22 L30 24 L44 19 L58 20 L72 16" },
  { symbol: "AMZN", name: "Amazon.com Inc.", tag: "AMZN", price: "195.40", change: "+0.95%", direction: "up", tradingViewSymbol: "NASDAQ:AMZN", sparkline: "M2 26 L16 24 L30 25 L44 20 L58 22 L72 18" },
  { symbol: "TSLA", name: "Tesla Inc.", tag: "TSLA", price: "246.50", change: "+3.40%", direction: "up", tradingViewSymbol: "NASDAQ:TSLA", sparkline: "M2 24 L16 22 L30 23 L44 18 L58 19 L72 15" }
];

const StockLiveTicker = () => {
  const [marketData, setMarketData] = useState(INITIAL_STOCK_DATA);

  useEffect(() => {
    let isMounted = true;

    const formatPrice = (val) => {
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
                "NASDAQ:AAPL",
                "NASDAQ:MSFT",
                "NASDAQ:NVDA",
                "NASDAQ:AMZN",
                "NASDAQ:TSLA"
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
                  price: formatPrice(liveInfo.close),
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
                price: formatPrice(newPrice),
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
              Global Stock Prices
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
                className="group relative flex h-[200px] w-[280px] shrink-0 flex-col justify-between rounded-xl border border-white/80 bg-[#D3D3D3] px-4 py-3 text-center shadow-[0_12px_26px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-[360px]"
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

const Stock = () => {
  return (
    <div className="overflow-x-hidden bg-[#f5f5f5] font-sans">
      
      {/* ================= FULL SCREEN HERO ================= */}
      <section className="relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden bg-[#00674F] px-4 py-14 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={imagePng}
              alt="Stock Hero"
              className="market-hero-image h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="market-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">
          
          <h1 className="market-hero-title text-3xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl animate-[fadeInUp_0.8s_ease-out]">
            Stocks
          </h1>

          <p className="market-hero-copy mx-auto mt-3 max-w-[18rem] text-sm font-medium leading-6 text-white drop-shadow-sm sm:mt-6 sm:max-w-3xl md:text-base md:leading-8 animate-[fadeInUp_1s_ease-out]">
            Explore leading global shares through VeltriumFX.
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

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-7 sm:px-6 sm:py-9 md:grid-cols-2 md:gap-10 lg:py-10">
        
        <ScrollReveal delay={0} threshold={0.3} direction="left">
          <img
            src={imagePng}
            alt="Build Equity Exposure"
            className="h-[220px] w-full rounded-xl object-cover shadow-lg transition-all duration-500 hover:scale-105 sm:h-[300px] sm:rounded-xl md:h-[330px] lg:h-[360px]"
          />
        </ScrollReveal>

        <div className="pt-2 md:pt-0 flex flex-col justify-center">
          
          <ScrollReveal delay={100} threshold={0.3} direction="up">
           <p className="text-xs font-semibold uppercase tracking-wide text-[#D3D3D3] sm:text-sm sm:normal-case sm:tracking-normal">       
              Looking To Trade The Brands Behind Global Markets?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} threshold={0.3} direction="up">
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Build Equity Exposure <br className="hidden sm:block" />
              <span className="text-[#00674F]">with Market Access</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300} threshold={0.3} direction="up">
            <p className="mt-4 text-justify text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
              Gain exposure to well-known companies and market sectors through a
              streamlined trading experience. Stock markets create opportunities for
              both tactical trading and longer-term positioning, while diversification
              across industries can help balance risk. Dividend events and market
              adjustments may still influence share prices.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500} threshold={0.3} direction="up">
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Growth Potential
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Strategic Diversification
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Sector Diversification
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Market Flexibility
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#D3D3D3] px-3 py-7 sm:px-6 sm:py-9 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <StockLiveTicker />
        </div>
      </section>

      {/* ================= WHAT ARE STOCKS ================= */}
      <section className="px-3 py-6 sm:px-5 lg:px-6">
        <ScrollReveal delay={100} threshold={0.2} direction="up">
          <div className="mx-auto mt-8 max-w-7xl rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-sm sm:mt-10 sm:px-8 sm:py-8 lg:px-12">
            <div className="max-w-5xl border-l-4 border-[#00674F] pl-5 sm:pl-7">
              <h2 className="text-2xl font-bold leading-tight text-[#00674F] sm:text-3xl">
                What are Stocks?
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                A stock represents a unit of ownership in a company. By purchasing
                shares, you become a part-owner. If the company thrives, its stock
                price rises, offering you potential gains. If the company
                underperforms, the stock price may fall.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

    {/* ================= EXCHANGES ================= */}
<section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
  <div className="grid gap-6 lg:gap-16">
    {/* HEADING (centered) */}
    <div className="flex flex-col justify-center gap-8 items-center text-center px-4 sm:px-8 lg:px-10">
      <div>
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
          Where Are{" "}
          <span className="text-[#00674F]">
            Stocks Traded?
          </span>
        </h3>
        <div className="mx-auto h-1 w-20 rounded-none bg-[#00674F]"></div>
      </div>
    </div>

    {/* CARDS - centered under heading */}
    <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center max-w-7xl">
      {[
        {
          name: "New York Stock Exchange",
          desc: "The largest exchange globally featuring leading companies.",
        },
        {
          name: "NASDAQ",
          desc: "Known for technology-focused companies such as Apple and Microsoft.",
        },
        {
          name: "London Stock Exchange",
          desc: "A major European exchange with global financial companies.",
        },
        {
          name: "Tokyo Stock Exchange",
          desc: "Asia's largest exchange, home to companies like Toyota and Sony.",
        },
      ].map((item, i) => (
        <StaggeredCard key={i} index={i}>
          <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
            <div className="flex flex-col items-center gap-4">
              {/* Circular Icon Container */}
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                {React.createElement(exchangeIcons[i], {
                  size: 24,
                  strokeWidth: 2.4,
                })}
              </div>
              
              <div className="flex flex-col pt-0.5">
                {/* Centered Title */}
                <h4 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">
                  {item.name}
                </h4>

                {/* Centered Description */}
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Bottom green dash */}
            <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
          </div>
        </StaggeredCard>
      ))}
    </div>
  </div>
</section>

      {/* ================= WHY TRADE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-0">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="rounded-2xl bg-[#00674F] p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7">
            <h3 className="text-2xl font-bold leading-tight text-[#D3D3D3] sm:text-3xl">
              Why Trade Stocks?
            </h3>
            <div className="mt-3 h-1 w-20 rounded-full bg-[#D3D3D3]"></div>
            <p className="mt-4 text-left text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Stock trading offers access to a broad range of companies across
              various sectors, allowing you to diversify your investment strategy
              and manage risk. With the right stock trading approach, you can
              maximize returns and build wealth over time.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6 lg:px-0">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="rounded-2xl border-b-4 border-[#D3D3D3] bg-gradient-to-r from-[#f8f6f1] to-[#f1efe8] p-5 shadow-md transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7">
            <h3 className="text-2xl font-bold leading-tight text-[#00674F] sm:text-3xl">
              How Does Stock Trading Work?
            </h3>
            <div className="mt-3 h-1 w-20 rounded-full bg-[#D3D3D3]"></div>
            <p className="mt-4 text-left text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
              Stock trading involves buying and selling shares of companies on
              exchanges. You can also trade stocks CFDs (Contracts for Difference),
              which allow you to speculate on price movements with leverage. Many
              traders diversify their portfolios by investing in a variety of
              sectors, balancing risk across industries and companies.
            </p>
          </div>
        </ScrollReveal>
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

export default Stock;
