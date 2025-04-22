import Icon from '@/components/icons/Icon';
import ArrowIcon from '@assets/Images/icons/32px/icon_arrow.svg?react';
import Category from './Category';
import { initialCategories } from '@/constants/categoryList';

const CategoryBanner = () => {
  return (
    <div className='xl flex flex-col items-center gap-8 bg-[#fafafa] px-4 py-16'>
      <div className='flex w-[336px] justify-between sm:w-[512px] md:w-[688px] lg:w-[864px] xl:w-[1040px]'>
        <div className='text-2xl leading-8 font-medium tracking-[1%]'>Browse By Category</div>
        <div className='hidden'>
          {/* Todo: 필요하면 작업 */}
          <Icon icon={ArrowIcon} size={'32px'} />
          <Icon className='-scale-100' icon={ArrowIcon} size={'32px'} />
        </div>
      </div>
      <div className='grid max-w-[1120px] grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {initialCategories.map(({ name, image, slug }) => (
          <Category key={name} name={name} slug={slug} image={image} />
        ))}
      </div>
    </div>
  );
};
export default CategoryBanner;
