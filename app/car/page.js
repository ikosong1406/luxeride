"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import cars from "../components/Cars";

export default function CarsPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-black">
        {cars.map((car, index) => (
          <Link
            href={`/car/${car.make.replace(/\s+/g, "-").toLowerCase()}`}
            key={index}
            className="bg-white2 rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white p-2 rounded-md">
                {car.rentingPrice}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {car.make} {car.model}
              </h2>
              <p className="text-gray-400">{car.purchasePrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
