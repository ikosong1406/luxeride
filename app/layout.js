// layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import DashboardLayout from "./components/DashboardLayout"; // For logged-in users

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitCloud",
  description: "Legendary crypto asset exchange",
};

export default function RootLayout({ children }) {
  // Example: Simulating a logged-in check
  const isLoggedIn = false; // Replace with your actual login logic

  if (isLoggedIn) {
    // If the user is logged in, show the DashboardLayout
    return (
      <html lang="en">
        <body className={inter.className}>
          <DashboardLayout>{children}</DashboardLayout>
        </body>
      </html>
    );
  }

  // For public pages, show the default RootLayout with Header
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
