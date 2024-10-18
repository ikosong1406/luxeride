// pages/dashboard/profile.js
"use client";
import DashboardLayout from "../components/DashboardLayout";
import Image from "next/image"; // Assuming you are using next/image for the profile picture
import { useState } from "react";
import user from "../images/logo.png";
import Notification from "../components/Notification";

export default function Profile() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userProfile = {
    name: "John Doe", // Replace with actual user name
    id: "12345", // Replace with actual user ID
    email: "johndoe@example.com", // Replace with actual user email
    profilePicture: "/path-to-profile-picture.jpg", // Replace with actual profile picture
  };

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
          <h2 className="text-xl font-semibold">{userProfile.name}</h2>
          <p className="text-gray-400">ID: {userProfile.id}</p>
          <p className="text-gray-400">{userProfile.email}</p>
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
