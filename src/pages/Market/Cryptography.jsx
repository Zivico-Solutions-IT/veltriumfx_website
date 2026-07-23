import React, { useEffect, useRef } from "react";
import heroBg from "../../assets/images/cryp.png";
import cryptoBottom from "../../assets/images/crypto_bottom.webp";
import cryptoHero from "../../assets/images/Cryptocurrencies-2.jpg";
import {
  Coins,
  ChartNoAxesCombined,
  BadgeCheck,
  Blocks,
  Newspaper,
  Check,
} from "lucide-react";
import { FaBitcoin, FaChartLine, FaLock } from "react-icons/fa";

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
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
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
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

// ── Live Crypto Ticker Widget ──────────────────────────────────────────────
const INITIAL_CRYPTO_DATA = [
  { symbol: "BTC/USD", name: "Bitcoin", tag: "BTC", price: "118,245.22", change: "+2.45%", direction: "up", binanceSymbol: "BTCUSDT", sparkline: "M2 28 L16 22 L30 26 L44 14 L58 18 L72 8" },
  { symbol: "ETH/USD", name: "Ethereum", tag: "ETH", price: "3,845.11", change: "-0.82%", direction: "down", binanceSymbol: "ETHUSDT", sparkline: "M2 12 L16 20 L30 15 L44 24 L58 20 L72 26" },
  { symbol: "BNB/USD", name: "BNB", tag: "BNB", price: "812.34", change: "+1.25%", direction: "up", binanceSymbol: "BNBUSDT", sparkline: "M2 28 L16 24 L30 20 L44 16 L58 12 L72 9" },
  { symbol: "SOL/USD", name: "Solana", tag: "SOL", price: "186.55", change: "+3.55%", direction: "up", binanceSymbol: "SOLUSDT", sparkline: "M2 28 L16 26 L30 20 L44 18 L58 12 L72 8" },
  { symbol: "XRP/USD", name: "XRP", tag: "XRP", price: "2.94", change: "-1.12%", direction: "down", binanceSymbol: "XRPUSDT", sparkline: "M2 14 L16 20 L30 18 L44 24 L58 22 L72 28" }
];

