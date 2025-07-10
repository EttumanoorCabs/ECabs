# Ettumanoor Cabs

A modern, responsive website for Ettumanoor Cabs - a reliable taxi and cab service providing comfortable transportation solutions. This website showcases our fleet of vehicles, services, and allows customers to easily connect with us for their travel needs.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Fleet Showcase**: Display of available vehicles and their features
- **Service Information**: Detailed information about our cab services
- **Customer Reviews**: Testimonials from satisfied customers
- **Contact Integration**: Easy ways for customers to reach out and book rides
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: Next.js 15 with React 18
- **Styling**: Tailwind CSS for responsive design
- **TypeScript**: Type-safe development
- **Font Optimization**: Next.js font optimization with Geist font
- **Image Optimization**: Next.js Image component for optimal performance
- **Build Tool**: Next.js built-in build system
- **Deployment**: Optimized for Vercel deployment

## Architecture

```
ettumanoor-cabs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer with links
│   └── landing.tsx        # Main landing section
├── public/                # Static assets
│   └── EttumanoorCabs.*   # Logo files
└── Configuration files    # Next.js, TypeScript, Tailwind configs
```

## About Ettumanoor Cabs

Ettumanoor Cabs is a trusted local taxi service committed to providing safe, reliable, and comfortable transportation. Whether you need a ride for daily commutes, airport transfers, or special occasions, we're here to serve you with our well-maintained fleet and professional drivers.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Performance Optimizations

- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Font Loading**: Optimized font loading with Next.js font system
- **Code Splitting**: Automatic code splitting for faster page loads
- **Static Generation**: Pre-rendered pages for better performance
- **Responsive Images**: Adaptive images for different screen sizes

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
