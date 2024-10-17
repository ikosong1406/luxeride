"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../images/logo.png"; // Adjust logo import as necessary
// import userImage from "../images/user-image.png";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-background p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <h1 className="text-xl font-bold">BitCloud</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Image
            src={userImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <button
            className="lg:hidden p-2 bg-gray-700 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {/* Hamburger icon for mobile */}
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
          className={`bg-background lg:w-64 p-6 fixed inset-y-0 lg:relative lg:translate-x-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 lg:block`}
        >
          <nav className="space-y-4 mt-20">
            <span
              onClick={() => router.push("/dashboard")}
              className="block hover:bg-orange p-2 rounded cursor-pointer"
            >
              Overview
            </span>
            <span
              onClick={() => router.push("/fixedCapital")}
              className="block hover:bg-orange p-2 rounded cursor-pointer"
            >
              Fixed Capital
            </span>
            <span
              onClick={() => router.push("/transactionHistory")}
              className="block hover:bg-orange p-2 rounded cursor-pointer"
            >
              Transaction History
            </span>
            <span
              onClick={() => router.push("/profile")}
              className="block hover:bg-orange p-2 rounded cursor-pointer"
            >
              Profile
            </span>
            <span
              onClick={() => router.push("/referrals")}
              className="block hover:bg-orange p-2 rounded cursor-pointer"
            >
              Referrals
            </span>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:ml-64">{children}</main>
      </div>
    </div>
  );
}
