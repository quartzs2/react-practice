import cn from '@utils/cn';
import MacBookPCImg from '@assets/Images/main/banner/bottom/MacBookPC.png';
import MacBookMobileImg from '@assets/Images/main/banner/bottom/MacBookMobile.png';
import Button from '@components/ui/buttons/Button';
import { BUTTON_ARROW, BUTTON_STYLE, BUTTON_THICKNESS } from '@/constants/button';

const MacbookBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-bg-gray flex h-[504px] flex-col items-center gap-6 overflow-hidden px-4 py-10 lg:h-150 lg:flex-row lg:justify-between lg:px-0 lg:pl-14',
        className,
      )}
    >
      <img
        className='h-[200px] w-[330px] lg:hidden'
        src={MacBookMobileImg}
        alt='MacBook for Mobile'
      />
      <div className='flex flex-col gap-2 lg:gap-4'>
        <div className='text-center text-[34px] leading-10 font-medium lg:flex lg:flex-col lg:items-start lg:gap-4 lg:text-[64px] lg:font-thin'>
          <span>Macbook</span> <span className='font-light lg:font-medium'>Air</span>
        </div>
        <div className='text-banner-light-gray w-[343px] text-center text-base leading-6 font-medium lg:text-start lg:text-sm'>
          The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid
          Retina display.
        </div>
        <Button
          content='Shop Now'
          thickness={BUTTON_THICKNESS.THICK}
          arrow={BUTTON_ARROW.OFF}
          style={BUTTON_STYLE.BLACK_STROKE}
        />
      </div>
      <img
        className='hidden h-[502px] w-[292px] lg:block lg:py-11'
        src={MacBookPCImg}
        alt='MacBook for PC'
      />
    </div>
  );
};
export default MacbookBanner;
