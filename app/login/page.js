"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../images/logo.png";

const Login = () => {
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

      {/* Login Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center py-16 px-8 mt-28">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Sign in to BitCloud
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Please ensure you are visiting the correct URL
          </p>

          <form>
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
            <button className="w-full p-3 bg-bluey rounded-lg text-white font-bold">
              Login
            </button>
          </form>
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
  );
};

export default Login;
