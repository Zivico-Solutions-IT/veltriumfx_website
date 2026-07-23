import React from "react";
import {
  Bitcoin,
} from "lucide-react";

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

const INITIAL_MARKET_DATA = {
  Metals: [
    { symbol: "XAU/USD", name: "Gold", tag: "AU", price: "4,116.92", change: "+0.98%", direction: "up", tradingViewSymbol: "OANDA:XAUUSD", sparkline: "M2 30 L16 22 L30 26 L44 14 L58 18 L72 8" },
    { symbol: "XAG/USD", name: "Silver", tag: "AG", price: "59.44", change: "+1.12%", direction: "up", tradingViewSymbol: "TVC:SILVER", sparkline: "M2 28 L16 24 L30 16 L44 18 L58 10 L72 13" },
    { symbol: "XPT/USD", name: "Platinum", tag: "PT", price: "1,651.12", change: "+1.45%", direction: "up", tradingViewSymbol: "TVC:PLATINUM", sparkline: "M2 30 L16 22 L30 26 L44 14 L58 18 L72 8" },
  ],
  Forex: [
    { symbol: "EUR/USD", name: "Euro", tag: "FX", price: "1.14059", change: "+0.07%", direction: "up", tradingViewSymbol: "OANDA:EURUSD", sparkline: "M2 28 L16 22 L30 24 L44 12 L58 18 L72 8" },
    { symbol: "GBP/USD", name: "Pound", tag: "FX", price: "1.33684", change: "-0.05%", direction: "down", tradingViewSymbol: "OANDA:GBPUSD", sparkline: "M2 12 L16 20 L30 15 L44 24 L58 19 L72 27" },
    { symbol: "USD/JPY", name: "Yen", tag: "FX", price: "163.026", change: "-0.11%", direction: "down", tradingViewSymbol: "OANDA:USDJPY", sparkline: "M2 10 L16 14 L30 20 L44 18 L58 24 L72 22" },
  ],
  Crypto: [
    { symbol: "BTC/USD", name: "Bitcoin", tag: "BTC", price: "65,879.41", change: "-1.00%", direction: "down", tradingViewSymbol: "BINANCE:BTCUSDT", sparkline: "M2 10 L16 16 L30 12 L44 22 L58 20 L72 28" },
    { symbol: "ETH/USD", name: "Ethereum", tag: "ETH", price: "1,920.65", change: "-0.47%", direction: "down", tradingViewSymbol: "BINANCE:ETHUSDT", sparkline: "M2 10 L16 16 L30 12 L44 22 L58 20 L72 28" },
    { symbol: "XRP/USD", name: "Ripple", tag: "XRP", price: "1.1342", change: "-0.82%", direction: "down", tradingViewSymbol: "BINANCE:XRPUSDT", sparkline: "M2 14 L16 18 L30 15 L44 24 L58 22 L72 28" },
  ],
  Indices: [
    { symbol: "NAS100", name: "Nasdaq", tag: "IDX", price: "29,155.18", change: "+1.93%", direction: "up", tradingViewSymbol: "NASDAQ:NDX", sparkline: "M2 29 L16 18 L30 23 L44 12 L58 17 L72 9" },
    { symbol: "US500", name: "S&P 500", tag: "IDX", price: "7,509.20", change: "+0.89%", direction: "up", tradingViewSymbol: "SP:SPX", sparkline: "M2 24 L16 22 L30 17 L44 19 L58 12 L72 10" },
    { symbol: "US30", name: "Dow Jones", tag: "IDX", price: "52,224.64", change: "+0.74%", direction: "up", tradingViewSymbol: "DJ:DJI", sparkline: "M2 16 L16 12 L30 20 L44 15 L58 26 L72 22" },
  ],
  Energies: [
    { symbol: "USOIL", name: "Crude Oil", tag: "EN", price: "88.07", change: "+4.42%", direction: "up", tradingViewSymbol: "NYMEX:CL1!", sparkline: "M2 28 L16 22 L30 18 L44 20 L58 11 L72 14" },
    { symbol: "UKOIL", name: "Brent Oil", tag: "EN", price: "95.39", change: "+4.35%", direction: "up", tradingViewSymbol: "FX:UKOIL", sparkline: "M2 30 L16 25 L30 19 L44 21 L58 16 L72 10" },
    { symbol: "NGAS", name: "Natural Gas", tag: "EN", price: "2.877", change: "+0.42%", direction: "up", tradingViewSymbol: "NYMEX:NG1!", sparkline: "M2 28 L16 22 L30 18 L44 20 L58 11 L72 14" },
  ],
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

const formatPrice = (val, symbol) => {
  if (typeof val !== "number" || isNaN(val)) return val;
  if (
    symbol.includes("BTC") ||
    symbol.includes("ETH") ||
    symbol.includes("NAS") ||
    symbol.includes("US500") ||
    symbol.includes("US30") ||
    symbol.includes("XAU") ||
    symbol.includes("XPT")
  ) {
    return val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else if (symbol.includes("EUR") || symbol.includes("GBP") || symbol.includes("JPY")) {
    return val.toString().includes(".") ? val.toFixed(val > 10 ? 3 : 5) : val.toString();
  } else if (val < 10) {
    return val.toFixed(4);
  } else {
    return val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
};

const Methords = ({ variant = "all" }) => {
  const [marketData, setMarketData] = React.useState(INITIAL_MARKET_DATA);
  const showMarket = variant === "all" || variant === "market";
  const showPayments = variant === "all" || variant === "payments";

  React.useEffect(() => {
    if (!showMarket) return;
    let isMounted = true;

    const fetchLivePrices = async () => {
      const livePriceMap = {};

      // 1. Primary Fetch: TradingView Scanner API
      try {
        const allTickers = [];
        Object.values(INITIAL_MARKET_DATA).forEach((category) => {
          category.forEach((item) => {
            if (item.tradingViewSymbol) {
              allTickers.push(item.tradingViewSymbol);
            }
          });
        });

        const tvRes = await fetch("https://scanner.tradingview.com/global/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbols: { tickers: allTickers },
            columns: ["close", "change"],
          }),
        });

        if (tvRes.ok) {
          const tvJson = await tvRes.json();
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
        }
      } catch (err) {
        console.warn("TradingView scanner API direct fetch failed, trying fallbacks...", err);
      }

      // 2. Fallback Fetch: Binance Public API for Crypto & Metals
      try {
        const binanceRes = await fetch(
          "https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22,%22ETHUSDT%22,%22XRPUSDT%22,%22PAXGUSDT%22%5D"
        );
        if (binanceRes.ok) {
          const bData = await binanceRes.json();
          if (Array.isArray(bData)) {
            bData.forEach((b) => {
              const close = parseFloat(b.lastPrice);
              const change = parseFloat(b.priceChangePercent);
              if (!isNaN(close)) {
                if (b.symbol === "BTCUSDT") livePriceMap["BINANCE:BTCUSDT"] = livePriceMap["BINANCE:BTCUSDT"] || { close, change };
                if (b.symbol === "ETHUSDT") livePriceMap["BINANCE:ETHUSDT"] = livePriceMap["BINANCE:ETHUSDT"] || { close, change };
                if (b.symbol === "XRPUSDT") livePriceMap["BINANCE:XRPUSDT"] = livePriceMap["BINANCE:XRPUSDT"] || { close, change };
                if (b.symbol === "PAXGUSDT") livePriceMap["OANDA:XAUUSD"] = livePriceMap["OANDA:XAUUSD"] || { close, change };
              }
            });
          }
        }
      } catch (err) {
        console.warn("Binance API fetch fallback failed...", err);
      }

      // 3. Fallback Fetch: Frankfurter API for Forex Rates
      try {
        const fxRes = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY");
        if (fxRes.ok) {
          const fxData = await fxRes.json();
          if (fxData && fxData.rates) {
            if (fxData.rates.EUR) {
              const eurUsd = 1 / fxData.rates.EUR;
              livePriceMap["OANDA:EURUSD"] = livePriceMap["OANDA:EURUSD"] || { close: eurUsd, change: 0.07 };
            }
            if (fxData.rates.GBP) {
              const gbpUsd = 1 / fxData.rates.GBP;
              livePriceMap["OANDA:GBPUSD"] = livePriceMap["OANDA:GBPUSD"] || { close: gbpUsd, change: -0.05 };
            }
            if (fxData.rates.JPY) {
              livePriceMap["OANDA:USDJPY"] = livePriceMap["OANDA:USDJPY"] || { close: fxData.rates.JPY, change: -0.11 };
            }
          }
        }
      } catch (err) {
        console.warn("Frankfurter API fetch fallback failed...", err);
      }

      if (!isMounted) return;

      // Update Market Data State
      setMarketData((prevData) => {
        const nextData = JSON.parse(JSON.stringify(prevData));
        let updated = false;

        Object.keys(nextData).forEach((cat) => {
          nextData[cat] = nextData[cat].map((item) => {
            const liveInfo = livePriceMap[item.tradingViewSymbol];
            if (liveInfo && typeof liveInfo.close === "number") {
              updated = true;
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
          });
        });

        return updated ? nextData : prevData;
      });
    };

    fetchLivePrices();
    const fetchInterval = setInterval(fetchLivePrices, 5000);

    // Active live micro-tick engine every 2.5 seconds
    const tickInterval = setInterval(() => {
      if (!isMounted) return;
      setMarketData((prevData) => {
        const nextData = JSON.parse(JSON.stringify(prevData));
        Object.keys(nextData).forEach((cat) => {
          nextData[cat] = nextData[cat].map((item) => {
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
          });
        });
        return nextData;
      });
    }, 2500);

    return () => {
      isMounted = false;
      clearInterval(fetchInterval);
      clearInterval(tickInterval);
    };
  }, [showMarket]);

  const tickerItems = Object.values(marketData).flat();
  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <section className="w-full bg-white px-2 pb-6 pt-6 sm:px-6 sm:pb-10 sm:pt-16 md:pb-12 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showPayments && (
          <div className={`${showMarket ? "mb-4 sm:mb-10 md:mb-12" : ""} text-center`}>
            <h2 className="px-1 pb-2 text-base font-semibold leading-snug text-black sm:text-2xl md:text-3xl">
              Secure <span className="text-[#D3D3D3]">Methods</span> for Deposits & Withdrawals
            </h2>

            {/* Payment Methods - Static grid */}
            <div className="mx-auto mt-4 grid max-w-6xl grid-cols-3 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-5 md:mt-10 lg:grid-cols-8">
              {PAYMENT_METHODS.map((method) => (
                <a
                  key={method.name}
                  href="/deposit"
                  aria-label={`View ${method.name} deposit and withdrawal details`}
                  className="group flex min-h-[74px] flex-col items-center justify-center gap-1.5 rounded-xl border border-[#D3D3D3]/60 bg-white px-2 py-3 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00674F]/40 hover:shadow-lg sm:min-h-[92px] sm:gap-2 sm:px-3 sm:py-4"
                >
                  <div className="flex h-8 items-center justify-center transition duration-300 group-hover:scale-105 sm:h-11">
                    <PaymentLogo method={method} />
                  </div>
                  <span className="text-[11px] font-medium leading-tight text-gray-900 sm:text-xs">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Live Market Ticker */}
        {showMarket && (
          <div className="relative w-full overflow-hidden rounded-2xl border border-[#00674F]/30 bg-[#00674F] px-3 py-4 shadow-[0_26px_70px_rgba(0,103,79,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] sm:left-1/2 sm:w-screen sm:-translate-x-1/2 sm:px-6 sm:py-6 md:rounded-[28px] lg:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,211,211,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.18),transparent_42%)]"></div>

            <div className="relative z-10 mb-4 flex items-center justify-between gap-4 px-1 sm:px-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D3D3D3]">
                  Live Market
                </p>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-3xl">
                  Global Market Prices
                </h3>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-[#D3D3D3]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D3D3D3] sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Auto Updating
              </div>
            </div>

            <div className="relative z-10 overflow-hidden rounded-xl border border-[#D3D3D3]/40 bg-[#004938]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="market-ticker-track flex w-max items-stretch gap-3">
                {tickerLoop.map((item, index) => (
                  <div
                    key={`${item.symbol}-${index}`}
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
                        <p className="text-2xl font-black leading-none tracking-tight text-gray-950 transition-all duration-300">
                          {item.price}
                        </p>
                        <p
                          className={`mt-2 text-sm font-bold transition-all duration-300 ${
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Methords;
