import { categories } from '@/constants/categoryList';
import { useState } from 'react';
import cn from '@/utils/cn';

const ProductsBanner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleTabClick = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <div className='flex flex-col gap-8 px-4 py-14 lg:items-center'>
      <div className='no-scrollbar flex gap-8 overflow-x-scroll lg:w-full lg:max-w-[1120px]'>
        {categories.map(({ id, name }, idx) => {
          return (
            <button
              key={id}
              onClick={() => handleTabClick(idx)}
              className={cn(
                'relative size-fit cursor-pointer text-center text-base leading-8 font-medium',
                {
                  'before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-black before:content-[""]':
                    idx === currentIdx,
                },
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsBanner;
