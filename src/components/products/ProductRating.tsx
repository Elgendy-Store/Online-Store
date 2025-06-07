import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductRatingProps {
  initialRating?: number;
  onRate: (rating: number) => void;
  size?: number;
  interactive?: boolean;
}

const ProductRating: React.FC<ProductRatingProps> = ({
  initialRating = 0,
  onRate,
  size = 24,
  interactive = true
}) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    if (!interactive) return;
    setRating(value);
    onRate(value);
  };

  const handleMouseEnter = (value: number) => {
    if (!interactive) return;
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setHoverRating(0);
  };

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t('rateProduct')}>
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
          disabled={!interactive}
          className={`transition-colors ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
          aria-label={`${value} ${t('stars')}`}
        >
          <Star
            size={size}
            className={`transition-colors ${
              (hoverRating || rating) >= value
                ? 'text-secondary-500 fill-current'
                : 'text-neutral-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ProductRating;