// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    // Prevent duplicate widget
    container.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.height = "100%";
    widget.style.width = "100%";
    widget.style.minWidth = "0";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = `
  {
    "lineWidth": 2,
    "lineType": 0,
    "chartType": "area",
    "backgroundColor": "#ffffff",
    "colorTheme": "light",
    "locale": "en",
    "autosize": true,
    "width": "100%",
    "height": "100%",
    "symbols": [
      ["Apple","NASDAQ:AAPL|1D"],
      ["Google","NASDAQ:GOOGL|1D"],
      ["Microsoft","NASDAQ:MSFT|1D"]
    ]
  }`;

    widget.appendChild(script);
    container.current.appendChild(widget);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={container}
      className="tradingview-widget-container h-full min-h-[300px] w-full min-w-0 overflow-hidden sm:min-h-[340px]"
    />
  );
}

export default memo(TradingViewWidget);
