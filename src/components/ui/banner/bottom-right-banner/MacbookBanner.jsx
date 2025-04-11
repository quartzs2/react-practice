import cn from '@/utils/cn';
import MacBookPCImg from '@/assets/Images/main/banner/bottom/MacBookPC.png';
import MacBookMobileImg from '@/assets/Images/main/banner/bottom/MacBookMobile.png';

const MacbookBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-bg-gray h-[504px] py-10 px-4 flex gap-6 flex-col items-center lg:flex-row lg:justify-between lg:px-0 lg:pl-14 ',
        className,
      )}
    >
      <img className='w-[330px] h-[200px] lg:hidden ' src={MacBookMobileImg} />
      <div className='flex flex-col gap-2 lg:gap-4'>
        <div className='font-medium text-[34px] leading-10 text-center lg:text-[64px] lg:font-thin lg:flex lg:flex-col lg:items-start lg:gap-4'>
          <span>Macbook</span> <span className='font-light lg:font-medium'>Air</span>
        </div>
        <div className='text-banner-light-gray w-[343px] text-base font-medium leading-6 text-center lg:text-start lg:text-sm '>
          The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid
          Retina display.
        </div>
        {/* 임시 버튼 */}
        <div className='w-[343px] h-[56px] flex justify-center items-center rounded-[6px] border-1 border-black'>
          Shop Now
        </div>
      </div>
      <img className='w-[292px] h-[502px] hidden lg:block lg:py-11' src={MacBookPCImg} />
    </div>
  );
};
export default MacbookBanner;
