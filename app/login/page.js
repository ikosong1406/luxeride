"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../images/logo.png";
import Header from "../components/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackendApi from "../components/BackendApi";
import { storeUserToken } from "../components/storage";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // e.preventDefault();
    setLoading(true); // Start loading

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false); // Stop loading if email is invalid
      return;
    }

    const userData = {
      email,
      password,
    };

    setLoading(true);
    try {
      const response = await axios.post(`${BackendApi}/login`, userData);
      const { token } = response.data;
      storeUserToken(token);
      router.push("/dashboard");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Login error");
      }
      setLoading(false); // Stop loading after error
    }
  };

  return (
    <Header>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <ToastContainer />
        {/* Logo and Sign Up Promo Section */}
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/path-to-your-image.jpg" // Add your image path here
            alt="BitCloud Promo Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Login Section */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center py-16 px-8 mt-28">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Sign in to LuxeRide
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Please ensure you are visiting the correct URL
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
              />
              <button
                onClick={handleLogin}
                className="w-full p-3 bg-gold rounded hover:bg-blue-500"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <p className="text-gray-400 mt-6 text-center text-sm">
              Don't have an account?
              <span
                className="text-gold cursor-pointer ml-2"
                onClick={() => router.push("/signup")}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Login;
