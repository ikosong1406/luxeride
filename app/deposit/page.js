// pages/dashboard/deposit.js
"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaBitcoin } from "react-icons/fa"; // Icons for Bitcoin and USDT
import { SiTether } from "react-icons/si";
import QRCode from "react-qr-code"; // You can install this package using `npm install react-qr-code`
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { getUserToken } from "../components/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("usdt");
  const walletAddresses = {
    usdt: "0xE447f3Dc0dc5BA8B3e874eB2259bdDff8a7667bA",
    bitcoin: "bc1q52fla3rqj6an8fatd7m3xma5uzymv9ph7m8xsc",
  };
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = await getUserToken();
        setToken(userToken);
        // console.log(token);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = {
      token,
    };
    try {
      // console.log(token);
      const response = await axios.post(`${BackendApi}/userdata`, data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        setRefreshing(true);
        getData();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [token]);

  const handleConfirmClick = async () => {
    const data = {
      userId: userData._id,
      name: userData.firstname,
      lname: userData.lastname,
      amount,
      type: "deposit",
    };

    try {
      const response = await axios.post(`${BackendApi}/transaction`, data);
      toast.success("Your deposit will be confirmed ");
    } catch (error) {
      toast.error("Deposit error", error);
    }
  };

  // List of amounts to display
  const amounts = [1000, 2000, 5000, 10000, 20000, 50000];
  return (
    <DashboardLayout>
      <div className="py-6 text-black">
        {/* Amount Selection Section */}
        <section className="mb-6">
          <h1 className="text-xl font-bold mb-4">Select Amount to Deposit</h1>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {amounts.map((amt) => (
              <div
                key={amt}
                onClick={() => setAmount(amt)}
                className={`cursor-pointer p-4 bg-gray-800 text-center rounded-lg border ${
                  amount === amt ? "border-gold" : "border-transparent"
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
            className="w-full p-2 mb-4 border border-black rounded text-black mt-10"
          />
        </section>

        {/* Coin Selection Section */}
        <section className="mb-6">
          <h1 className="text-base font-bold mb-4">Select Coin to Deposit</h1>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="w-full p-2 border border-black rounded bg-background text-black"
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
                <SiTether className="inline-block text-green mr-2" />
                Network: ERC20
              </>
            ) : (
              <>
                <FaBitcoin className="inline-block text-orange mr-2" />
                Network: BTC
              </>
            )}
          </h2>
          <QRCode
            value={walletAddresses[selectedCoin]}
            size={200}
            className="mx-auto mb-4 border-2"
          />
          <p className="mt-8 text-lg" style={{ width: "100%" }}>
            {walletAddresses[selectedCoin]}
          </p>
          <button
            className="p-2 bg-blue text-white rounded-lg mt-10"
            onClick={handleConfirmClick}
          >
            I have made the deposit
          </button>
        </section>
      </div>
    </DashboardLayout>
  );
}
