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
  {
    name: "Bank Transfer",
    src: "/Banktransfer.png",
    imageClass: "h-8 sm:h-14",
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
      colorTheme: "light",
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
      className={`relative flex items-center justify-center rounded-full bg-[#00674F] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
        isShining ? 'ring-4 ring-[#00674F] ring-opacity-50' : ''
      }`}
      style={{
        width: '32px',
        height: '32px',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {isShining && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine" />
      )}
      
      <LineChart 
        size={16} 
        strokeWidth={2} 
        className="text-white"
      />
    </button>
  );
};

const Methords = () => {
  const [activeTab, setActiveTab] = useState("Metals");

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
    <section className="w-full bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 border-b border-[#D3D3D3]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-20">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#00674F]"></span>
            <span className="text-[#00674F] font-bold uppercase tracking-widest text-[11px]">Funding & Trading</span>
            <span className="w-8 h-[2px] bg-[#00674F]"></span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Secure Methods <span className="text-[#00674F]">For Global Access</span>
          </h2>

          {/* Payment Methods - Static grid */}
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-4 gap-3 sm:mt-16 sm:gap-5 md:mt-16 lg:grid-cols-8">
              {PAYMENT_METHODS.map((method) => (
                <a
                  key={method.name}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex flex-col items-center justify-center gap-2 rounded-sm border border-[#D3D3D3] bg-white px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00674F] hover:shadow-lg sm:px-3 sm:py-5"
                >
                  <div className="flex h-8 items-center justify-center transition duration-300 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 transition-colors group-hover:text-[#00674F] sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
          </div>
        </div>

        {/* Main Trading Section - Colorful Primary Focus */}
        <div className="relative w-full overflow-hidden rounded-sm bg-[#00674F] px-4 py-8 shadow-2xl sm:px-10 sm:py-16 lg:px-12">
          
          {/* Decorative Background for Colorful effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003b2a] via-[#00674F] to-[#004233] opacity-90"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-[100px] rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D3D3D3] opacity-10 blur-[100px] rounded-full mix-blend-overlay"></div>

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="mb-6 flex items-center gap-4 md:mb-12">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#D3D3D3] text-[#00674F] shadow-lg sm:h-16 sm:w-16">
                <ActiveIcon size={24} strokeWidth={2.5} />
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-white sm:text-4xl">
                  {activeTab}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#D3D3D3] sm:text-sm">
                  {activeDetails.description}
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {visibleData.map((item) => (
                <div
                  key={item.symbol}
                  className="group relative overflow-hidden rounded-sm border border-transparent bg-white p-5 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D3D3D3]"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Card Header */}
                    <div className="mb-4 flex items-start justify-between gap-4 sm:mb-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#D3D3D3]/20 text-[#00674F] sm:h-12 sm:w-12">
                        <ActiveIcon size={20} strokeWidth={2} />
                      </div>

                      <div className="text-right">
                        <h4 className="text-lg font-black text-gray-900 sm:text-2xl">
                          {item.symbol}
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* Trading View Widget */}
                    <div className="min-h-[60px] sm:min-h-[88px] mb-4">
                      <TradingViewQuote
                        key={`${activeTab}-${item.tradingViewSymbol}`}
                        symbol={item.tradingViewSymbol}
                      />
                    </div>

                    {/* Circular Chart Button */}
                    <div className="mt-auto flex justify-end">
                      <CircularChartButton 
                        symbol={item.symbol}
                        tradingViewSymbol={item.tradingViewSymbol}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-sm px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#D3D3D3] text-[#00674F] shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {React.createElement(CATEGORY_DETAILS[tab].icon, {
                    size: 16,
                    strokeWidth: 2,
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
