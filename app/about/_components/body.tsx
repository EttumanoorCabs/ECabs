import React from "react";
import Link from "next/link";

export default function Body() {
    return (
        <div className="min-h-screen bg-white">
            {/* Minimalistic Hero Section */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block w-16 h-0.5 bg-blue-600 mb-8"></div>
                        <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
                            <span className="text-black">About</span>
                            <span className="text-blue-600"> Us</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                            Welcome to Ettumanoor Cabs - Driven By Experience, Powered By Trust
                        </p>
                        <div className="flex justify-center items-center mt-12 space-x-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-gray-500 font-light">Years Experience</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-black">500+</div>
                                <div className="text-sm text-gray-500 font-light">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Content Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        
                        {/* Our Story */}
                        <div className="mb-32">
                            <div className="grid lg:grid-cols-2 gap-20 items-start">
                                <div>
                                    <div className="w-12 h-0.5 bg-blue-600 mb-8"></div>
                                    <h2 className="text-4xl font-light mb-8 text-black">Our Story</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                                        At EttumanoorCabs, we believe that a journey is not just about the destination, it&apos;s about comfort, safety, and a personal touch along the way.
                                    </p>
                                    <div className="inline-flex items-center text-blue-600 font-medium">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        Founded on Excellence
                                    </div>
                                </div>
                                <div className="lg:pl-12">
                                    <div className="space-y-8">
                                        <div className="border-l-2 border-gray-200 pl-8">
                                            <h3 className="text-xl font-medium mb-4 text-black">Experience</h3>
                                            <p className="text-gray-600 leading-relaxed font-light">
                                                Founded and operated by a seasoned driver with over 10 years of hands-on driving experience, EttumanoorCabs is built on a foundation of reliability, road expertise, and unmatched service.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-blue-600 pl-8">
                                            <h3 className="text-xl font-medium mb-4 text-black">Expertise</h3>
                                            <p className="text-gray-600 leading-relaxed font-light">
                                                Our founder, along with a team of dedicated companions who&apos;ve spent years navigating Kerala&apos;s roads and beyond, understands what passengers truly value—punctuality, professionalism, and peace of mind.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What We Offer */}
                        <div className="mb-32">
                            <div className="grid lg:grid-cols-2 gap-20 items-start">
                                <div className="lg:order-2">
                                    <div className="w-12 h-0.5 bg-black mb-8"></div>
                                    <h2 className="text-4xl font-light mb-8 text-black">What We Offer</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                                        We provide a wide range of well-maintained vehicles to suit every occasion and group size. From luxurious sedans to spacious MPVs and mini-buses, our fleet is handpicked to ensure your travel needs are met with style and efficiency.
                                    </p>
                                    <Link href={'/cars'} className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        Our Fleet
                                    </Link>
                                </div>
                                <div className="lg:order-1 lg:pr-12">
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-black mb-2">Luxury Sedans</h3>
                                                <p className="text-gray-600 font-light">Elegant Audi and premium vehicles for special occasions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-black mb-2">Comfortable MPVs</h3>
                                                <p className="text-gray-600 font-light">Spacious Innova and family-friendly options</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-black mb-2">Budget Options</h3>
                                                <p className="text-gray-600 font-light">Affordable Dzire and economy vehicles</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                            <div className="text-center mb-16">
                                <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-8"></div>
                                <h2 className="text-4xl font-light mb-4 text-black">Why Choose Us</h2>
                                <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                                    What makes us different from other cab services
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 justify-items-center">
                                <div className="text-center max-w-xs">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-black mb-3">Experience</h3>
                                    <p className="text-gray-600 font-light">Over a decade of professional driving experience</p>
                                </div>

                                <div className="text-center max-w-xs">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-black mb-3">Professional</h3>
                                    <p className="text-gray-600 font-light">Friendly, courteous, and well-trained drivers</p>
                                </div>

                                <div className="text-center max-w-xs">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-black mb-3">Quality</h3>
                                    <p className="text-gray-600 font-light">Clean, well-maintained vehicles</p>
                                </div>

                                <div className="text-center max-w-xs">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-black mb-3">Pricing</h3>
                                    <p className="text-gray-600 font-light">Competitive rates with no hidden charges</p>
                                </div>

                                <div className="text-center max-w-xs">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-black mb-3">Versatile</h3>
                                    <p className="text-gray-600 font-light">Local trips, airport transfers, outstation rides</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}