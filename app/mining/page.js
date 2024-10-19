"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import coinIcon from "../images/logo.png";
import { TbCoinFilled } from "react-icons/tb";
import DashboardLayout from "../components/DashboardLayout";
import Notification from "../components/Notification";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { getUserToken } from "../components/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Mining() {
  const [balance, setBalance] = useState(0); // Wallet balance
  const [tapsAvailable, setTapsAvailable] = useState(100); // Number of available taps
  const hashRate = 4; // Amount added to the balance per tap
  const [userData, setUserData] = useState([]);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Fetch token on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = await getUserToken();
        setToken(userToken);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.post(`${BackendApi}/userdata`, { token });
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  // Function to handle tapping on the coin
  const handleTap = async () => {
    if (tapsAvailable > 0) {
      const updatedMining = userData.mining + hashRate;
      setUserData((prevData) => ({
        ...prevData,
        mining: updatedMining, // Increase mining balance
      }));
      setTapsAvailable(tapsAvailable - 1);

      // Send updated mining balance to the backend
      try {
        await axios.post(`${BackendApi}/updateMining`, {
          token,
          newMining: updatedMining,
        });
      } catch (error) {
        console.error("Error updating mining balance:", error);
      }
    }
  };

  // Function to regenerate taps every second
  useEffect(() => {
    if (tapsAvailable === 0) {
      const regenInterval = setInterval(() => {
        setTapsAvailable((prevTaps) => {
          if (prevTaps < 100) return prevTaps + 1;
          clearInterval(regenInterval);
          return prevTaps;
        });
      }, 1000); // Add +1 tap every second
      return () => clearInterval(regenInterval);
    }
  }, [tapsAvailable]);

  // Function to fetch user data from backend
  const getDatas = async () => {
    const data = { token };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle withdrawing balance
  const handleWithdraw = async () => {
    const coinValueInDollars = balance * 0.5; // Convert coins to dollars
    if (coinValueInDollars >= 1000) {
      try {
        const response = await axios.post(`${BackendApi}/miningWithdrawal`, {
          token,
          amount: coinValueInDollars,
        });
        if (response.data.success) {
          toast.success("withdrwal successful");
          setBalance(0); // Reset balance after successful withdrawal
        }
      } catch (error) {
        console.error("Error during withdrawal:", error);
      }
    } else {
      toast.error("You need at least $1,000 to withdraw.");
    }
  };

  return (
    <DashboardLayout>
      <Notification />
      <div className="flex flex-col items-center min-h-screen text-white">
        <section className="bg-black2 w-full py-6 px-4 rounded-lg">
          <h2 className="text-xl font-bold">Wallet Balance</h2>
          <div className="flex items-center justify-center mt-2 flex">
            <TbCoinFilled className="text-4xl mr-2 text-orange" />
            <span className="text-2xl">{userData.mining} BitCloud</span>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-bluey text-white rounded-md"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </section>

        {/* Tapping Section */}
        <section className="flex flex-col items-center mt-20">
          <div
            className={`flex items-center justify-center transition-all duration-300 ${
              tapsAvailable === 0 ? "opacity-50" : ""
            }`}
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
            }}
            onClick={handleTap}
          >
            <Image
              src={coinIcon}
              alt="Coin Icon"
              width={300}
              height={300}
              className="cursor-pointer"
            />
          </div>
          <p className="mt-10">
            Available Taps: <span className="font-bold">{tapsAvailable}</span>
          </p>
          <p className="mt-10 bg-black2 p-4 rounded-lg">
            Hash Rate: <span className="font-bold">{hashRate}</span> BitCloud
            per tap
          </p>
        </section>
      </div>
    </DashboardLayout>
  );
}
