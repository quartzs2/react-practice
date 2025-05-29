import { useBottomSheet } from '@hooks/useBottomSheet';
import cn from '@utils/cn';
import React from 'react';
import {
  BOTTOM_SHEET_CONTENT_HEIGHT,
  BOTTOM_SHEET_HEADER_HEIGHT,
  BOTTOM_SHEET_HEIGHT,
} from '@constants/bottomSheet';

const BottomSheet = ({ children, className }) => {
  const { sheetRef, contentRef } = useBottomSheet();

  return (
    <div
      ref={sheetRef}
      className={cn(
        'rounded-t-[8px]',
        'shadow-[0px_0px_10px_rgba(0,0,0,0.4)]',
        'fixed right-0 left-0',
        'z-1',
        'flex flex-col items-center',
        'bg-white',
        'transition-[transform_150ms_ease-out]',
        className,
      )}
      style={{
        height: BOTTOM_SHEET_HEIGHT,
        top: `calc(100% - ${BOTTOM_SHEET_HEADER_HEIGHT}px)`,
      }}
    >
      <BottomSheetHeader />
      <div
        className='h-full w-full overflow-y-auto px-8 pb-8'
        ref={contentRef}
        style={{ WebkitOverflowScrolling: 'touch', height: BOTTOM_SHEET_CONTENT_HEIGHT }}
      >
        {children}
      </div>
    </div>
  );
};

function BottomSheetHeader() {
  return (
    <div
      className='relative rounded-t-[8px] pt-4 pb-1'
      style={{ height: BOTTOM_SHEET_HEADER_HEIGHT }}
    >
      <div className='h-1 w-8 rounded-[2px] bg-[#d0d0d0]'></div>
    </div>
  );
}

export default BottomSheet;
