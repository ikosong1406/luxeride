"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState for form handling
import logo from "../images/logo.png";
import Header from "../components/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackendApi from "../components/BackendApi";

const Signup = () => {
  const router = useRouter();

  // State variables for each input
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: "user",
    };

    setLoading(true);

    try {
      const response = await axios.post(`${BackendApi}/register`, data);
      if (response.data.status === "ok") {
        toast.success(response.data.data);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        toast.error(response.data.data);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Registration error");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Header>
      <div className="min-h-screen flex flex-col lg:flex-row bg-background">
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

        {/* Signup Section */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center py-16 px-8 mt-16">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Create a BitCloud Account
            </h2>

            <form className="mt-12" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 mb-4 bg-background rounded-lg text-white focus:outline-none border"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full p-3 bg-bluey rounded-lg text-white font-bold"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            <p className="text-gray-400 mt-6 text-center text-sm">
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
    </Header>
  );
};

export default Signup;
