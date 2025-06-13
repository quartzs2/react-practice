import React from 'react';
import cn from '@utils/cn';
import ProductCardSkeleton from '@components/ui/common/ProductCardSkeleton';

const ProductCardContainerSkeleton = ({ skeletonSize = 10, className }) => {
  return (
    <div
      className={cn(
        'grid max-w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4',
        className,
      )}
    >
      {Array.from({ length: skeletonSize }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default ProductCardContainerSkeleton;
