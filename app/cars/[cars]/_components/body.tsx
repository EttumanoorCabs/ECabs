'use client'

import React from "react";
import { useParams } from "next/navigation";
import CarsData from '../../_data/cars.json';
import Link from "next/link";

export default function CarData() {
    const params = useParams();
    const carId = params.cars as string;
    
    const car = CarsData[carId as keyof typeof CarsData];
    
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Header with Back Button and Title */}
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex items-center gap-4">
                                <Link 
                                    href={'/cars'}
                                    className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f1f2f4] text-[#121416] hover:bg-[#e8eaed] transition-colors"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                                <p className="text-[#121416] tracking-tight text-[32px] font-bold leading-tight">{car.name}</p>
                            </div>
                        </div>

                        {/* Car Image */}
                        <div className="flex w-full grow bg-white p-4">
                            <div className="w-full gap-1 overflow-hidden bg-white aspect-[4/3] rounded-xl flex">
                                <div
                                    className="w-full bg-center bg-no-repeat bg-contain aspect-auto rounded-xl flex-1"
                                    style={{backgroundImage: `url(${car.image})`}}
                                ></div>
                            </div>
                        </div>

                        {/* Overview Section */}
                        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 text-center">Overview</h3>
                        <p className="text-[#121416] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                            {car.description}
                        </p>

                        {/* Key Features Grid */}
                        <div className="p-4 flex justify-center">
                            <div className="grid grid-cols-[20%_1fr] gap-x-6 max-w-md w-full">
                                <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 text-center col-span-2">Key Features</h3>
                                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                                    <p className="text-[#6a7581] text-sm font-normal leading-normal">Seats</p>
                                    <div>
                                        <p className="text-[#121416] text-sm font-normal leading-normal">{car.seats}</p>
                                        <p className="text-[#6a7581] text-xs font-normal leading-normal mt-1">Seating is without considering extra luggage</p>
                                    </div>
                                </div>
                                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                                    <p className="text-[#6a7581] text-sm font-normal leading-normal">Fuel Type</p>
                                    <p className="text-[#121416] text-sm font-normal leading-normal">{car.fuelType}</p>
                                </div>
                            </div>
                        </div>

                        {/* Features Checklist */}
                        <div className="px-4 flex justify-center">
                            <div className="max-w-md w-full">
                                <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 text-center">Features</h3>
                                {car.features.map((feature, index) => (
                                    <label key={index} className="flex gap-x-3 py-3 flex-row">
                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                            className="h-5 w-5 rounded border-[#dde0e3] border-2 bg-transparent text-[#dce7f3] checked:bg-[#dce7f3] checked:border-[#dce7f3] focus:ring-0 focus:ring-offset-0 focus:border-[#dde0e3] focus:outline-none"
                                        />
                                        <p className="text-[#121416] text-base font-normal leading-normal">{feature}</p>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Contact Section */}
                        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 text-center">For Booking Contact</h3>
                        <div className="flex justify-center">
                            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                                <Link 
                                    href='https://api.whatsapp.com/send?phone=919496996868&text=Hello!' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f4] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#e8eaed] transition-colors"
                                >
                                    <span className="truncate">WhatsApp</span>
                                </Link>
                                <Link 
                                    href='mailto:ettumanoorcabsince2025@gmail.com' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f4] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#e8eaed] transition-colors"
                                >
                                    <span className="truncate">Email</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}