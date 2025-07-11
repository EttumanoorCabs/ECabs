import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return(
        <section className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-3 group">
                        <div className="relative overflow-hidden rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <Image 
                                src={'/EttumanoorCabs.png'} 
                                alt="Ettumanoor Cabs Logo" 
                                height={60} 
                                width={60}
                                className="rounded-full group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            Ettumanoor Cabs
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-2">
                        <NavButton href="/about">About Us</NavButton>
                        <NavButton href="/cars">Our Fleet</NavButton>
                        <NavButton href="/contact">Contact us</NavButton>
                    </nav>

                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="group relative">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95">
                {children}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
        </Link>
    );
}