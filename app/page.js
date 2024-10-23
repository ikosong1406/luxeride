"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For page navigation
import { motion } from "framer-motion"; // Import framer motion
import Header from "./components/Header";
import cargif from "./images/cargif.gif";
import client from "./images/client.jpeg";
import car1 from "./images/car1.jpeg";
import car2 from "./images/car2.jpeg";
import world from "./images/world.jpeg";
import cert1 from "./images/cert1.jpg";
import cert2 from "./images/cert2.jpg";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  const router = useRouter();

  const handleCallToAction = () => {
    router.push("/signup");
  };

  return (
    <Header>
      <div className="bg-white">
        {/* Section 1: GIF background with overlay and call to action */}
        <motion.section
          className="relative h-96"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image
            src={cargif}
            alt="Background GIF"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <motion.h1
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Drive Your Dream, Invest in Luxury
            </motion.h1>
            <motion.p
              className="text-base mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience the thrill of luxury car rentals or invest in the cars
              you love for a chance to earn.
            </motion.p>
            <motion.button
              onClick={handleCallToAction}
              className="bg-gold text-white font-bold py-3 px-6 rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Start Renting or Investing Today
            </motion.button>
          </div>
        </motion.section>

        {/* Section 2: Write-up and stats with staggered animation */}
        <motion.section
          id="section2"
          className="py-16 px-8 flex flex-col md:flex-row"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-black">
              Building Wealth & Luxury on Wheels
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {["1,000+", "500+", "200+", "10M+"].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg shadow-md"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-bluey">{stat}</h3>
                  <p className="text-gray-600 text-black">
                    {
                      [
                        "Customers",
                        "Successful Investments",
                        "Luxury Cars",
                        "Dollars in Profit",
                      ][index]
                    }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex-1 mt-12 md:mt-0 md:ml-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4 text-black">
              Partnered with the World's Finest
            </h2>
            <p className="text-base mb-8 text-black">
              Top-notch luxury brands trust us to deliver high-quality service
              and investment opportunities.
            </p>
            <Image
              src={client}
              alt="Client 1"
              className="w-full h-96 md:w-96 rounded-lg"
            />
          </motion.div>
        </motion.section>

        {/* Section 3: Vision and mission */}
        <motion.section
          id="section3"
          className="mb-8 px-8 flex flex-col md:flex-row"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-black">Our Vision</h2>
            <p className="text-base mb-6 text-black">Luxury for All</p>
            <Image
              src={car1}
              alt="Vision"
              className="w-full h-80 md:h-96 rounded-lg"
            />
          </div>

          <div className="flex-1 mt-12 md:mt-0 md:ml-16">
            <h2 className="text-xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-base mb-6 text-black">Empowering You to Earn</p>
            <Image
              src={car2}
              alt="Mission"
              className="w-full h-auto rounded-lg mb-6"
            />
          </div>
        </motion.section>

        {/* Section 4: Picture background with overlay */}
        <motion.section
          id="section4"
          className="relative h-96"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={world}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Luxury Meets Investment</h2>
            <p className="text-base mb-6">
              Join us in revolutionizing the way people experience and profit
              from luxury cars. Rent today, invest tomorrow.
            </p>
          </div>
        </motion.section>

        {/* Section 5: Certifications */}
        <motion.section
          id="section5"
          className="py-16 px-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4 text-black">
            Our Certification
          </h2>
          <div className="md:flex">
            <Image
              src={cert1}
              alt="Certification 1"
              className="w-full h-full object-cover mt-10 md:w-1/2"
            />
            <Image
              src={cert2}
              alt="Certification 2"
              className="w-full h-full object-cover mt-12 md:w-1/2"
            />
          </div>
        </motion.section>

        {/* Section 6: Testimonials */}
        <motion.section
          className="py-16 px-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                text: "I never thought I could earn from my love of luxury cars. This platform made it possible!",
                name: "John Doe",
              },
              {
                text: "Not only did I get to drive my dream car, but I also made a smart investment.",
                name: "Jane Smith",
              },
              {
                text: "The entire process, from renting to investing, was smooth and professional.",
                name: "Michael Brown",
              },
              {
                text: "A game changer for car enthusiasts who want to earn while enjoying luxury.",
                name: "Sarah Wilson",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-lg text-black">{testimonial.text}</p>
                <p className="mt-4 text-black">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Header>
  );
}
