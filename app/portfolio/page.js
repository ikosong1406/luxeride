// pages/portfolio.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [assets, setAssets] = useState([]);

  // Dummy data to simulate backend response
  const dummyAssets = [
    {
      image: "/images/bitcoin.png", // Replace with actual paths to images
      name: "Bitcoin",
      percentage: 40,
      price: 28000,
      estimatedProfit: 1500,
      orderDate: "2023-05-18",
    },
    {
      image: "/images/ethereum.png",
      name: "Ethereum",
      percentage: 25,
      price: 1800,
      estimatedProfit: 500,
      orderDate: "2023-06-10",
    },
    {
      image: "/images/binance.png",
      name: "Binance Coin",
      percentage: 15,
      price: 320,
      estimatedProfit: 200,
      orderDate: "2023-07-05",
    },
    {
      image: "/images/tether.png",
      name: "Tether",
      percentage: 10,
      price: 1,
      estimatedProfit: 0,
      orderDate: "2023-08-12",
    },
    {
      image: "/images/solana.png",
      name: "Solana",
      percentage: 10,
      price: 35,
      estimatedProfit: 75,
      orderDate: "2023-09-01",
    },
  ];

  useEffect(() => {
    // Simulating fetching of data
    setAssets(dummyAssets);
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-black">
        Investment Portfolio
      </h1>

      {/* Table for larger screens */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="min-w-full bg-white border border-gray-300 text-center rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 border-b border-gray-200">Picture</th>
              <th className="p-4 border-b border-gray-200">Name</th>
              <th className="p-4 border-b border-gray-200">Percentage</th>
              <th className="p-4 border-b border-gray-200">Price</th>
              <th className="p-4 border-b border-gray-200">Estimated Profit</th>
              <th className="p-4 border-b border-gray-200">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-6 text-gray-400">
                  No assets available.
                </td>
              </tr>
            ) : (
              assets.map((asset, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors">
                  <td className="p-4 border-b border-gray-200">
                    <Image
                      src={asset.image}
                      alt={asset.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">
                    {asset.name}
                  </td>
                  <td className="p-4 border-b border-gray-200 text-gray-600">
                    {asset.percentage}%
                  </td>
                  <td className="p-4 border-b border-gray-200 text-gray-600">
                    ${asset.price.toLocaleString()}
                  </td>
                  <td className="p-4 border-b border-gray-200 text-green-600">
                    ${asset.estimatedProfit.toLocaleString()}
                  </td>
                  <td className="p-4 border-b border-gray-200 text-gray-500">
                    {new Date(asset.orderDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Responsive View: Card Layout */}
      <div className="lg:hidden grid grid-cols-1 gap-4 text-black">
        {assets.length === 0 ? (
          <p className="text-gray-400">No assets available.</p>
        ) : (
          assets.map((asset, index) => (
            <div
              key={index}
              className="bg-white2 rounded-lg shadow-md p-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={asset.image}
                  alt={asset.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{asset.name}</h2>
                  <p className="text-gray-500">
                    Order Date: {new Date(asset.orderDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Percentage: {asset.percentage}%</p>
                <p className="text-gray-600">
                  Price: ${asset.price.toLocaleString()}
                </p>
                <p className="text-green-600">
                  Estimated Profit: ${asset.estimatedProfit.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
