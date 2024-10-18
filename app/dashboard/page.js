"use client";

import DashboardLayout from "../components/DashboardLayout";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { RiXrpFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Notification from "../components/Notification";

export default function Overview() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Notification />
      <div className=" space-y-8">
        {/* Total Balance */}
        <div className="bg-black2 p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-lg text-gray-400">Total Balance</p>
          <div className="flex">
            <h2 className="text-4xl font-bold text-white mt-2">0.052</h2>
            <span className="text-green-500 px-3 py-1 bg-green rounded-md ml-2 h-8 mt-4">
              BTC
            </span>
          </div>
          <p className="text-gray-400 mt-2">~ $1400</p>
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
                  <p className="text-white">1200</p>
                  <p className="text-gray-400 text-sm">~ $1200</p>
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
                  <p className="text-white">0.052</p>
                  <p className="text-gray-400 text-sm">~ $1400</p>
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
                  <p className="text-white">1.4</p>
                  <p className="text-gray-400 text-sm">~ $3500</p>
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
                  <p className="text-white">3000</p>
                  <p className="text-gray-400 text-sm">~ $1500</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
