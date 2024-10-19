// pages/dashboard/fixed-capital.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import Notification from "../components/Notification";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { getUserToken } from "../components/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FixedCapital() {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("1 week"); // Default duration
  const [profit, setProfit] = useState(0);
  const [totalPayback, setTotalPayback] = useState(0);
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
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
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

  // Example rates per duration
  const rates = {
    "1 week": 0.5, // 2% for 1 week
    "1 month": 0.5, // 8% for 1 month
    "3 months": 1, // 25% for 3 months
  };

  // Calculate profit and total payback
  const calculateReturns = () => {
    if (amount) {
      const days = duration === "1 week" ? 7 : duration === "1 month" ? 30 : 90;
      const rate = rates[duration];
      const calculatedProfit = amount * rate * (days / 30); // Average monthly calculation
      const calculatedPayback = Number(amount) + calculatedProfit;

      setProfit(calculatedProfit);
      setTotalPayback(calculatedPayback);
    }
  };

  const handleContinueClick = async () => {
    const amountValue = parseFloat(amount);
    if (userData.balance < amountValue) {
      toast.error("Insufficient balance");
      return;
    }

    const data = {
      userId: userData._id,
      amount: amountValue,
      days: 30,
      rate: 0.5,
    };

    try {
      const response = await axios.post(`${BackendApi}/staking`, data);
      toast.success("Your Fixed Capital has been done safely.");
      setAmount("");
      setModalVisible(false); // Hide the modal on successful staking
    } catch (error) {
      toast.error("Staking Error");
    }
  };

  return (
    <DashboardLayout>
      <ToastContainer />
      <Notification />
      <div className="py-6">
        {/* Fixed Capital Wallet Balance Section */}
        <section className="bg-black2 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold">Fixed Capital Wallet Balance</h2>
          <p className="text-2xl mt-2">{userData.stakingBalance} USDT</p>{" "}
          {/* Update this to reflect actual balance */}
        </section>

        {/* Amount Locking Section */}
        <section className="bg-gray-700 p-4 rounded-md mb-6">
          <input
            type="number"
            placeholder="Enter amount to lock"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-500 rounded bg-background"
          />
          <div className="mb-4">
            <label className="block mb-2 bg-background">Choose Duration:</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border border-gray-500 rounded bg-background"
            >
              <option value="1 week">1 Week</option>
              <option value="1 month">1 Month</option>
              <option value="3 months">3 Months</option>
            </select>
          </div>
          <button
            onClick={calculateReturns}
            className="w-full p-2 bg-green text-white rounded-lg"
          >
            Calculate Profit
          </button>
        </section>

        {/* Profit and Total Payback Section */}
        <section className="bg-gray-700 p-4 rounded-md mb-6">
          <p>
            Profit: <span className="font-bold">{profit.toFixed(2)} USDT</span>
          </p>
          <p className="mt-8">
            Total Payback:{" "}
            <span className="font-bold">{totalPayback.toFixed(2)} USDT</span>
          </p>
        </section>

        <button
          onClick={handleContinueClick}
          className="w-full p-2 bg-bluey text-white rounded-lg"
        >
          Continue
        </button>

        {/* Fixed Capital Transactions Table */}
        <section className="bg-gray-700 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">
            Fixed Capital Transactions
          </h3>
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="py-2 border-b">Amount</th>
                <th className="py-2 border-b">Days</th>
                <th className="py-2 border-b">Profit</th>
                <th className="py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Transaction Row */}
              <tr>
                <td className="py-2 border-b">1,000 USDT</td>
                <td className="py-2 border-b">30</td>
                <td className="py-2 border-b">80 USDT</td>
                <td className="py-2 border-b">Active</td>
              </tr>
              {/* Additional rows can be dynamically generated here */}
            </tbody>
          </table>
        </section>
      </div>
    </DashboardLayout>
  );
}
