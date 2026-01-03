'use client';

import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export default function StarRating({ rating, onRatingChange, readonly = false }: StarRatingProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onRatingChange?.(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          className={`text-3xl transition-colors ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
          disabled={readonly}
        >
          <span
            className={
              star <= (hover || rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}
