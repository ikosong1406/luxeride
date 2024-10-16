import { useEffect, useRef } from "react";

const TradingViewTop10 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%", // Make the widget responsive
      height: "400",
      symbolsGroups: [
        {
          name: "Cryptos",
          originalName: "Cryptos",
          symbols: [
            { name: "BINANCE:BTCUSDT", displayName: "Bitcoin" },
            { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
            { name: "BINANCE:SOLUSDT", displayName: "Solana" },
            { name: "BINANCE:DOGEUSDT", displayName: "Dogecoin" },
            { name: "BINANCE:XRPUSDT", displayName: "Ripples" },
            { name: "BINANCE:BNBUSDT", displayName: "BNB" },
            { name: "BINANCE:AVAXUSDT", displayName: "AVAX" },
            { name: "BINANCE:TONUSDT", displayName: "TON" },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#131722",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function to prevent duplicate widgets on re-render
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white ">
      <div className="container mx-auto">
        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewTop10;
