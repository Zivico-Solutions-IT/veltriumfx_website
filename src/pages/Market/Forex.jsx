import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Check,
  Headphones,
  LineChart,
  MonitorSmartphone,
  WalletCards,
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

const tradingViewCurrencies = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"];

const cardAnimation =
  "transition duration-300 sm:hover:-translate-y-2 sm:hover:shadow-xl";

const features = [
  {
    title: "Low Spreads & Competitive Pricing",
    desc: "Get access to tight spreads and real-time market execution.",
    icon: BarChart3,
  },
  {
    title: "Fast & Reliable Trading",
    desc: "Lightning-fast trade execution with minimal slippage.",
    icon: Gauge,
  },
  {
    title: "Leverage Options",
    desc: "Flexible leverage to maximize your trading potential.",
    icon: LineChart,
  },
  {
    title: "Multiple Trading Platforms",
    desc: "Trade via desktop, mobile and web-based applications.",
    icon: MonitorSmartphone,
  },
  {
    title: "Educational Resources",
    desc: "Enhance your Forex knowledge with webinars and expert analysis.",
    icon: BookOpenCheck,
  },
  {
    title: "24/5 Customer Support",
    desc: "A dedicated Forex support team ready to assist anytime.",
    icon: Headphones,
  },
];

const fundingMethods = [
  {
    name: "Credit/Debit Cards",
    desc: "Fast deposits with secure card processing.",
    icon: CreditCard,
  },
  {
    name: "Bank Transfers",
    desc: "Reliable transfers for larger account funding.",
    icon: Building2,
  },
  {
    name: "Cryptocurrency Payments",
    desc: "Borderless payments with quick confirmation.",
    icon: CircleDollarSign,
  },
  {
    name: "E-wallets",
    desc: "Convenient deposits and withdrawals.",
    icon: WalletCards,
  },
];

const marketOfferings = [
  ["Major Currency Pairs", "Trade EUR/USD, GBP/USD, USD/JPY  and more with tight spreads."],
  ["Minor Currency Pairs", "Access pairs like EUR/AUD, GBP/NZD  and CAD/CHF."],
  ["Exotic Currency Pairs", "Explore high-volatility pairs such as USD/ZAR, EUR/TRY and more."],
  ["Forex CFDs", "Trade Forex without owning the underlying asset."],
  ["Scalping & Hedging Allowed", "Use advanced strategies with no restrictions."],
];

const tools = [
  ["Economic Calendar", "Stay updated on key financial events affecting currency markets."],
  ["Live Forex Market News", "Real-time updates to help you make informed trading decisions."],
  ["Advanced Charting Tools", "Technical indicators and trend analysis for smart trading."],
  ["Forex Signals", "Receive expert trading signals to enhance your strategies."],
].map(([title, desc]) => ({ title, desc }));

const compliancePoints = [
  "Strict AML monitoring",
  "Robust KYC verification",
  "Secure trading environment",
];