const CryptoLiveTable = () => {
  const [marketData, setMarketData] = React.useState(INITIAL_CRYPTO_DATA);

  React.useEffect(() => {
    let isMounted = true;

    const formatPrice = (val) => {
      return val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const fetchLivePrices = async () => {
      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22BNBUSDT%22,%22SOLUSDT%22,%22XRPUSDT%22%5D");
        if (!res.ok) throw new Error("Failed to fetch Binance ticker");
        const data = await res.json();
        
        if (!isMounted) return;

        const livePriceMap = {};
        if (Array.isArray(data)) {
          data.forEach((item) => {
            livePriceMap[item.symbol] = {
              close: parseFloat(item.lastPrice),
              change: parseFloat(item.priceChangePercent)
            };
          });
        }

        setMarketData((prevData) =>
          prevData.map((item) => {
            const symbolKey = item.binanceSymbol;
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
      } catch (err) {
        console.warn("Binance API fetch fallback failed...", err);
      }
    };

    fetchLivePrices();
    const fetchInterval = setInterval(fetchLivePrices, 10000);

    // Active live micro-tick engine every 2.5 seconds
    const tickInterval = setInterval(() => {
      if (!isMounted) return;
      setMarketData((prevData) =>
        prevData.map((item) => {
          if (Math.random() < 0.35) {
            const rawPrice = parseFloat(item.price.replace(/,/g, ""));
            if (!isNaN(rawPrice)) {
              const deltaPct = (Math.random() - 0.48) * 0.0008;
              const newPrice = Math.max(0.0001, rawPrice * (1 + deltaPct));
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

  const tickerLoop = [...marketData, ...marketData, ...marketData, ...marketData, ...marketData];

  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="relative w-full overflow-hidden rounded-2xl border border-[#00674F]/30 bg-[#00674F] px-3 py-4 shadow-[0_26px_70px_rgba(0,103,79,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] sm:left-1/2 sm:w-screen sm:-translate-x-1/2 sm:px-6 sm:py-6 md:rounded-[28px] lg:px-8 animate-[fadeInUp_0.8s_ease-out] mb-12 md:mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,211,211,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.18),transparent_42%)]"></div>

        <div className="relative z-10 mb-4 flex items-center justify-between gap-4 px-1 sm:px-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D3D3D3]">
              Live Market
            </p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-3xl">
              Global Cryptocurrency Prices
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
                onClick={() => window.open(`https://www.tradingview.com/chart/?symbol=BINANCE:${encodeURIComponent(item.tag)}USDT`, "_blank", "noopener,noreferrer")}
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
// ────────────────────────────────────────────────────────────────────────────

const CryptocurrencyPage = () => {

  const factors = [
    {
      title: "Supply",
      description:
        "The total number of coins available and their release schedule.",
      icon: <Coins size={24} />,
    },
    {
      title: "Market Capitalization",
      description:
        "The total value of coins in circulation and market expectations for future movements.",
      icon: <ChartNoAxesCombined size={24} />,
    },
    {
      title: "Reputation",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <BadgeCheck size={24} />,
    },
    {
      title: "Utility",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <Blocks size={24} />,
    },
    {
      title: "Events & News",
      description:
        "Reflects the performance of the market and major global movements.",
      icon: <Newspaper size={24} />,
    },
  ];

  const promoFeatures = [
    {
      title: "No Asset Ownership",
      description:
        "Trade cryptocurrencies without owning them, requiring minimal capital to get started.",
      icon: <FaLock size={24} />,
    },
    {
      title: "High Volatility",
      description:
        "Leverage the volatility of the crypto market to potentially achieve significant gains, but be mindful of amplified risks.",
      icon: <FaChartLine size={24} />,
    },
    {
      title: "Simple & Accessible",
      description:
        "Unlike stocks and commodities, Crypto CFDs are easier to trade, providing straightforward opportunities for both beginners and experienced traders.",
      icon: <FaBitcoin size={24} />,
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden px-3 py-16 sm:min-h-[calc(100svh-80px)] sm:px-5 lg:min-h-[calc(100svh-84px)] lg:px-6">
        {/* Animated Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src={heroBg}
              alt="Cryptocurrency Hero"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white market-hero-content">
          <h1 className="mb-4 text-4xl font-bold market-hero-title sm:text-5xl md:text-6xl animate-[fadeInUp_0.8s_ease-out]">
            Cryptocurrency
          </h1>
          <p className="mb-2 text-sm market-hero-copy md:text-base animate-[fadeInUp_1s_ease-out]">
            Access Crypto CFD Markets with VeltriumFX.
          </p>
          <p className="text-xs text-gray-300 market-hero-copy md:text-sm animate-[fadeInUp_1.2s_ease-out]">
            
          </p>
          <div className="mt-8 animate-[fadeInUp_1.4s_ease-out]">
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="button-shine mt-2 rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-3 py-4 mx-auto max-w-7xl sm:py-6 md:py-8 sm:px-5 md:py-14 lg:px-6">
        {/* About Crypto Section */}
        <div className="grid items-start gap-8 mb-12 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-16">
  
          {/* IMAGE - Slide from Left */}
          <ScrollReveal delay={0} threshold={0.3} direction="left">
            <div className="order-2 md:order-1 flex items-center justify-center group overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src={cryptoHero}
                alt="crypto"
                className="h-[240px] w-full rounded-2xl object-cover shadow-lg transition-all duration-500 group-hover:scale-105 sm:h-[320px] md:h-[420px] md:rounded-3xl lg:h-[450px]"
              />
            </div>
          </ScrollReveal>

          {/* TEXT CONTENT */}
          <div className="order-1 md:order-2 md:pl-2 lg:pl-4">
            <ScrollReveal delay={100} threshold={0.3} direction="up">
              <h3 className="mb-2 text-base text-gray-700 md:text-lg">
                Digital Markets, Practical Risk Control
              </h3>
            </ScrollReveal>
            
            <ScrollReveal delay={200} threshold={0.3} direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00674F] mb-4">
                Explore Crypto CFDs through
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={300} threshold={0.3} direction="up">
              <p className="text-[#D3D3D3] font-bold mb-4 text-2xl">
                VeltriumFX
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400} threshold={0.3} direction="up">
              <p className="mb-6 text-sm leading-7 text-justify text-gray-600 md:text-base">
                Gain exposure to leading digital assets such as Bitcoin, Ethereum,
                Ripple and more through CFD trading. Use market analysis, live price
                tracking and secure platform access to evaluate opportunities, manage
                risk and trade around fast-moving crypto conditions.
              </p>
            </ScrollReveal>
            
            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4">
              <ScrollReveal delay={500} threshold={0.3} direction="up">
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <Check className="shrink-0 text-[#00674F] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Potential Returns
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600} threshold={0.3} direction="up">
                <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <Check className="shrink-0 text-[#00674F] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Simplified Trading
                </div>
              </ScrollReveal>
             
              <ScrollReveal delay={700} threshold={0.3} direction="up">
                <div className="flex basis-full items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                  <Check className="shrink-0 text-[#00674F] transition-transform duration-300 group-hover:scale-110" size={20} strokeWidth={3} />
                  Portfolio Diversification
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Live Crypto Table */}
        <CryptoLiveTable />
      </div>

      {/* What are Crypto CFDs Section */}
      <div className="px-3 py-6 sm:px-5 lg:px-6">
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mx-auto max-w-6xl rounded-2xl border border-[#00674F] bg-[#00674F] p-8 text-white shadow-sm transition-all duration-300 sm:p-10 md:p-12">
            <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              What are Crypto CFDs?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-emerald-50/90 sm:text-base md:text-lg md:leading-8">
              Cryptocurrencies, since Bitcoin's introduction in 2009, have
              redefined the financial landscape. These digital assets function on
              a decentralized online ledger secured by cryptography, making them
              one of the safest online payment methods.
            </p>
            <p className="text-sm leading-relaxed text-emerald-50/90 sm:text-base md:text-lg md:leading-8">
              While cryptocurrencies like Bitcoin have gained significant
              recognition globally, they operate outside the traditional banking
              system and remain unaffected by conventional economic factors.
            </p>
          </div>
        </ScrollReveal>
      </div>
<div className="px-3 py-12 mx-auto max-w-7xl sm:px-5 md:py-20 lg:px-6">

  {/* Heading */}
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="mb-12 text-center md:mb-16">
      <h1 className="mb-4 text-2xl font-bold text-black md:text-4xl">
        What Affects the Price of{" "}
        <span className="text-[#00674F]">Crypto CFDs?</span>
      </h1>
      <p className="max-w-6xl mx-auto text-sm leading-relaxed text-gray-600 md:text-base">
        Several key factors influence the price movements of Crypto CFDs.
        Understanding these elements helps traders make informed and
        strategic decisions in fast-moving markets.
      </p>
    </div>
  </ScrollReveal>

  {/* Cards Layout - Single Row on Desktop with Taller Card Height */}
  <div className="grid gap-4 max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {factors.map((factor, index) => (
      <div
        key={index}
        className="group relative h-full flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center"
      >
        <div className="flex flex-col items-center gap-4">
          {/* Circular Icon Container */}
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
            {factor.icon}
          </div>
          
          <div className="flex flex-col pt-0.5">
            {/* Centered Title */}
            <h3 className="text-[15px] font-bold leading-snug text-[#0f172a] mb-1.5 text-center">
              {factor.title}
            </h3>

            {/* Centered Description */}
            <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 text-center">
              {factor.description}
            </p>
          </div>
        </div>

        {/* Bottom green dash */}
        <div className="mt-8 h-[3px] w-6 bg-[#00674F] rounded-full mx-auto"></div>
      </div>
    ))}
  </div>
</div>

<style jsx>{`
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
      opacity: 1 !important;
      transition: none !important;
    }
  }
`}</style>

      {/* Why is Crypto CFD Trading So Popular Section */}
      <ScrollReveal delay={0} threshold={0.2} direction="up">
        <div className="px-3 py-10 text-center text-gray-800 bg-gradient-to-r from-white to-white sm:px-5 md:py-14 lg:px-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-4 text-2xl font-bold md:text-4xl">
              Why is Crypto CFD Trading So Popular?
            </h1>
            <p className="max-w-6xl mx-auto text-sm leading-7 md:text-base md:leading-8">
              The media frenzy surrounding Bitcoin and Ethereum has driven the rise
              in Crypto CFD trading. Cryptocurrencies do not rely on central banks
              or interest rates and their value is not subject to traditional
              economic drivers. Crypto CFDs can be traded against popular currencies
              such as the US Dollar, British Pound or Euro offering unique trading
              opportunities without the complexities of ownership.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Trade Crypto CFDs Section */}
      <div className="px-3 py-10 bg-gray-50 sm:px-5 md:py-14 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal delay={0} threshold={0.2} direction="up">
            <div className="py-4 text-center">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl text-[#0f172a]">
                Why Trade Crypto CFDs?
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {promoFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 border border-[#D3D3D3] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center h-full rounded-2xl"
                  >
                    <div className="flex justify-center mb-4 text-[#00674F]">
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#00674F] text-white mx-auto">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="mb-2.5 text-lg font-bold text-[#0f172a]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
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

export default CryptocurrencyPage;
