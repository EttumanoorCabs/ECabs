'use client';

import React, { useState } from 'react';
import StarRating from './starRating';

interface ReviewFormProps {
  onSubmitSuccess: () => void;
}

export default function ReviewForm({ onSubmitSuccess }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    rating: 0,
    rideDetails: '',
    review: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.rating === 0) {
      setError('Please select a rating');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      // Reset form
      setFormData({
        customerName: '',
        rating: 0,
        rideDetails: '',
        review: '',
      });
      
      onSubmitSuccess();
    } catch {
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-12">
      <h2 className="text-4xl font-light mb-12 text-black">Share Your Experience</h2>
      
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-600 font-light">
          {error}
        </div>
      )}

      <div className="mb-8">
        <label htmlFor="customerName" className="block text-gray-700 font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="customerName"
          required
          value={formData.customerName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, customerName: e.target.value })}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors font-light text-lg"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-500 font-light mb-3 text-sm uppercase tracking-wider">
          Rating *
        </label>
        <StarRating
          rating={formData.rating}
          onRatingChange={(rating) => setFormData({ ...formData, rating })}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="rideDetails" className="block text-gray-500 font-light mb-3 text-sm uppercase tracking-wider">
          Ride Details *
        </label>
        <input
          type="text"
          id="rideDetails"
          required
          value={formData.rideDetails}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, rideDetails: e.target.value })}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors font-light text-lg"
          placeholder="e.g., Airport to Downtown - Dec 2025"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="review" className="block text-gray-500 font-light mb-3 text-sm uppercase tracking-wider">
          Your Review *
        </label>
        <textarea
          id="review"
          required
          value={formData.review}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, review: e.target.value })}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors font-light text-lg resize-none"
          rows={4}
          placeholder="Tell us about your experience..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border-2 border-black text-black py-4 font-light text-lg hover:bg-black hover:text-white transition-all disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
