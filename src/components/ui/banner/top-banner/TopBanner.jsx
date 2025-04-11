import phoneImg from '@/assets/Images/main/banner/top/phone.png';
import cn from '@/utils/cn';

const TopBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'flex justify-center bg-banner-top-background max-h-[769px] h-full overflow-hidden lg:max-h-[632px]  ',
        className,
      )}
    >
      <div className='flex flex-col items-center pt-22 px-4 gap-12 lg:flex-row lg:max-w-[1120px] lg:items-start lg:pt-0'>
        <div className='flex flex-col items-center gap-8 lg:items-start lg:h-full lg:justify-center'>
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <div className='font-semibold text-[25px] leading-8 text-banner-dark-gray'>
              Pro.Beyond.
            </div>
            <div className='text-white text-7xl tracking-[-1%] font-thin text-center'>
              IPhone 14 <span className='font-semibold'>Pro</span>
            </div>
            <div className='text-banner-light-gray text-[19px] font-medium text-center'>
              Created to change everything for the better. For everyone
            </div>
          </div>
          {/* 임시 버튼 */}
          <div className='w-[191px] h-[56px] flex justify-center items-center rounded-[6px] border-1 border-white text-white'>
            Shop Now
          </div>
        </div>
        <img className='max-w-[406px] lg:pt-22' src={phoneImg} alt='phoneImg' />
      </div>
    </div>
  );
};
export default TopBanner;
