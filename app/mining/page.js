// pages/dashboard/mining.js

"use client";
import { useState } from "react";
import Image from "next/image";
import coinIcon from "../images/logo.png"; // Adjust the import based on your asset location
import { TbCoinFilled } from "react-icons/tb";
import DashboardLayout from "../components/DashboardLayout";

export default function Mining() {
  const [balance, setBalance] = useState(0); // Wallet balance
  const [tapsAvailable, setTapsAvailable] = useState(100); // Number of available taps
  const hashRate = 4; // Amount added to the balance per tap

  // Function to handle tapping on the coin
  const handleTap = () => {
    if (tapsAvailable > 0) {
      setBalance(balance + hashRate);
      setTapsAvailable(tapsAvailable - 1);
    }
  };

  // Function to simulate resetting taps (you can modify this logic)
  const resetTaps = () => {
    setTapsAvailable(3000); // Reset taps to 3000
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center min-h-screen text-white">
        {/* Wallet Balance Section */}
        <section className="bg-black2 w-full py-6 px-4 rounded-lg">
          <h2 className="text-xl font-bold">Wallet Balance</h2>
          <div className="flex items-center justify-center mt-2 flex">
            <TbCoinFilled className="text-4xl mr-2 text-orange" />
            <span className="text-2xl">{balance} BitCloud</span>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-bluey text-white rounded-md"
            onClick={resetTaps}
          >
            Withdraw
          </button>
        </section>

        {/* Tapping Section */}
        <section className="flex flex-col items-center mt-20">
          <div
            className={`flex items-center justify-center transition-all duration-300 ${
              tapsAvailable === 0 ? "opacity-50" : ""
            }`}
            style={{
              width: tapsAvailable === 0 ? "300px" : "300px", // Example of dynamic resizing
              height: tapsAvailable === 0 ? "300px" : "300px",
              borderRadius: "50%",
            }}
            onClick={handleTap}
          >
            <Image
              src={coinIcon}
              alt="Coin Icon"
              width={500}
              height={500}
              className="cursor-pointer"
            />
          </div>
          <p className="mt-10">
            Available Taps: <span className="font-bold">{tapsAvailable}</span>
          </p>
          <p className="mt-10 bg-black2 p-4 rounded-lg">
            Hash Rate: <span className="font-bold">{hashRate}</span> BitCloud
            per tap
          </p>
        </section>
      </div>
    </DashboardLayout>
  );
}
