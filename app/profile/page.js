// pages/dashboard/profile.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import Image from "next/image"; // Assuming you are using next/image for the profile picture
import { useState, useEffect } from "react";
import user from "../images/usericon.jpeg";
import Notification from "../components/Notification";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { getUserToken } from "../components/storage";

export default function Profile() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = await getUserToken();
        setToken(userToken);
        // console.log(token);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = {
      token,
    };
    try {
      // console.log(token);
      const response = await axios.post(`${BackendApi}/userdata`, data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle password change logic here
    alert("Password successfully changed!");
  };

  return (
    <DashboardLayout>
      <Notification />
      <h1 className="text-xl font-bold mb-6">Profile</h1>

      <div className="flex flex-col items-center space-y-4">
        {/* User profile picture */}
        <Image
          src={user}
          alt="User Profile Picture"
          width={100}
          height={100}
          className="rounded-full"
        />

        {/* User name, ID, and email */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mt-4">
            {userData.firstname} {userData.lastname}
          </h2>
          <p className="text-gray-400 mt-4">ID: {userData._id}</p>
          <p className="text-gray-400 mt-4">{userData.email}</p>
        </div>

        {/* Password change inputs */}
        <div className="w-full max-w-md">
          <div className="flex flex-col space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="p-2 bg-gray-700 rounded-md text-white w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 bg-gray-700 rounded-md text-white w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="bg-bluey p-2 rounded-md text-white w-full font-semibold"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
