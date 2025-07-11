import React from "react";
import Image from "next/image";
import { Car } from "@/types/types";


export default function CarCard (data:Car) {
    return(
        <section className="w-72 h-72 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="h-full flex flex-col">
                {/* Image container - takes up 60% of card height */}
                <div className="h-[60%] relative bg-gray-50 flex items-center justify-center">
                    <Image 
                        src={data.image} 
                        alt={data.name}
                        height={200} 
                        width={200}
                        className="object-contain max-h-full max-w-full"
                    />
                </div>
                
                <div className="h-[40%] p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">{data.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{data.shortDescription}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <svg 
                                className="w-4 h-4 text-gray-500" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={1.5} 
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
                                />
                            </svg>
                            <span className="text-sm text-gray-500">{data.seats} seats</span>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}