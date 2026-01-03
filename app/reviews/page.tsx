'use client';

import ReviewsList from './_components/reviewsList';
import ReviewForm from './_components/reviewForm';
import { useState } from 'react';

export default function ReviewsPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSubmitSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <div className="inline-block w-16 h-0.5 bg-blue-600 mb-8"></div>
          <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
            <span className="text-black">Customer</span>
            <span className="text-blue-600"> Reviews</span>
          </h1>
        </div>
        
        <div className="mb-24">
          <ReviewForm onSubmitSuccess={handleSubmitSuccess} />
        </div>

        <ReviewsList key={refreshKey} />
      </div>
    </div>
  );
}
