import React from "react";
import CarCard from "./carCard";
import CarsData from '../_data/cars.json';

export default function Cars () {
    return(
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    {Object.values(CarsData).map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}
                </div>
            </div>
        </section>
    )
}