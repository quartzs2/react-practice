import Skeleton from '@components/ui/common/Skeleton';
import Icon from '@components/icons/Icon';
import cn from '@utils/cn';
import FavoriteDuotoneIcon from '@assets/Images/icons/32px/icon_favorite_duotone.svg?react';

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
      <Skeleton className={'h-[104px] w-[104px] rounded-md object-cover md:h-40 md:w-40'} />
      <div className='flex flex-col items-center gap-6'>
        <div className='flex h-22 w-35 flex-col items-center gap-4 md:h-22 md:w-59'>
          <div className='flex flex-col gap-2'>
            <Skeleton className={'h-[20px] w-[140px] md:w-59'} />
            <Skeleton className={'h-[20px] w-[140px] md:w-59'} />
          </div>
          <Skeleton className={'h-[24px] w-[140px] md:w-59'} />
        </div>
        <Skeleton className={'h-[48px] w-[140px] rounded-md md:w-[183px]'} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
