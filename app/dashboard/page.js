"use client";

import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { RiXrpFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Notification from "../components/Notification";
import axios from "axios";
import { getUserToken } from "../components/storage";
import BackendApi from "../components/BackendApi";

export default function Overview() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    bitcoin: 0,
    ethereum: 0,
    balance: 0,
    firstname: "",
    lastname: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const fetchData = async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
      // console.log(token);
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      const fetchedData = response.data.data;

      // Set default values if the fetched data is zero
      const updatedData = {
        bitcoin: fetchedData.bitcoin || 0,
        ethereum: fetchedData.ethereum || 0,
        balance: fetchedData.balance || 0,
        firstname: fetchedData.firstname || "",
        lastname: fetchedData.lastname || "",
      };

      setUserData(updatedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
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

  const roundedValue = (userData.balance * 0.000015).toFixed(6);

  return (
    <DashboardLayout>
      <Notification />
      <div className="bg-white space-y-8">
        {/* Total Balance */}
        <div className="bg-black2 p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-lg text-gray-400">Total Balance</p>
          <div className="flex">
            <h2 className="text-4xl font-bold text-white mt-2">
              {roundedValue}
            </h2>
            <span className="text-green-500 px-3 py-1 bg-green rounded-md ml-2 h-8 mt-4">
              BTC
            </span>
          </div>
          <p className="text-gray-400 mt-2">~ ${userData.balance}</p>
        </div>
        {/* Deposit and Withdrawal Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-bluey text-white px-6 py-2 rounded-md"
            onClick={() => router.push("/deposit")}
          >
            Deposit
          </button>
          <button
            className="px-4 py-2 bg-transparent hover:bg-bluey rounded-lg border"
            onClick={() => router.push("/withdraw")}
          >
            Withdraw
          </button>
        </div>

        {/* Asset List Table */}
        <div className="bg-black2 p-6 rounded-lg">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-gray-400 text-left">
                <th className="pb-4">Asset</th>
                <th className="pb-4">Total Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="py-4 flex items-center space-x-4">
                  <SiTether className="text-2xl text-green" />
                  <div>
                    <p className="text-white">USDT</p>
                    <p className="text-gray-400 text-sm">Tether</p>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-white">{userData.balance}</p>
                  <p className="text-gray-400 text-sm">~ ${userData.balance}</p>
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-4 flex items-center space-x-4">
                  <FaBitcoin className="text-2xl text-orange" />
                  <div>
                    <p className="text-white">BTC</p>
                    <p className="text-gray-400 text-sm">Bitcoin</p>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-white">{userData.bitcoin}</p>
                  <p className="text-gray-400 text-sm">~ $0</p>
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-4 flex items-center space-x-4">
                  <FaEthereum className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-white">ETH</p>
                    <p className="text-gray-400 text-sm">Ethereum</p>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-white">{userData.ethereum}</p>
                  <p className="text-gray-400 text-sm">~ $0</p>
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-4 flex items-center space-x-4">
                  <RiXrpFill className="text-2xl text-bluey" />
                  <div>
                    <p className="text-white">XRP</p>
                    <p className="text-gray-400 text-sm">Ripple</p>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-white">0</p>
                  <p className="text-gray-400 text-sm">~ $0</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
