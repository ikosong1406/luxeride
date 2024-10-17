"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../images/logo.png";

const Signup = () => {
  const router = useRouter();

  return (
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

      {/* Signup Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center py-16 px-8 mt-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Create a BitCloud Account
          </h2>

          <form className="mt-12">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
            />
            <button className="w-full p-3 bg-bluey rounded-lg text-white font-bold">
              Sign Up
            </button>
          </form>
          <p className="text-gray-400 mt-6 text-center">
            Already have an account?
            <span
              className="text-orange cursor-pointer ml-2"
              onClick={() => router.push("/login")}
            >
              Sign in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
