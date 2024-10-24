"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

export default function CarDetails({ params }) {
  const { carName } = params; // Access the carName from params
  //   const carInfo = carDetails[carName];

  //   // Handle case where carInfo is undefined
  //   if (!carInfo) {
  //     return (
  //       <div className="container mx-auto p-4">
  //         <h1 className="text-2xl font-bold">Car Not Found</h1>
  //         <p className="mt-2">The car you are looking for does not exist.</p>
  //       </div>
  //     );
  //   }

  // Dummy data for car details
  const carDetails = {
    name: carName.replace(/-/g, " "),
    images: [
      "/images/car1.jpg",
      "/images/car2.jpg",
      "/images/car3.jpg",
      "/images/car4.jpg",
    ],
    rentingPrice: "$1,500 - $3,000",
    features: [
      { icon: "🚗", feature: "Luxury interior" },
      { icon: "⚡", feature: "High performance" },
      { icon: "🔊", feature: "Premium sound system" },
      { icon: "📱", feature: "Smart connectivity" },
    ],
    description:
      "The Rolls-Royce Phantom is the epitome of luxury, offering unparalleled comfort and a smooth driving experience.",
  };

  return (
    <div className="p-6">
      <Swiper navigation pagination>
        {carDetails.images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white p-2 rounded-md">
                {carDetails.rentingPrice}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-2xl font-semibold mt-4">{carDetails.name}</h2>
      <h3 className="text-lg mt-2">Key Features</h3>
      <ul className="list-disc ml-6">
        {carDetails.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{feature.icon}</span> {feature.feature}
          </li>
        ))}
      </ul>
      <p className="mt-4">{carDetails.description}</p>

      <Link
        href={`/invest/${carDetails.name.replace(/\s+/g, "-").toLowerCase()}`}
        className="fixed bottom-4 right-4 bg-bluey text-white p-4 rounded-md"
        style={{ width: "50%" }}
      >
        Invest Now
      </Link>
    </div>
  );
}
