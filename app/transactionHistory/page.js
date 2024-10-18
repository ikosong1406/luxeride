// pages/dashboard/transaction-history.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Icons for deposit/withdrawal
import Notification from "../components/Notification";

export default function TransactionHistory() {
  // Sample transaction data
  const transactions = [
    {
      type: "deposit",
      label: "Deposit",
      date: "2024-10-10",
      amount: "$500",
    },
    {
      type: "withdrawal",
      label: "Withdrawal",
      date: "2024-10-12",
      amount: "$300",
    },
    {
      type: "deposit",
      label: "Deposit",
      date: "2024-10-14",
      amount: "$200",
    },
  ];

  return (
    <DashboardLayout>
      <Notification />
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>

      <div className="bg-gray-800 p-4 rounded-md">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Type</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-2 flex items-center">
                  {transaction.type === "deposit" ? (
                    <FaArrowDown className="text-green mr-2" />
                  ) : (
                    <FaArrowUp className="text-red mr-2" />
                  )}
                  {transaction.label}
                </td>
                <td className="py-2">{transaction.date}</td>
                <td className="py-2">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
