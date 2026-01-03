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
      <div className="text-center py-16">
        <p className="text-gray-400 font-light text-lg">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="border border-gray-200 p-12 text-center">
        <p className="text-gray-400 font-light text-lg">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="w-12 h-0.5 bg-blue-600 mb-12"></div>
      <h2 className="text-4xl font-light mb-12 text-black">What Our Customers Say</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-t border-gray-200 pt-8 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-light text-black">{review.customerName}</h3>
              <p className="text-sm text-gray-400 font-light mt-1">{review.rideDetails}</p>
            </div>
            <p className="text-sm text-gray-400 font-light">{formatDate(review.date)}</p>
          </div>
          
          <div className="mb-6">
            <StarRating rating={review.rating} readonly />
          </div>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">{review.review}</p>
        </div>
      ))}
    </div>
  );
}
