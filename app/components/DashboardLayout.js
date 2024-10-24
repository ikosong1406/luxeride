"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaHome,
  FaCoins,
  FaHistory,
  FaUser,
  FaUsers,
  FaHammer,
} from "react-icons/fa"; // Ensure these are imported correctly
import logo from "../images/logo.png"; // Ensure the logo is correctly imported

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentPath = router.pathname; // Get current path for active link styling

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Header */}
      <header className="bg-blue p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <h1 className="text-xl font-bold">LuxeRide</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 bg-gray-700 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for desktop view */}
        <aside
          className={`bg-blue lg:w-64 p-6 fixed inset-y-0 lg:relative lg:translate-x-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 lg:block`}
        >
          <nav className="space-y-4 mt-20">
            <span
              onClick={() => router.push("/dashboard")}
              className={`block hover:bg-gold p-2 rounded cursor-pointer flex items-center space-x-2 ${
                currentPath === "/dashboard" ? "bg-orange text-white" : ""
              }`}
            >
              <FaHome />
              <span>Overview</span>
            </span>
            <span
              onClick={() => router.push("/fixedCapital")}
              className={`block hover:bg-gold p-2 rounded cursor-pointer flex items-center space-x-2 ${
                currentPath === "/fixedCapital" ? "bg-orange text-white" : ""
              }`}
            >
              <FaCoins />
              <span>Rental Booking</span>
            </span>
            <span
              onClick={() => router.push("/mining")}
              className={`block hover:bg-gold p-2 rounded cursor-pointer flex items-center space-x-2 ${
                currentPath === "/mining" ? "bg-orange text-white" : ""
              }`}
            >
              <FaHammer />
              <span>Investment Portfolio</span>
            </span>
            <span
              onClick={() => router.push("/transactionHistory")}
              className={`block hover:bg-gold p-2 rounded cursor-pointer flex items-center space-x-2 ${
                currentPath === "/transactionHistory"
                  ? "bg-orange text-white"
                  : ""
              }`}
            >
              <FaHistory />
              <span>Transaction History</span>
            </span>
            <span
              onClick={() => router.push("/profile")}
              className={`block hover:bg-orange p-2 rounded cursor-pointer flex items-center space-x-2 ${
                currentPath === "/profile" ? "bg-orange text-white" : ""
              }`}
            >
              <FaUser />
              <span>Profile</span>
            </span>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:ml-64 bg-white">{children}</main>
      </div>
    </div>
  );
}
