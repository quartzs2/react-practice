import Icon from '@/components/icons/Icon';
import cn from '@/utils/cn';
import FavoriteDuotoneIcon from '@assets/Images/icons/32px/icon_favorite_duotone.svg?react';
import Button from './buttons/Button';
import { BUTTON_ARROW, BUTTON_STYLE, BUTTON_THICKNESS } from '@/constants/button';

const ProductCardSkeleton = () => {
  return (
    <div
      className={cn(
        'flex h-88 w-41 flex-col items-center gap-4 rounded-[9px] border-1 border-gray-100 bg-white px-3 py-6 lg:h-108 lg:w-67 lg:px-4',
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
          'h-26 w-26 animate-pulse rounded-lg bg-gray-200 object-cover lg:h-40 lg:w-40',
        )}
      />

      <div className='flex flex-col items-center gap-6'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 lg:h-22 lg:w-59'>
          <div className='flex flex-col gap-2'>
            <div className='h-5 w-35 animate-pulse rounded-xl bg-gray-200 lg:w-59'></div>
            <div className='h-5 w-35 animate-pulse rounded-xl bg-gray-200 lg:w-59'></div>
          </div>
          <div className='h-6 w-35 animate-pulse rounded-xl bg-gray-200 lg:w-59'></div>
        </div>
        <div className={cn('h-12 w-35 animate-pulse rounded-lg bg-gray-200 lg:w-[183px]')} />
      </div>
    </div>
  );
};

const ProductCard = ({ className, image, title, price, isLoading, isLike, setIsLike }) => {
  const handleLikeClick = () => setIsLike(!isLike);

  if (isLoading) {
    return <ProductCardSkeleton />;
  }
  return (
    <div
      className={cn(
        'bg-bg-card-gray flex h-88 w-41 flex-col items-center gap-4 rounded-[9px] px-3 py-6 lg:h-108 lg:w-67 lg:px-4',
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

      <img
        className={cn('h-26 w-26 rounded-lg object-cover lg:h-40 lg:w-40')}
        src={image}
        alt='product'
      />

      <div className='flex flex-col items-center gap-6'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 lg:h-22 lg:w-59'>
          <div className='text-center text-base leading-6 font-medium'>{title}</div>
          <div className='text-center text-2xl leading-6 font-semibold tracking-[3%]'>${price}</div>
        </div>
        <Button
          content={'Buy Now'}
          thickness={BUTTON_THICKNESS.THIN}
          arrow={BUTTON_ARROW.OFF}
          style={BUTTON_STYLE.FILL}
          className={cn('w-35 lg:w-[183px]')}
        />
      </div>
    </div>
  );
};
export default ProductCard;
