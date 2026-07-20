import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Bitcoin,
  ChevronRight,
  CircleDollarSign,
  Gem,
  LineChart,
  Zap,
  ExternalLink,
} from "lucide-react";

const tabs = ["Metals", "Forex", "Crypto", "Indices", "Energies"];

const CATEGORY_DETAILS = {
  Metals: {
    description: "Live precious metals market data",
    icon: Gem,
  },
  Forex: {
    description: "Live currency pair market data",
    icon: CircleDollarSign,
  },
  Crypto: {
    description: "Live digital asset market data",
    icon: Bitcoin,
  },
  Indices: {
    description: "Live global index market data",
    icon: BarChart3,
  },
  Energies: {
    description: "Live energy market data and futures",
    icon: Zap,
  },
};

const PAYMENT_METHODS = [
  {
    name: "UPI",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/UPI-Logo-vector.svg",
    imageClass: "h-4 sm:h-6",
  },
  {
    name: "Google Pay",
    src: "/GPAY.png",
    imageClass: "h-8 sm:h-14",
  },
  {
    name: "PhonePe",
    src: "https://cdn.simpleicons.org/phonepe/5F259F",
    imageClass: "h-6 sm:h-10",
  },
  {
    name: "RuPay",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/RuPay.svg",
    imageClass: "h-5 sm:h-8",
  },
  {
    name: "Visa",
    src: "https://static.vecteezy.com/system/resources/previews/020/975/570/large_2x/visa-logo-visa-icon-transparent-free-png.png",
    imageClass: "h-5 sm:h-9",
  },
  {
    name: "Mastercard",
    src: "https://www.pngmart.com/files/22/Mastercard-Logo-PNG-HD-Isolated.png",
    imageClass: "h-6 sm:h-10",
  },
  {
    name: "Net Banking",
    src: "/NetBanking.png",
    imageClass: "h-6 sm:h-10",
  },
  {
    name: "IMPS",
    src: "IMPS.png",
    imageClass: "h-5 sm:h-9",
  },
  {
    name: "NEFT",
    src: "/NEFT.png",
    imageClass: "h-8 sm:h-14",
  },
  {
    name: "RTGS",
    src: "/RTGS.png",
    imageClass: "h-8 sm:h-14",
  },
  {
    name: "Bank Transfer",
    src: "/Banktransfer.png",
    imageClass: "h-8 sm:h-14",
  },
  {
    name: "USDT",
    src: "https://cdn.simpleicons.org/tether/26A17B",
    imageClass: "h-7 sm:h-11",
  },
  {
    name: "Bitcoin",
    src: "https://cdn.simpleicons.org/bitcoin/F7931A",
    imageClass: "h-7 sm:h-11",
  },
  {
    name: "Ethereum",
    src: "https://cdn.simpleicons.org/ethereum/3C3C3D",
    imageClass: "h-7 sm:h-11",
  },
  {
    name: "TRC20",
    src: "/TRC20.png",
    imageClass: "h-7 sm:h-11",
  },
  {
    name: "ERC20",
    src: "https://cdn.simpleicons.org/ethereum/3C3C3D",
    imageClass: "h-7 sm:h-11",
  },
];

const MARKET_DATA = {
  Metals: [
    { symbol: "XAUUSD", name: "Gold", tag: "AU", tradingViewSymbol: "OANDA:XAUUSD" },
    { symbol: "XAGUSD", name: "Silver", tag: "AG", tradingViewSymbol: "OANDA:XAGUSD" },
    { symbol: "XPTUSD", name: "Platinum", tag: "PT", tradingViewSymbol: "OANDA:XPTUSD" },
  ],
  Forex: [
    { symbol: "EURUSD", name: "Euro", tag: "FX", tradingViewSymbol: "OANDA:EURUSD" },
    { symbol: "GBPUSD", name: "Pound", tag: "FX", tradingViewSymbol: "OANDA:GBPUSD" },
    { symbol: "USDJPY", name: "USD/JPY", tag: "FX", tradingViewSymbol: "OANDA:USDJPY" },
  ],
  Crypto: [
    { symbol: "BTCUSD", name: "Bitcoin", tag: "BTC", tradingViewSymbol: "BINANCE:BTCUSDT" },
    { symbol: "ETHUSD", name: "Ethereum", tag: "ETH", tradingViewSymbol: "BINANCE:ETHUSDT" },
    { symbol: "XRPUSD", name: "Ripple", tag: "XRP", tradingViewSymbol: "BINANCE:XRPUSDT" },
  ],
  Indices: [
    { symbol: "US100", name: "Nasdaq", tag: "IDX", tradingViewSymbol: "NASDAQ:NDX" },
    { symbol: "US500", name: "S&P 500", tag: "IDX", tradingViewSymbol: "SP:SPX" },
    { symbol: "US30", name: "Dow Jones", tag: "IDX", tradingViewSymbol: "DJ:DJI" },
  ],
  Energies: [
    { symbol: "USOIL", name: "Crude Oil", tag: "EN", tradingViewSymbol: "TVC:USOIL" },
    { symbol: "UKOIL", name: "Brent Oil", tag: "EN", tradingViewSymbol: "TVC:UKOIL" },
    { symbol: "NGAS", name: "Natural Gas", tag: "EN", tradingViewSymbol: "NYMEX:NG1!" },
  ],
};

