// pages/invest/[carName].js
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InvestPage({ params }) {
  const router = useRouter();
  const { carName } = params; // Access the carName from params

  // Handle case where carInfo is undefined
  // if (!carInfo) {
  //   return (
  //     <div className="container mx-auto p-4">
  //       <h1 className="text-2xl font-bold">Car Not Found</h1>
  //       <p className="mt-2">The car you are looking for does not exist.</p>
  //       <button
  //         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
  //         onClick={() => router.push("/cars")}
  //       >
  //         Back to Car List
  //       </button>
  //     </div>
  //   );
  // }

  const [investmentAmount, setInvestmentAmount] = useState(0);
  // const purchasePrice = parseInt(
  //   carName.marketValue.split("-")[0].replace(/[$,]/g, "").trim()
  // );
  const purchasePrice = 220000;

  // Calculate shareholding, total profit, and total returns
  const shareHolding = investmentAmount / purchasePrice;
  const estimatedProfit = shareHolding * purchasePrice * 0.15; // Example profit rate
  const totalReturns = investmentAmount + estimatedProfit;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Invest in {carName.name}</h1>
      <img
        src={carName.image}
        alt={carName.name}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-2">Market Value: {carName.marketValue}</p>

      <div className="mt-4">
        <label htmlFor="investment" className="block mb-2">
          Investment Amount
        </label>
        <input
          type="number"
          id="investment"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter amount"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Investment Breakdown</h2>
        <p>Shareholding: {shareHolding.toFixed(2)} shares</p>
        <p>Estimated Profit: ${estimatedProfit.toFixed(2)}</p>
        <p>Total Returns: ${totalReturns.toFixed(2)}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Investment Document</h2>
        <div className="border p-4 rounded">
          <h3 className="font-bold">Investment Agreement</h3>
          <p>Name: [User's Name]</p>
          <p>Car Invested: {carName.name}</p>
          <p>Investment Amount: ${investmentAmount}</p>
          <p>Estimated Profit: ${estimatedProfit.toFixed(2)}</p>
          <p>Market Value: {carName.marketValue}</p>
          <p>Agreement Terms: [Terms go here]</p>
          <p className="mt-4">________________________</p>
          <p>Signature</p>
        </div>
      </div>

      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => alert("Investment Successful!")}
      >
        Confirm Investment
      </button>
    </div>
  );
}
