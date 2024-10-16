// components/DashboardLayout.js
"use client";

import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="text-2xl font-bold mb-6">User Dashboard</div>
        <nav className="space-y-4">
          <span
            onClick={() => router.push("/dashboard")}
            className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Overview
          </span>
          <span
            onClick={() => router.push("/exchange")}
            className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Exchange
          </span>
          <span
            onClick={() => router.push("/market")}
            className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Market
          </span>
          <span
            onClick={() => router.push("/account-settings")}
            className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Account Settings
          </span>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
