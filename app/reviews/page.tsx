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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
        
        <div className="mb-12">
          <ReviewForm onSubmitSuccess={handleSubmitSuccess} />
        </div>

        <ReviewsList key={refreshKey} />
      </div>
    </div>
  );
}
