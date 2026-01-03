export interface Car {
    name: string
    shortDescription: string
    description: string
    image: string
    seats: number
    fuelType: string
    features: string[]
}

export interface Review {
    id: string
    customerName: string
    rating: number
    rideDetails: string
    review: string
    date: string
}