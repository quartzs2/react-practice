import Icon from '@/components/icons/Icon';
import cn from '@/utils/cn';
import FavoriteDuotoneIcon from '@assets/Images/icons/32px/icon_favorite_duotone.svg?react';
import Button from './buttons/Button';
import { BUTTON_ARROW, BUTTON_STYLE, BUTTON_THICKNESS } from '@/constants/button';
import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_FAVORITES_KEY } from '@/constants/localStorageKey';

const ProductCardSkeleton = () => {
  return (
    <div
      className={cn(
        'flex h-88 w-41 flex-col items-center gap-4 rounded-[9px] border-1 border-gray-100 bg-white px-3 py-6 md:h-108 md:w-67 md:px-4',
      )}
    >
      <div className={cn('flex w-full justify-end')}>
        <Icon
          classNameIcon={cn('fill-gray-200 stroke-none animate-pulse')}
          icon={FavoriteDuotoneIcon}
          size={'32px'}
        />
      </div>
      <div
        className={cn(
          'h-26 w-26 animate-pulse rounded-md bg-gray-200 object-cover md:h-40 md:w-40',
        )}
      />

      <div className='flex flex-col items-center gap-6'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 md:h-22 md:w-59'>
          <div className='flex flex-col gap-2'>
            <div className='h-5 w-35 animate-pulse rounded-xl bg-gray-200 md:w-59'></div>
            <div className='h-5 w-35 animate-pulse rounded-xl bg-gray-200 md:w-59'></div>
          </div>
          <div className='h-6 w-35 animate-pulse rounded-xl bg-gray-200 md:w-59'></div>
        </div>
        <div className={cn('h-12 w-35 animate-pulse rounded-md bg-gray-200 md:w-[183px]')} />
      </div>
    </div>
  );
};

const ProductCard = ({ className, id, image, title, price, isLoading }) => {
  const [isLike, setIsLike] = useState(false);
  const handleLikeClick = () => {
    const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) ?? [];
    const newFavorites = isLike
      ? favorites.filter((favorite) => favorite.id !== id)
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
        'bg-bg-card-gray flex h-88 w-41 flex-col items-center gap-4 rounded-[9px] px-3 py-6 md:h-108 md:w-67 md:px-4',
        className,
      )}
    >
      <button className={cn('flex w-full cursor-pointer justify-end')} onClick={handleLikeClick}>
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
          className={cn('h-26 w-26 rounded-md object-cover md:h-40 md:w-40')}
          src={image}
          alt='product'
        />
      </div>

      <div className='flex h-38 flex-col items-center justify-between gap-2'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 md:h-22 md:w-59'>
          <div className='text-center text-base leading-6 font-medium'>{title}</div>
          <div className='text-center text-2xl leading-6 font-semibold tracking-[3%]'>${price}</div>
        </div>
        <Button
          content={'Buy Now'}
          thickness={BUTTON_THICKNESS.THIN}
          arrow={BUTTON_ARROW.OFF}
          style={BUTTON_STYLE.FILL}
          className={cn('w-35 md:w-[183px]')}
        />
      </div>
    </div>
  );
};
export default ProductCard;
