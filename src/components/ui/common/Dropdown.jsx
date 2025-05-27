import cn from '@utils/cn';
import React, { useState } from 'react';
import ArrowDown from '@assets/Images/icons/24px/icon_down_arrow.svg?react';
import Button from '@components/ui/buttons/Button';

const DropdownTitle = ({ dropdownTitle, onClick, isOpen }) => {
  return (
    <Button
      onClick={onClick}
      className='flex h-[48px] w-full items-center justify-between rounded-none border-0 border-b-[0.5px] border-b-[#B5B5B5] text-[18px]/[24px] font-medium tracking-[3%]'
    >
      {dropdownTitle}
      <div className={cn('stroke-black stroke-2', { 'rotate-180': isOpen })}>{<ArrowDown />}</div>
    </Button>
  );
};

const Dropdown = ({ className, children, dropdownTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <DropdownTitle
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
        dropdownTitle={dropdownTitle}
      />
      <div className={cn('hidden', { block: isOpen })}>{children}</div>
    </div>
  );
};

export default Dropdown;