const TradingViewQuote = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      isTransparent: true,
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(widget);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container min-h-[50px] w-full overflow-hidden sm:min-h-[84px]"
    />
  );
};

const PaymentLogo = ({ method }) => {
  return (
    <img
      src={method.src}
      alt={method.name}
      className={`${method.imageClass} max-w-[60px] object-contain sm:max-w-[92px]`}
      loading="lazy"
    />
  );
};

// Circular Chart Button Component - Smaller on mobile
const CircularChartButton = ({ symbol, tradingViewSymbol }) => {
  const [isShining, setIsShining] = useState(false);

  const handleOpenChart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsShining(true);
    
    const chartUrl = `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(tradingViewSymbol)}`;
    
    setTimeout(() => {
      window.open(chartUrl, '_blank', 'noopener,noreferrer');
      setIsShining(false);
    }, 150);
  };

  return (
    <button
      onClick={handleOpenChart}
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D35E] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${
        isShining ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
      }`}
      style={{
        width: '28px',
        height: '28px',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
    >
      {isShining && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine" />
      )}
      
      <LineChart 
        size={14} 
        strokeWidth={2} 
        className="text-black sm:size-[22px]"
        style={{ width: '14px', height: '14px' }}
      />
    </button>
  );
};

const Methords = () => {
  const [activeTab, setActiveTab] = useState("Metals");
  const reversedPaymentMethods = [...PAYMENT_METHODS].reverse();

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        if (currentIndex === -1) {
          return tabs[0];
        }
        return tabs[nextIndex];
      });
    }, 10000);

    return () => clearInterval(autoPlayInterval);
  }, []);

  const visibleData = MARKET_DATA[activeTab] || [];
  const activeDetails = CATEGORY_DETAILS[activeTab] || CATEGORY_DETAILS.Metals;
  const ActiveIcon = activeDetails.icon;

  return (
    <section className="w-full bg-white px-2 pb-6 pt-6 sm:px-6 sm:pb-10 sm:pt-16 md:pb-12 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center sm:mb-10 md:mb-12">
          <h2 className="px-1 pb-2 text-base font-semibold leading-snug text-black sm:text-2xl md:text-3xl">
            Secure <span className="text-[#D4AF37]">Methods</span> for Deposits & Withdrawals
          </h2>

          {/* Payment Methods Sliders - Smaller on mobile */}
          <div className="methods-slider mx-auto mt-4 max-w-6xl overflow-hidden sm:mt-8 md:mt-10">
            <div className="methods-slider-track flex w-max items-center gap-1.5 sm:gap-4">
              {[...PAYMENT_METHODS, ...PAYMENT_METHODS].map((method, index) => (
                <a
                  key={`${method.name}-${index}`}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex min-h-[44px] w-[70px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-lg bg-white/80 px-1.5 py-1.5 text-center transition-all duration-300 hover:-translate-y-1 sm:min-h-[76px] sm:w-[136px] sm:gap-2 sm:px-3 sm:py-2"
                >
                  <div className="flex h-6 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[8px] font-medium leading-tight text-gray-900 sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="methods-slider mx-auto mt-3 max-w-6xl overflow-hidden sm:mt-6">
            <div className="methods-slider-track methods-slider-track-reverse flex w-max items-center gap-1.5 sm:gap-4">
              {[...reversedPaymentMethods, ...reversedPaymentMethods].map((method, index) => (
                <a
                  key={`${method.name}-reverse-${index}`}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex min-h-[44px] w-[70px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-lg bg-white/80 px-1.5 py-1.5 text-center transition-all duration-300 hover:-translate-y-1 sm:min-h-[76px] sm:w-[136px] sm:gap-2 sm:px-3 sm:py-2"
                >
                  <div className="flex h-6 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[8px] font-medium leading-tight text-gray-900 sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Trading Section - Smaller card size on mobile */}
        <div className="relative w-full overflow-hidden rounded-xl border border-[#D4AF37]/25 bg-black px-2 py-3 shadow-xl sm:left-1/2 sm:w-screen sm:-translate-x-1/2 sm:px-6 sm:py-12 md:rounded-[56px] lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_32%),radial-gradient(circle_at_bottom,rgba(1,68,33,0.26),transparent_38%)]"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent"></div>

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Header Section - Smaller on mobile */}
            <div className="mb-3 flex items-center gap-2 md:mb-9 md:gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] shadow-[0_0_28px_rgba(212,175,55,0.16)] sm:h-16 sm:w-16">
                <ActiveIcon size={16} strokeWidth={1.9} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white sm:text-4xl">
                  {activeTab}
                </h3>
                <p className="mt-0.5 text-justify text-[10px] text-white/70 sm:text-left sm:text-base">
                  {activeDetails.description}
                </p>
              </div>
            </div>

            {/* Cards Grid - Much smaller on mobile */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {visibleData.map((item) => (
                <div
                  key={item.symbol}
                  className="group relative min-h-[100px] overflow-hidden rounded-lg border border-[#D4AF37]/80 bg-[#060606] p-2 shadow-[0_18px_46px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4D35E] hover:shadow-[0_24px_60px_rgba(212,175,55,0.14)] sm:min-h-[200px] sm:p-2"
                >
                  <div className="absolute inset-0 bg-[url('/m2.png')] bg-cover bg-center opacity-35"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_78%_48%,rgba(212,175,55,0.11),transparent_34%)]"></div>
                  <div className="absolute inset-0 bg-black/45"></div>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Card Header - Smaller on mobile */}
                    <div className="mb-2 flex items-start justify-between gap-1 sm:mb-8 sm:gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37] bg-black/70 text-[#F4D35E] shadow-[inset_0_0_24px_rgba(212,175,55,0.1),0_0_24px_rgba(212,175,55,0.12)] sm:h-16 sm:w-16 sm:rounded-2xl">
                        <ActiveIcon size={14} strokeWidth={1.9} />
                      </div>

                      <div className="min-w-0 pt-0.5 text-right">
                        <h4 className="text-xs font-black tracking-tight text-white sm:text-2xl">
                          {item.symbol}
                        </h4>
                        <p className="mt-0.5 text-justify text-[8px] leading-tight text-white/70 sm:text-right sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* Trading View Widget - Smaller on mobile */}
                    <div className="min-h-[45px] sm:min-h-[88px]">
                      <TradingViewQuote
                        key={`${activeTab}-${item.tradingViewSymbol}`}
                        symbol={item.tradingViewSymbol}
                      />
                    </div>

                    {/* Circular Chart Button - Smaller on mobile */}
                    <div className="mt-2 flex justify-end sm:mt-4">
                      <CircularChartButton 
                        symbol={item.symbol}
                        tradingViewSymbol={item.tradingViewSymbol}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ALL TABS VISIBLE ON MOBILE - WRAPPED TO NEXT LINE */}
            <div className="mt-4 sm:hidden">
              <div className="flex flex-wrap justify-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-0.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[8px] font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "border-[#D4AF37] bg-[#014421] text-white shadow-[0_8px_20px_rgba(212,175,55,0.24)]"
                        : "border-white/20 bg-black/55 text-white/85 hover:border-[#D4AF37]/70 hover:text-white"
                    }`}
                  >
                    {React.createElement(CATEGORY_DETAILS[tab].icon, {
                      size: 8,
                      strokeWidth: 1.9,
                    })}
                    <span>{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Tabs - All visible in a row */}
            <div className="mt-6 hidden justify-center gap-3 overflow-x-auto py-2 sm:flex md:gap-4 md:mt-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex min-h-[42px] items-center gap-2.5 whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-all duration-300 hover:scale-105 md:text-base ${
                    activeTab === tab
                      ? "scale-105 border-[#D4AF37] bg-[#014421] text-white shadow-[0_14px_34px_rgba(212,175,55,0.28)]"
                      : "border-white/20 bg-black/55 text-white/85 hover:border-[#D4AF37]/70 hover:text-white"
                  }`}
                >
                  {React.createElement(CATEGORY_DETAILS[tab].icon, {
                    size: 18,
                    strokeWidth: 1.8,
                  })}
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methords;