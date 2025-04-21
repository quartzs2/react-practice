import cn from '@/utils/cn';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';

const CategoryTab = ({ currentIdx, setCurrentIdx, categories }) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const tabRef = useRef(null);

  const handleTabClick = (idx) => {
    setCurrentIdx(idx);
  };

  useLayoutEffect(() => {
    const { current } = tabRef;

    if (current) {
      const hasOverflow = current.scrollWidth > current.clientWidth;

      setIsOverflow(hasOverflow);
    }
  }, [tabRef]);

  useEffect(() => {
    const { current } = tabRef;
    let isMouseDown = false;
    let startX, scrollLeft;

    const handleMouseDown = (e) => {
      isMouseDown = true;
      scrollLeft = current.scrollLeft;
      startX = e.pageX - current.offsetLeft;
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - current.offsetLeft;
      const walk = x - startX;
      current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    if (current && isOverflow) {
      current.addEventListener('mousedown', handleMouseDown);
      current.addEventListener('mousemove', handleMouseMove);
      current.addEventListener('mouseleave', handleMouseLeave);
      current.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      current.removeEventListener('mousedown', handleMouseDown);
      current.removeEventListener('mousemove', handleMouseMove);
      current.removeEventListener('mouseleave', handleMouseLeave);
      current.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isOverflow]);

  return (
    <div
      ref={tabRef}
      className='no-scrollbar flex gap-8 overflow-x-scroll lg:w-full lg:max-w-[1120px]'
    >
      {categories.map(({ id, name }, idx) => {
        return (
          <button
            key={id}
            onClick={() => handleTabClick(idx)}
            className={cn(
              'relative size-fit cursor-pointer text-center text-base leading-8 font-medium text-[#8B8B8B]',
              {
                'text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:rounded-sm before:bg-black before:content-[""]':
                  idx === currentIdx,
              },
            )}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};
export default CategoryTab;
