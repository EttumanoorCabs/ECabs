'use client';

import React, { useEffect, useState } from 'react';
import StarRating from './starRating';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  rideDetails: string;
  review: string;
  date: string;
}

export default function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold">{review.customerName}</h3>
              <p className="text-sm text-gray-500">{review.rideDetails}</p>
            </div>
            <p className="text-sm text-gray-400">{formatDate(review.date)}</p>
          </div>
          
          <div className="mb-3">
            <StarRating rating={review.rating} readonly />
          </div>
          
          <p className="text-gray-700">{review.review}</p>
        </div>
      ))}
    </div>
  );
}
