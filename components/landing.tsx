import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Lander () {
    return(
        <section className="min-h-[120vh] bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-start justify-center pt-0 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-4 mt-0">
                    <div className="relative inline-block">
                        <Image 
                            src={'/EttumanoorCabs.png'} 
                            alt="Ettumanoor Cabs Logo" 
                            height={600} 
                            width={600}
                            className="mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 mt-4 leading-tight">
                        Your Journey <span className="text-blue-600">Starts Here</span>
                    </h1>
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Explore our fleet of cars and choose the one that suits your journey
                    </h3>
                </div>
                <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                    <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <Link href={'/about'} className="relative z-10">
                                About Us
                            </Link>
                            <div className="absolute inset-0 bg-blue-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                        <button className="group relative overflow-hidden bg-transparent border-2 border-black hover:bg-black text-black hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <Link href={'/cars'} className="relative z-10">
                                Our Fleet
                            </Link>
                            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                        <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <Link href={'/reviews'} className="relative z-10">
                                Testimonials
                            </Link>
                            <div className="absolute inset-0 bg-blue-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                    </nav>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
            </div>
        </section>
    )
}