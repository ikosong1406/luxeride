"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../images/logo.png";
import Header from "../components/Header";

const Login = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push("/dashboard");
  };

  if (isLoggedIn) {
    return <p>Redirecting...</p>;
  }

  return (
    <Header>
      <div className="min-h-screen flex flex-col lg:flex-row bg-background">
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
              Sign in to BitCloud
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
                className="w-full p-3 bg-bluey rounded hover:bg-blue-500"
              >
                Login
              </button>
            </div>
            <p className="text-gray-400 mt-6 text-center text-sm">
              Don't have an account?
              <span
                className="text-orange cursor-pointer ml-2"
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
