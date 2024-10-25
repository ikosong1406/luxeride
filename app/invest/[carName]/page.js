// pages/invest/[carName].js
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import cars from "@/app/components/Cars";
import DashboardLayout from "@/app/components/DashboardLayout";
import logo from "../../images/logo.png";

export default function InvestPage() {
  const { carName } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState();
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [rent, setRent] = useState(0);

  useEffect(() => {
    // Ensure carName is defined before searching
    if (carName) {
      const model = carName.replace(/-/g, " ").toLowerCase();
      const foundCar = cars.find((car) => car.model.toLowerCase() === model);
      setCarDetails(foundCar || null); // Set car detail or null if not found
      setPurchasePrice(foundCar.purchasePrice);
      setRent(foundCar.rentingPrice);
    }
  }, [carName]);

  // Calculate shareholding, total profit, and total returns
  const shareHolding = (investmentAmount / purchasePrice) * 100;
  const estimatedProfit = rent * (shareHolding / 100);
  const totalReturns = investmentAmount + 730 * estimatedProfit;

  // Show a loading state if carDetail has not been set yet
  if (!carDetails) return <p>Loading...</p>;

  return (
    <DashboardLayout>
      <div className="container mx-auto text-black">
        <div className="relative">
          <Image
            src={carDetails.mainImage}
            alt={carDetails.make}
            width={300}
            height={250}
            className="w-full h-3/6 rounded-lg"
          />
          <div className="absolute top-5 left-5 bg-white2 text-black p-2 rounded-md text-xl">
            <p>
              <span className="font-extrabold">${carDetails.rentingPrice}</span>
              /Day
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8">
          {carDetails.make} {carDetails.model}
        </h2>

        <div className="mt-4">
          <label htmlFor="investment" className="block mb-2">
            Amount
          </label>
          <input
            type="number"
            id="investment"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(Number(e.target.value))}
            className="border rounded p-2 w-full text-black"
            placeholder="Enter amount"
          />
        </div>

        <div className=" p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-12 bg-white2 shadow-lg">
          {/* A4 Paper Style */}
          <div className="mb-6 text-center">
            <Image
              src={logo}
              alt="Company Logo"
              className="mx-auto mb-2"
              style={{ width: "50px" }}
            />{" "}
            {/* Company Logo */}
            <h1 className="text-xl font-bold">LuxeRide</h1>
            <h2 className="text-lg">Investment Agreement</h2>
          </div>

          <div className="mb-4 border-t border-gray-300 pt-4">
            <h3 className="font-bold text-lg">Dear alex,</h3>
            <p>
              Thank you for choosing to invest in our luxury car. Below are the
              details of your investment.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Investment Breakdown</h2>
            <p>Shareholding: {shareHolding}%</p>
            <p>Investment Amount: ${investmentAmount}</p>
            <p>Estimated Profit: ${estimatedProfit}/Day</p>
            <p>Duration: 2 years</p>
            <p>Total Returns after 2years: ${totalReturns}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Investment Document</h2>
            <div className="border p-4 rounded bg-gray-50">
              <h3 className="font-bold">Investment Agreement</h3>
              <p>Car Invested: {carDetails?.make}</p>
              <p>Market Value: ${carDetails?.purchasePrice}</p>
              <p className="mt-4">________________________</p>
              <p>Signature</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              This document will be sent to your email as a PDF.
            </p>
          </div>
        </div>

        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => alert("Investment Successful!")}
        >
          Confirm Investment
        </button>
      </div>
    </DashboardLayout>
  );
}
