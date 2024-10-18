"use client";

import { useState } from "react";
import Image from "next/image";
import DashboardLayout from "../components/DashboardLayout";
import coinImage from "../images/logo.png"; // Your coin image
import Notification from "../components/Notification";

export default function Mining() {
  const [coinCount, setCoinCount] = useState(0);

  const handleTap = () => {
    setCoinCount(coinCount + 1);
  };

  const usdValue = (coinCount * 0.01).toFixed(2); // Example: Each tap adds $0.01

  return (
    <DashboardLayout>
      <Notification />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-6">Tap to Mine</h1>
        <div onClick={handleTap} className="cursor-pointer">
          <Image src={coinImage} alt="Coin" width={100} height={100} />
        </div>
        <p className="mt-4">Coin Count: {coinCount}</p>
        <p className="text-gray-400">Approximate Value: ${usdValue}</p>
        <button
          className="mt-6 bg-orange p-2 rounded"
          disabled={coinCount === 0}
        >
          Withdraw
        </button>
      </div>
    </DashboardLayout>
  );
}
