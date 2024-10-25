"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import cars from "@/app/components/Cars";

SwiperCore.use([Navigation, Pagination]);

export default function CarDetails() {
  const { carName } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    // Ensure carName is defined before searching
    if (carName) {
      const model = carName.replace(/-/g, " ").toLowerCase();
      const foundCar = cars.find((car) => car.model.toLowerCase() === model);
      setCarDetails(foundCar || null); // Set car detail or null if not found
    }
  }, [carName]);

  // Show a loading state if carDetail has not been set yet
  if (!carDetails) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white text-black">
      <Swiper navigation pagination>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={carDetails.mainImage}
              alt="car"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute top-5 left-5 bg-white2 text-black p-2 rounded-md text-xl">
              <p>
                <span className="font-extrabold">
                  ${carDetails.rentingPrice}
                </span>
                /Day
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={carDetails.additionalImages[0]}
              alt="car"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute top-5 left-5 bg-white2 text-black p-2 rounded-md text-xl">
              <p>
                <span className="font-extrabold">
                  ${carDetails.rentingPrice}
                </span>
                /Day
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={carDetails.additionalImages[1]}
              alt="car"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute top-5 left-5 bg-white2 text-black p-2 rounded-md text-xl">
              <p>
                <span className="font-extrabold">
                  ${carDetails.rentingPrice}
                </span>
                /Day
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={carDetails.additionalImages[2]}
              alt="car"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute top-5 left-5 bg-white2 text-black p-2 rounded-md text-xl">
              <p>
                <span className="font-extrabold">
                  ${carDetails.rentingPrice}
                </span>
                /Day
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <h2 className="text-2xl font-semibold mt-8">
        {carDetails.make} {carDetails.model}
      </h2>

      {/* Key Features Section */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">🗓️</span>
          <p>{carDetails.year}</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">🔧</span>
          <p>{carDetails.engineType}</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">⚙️</span>
          <p>{carDetails.transmission}</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">🚗</span>
          <p>{carDetails.driveType}</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">🐎</span>
          <p>{carDetails.horsepower} HP</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">💲</span>
          <p>${carDetails.purchasePrice}</p>
        </div>
        <div className="bg-white2 rounded-lg p-4 shadow-lg flex items-center">
          <span className="mr-2">📈</span>
          <p>{carDetails.appreciationValue}%</p>
        </div>
      </div>

      <h3 className="text-lg mt-8 font-extrabold">Details</h3>
      <p className="mt-4 mb-14">{carDetails.description}</p>

      <Link
        href={`/invest/${carDetails.model.replace(/\s+/g, "-").toLowerCase()}`}
        className="fixed bottom-4 right-4 bg-blue text-white p-4 rounded-md"
        style={{ width: "50%" }}
      >
        Invest Now
      </Link>
    </div>
  );
}
