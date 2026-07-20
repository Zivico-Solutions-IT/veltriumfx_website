import React, { useEffect, useRef, useState } from "react";
import {
  ChartNoAxesCombined,
  Check,
  Clock3,
  Landmark,
  Torus,
} from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";

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

const Stock = () => {
  return (
    <div className="overflow-x-hidden bg-[#f5f5f5] font-sans">
      
      {/* ================= FULL SCREEN HERO ================= */}
      <section className="relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden bg-black px-4 py-14 text-center sm:min-h-[calc(100svh-80px)] sm:px-6 lg:min-h-[calc(100svh-84px)]">
        
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <img
              src="/Stock1.png"
              alt="Stock Hero"
              className="market-hero-image h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Fade-in Overlay */}
        <div className="absolute inset-0 bg-black/50 animate-[fadeIn_1.5s_ease-out]"></div>

        {/* Content */}
        <div className="market-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center">
          
          <h1 className="market-hero-title text-3xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl animate-[fadeInUp_0.8s_ease-out]">
            Stocks
          </h1>

          <p className="market-hero-copy mx-auto mt-3 max-w-[18rem] text-sm font-medium leading-6 text-white drop-shadow-sm sm:mt-6 sm:max-w-3xl md:text-base md:leading-8 animate-[fadeInUp_1s_ease-out]">
            Start Stock Trading Today with NOVAFXM
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-7 sm:px-6 sm:py-9 md:grid-cols-2 md:gap-8 lg:py-10">
        
        <div className="pt-2 md:pt-0">
          
          <ScrollReveal delay={100} threshold={0.3} direction="up">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#D4AF37] sm:text-sm sm:normal-case sm:tracking-normal">
              Ever Dreamed Of Investing In Your Favourite Companies?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} threshold={0.3} direction="up">
            <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Start Stock Trading Today <br className="hidden sm:block" />
              <span className="text-[#014421]">with Markets</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300} threshold={0.3} direction="up">
            <p className="mt-4 text-justify text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
              Unlock the potential of stock trading by investing in some of the world’s
              leading companies and growing your portfolio with confidence. Stock markets
              provide opportunities for both long-term investment and short-term trading,
              allowing investors to respond to changing market trends in real time.
              Diversifying your investments across different industries can help manage
              risk while creating opportunities for steady financial growth. Please note
              that dividend payouts may affect stock prices as market adjustments occur
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400} threshold={0.3} direction="up">
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:flex-nowrap">
              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Higher Returns
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Portfolio Diversification
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:translate-x-1 sm:text-base lg:text-lg">
                <Check className="shrink-0 text-[#014421]" size={20} strokeWidth={3} />
                Tax Benefits
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0} threshold={0.3} direction="right">
          <img
            src="/Stock2.jpeg"
            alt="chart"
            className="h-[260px] w-full rounded-xl object-cover shadow-lg transition-all duration-500 hover:scale-105 sm:h-[360px] sm:rounded-2xl md:h-[430px] md:justify-self-end lg:h-[480px]"
          />
        </ScrollReveal>
      </section>

      {/* ================= TRADINGVIEW MARKET OVERVIEW ================= */}
      <section className="bg-[#f8faf9] px-3 py-7 sm:px-6 sm:py-9 lg:py-10">
        
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:rounded-3xl sm:p-5 lg:p-6">
            <div className="h-[300px] w-full min-w-0 sm:h-[430px] lg:h-[500px]">
              <TradingViewWidget />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= WHAT ARE STOCKS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:py-6">
        
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="rounded-2xl border-b-4 border-[#D4AF37] bg-gradient-to-r from-[#f8f6f1] to-[#f1efe8] p-5 shadow-md transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7">
            
            <h3 className="text-2xl font-bold text-[#014421] sm:text-3xl">
              What are Stocks?
            </h3>

            <div className="mt-3 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

            <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 lg:text-lg">
              A stock represents a unit of ownership in a company. By purchasing
              shares, you become a part-owner. If the company thrives, its stock
              price rises, offering you potential gains. If the company
              underperforms, the stock price may fall.
            </p>
            
          </div>
        </ScrollReveal>
      </section>

    {/* ================= EXCHANGES ================= */}
<section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
  <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-16">
    {/* LEFT SIDE - HEADING + IMAGE */}
    <div className="flex flex-col justify-center gap-8 pl-4 sm:pl-8 lg:pl-10">
      <div className="text-left">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 sm:mb-8 sm:text-4xl">
          Where Are{" "}
          <span className="text-[#014421]">
            Stocks Traded?
          </span>
        </h3>
        <div className="h-1 w-20 rounded-full bg-[#014421]"></div>
      </div>

      <ScrollReveal delay={100} threshold={0.2} direction="left">
        <div className="relative flex justify-center overflow-hidden rounded-2xl">
          <div className="relative group">
            <img
              src="/src/assets/images/OIP.webp"
              alt="Stock Exchange Trading Floor"
              className="w-full max-w-[700px] rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:shadow-xl"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#014421]/20 to-transparent"></div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    {/* RIGHT SIDE - CARDS (2 rows x 2 columns) */}
    <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 border-b-4 border-b-[#014421] bg-gradient-to-br from-white to-[#f5f7f2] px-5 py-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-h-[230px] sm:rounded-3xl sm:px-6 sm:py-6">
            
            <div className="relative z-10 flex flex-1 flex-col items-center text-center">
              
              {/* Icon */}
              <div className="account-plan-icon flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#014421] transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                {React.createElement(exchangeIcons[i], {
                  className: "h-6 w-6 sm:h-7 sm:w-7",
                  strokeWidth: 2.4,
                })}
              </div>

              {/* Title */}
              <h4 className="mt-4 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                {item.name}
              </h4>

              {/* Line */}
              <div className="mt-3 h-[3px] w-10 rounded-full bg-[#014421]"></div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:leading-7">
                {item.desc}
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-5 z-10 grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className="h-2 w-2 rounded-full bg-green-100"
                />
              ))}
            </div>
          </div>
        </StaggeredCard>
      ))}
    </div>
  </div>
</section>

      {/* ================= WHY TRADE ================= */}
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-0">
        
        <ScrollReveal delay={0} threshold={0.2} direction="up">
          <div className="rounded-2xl bg-[#014421] p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7">
            
            <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">
              Why Trade Stocks?
            </h3>

            <div className="mt-3 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

            <p className="mt-4 text-justify text-sm leading-7 sm:text-left sm:text-base sm:leading-7 lg:text-lg">
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
          <div className="rounded-2xl border-b-4 border-[#D4AF37] bg-gradient-to-r from-[#f8f6f1] to-[#f1efe8] p-5 shadow-md transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7">
            
            <h3 className="text-2xl font-bold text-[#014421] sm:text-3xl">
              How Does Stock Trading Work?
            </h3>

            <div className="mt-3 h-1 w-20 rounded-full bg-[#D4AF37]"></div>

            <p className="mt-4 text-justify text-sm leading-7 text-gray-700 sm:text-left sm:text-base sm:leading-8 lg:text-lg">
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