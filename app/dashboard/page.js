"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import axios from "axios";
import { getUserToken } from "../components/storage";
import BackendApi from "../components/BackendApi";
import moment from "moment";
import {
  FaBitcoin,
  FaEthereum,
  FaWallet,
  FaChartLine,
  FaCoins,
} from "react-icons/fa";

export default function Overview() {
  const [userData, setUserData] = useState({
    bitcoin: 0,
    ethereum: 0,
    balance: 0,
    firstname: "",
    lastname: "",
    transactions: [], // Store transaction data here
    carsInvested: [], // Store car investments here
  });
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };
    const timer = setInterval(updateCurrentTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const fetchData = async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.post(`${BackendApi}/userdata`, { token });
      const fetchedData = response.data.data;
      setUserData({
        bitcoin: fetchedData.bitcoin || 0,
        ethereum: fetchedData.ethereum || 0,
        balance: fetchedData.balance || 0,
        firstname: fetchedData.firstname || "",
        lastname: fetchedData.lastname || "",
        transactions: fetchedData.transactions || [],
        carsInvested: fetchedData.carsInvested || [],
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) getData();
  }, [token]);

  return (
    <DashboardLayout>
      <div className="space-y-8 bg-white text-black">
        {/* Greeting and Date Section */}
        <div className=" justify-between items-center lg:flex">
          <h1 className="text-xl text-black font-semibold">
            {greeting()}, {userData.firstname}
          </h1>
          <p className="text-gray-500">
            {moment(currentTime).format("dddd, MMMM D, YYYY")}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center flex justify-center">
            <FaWallet className="text-5xl text-blue mb-2 self-center" />
            <div className="ml-12">
              <p className="text-base text-black">Total Balance</p>
              <h2 className="text-2xl font-bold text-black mt-2">
                ${userData.balance}
              </h2>
            </div>
          </div>

          {/* Total Investment Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center flex justify-center">
            <FaChartLine className="text-5xl text-green mb-2" />
            <div className="ml-12">
              <p className="text-base text-black">Total Investment</p>
              <h2 className="text-2xl font-bold text-black mt-2">$0</h2>
            </div>
          </div>

          {/* Total Return Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center flex justify-center">
            <FaCoins className="text-5xl text-orange mb-2" />
            <div className="ml-12">
              <p className="text-base text-black">Total Return</p>
              <h2 className="text-2xl font-bold text-black mt-2">$0</h2>
            </div>
          </div>
        </div>

        {/* Transactions and Cars Invested Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transaction Details */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-black">
              Transaction Details
            </h2>
            <table className="w-full table-auto mt-4 text-black">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {userData.transactions.slice(0, 5).map((transaction, index) => (
                  <tr
                    key={index}
                    className="text-gray-500 border-t border-gray-200"
                  >
                    <td className="py-2">
                      {moment(transaction.date).format("MM/DD/YYYY")}
                    </td>
                    <td className="py-2">${transaction.amount}</td>
                    <td className="py-2">{transaction.type}</td>
                  </tr>
                ))}
                {userData.transactions.length === 0 && (
                  <tr className="text-gray-500 border-t border-gray-200">
                    <td className="py-2" colSpan="3">
                      No transactions available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Cars Invested In */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-black">
            <h2 className="text-lg font-semibold text-black">
              Cars Invested In
            </h2>
            <div className="mt-4 space-y-4">
              {userData.carsInvested.slice(0, 5).map((car, index) => (
                <div key={index} className="flex justify-between text-gray-500">
                  <span>{car.name}</span>
                  <span>${car.amountInvested}</span>
                </div>
              ))}
              {userData.carsInvested.length === 0 && (
                <p className="text-gray-400">
                  You haven't invested in any cars yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
