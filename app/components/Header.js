// components/Header.js
"use client";

import { useRouter } from "next/navigation";
import logo from "../images/logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background text-white p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between items-center w-52">
          <Image src={logo} alt="Logo" width={40} height={40} />{" "}
          {/* Ensure logo has width and height */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            BitCloud
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <span
            onClick={() => router.push("/")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => router.push("/exchange")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Exchange
          </span>
          <span
            onClick={() => router.push("/market")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Market
          </span>
        </nav>

        {/* Login & Sign Up Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-bluey rounded-lg"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="px-4 py-2 bg-transparent hover:bg-bluey rounded-lg border"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu toggle button">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/exchange" className="hover:text-gray-400">
              Exchange
            </Link>
            <Link href="/market" className="hover:text-gray-400">
              Market
            </Link>
          </nav>

          {/* Mobile Login & Sign Up */}
          <div className="flex flex-col space-y-4 mt-4">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-bluey rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 bg-transparent hover:bg-bluey rounded-lg border"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
