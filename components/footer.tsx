import React from "react";
import Link from "next/link";

export default function Footer () {
    return(
        <section className="bg-gray-900 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">EttumanoorCabs</h3>
                    <h3 className="text-gray-300 text-sm">Copyright @ 2025</h3>
                </div>

                <div>
                    <nav className="flex flex-col gap-3">
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                            <Link href={'/contact'}>Contact Us</Link>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                            <Link href={'/about'}>About Us</Link>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                            <Link href={'/cars'}>Our Fleet</Link>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                            <Link href={'/reviews'}>Customer Reviews</Link>
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    )
} 