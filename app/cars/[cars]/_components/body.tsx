'use client'

import React, { useState } from "react";
import { useParams } from "next/navigation";
import CarsData from '../../_data/cars.json';
import Link from "next/link";

export default function CarData() {
    const params = useParams();
    const carId = params.cars as string;
    
    const car = CarsData[carId as keyof typeof CarsData];
    
    const [bookingForm, setBookingForm] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookingForm({
            ...bookingForm,
            [e.target.name]: e.target.value
        });
    };

    const generateWhatsAppMessage = () => {
        const message = `*New Booking Request*\n\n*Car:* ${car.name}\n*Name:* ${bookingForm.name}\n*Phone:* ${bookingForm.phone}\n*Pickup Location:* ${bookingForm.pickup}\n*Drop Location:* ${bookingForm.drop}`;
        return encodeURIComponent(message);
    };

    const generateEmailSubject = () => {
        return encodeURIComponent(`Booking Request for ${car.name}`);
    };

    const generateEmailBody = () => {
        const body = `New Booking Request\n\nCar: ${car.name}\nName: ${bookingForm.name}\nPhone: ${bookingForm.phone}\nPickup Location: ${bookingForm.pickup}\nDrop Location: ${bookingForm.drop}`;
        return encodeURIComponent(body);
    };

    const isFormValid = bookingForm.name && bookingForm.phone && bookingForm.pickup && bookingForm.drop;
    
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

                        {/* Booking Form Section */}
                        <div className="px-4 flex justify-center">
                            <div className="max-w-md w-full">
                                <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 text-center">Book This Car</h3>
                                <p className="text-[#6a7581] text-sm font-normal leading-normal pb-4 text-center">Fill in your details to send a booking request</p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="text-[#121416] text-sm font-medium leading-normal block mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={bookingForm.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-2.5 rounded-lg border border-[#dde0e3] bg-white text-[#121416] text-base font-normal leading-normal focus:outline-none focus:border-[#121416] transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="text-[#121416] text-sm font-medium leading-normal block mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={bookingForm.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-2.5 rounded-lg border border-[#dde0e3] bg-white text-[#121416] text-base font-normal leading-normal focus:outline-none focus:border-[#121416] transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="pickup" className="text-[#121416] text-sm font-medium leading-normal block mb-2">
                                            Pickup Location *
                                        </label>
                                        <input
                                            type="text"
                                            id="pickup"
                                            name="pickup"
                                            value={bookingForm.pickup}
                                            onChange={handleInputChange}
                                            placeholder="Enter pickup location"
                                            className="w-full px-4 py-2.5 rounded-lg border border-[#dde0e3] bg-white text-[#121416] text-base font-normal leading-normal focus:outline-none focus:border-[#121416] transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="drop" className="text-[#121416] text-sm font-medium leading-normal block mb-2">
                                            Drop Location *
                                        </label>
                                        <input
                                            type="text"
                                            id="drop"
                                            name="drop"
                                            value={bookingForm.drop}
                                            onChange={handleInputChange}
                                            placeholder="Enter drop location"
                                            className="w-full px-4 py-2.5 rounded-lg border border-[#dde0e3] bg-white text-[#121416] text-base font-normal leading-normal focus:outline-none focus:border-[#121416] transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Link 
                                            href={isFormValid ? `https://api.whatsapp.com/send?phone=919496996868&text=${generateWhatsAppMessage()}` : '#'}
                                            target={isFormValid ? "_blank" : undefined}
                                            rel={isFormValid ? "noopener noreferrer" : undefined}
                                            className={`flex-1 flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-bold leading-normal tracking-[0.015em] transition-all ${
                                                isFormValid 
                                                    ? 'bg-[#25D366] text-white hover:bg-[#20BA5A] cursor-pointer' 
                                                    : 'bg-[#f1f2f4] text-[#6a7581] cursor-not-allowed'
                                            }`}
                                            onClick={(e) => !isFormValid && e.preventDefault()}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                            <span className="truncate">WhatsApp</span>
                                        </Link>
                                        <Link 
                                            href={isFormValid ? `mailto:ettumanoorcabsince2025@gmail.com?subject=${generateEmailSubject()}&body=${generateEmailBody()}` : '#'}
                                            target={isFormValid ? "_blank" : undefined}
                                            rel={isFormValid ? "noopener noreferrer" : undefined}
                                            className={`flex-1 flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-bold leading-normal tracking-[0.015em] transition-all ${
                                                isFormValid 
                                                    ? 'bg-[#121416] text-white hover:bg-[#2a2e32] cursor-pointer' 
                                                    : 'bg-[#f1f2f4] text-[#6a7581] cursor-not-allowed'
                                            }`}
                                            onClick={(e) => !isFormValid && e.preventDefault()}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="truncate">Email</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}