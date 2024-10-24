"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import axios from "axios";
import { getUserToken } from "../components/storage";
import BackendApi from "../components/BackendApi";
import moment from "moment";

export default function Overview() {
  const [userData, setUserData] = useState({
    bitcoin: 0,
    ethereum: 0,
    balance: 0,
    firstname: "",
    lastname: "",
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
      <div className="space-y-8 bg-white p-2">
        {/* Greeting and Date Section */}
        <div className=" justify-between items-center lg:flex">
          <h1 className="text-xl text-black font-semibold">
            {greeting()}, {userData.firstname}
          </h1>
          <p className="text-black2">
            {moment(currentTime).format("dddd, MMMM D, YYYY")}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center">
            <p className="text-base text-black">Total Balance</p>
            <h2 className="text-2xl font-bold text-black mt-2">
              ${userData.balance}
            </h2>
          </div>

          {/* Total Investment Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center">
            <p className="text-base text-black">Total Investment</p>
            <h2 className="text-2xl font-bold text-black mt-2">$0</h2>
          </div>

          {/* Total Return Card */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-center">
            <p className="text-base text-black">Total Return</p>
            <h2 className="text-2xl font-bold text-black mt-2">$0</h2>
          </div>
        </div>

        {/* Transactions and Cars Invested Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transaction Details */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-black">
              Transaction Details
            </h2>
            {/* Transaction Table (add your transaction data here) */}
            <table className="w-full table-auto mt-4 text-black">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-400 border-t border-gray-600">
                  <td className="py-2">N/A</td>
                  <td className="py-2">N/A</td>
                  <td className="py-2">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cars Invested In */}
          <div className="bg-white2 shadow-lg p-6 rounded-lg text-black">
            <h2 className="text-lg font-semibold text-black">
              Cars Invested In
            </h2>
            {/* Display Car Investments here */}
            <div className="mt-4 space-y-4">
              <p className="text-gray-400">
                You haven't invested in any cars yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
