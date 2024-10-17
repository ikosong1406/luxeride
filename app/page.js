"use client";

import Image from "next/image";
import Link from "next/link";
import cards from "./images/cards.png";
import gif from "./images/gif.gif";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import { useEffect } from "react";
import TradingViewWidget from "./components/TradingViewWidget";
import TradingViewTop10 from "./components/TradingViewTop10";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import mobile from "./images/mobile.png";

export default function Home() {
  const router = useRouter();
  const symbols = [
    "BINANCE:BTCUSDT", // Bitcoin
    "BINANCE:ETHUSDT", // Ethereum
    "BINANCE:BNBUSDT", // BNB
    "BINANCE:XRPUSDT", // Ripple
  ];

  return (
    <Header>
      <div className="px">
        {/* Intro Section */}
        <section className="relative bg-black text-white py-16 px-6 overflow-hidden">
          {/* Background GIF */}
          <div className="absolute top-0 left-0 w-full h-full z-0 pt-2">
            <Image
              src={gif} // Replace with your GIF path
              alt="Background GIF"
              layout="fill" // Cover the entire section
              objectFit="cover" // Ensure it covers the area
              quality={10} // Optional: Adjust quality as needed
            />
          </div>

          {/* Content Over the Video */}
          <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-6">
                Buy & sell crypto in minutes
              </h1>
              <p className="mb-6 text-base">
                Trade your favorite crypto assets with ease on the most secure
                and fast-growing exchange platform.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="px-4 py-2 bg-bluey rounded-lg"
              >
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={cards}
                alt="Crypto exchange platform"
                layout="responsive"
                width={500} // Set the original width
                height={200} // Set the original height
              />
            </div>
          </div>
        </section>

        {/* Top 4 Cryptos Section */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              {symbols.map((symbol, idx) => (
                <div key={idx} className="flex-1">
                  <TradingViewWidget symbol={symbol} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top 10 Cryptos with Charts */}
        <section className="bg-background text-white py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Market Trend
            </h2>
            <TradingViewTop10 />
          </div>
        </section>

        <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
          {/* Background GIF */}
          <div className="absolute top-0 left-0 w-full h-full z-0 pt-5">
            <Image
              src={gif} // Replace with your GIF path
              alt="Background GIF"
              layout="fill" // Cover the entire section
              objectFit="cover" // Ensure it covers the area
              quality={30} // Optional: Adjust quality as needed
            />
          </div>
          <div className="container mx-auto relative z-10 ">
            <h2 className="text-2xl font-bold text-center mb-8">
              Become a Crypto Trader in Seconds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Image
                  src={pic1}
                  alt="Step 1"
                  layout="responsive"
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-bold my-4">Buy & Sell Crypto</h3>
                <p>
                  We realize ideas from simple to complex, everything becomes
                  easy to use and reach the most potential customers.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Image
                  src={pic2}
                  alt="Step 2"
                  layout="responsive"
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-bold my-4">Trade Assets</h3>
                <p>
                  We realize ideas from simple to complex, everything becomes
                  easy to use and reach the most potential customers.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Image
                  src={pic3}
                  alt="Step 3"
                  layout="responsive"
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-bold my-4">Learn Crypto</h3>
                <p>
                  We realize ideas from simple to complex, everything becomes
                  easy to use and reach the most potential customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Write-up and Picture Flex Section */}
        <section className="bg-background text-white py-16 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src={mobile}
                alt="About Us"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-1/2 md:ml-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose BitCloud?</h2>
              <p className="mb-4">
                BitCloud is a leading cryptocurrency exchange that provides a
                secure and user-friendly experience. Whether you're a beginner
                or a pro, we have all the tools you need to succeed in crypto
                trading.
              </p>
              <Link href="/about">
                <button className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Step 1: Create Account
                </h3>
                <p>
                  Create a secure account in just minutes with easy verification
                  steps.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Step 2: Deposit Funds
                </h3>
                <p>Deposit crypto or fiat securely into your account.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Step 3: Start Trading
                </h3>
                <p>
                  Use our platform to trade crypto assets with real-time data
                  and insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Header>
  );
}
