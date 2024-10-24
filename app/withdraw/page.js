// pages/dashboard/withdrawal.js
"use client";
import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Withdrawal() {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("usdt");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    if (amount && walletAddress) {
      setIsModalOpen(true); // Show the confirmation modal
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <DashboardLayout>
      <div className="py-6 text-black">
        {/* Amount and Wallet Address Section */}
        <section className="mb-6">
          <h1 className="text-xl font-bold mb-4 text-center">Withdraw Funds</h1>

          {/* Coin Selection */}
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="w-full p-2 border border-black rounded text-black mb-4 mt-4"
          >
            <option value="usdt">USDT (Tether)</option>
            <option value="bitcoin">Bitcoin (BTC)</option>
          </select>

          {/* Amount Input */}
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-4 border border-black rounded bg-background text-black mt-8"
          />

          {/* Wallet Address Input */}
          <input
            type="text"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 mb-4 border border-black rounded bg-background text-black mt-8"
          />

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="p-2 w-full bg-gold text-white rounded-lg mt-8"
          >
            Continue
          </button>
        </section>

        {/* Confirmation Modal */}
        {/* {isModalOpen && (
          <Modal
            title="Confirm Withdrawal"
            onClose={handleCloseModal}
          >
            <p>Amount: ${amount}</p>
            <p>Coin: {selectedCoin === "usdt" ? "USDT" : "Bitcoin (BTC)"}</p>
            <p>Wallet Address: {walletAddress}</p>
            <div className="mt-4">
              <button
                onClick={handleCloseModal}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg mr-4"
              >
                Cancel
              </button>
              <button className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                Confirm
              </button>
            </div>
          </Modal>
        )} */}
      </div>
    </DashboardLayout>
  );
}
