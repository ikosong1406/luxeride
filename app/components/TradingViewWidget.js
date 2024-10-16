import { useEffect, useRef } from "react";

const TradingViewWidget = ({ symbol }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
    });

    if (widgetContainerRef.current) {
      widgetContainerRef.current.innerHTML = ""; // Clear previous widget before adding new one
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={widgetContainerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