function SectionTitle({ children, accent = false }) {
  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="mb-7 px-2 text-center sm:mb-12 lg:mb-14">
        <h2 className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${accent ? "text-[#00674F]" : "text-[#1f1f1f]"}`}>
          {children}
        </h2>
        {!accent && <div className="mx-auto mt-4 h-1 w-20 rounded-none bg-[#00674F] sm:mt-6 sm:w-24" />}
      </div>
    </ScrollReveal>
  );
}

// ── Live Forex Ticker Widget ───────────────────────────────────────────────
const INITIAL_FOREX_DATA = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", tag: "EUR", price: "1.0850", change: "+0.21%", direction: "up", tradingViewSymbol: "OANDA:EURUSD", sparkline: "M2 28 L16 22 L30 26 L44 14 L58 18 L72 8" },
  { symbol: "GBP/USD", name: "Pound / US Dollar", tag: "GBP", price: "1.2850", change: "+0.32%", direction: "up", tradingViewSymbol: "OANDA:GBPUSD", sparkline: "M2 28 L16 24 L30 20 L44 16 L58 12 L72 9" },
  { symbol: "USD/JPY", name: "US Dollar / Yen", tag: "JPY", price: "155.40", change: "-0.11%", direction: "down", tradingViewSymbol: "OANDA:USDJPY", sparkline: "M2 12 L16 20 L30 15 L44 24 L58 20 L72 26" },
  { symbol: "AUD/USD", name: "Aussie / US Dollar", tag: "AUD", price: "0.6680", change: "+0.15%", direction: "up", tradingViewSymbol: "OANDA:AUDUSD", sparkline: "M2 28 L16 26 L30 20 L44 18 L58 12 L72 8" },
  { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar", tag: "CAD", price: "1.3650", change: "+0.08%", direction: "up", tradingViewSymbol: "OANDA:USDCAD", sparkline: "M2 24 L16 22 L30 23 L44 18 L58 19 L72 15" }
];

function ForexRatesWidget() {
  const [marketData, setMarketData] = useState(INITIAL_FOREX_DATA);

  useEffect(() => {
    let isMounted = true;

    const formatPrice = (val, sym) => {
      if (sym.includes("JPY")) return val.toFixed(3);
      return val.toFixed(5);
    };

    const fetchLivePrices = async () => {
      try {
        const tvRes = await fetch("https://scanner.tradingview.com/global/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbols: {
              tickers: [
                "OANDA:EURUSD",
                "OANDA:GBPUSD",
                "OANDA:USDJPY",
                "OANDA:AUDUSD",
                "OANDA:USDCAD"
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
            const rawPrice = parseFloat(item.price);
            if (!isNaN(rawPrice)) {
              const deltaPct = (Math.random() - 0.48) * 0.0004;
              const newPrice = Math.max(0.0001, rawPrice * (1 + deltaPct));
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

  const tickerLoop = [...marketData, ...marketData, ...marketData, ...marketData, ...marketData];

  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="relative w-full overflow-hidden rounded-2xl border border-[#00674F]/30 bg-[#00674F] px-3 py-4 shadow-[0_26px_70px_rgba(0,103,79,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] sm:left-1/2 sm:w-screen sm:-translate-x-1/2 sm:px-6 sm:py-6 md:rounded-[28px] lg:px-8 mb-8 md:mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,211,211,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.18),transparent_42%)]"></div>

          <div className="relative z-10 mb-4 flex items-center justify-between gap-4 px-1 sm:px-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D3D3D3]">
                Live Market
              </p>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-3xl">
                Global Forex Prices
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
      </section>
    </ScrollReveal>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#00674F] sm:min-h-[calc(100svh-80px)] lg:min-h-[calc(100svh-84px)]">
      {/* Animated Background with Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
          style={{ transformOrigin: 'center' }}
        >
          <img
            src="\src\assets\images\frx.png"
            alt="Forex Hero"
            className="h-full w-full object-cover object-center market-hero-image"
          />
        </div>
      </div>
      {/* Fade-in Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="market-hero-content relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        <h1 className="market-hero-title text-4xl font-bold leading-tight text-white animate-[fadeInUp_0.8s_ease-out] sm:text-5xl md:text-6xl">Forex</h1>
        <p className="market-hero-copy mt-4 max-w-2xl text-sm leading-6 text-gray-200 animate-[fadeInUp_1s_ease-out] sm:text-base sm:leading-7">
          Access major, minor and exotic currency pairs through VeltriumFX.
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
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14">
        <ScrollReveal delay={0} threshold={0.3} direction="left">
          <img
            src="\src\assets\images\shutterstock_2159962175.jpg"
            alt="forex"
            className="h-[210px] w-full rounded-3xl object-cover shadow-xl transition-all duration-500 hover:scale-105 sm:h-[320px] sm:rounded-3xl lg:h-[350px] lg:rounded-3xl"
          />
        </ScrollReveal>
        
        <div>
          <ScrollReveal delay={100} threshold={0.3} direction="up">
            <p className="mb-3 text-sm font-semibold text-[#00674F] sm:mb-4">Forex Trading</p>
          </ScrollReveal>
          <ScrollReveal delay={200} threshold={0.3} direction="up">
            <h2 className="text-2xl font-bold leading-tight text-[#1f1f1f] sm:text-4xl">
              Currency Trading with a Sharper Edge
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300} threshold={0.3} direction="up">
            <h3 className="mt-2 text-2xl font-bold text-[#00674F] sm:mt-3 sm:text-3xl">VeltriumFX</h3>
          </ScrollReveal>
          <ScrollReveal delay={400} threshold={0.3} direction="up">
            <p className="mt-4 text-justify text-sm leading-7 text-gray-600 sm:mt-5 sm:text-left sm:text-base lg:leading-8">
              VeltriumFX gives traders access to a broad currency market with
              competitive conditions, practical tools and liquidity built for
              fast-moving forex sessions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500} threshold={0.3} direction="up">
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Market Opportunity
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Pair Diversification
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#00674F]" size={20} strokeWidth={3} />
                Flexible Exposure
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <SectionTitle>
        Why Currency Traders Use <span className="text-[#00674F]">VeltriumFX</span>
      </SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <StaggeredCard key={item.title} index={index}>
              <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] m-0 text-left font-sans tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-left mt-1.5">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom green dash */}
                <div className="mt-8 h-[3px] w-8 bg-[#00674F] rounded-full"></div>
              </div>
            </StaggeredCard>
          );
        })}
      </div>
    </section>
  );
}

function MarketOfferingsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.35fr] lg:items-stretch">
        <ScrollReveal delay={0} threshold={0.2} direction="left">
          <div className="rounded-2xl bg-[#00674F] px-5 py-7 text-white shadow-[0_18px_42px_rgba(1,68,33,0.18)] transition-all duration-300 hover:shadow-xl sm:px-8 sm:py-9 lg:px-10 h-full min-h-[360px] flex flex-col justify-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#D3D3D3] sm:text-sm">
                Forex Products
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Forex Market Offerings
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
                Access a focused range of currency markets and trading conditions
                designed for active forex strategies.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 border-t border-white/20 pt-5">
              <span className="text-4xl font-bold text-[#D3D3D3]">
                {String(marketOfferings.length).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold leading-5 text-white/80">
                Trading categories available
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {marketOfferings.map(([title, desc], index) => (
            <StaggeredCard key={title} index={index}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00674F]/20 hover:shadow-md sm:px-6">
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#00674F]" />
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D3D3D3] text-sm font-bold text-[#00674F]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-gray-500">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggeredCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FundingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="mb-7 px-2 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#D3D3D3] sm:text-sm">
            Account Funding
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#00674F] sm:text-3xl lg:text-4xl">
            Funding & Withdrawal Methods
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base">
            Use trusted payment options designed for secure deposits, smooth
            withdrawals and transparent processing.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {fundingMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <StaggeredCard key={method.name} index={index}>
              <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                <div className="flex flex-col items-center gap-4">
                  {/* Circular Icon Container */}
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                    <Icon size={24} strokeWidth={2.3} />
                  </div>
                  
                  <div className="flex flex-col pt-0.5 items-center">
                    {/* Centered Title */}
                    <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] mb-1.5 text-center font-sans tracking-tight">
                      {method.name}
                    </h3>
                    
                    {/* Centered Description */}
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-center mt-1.5">
                      {method.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom green dash */}
                <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
              </div>
            </StaggeredCard>
          );
        })}
      </div>
    </section>
  );
}
function ToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20 lg:pb-24">
      <SectionTitle accent>Forex Trading Tools & Market Insights</SectionTitle>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {tools.map((tool, index) => (
          <StaggeredCard key={tool.title} index={index}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1e293b] text-left font-sans tracking-tight">
                  {tool.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#64748b] font-medium text-left mt-1.5">
                  {tool.desc}
                </p>
              </div>
              <div className="mt-8 h-[3px] w-8 bg-[#00674F] rounded-full"></div>
            </div>
          </StaggeredCard>
        ))}
      </div>
    </section>
  );
}
function SecuritySection() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-10 sm:px-6 sm:py-12">
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#00674F] shadow-md transition-all duration-300 hover:shadow-xl`}>
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                Client Protection
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-[#D3D3D3] sm:text-3xl">
                Security & Compliance
              </h2>
              <p className="mt-5 max-w-4xl text-justify text-sm leading-7 text-white sm:text-left sm:text-base">
                VeltriumFX is committed to the highest standards of financial security
                and regulatory compliance. We follow strict anti-money laundering
                (AML) policies and implement robust Know Your Customer (KYC)
                procedures to ensure a safe trading environment.
              </p>
            </div>

            {/* Centered compliance points */}
            <div className="flex items-center justify-center border-t border-white/30 bg-[#00674F] px-5 py-6 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10">
              <div className="w-full max-w-md space-y-4">
                {compliancePoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-white" strokeWidth={2.4} />
                    <span className="font-semibold text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default function ForexPage() {
  return (
    <div className="w-full overflow-hidden bg-[#f7f7f7] font-sans">
      <HeroSection />
      <AboutSection />
      <ForexRatesWidget />
      <FeatureGrid />
      <MarketOfferingsSection />
      <FundingSection />
      <ToolsSection />
      <SecuritySection />

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
}
