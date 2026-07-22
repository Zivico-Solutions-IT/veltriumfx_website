import React, { useEffect, useRef } from "react";
import heroBg from "../../assets/images/image 90.jpeg";
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

// ── Live TradingView Crypto Screener Widget ──────────────────────────────────
const CryptoLiveTable = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <ScrollReveal delay={0} threshold={0.2} direction="up">
      <div className="mb-12 overflow-hidden bg-white shadow-lg rounded-2xl md:rounded-3xl md:mb-16">
        <div
          className="tradingview-widget-container"
          ref={containerRef}
          style={{ width: "100%", minHeight: 550 }}
        />
        <div className="px-4 py-2 text-xs text-right text-gray-400">
          <a
            href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Cryptocurrency Prices
          </a>{" "}
          by TradingView
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
      icon: <Coins size={30} />,
    },
    {
      title: "Market Capitalization",
      description:
        "The total value of coins in circulation and market expectations for future movements.",
      icon: <ChartNoAxesCombined size={30} />,
    },
    {
      title: "Reputation",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <BadgeCheck size={30} />,
    },
    {
      title: "Utility",
      description:
        "The practical use cases and adoption of cryptocurrencies within financial systems.",
      icon: <Blocks size={30} />,
    },
    {
      title: "Events & News",
      description:
        "Reflects the performance of the market and major global movements.",
      icon: <Newspaper size={30} />,
    },
  ];

  const promoFeatures = [
    {
      title: "No Asset Ownership",
      description:
        "Trade cryptocurrencies without owning them, requiring minimal capital to get started.",
      icon: <FaLock className="text-4xl text-blue-600" />,
    },
    {
      title: "High Volatility",
      description:
        "Leverage the volatility of the crypto market to potentially achieve significant gains, but be mindful of amplified risks.",
      icon: <FaChartLine className="text-4xl text-[#00674F]" />,
    },
    {
      title: "Simple & Accessible",
      description:
        "Unlike stocks and commodities, Crypto CFDs are easier to trade, providing straightforward opportunities for both beginners and experienced traders.",
      icon: <FaBitcoin className="text-4xl text-[#D3D3D3]" />,
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
        <div className="absolute inset-0 bg-[#00674F]/70 animate-[fadeIn_1.5s_ease-out]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white market-hero-content">
          <h1 className="mb-4 text-4xl font-bold market-hero-title sm:text-5xl md:text-6xl animate-[fadeInUp_0.8s_ease-out]">
            Cryptocurrency
          </h1>
          <p className="mb-2 text-sm market-hero-copy md:text-base animate-[fadeInUp_1s_ease-out]">
            Access Crypto CFD Markets with VeltriumFX
          </p>
          <p className="text-xs text-gray-300 market-hero-copy md:text-sm animate-[fadeInUp_1.2s_ease-out]">
            Trade digital asset price movement with flexible platform tools.
          </p>
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
        className="relative h-full min-h-[260px] sm:min-h-[290px] flex flex-col justify-between w-full overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F5EE] text-[#00674F]">
            {factor.icon}
          </div>
          <h3 className="text-sm font-bold leading-snug text-[#0f172a] sm:text-base">
            {factor.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            {factor.description}
          </p>
        </div>
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
                      {feature.icon}
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
