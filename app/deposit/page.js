// pages/dashboard/deposit.js
"use client";
import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaBitcoin } from "react-icons/fa"; // Icons for Bitcoin and USDT
import { SiTether } from "react-icons/si";
import QRCode from "react-qr-code"; // You can install this package using `npm install react-qr-code`
import Notification from "../components/Notification";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("usdt");
  const walletAddresses = {
    usdt: "TETHER-WALLET-ADDRESS-HERE",
    bitcoin: "BITCOIN-WALLET-ADDRESS-HERE",
  };

  // List of amounts to display
  const amounts = [10, 20, 50, 100, 200, 500];

  return (
    <DashboardLayout>
      <Notification />
      <div className="py-6">
        {/* Amount Selection Section */}
        <section className="mb-6">
          <h1 className="text-xl font-bold mb-4">Select Amount to Deposit</h1>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {amounts.map((amt) => (
              <div
                key={amt}
                onClick={() => setAmount(amt)}
                className={`cursor-pointer p-4 bg-gray-800 text-center rounded-lg border ${
                  amount === amt ? "border-green" : "border-transparent"
                } hover:border-blue-500`}
              >
                <p className="text-base font-bold">${amt}</p>
              </div>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-500 rounded bg-background text-white mt-10"
          />
        </section>

        {/* Coin Selection Section */}
        <section className="mb-6">
          <h1 className="text-base font-bold mb-4">Select Coin to Deposit</h1>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded bg-background text-white"
          >
            <option value="usdt"> USDT (Tether)</option>
            <option value="bitcoin">Bitcoin (BTC)</option>
          </select>
        </section>

        {/* Wallet Info Section */}
        <section className="bg-gray-700  rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">
            {selectedCoin === "usdt" ? (
              <>
                <SiTether className="inline-block text-green-500 mr-2" />
                USDT Wallet Address
              </>
            ) : (
              <>
                <FaBitcoin className="inline-block text-yellow-500 mr-2" />
                Bitcoin Wallet Address
              </>
            )}
          </h2>
          <QRCode
            value={walletAddresses[selectedCoin]}
            size={200}
            className="mx-auto mb-4 border-2"
          />
          <p className="mb-4 text-lg">{walletAddresses[selectedCoin]}</p>
          <button className="p-2 bg-bluey text-white rounded-lg mt-10">
            I have made the deposit
          </button>
        </section>
      </div>
    </DashboardLayout>
  );
}
