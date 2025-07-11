import React from "react";
import CarCard from "./carCard";
import CarsData from '../_data/cars.json';
import Link from "next/link";

export default function Cars() {
    return (
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    {Object.entries(CarsData).map(([carId, car], index) => (
                        <Link key={index} href={`/cars/${carId}`}>
                            <CarCard key={index} {...car} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}