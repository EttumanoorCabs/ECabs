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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="customerName"
          required
          value={formData.customerName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, customerName: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Rating *
        </label>
        <StarRating
          rating={formData.rating}
          onRatingChange={(rating) => setFormData({ ...formData, rating })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rideDetails" className="block text-gray-700 font-medium mb-2">
          Ride Details *
        </label>
        <input
          type="text"
          id="rideDetails"
          required
          value={formData.rideDetails}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, rideDetails: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Airport to Downtown - Dec 2025"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="review" className="block text-gray-700 font-medium mb-2">
          Your Review *
        </label>
        <textarea
          id="review"
          required
          value={formData.review}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, review: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Tell us about your experience..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
