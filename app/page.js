import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import cargif from "./images/cargif.gif";
import client from "./images/client.jpeg";
import car1 from "./images/car1.jpeg";
import car2 from "./images/car2.jpeg";
import car3 from "./images/car3.jpeg";
import car4 from "./images/car4.jpeg";
import car5 from "./images/car5.jpeg";
import world from "./images/world.jpeg";
import cert1 from "./images/cert1.jpg";
import cert2 from "./images/cert2.jpg";

export default function HomePage() {
  return (
    <Header>
      <div className="bg-white">
        {/* Section 1: Video background with overlay and call to action */}
        <section className="relative h-96">
          <Image
            src={cargif}
            alt="Background GIF"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-2xl font-bold mb-4">
              Drive Your Dream, Invest in Luxury
            </h1>
            <p className="text-base mb-6">
              Experience the thrill of luxury car rentals or invest in the cars
              you love for a chance to earn
            </p>
            <button className="bg-gold text-white font-bold py-3 px-6 rounded-lg">
              Start Renting or Investing Today
            </button>
          </div>
        </section>

        {/* Section 2: Write-up and cards, client pictures */}
        <section className="py-16 px-8 flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-black">
              Building Wealth & Luxury on Wheels
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-bluey">1,000+</h3>
                <p className="text-gray-600 text-black">Customers</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-bluey">500+</h3>
                <p className="text-gray-600 text-black">
                  Successful Investments
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-bluey">200+</h3>
                <p className="text-gray-600 text-black">
                  Luxury Cars Available
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md col">
                <h3 className="text-2xl font-bold text-bluey">10M+</h3>
                <p className="text-gray-600 text-black">
                  Dollars Generated in Profit
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-12 md:mt-0 md:ml-16">
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
          </div>
        </section>

        {/* Section 3: Two parts with text and images */}
        <section className="mb-8 px-8 flex flex-col md:flex-row">
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
        </section>

        {/* Section 4: Picture background with overlay */}
        <section className="relative h-96">
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
        </section>

        {/* Section 5: Two write-ups and pictures in flex */}
        <section className="py-16 px-8">
          <h2 className="text-xl font-bold mb-4 text-black">
            Our Certification
          </h2>
          <div className="md:flex">
            <Image
              src={cert1}
              alt="Background"
              className="w-full h-full object-cover mt-10 md:w-1/2"
            />
            <Image
              src={cert2}
              alt="Background"
              className="w-full h-full object-cover mt-12 md:w-1/2"
            />
          </div>
        </section>

        {/* Section 6: Write-ups and testimonial cards */}
        <section className="py-16 px-8">
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-black">
                "I never thought I could earn from my love of luxury cars. This
                platform made it possible!"
              </p>
              <p className="mt-4 text-black">- John Doe</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-black">
                "Not only did I get to drive my dream car, but I also made a
                smart investment."
              </p>
              <p className="mt-4 text-black">- Jane Smith</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-black">
                "The entire process, from renting to investing, was smooth and
                professional."
              </p>
              <p className="mt-4 text-black">- Michael Brown</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-black">
                "A game changer for car enthusiasts who want to earn while
                enjoying luxury."
              </p>
              <p className="mt-4 text-black">- Sarah Wilson</p>
            </div>
          </div>
        </section>
      </div>
    </Header>
  );
}
