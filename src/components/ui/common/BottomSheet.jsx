import { useBottomSheet } from '@hooks/useBottomSheet';
import cn from '@utils/cn';
import React from 'react';
import { BOTTOM_SHEET_HEIGHT } from '@constants/bottomSheet';

const BottomSheet = ({ children, className }) => {
  const { sheetRef, contentRef } = useBottomSheet();

  return (
    <div
      ref={sheetRef}
      className={cn(
        'rounded-t-[8px]',
        'shadow-[0px_0px_10px_rgba(0,0,0,0.4)]',
        'fixed top-[calc(100%_-_48px)] right-0 left-0',
        'z-1',
        'flex flex-col items-center',
        'bg-white',
        'transition-[transform_150ms_ease-out]',
        className,
      )}
      style={{ height: BOTTOM_SHEET_HEIGHT }}
    >
      <BottomSheetHeader />
      <div
        className='mb-8 flex h-full w-full justify-center overflow-auto px-8'
        ref={contentRef}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {children}
      </div>
    </div>
  );
};

function BottomSheetHeader() {
  return (
    <div className='relative h-12 rounded-t-[8px] pt-4 pb-1'>
      <div className='h-1 w-8 rounded-[2px] bg-[#d0d0d0]'></div>
    </div>
  );
}

export default BottomSheet;
