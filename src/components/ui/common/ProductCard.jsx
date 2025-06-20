import Icon from '@components/icons/Icon';
import useImageOptimization from '@hooks/useImageOptimization';
import cn from '@utils/cn';
import FavoriteDuotoneIcon from '@assets/Images/icons/32px/icon_favorite_duotone.svg?react';
import Button from '@components/ui/buttons/Button';
import { BUTTON_STYLE, BUTTON_THICKNESS } from '@constants/button';
import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_FAVORITES_KEY } from '@constants/localStorageKey';
import ProductCardSkeleton from '@components/ui/common/ProductCardSkeleton';

const ProductCard = ({ className, id, image, title, price, isLoading }) => {
  const ref = useImageOptimization({ src: image });
  const [isLike, setIsLike] = useState(false);
  const handleLikeClick = () => {
    const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) ?? [];
    const newFavorites = isLike
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(newFavorites));
    setIsLike(!isLike);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) ?? [];

    if (favorites.includes(id)) {
      setIsLike(true);
    }
  }, [id]);

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <div
      className={cn(
        'bg-bg-card-gray flex h-88 w-41 flex-col items-center gap-2 rounded-[9px] px-3 py-6 md:h-108 md:w-67 md:gap-4 md:px-4',
        className,
      )}
    >
      <button
        type='button'
        className={cn('flex w-full cursor-pointer justify-end')}
        onClick={handleLikeClick}
      >
        <Icon
          classNameIcon={cn('stroke-[#919191] stroke-[1.4]', {
            'fill-[#ff0000] stroke-none': isLike,
          })}
          icon={FavoriteDuotoneIcon}
          size={'32px'}
        />
      </button>

      <div className='h-26 w-26 md:h-40 md:w-40'>
        <img
          ref={ref}
          className={cn('h-26 w-26 rounded-md object-cover md:h-40 md:w-40')}
          alt='product'
        />
      </div>

      <div className='flex h-38 flex-col items-center justify-between gap-4'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 md:h-22 md:w-59'>
          <div className='text-overflow text-center text-base leading-6 font-medium'>{title}</div>
          <div className='text-center text-2xl leading-6 font-semibold tracking-[3%]'>${price}</div>
        </div>
        <Button
          thickness={BUTTON_THICKNESS.THIN}
          buttonStyle={BUTTON_STYLE.FILL}
          className={cn('w-35 md:w-[183px]')}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
