// pages/dashboard/transaction-history.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Icons for deposit/withdrawal

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
      <h1 className="text-xl font-bold mb-6 text-black">Transaction History</h1>

      <div className="space-y-4 text-black">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className={`bg-white2 p-4 rounded-lg shadow-md flex items-center justify-between transition-transform transform hover:scale-105 ${
              transaction.type === "deposit"
                ? "border-l-4 border-green"
                : "border-l-4 border-red"
            }`}
          >
            {/* Icon and Label */}
            <div className="flex items-center space-x-4">
              {transaction.type === "deposit" ? (
                <FaArrowDown className="text-green text-2xl" />
              ) : (
                <FaArrowUp className="text-red text-2xl" />
              )}
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  {transaction.label}
                </h2>
                <p className="text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Amount */}
            <div>
              <p
                className={`text-xl font-bold ${
                  transaction.type === "deposit"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
