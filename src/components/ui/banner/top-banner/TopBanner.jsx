import phoneImg from '@assets/Images/main/banner/top/phone.png';
import cn from '@utils/cn';
import Button from '@components/ui/buttons/Button';
import { BUTTON_ARROW, BUTTON_STYLE, BUTTON_THICKNESS } from '@/constants/button';

const TopBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-banner-top-background flex h-full max-h-[769px] justify-center overflow-hidden lg:max-h-[632px]',
        className,
      )}
    >
      <div className='flex flex-col items-center gap-12 px-4 pt-22 lg:w-[1120px] lg:flex-row lg:items-start lg:pt-0'>
        <div className='flex flex-col items-center gap-8 lg:h-full lg:items-start lg:justify-center'>
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <div className='text-banner-dark-gray text-[25px] leading-8 font-semibold'>
              Pro.Beyond.
            </div>
            <div className='text-center text-7xl font-thin tracking-[-1%] text-white'>
              IPhone 14 <div className='font-semibold lg:inline'>Pro</div>
            </div>
            <div className='text-banner-light-gray text-center text-[19px] font-medium'>
              Created to change everything for the
              <div className='lg:inline'> better. For everyone</div>
            </div>
          </div>
          <Button
            content='Shop Now'
            thickness={BUTTON_THICKNESS.THICK}
            arrow={BUTTON_ARROW.OFF}
            style={BUTTON_STYLE.WHITE_STROKE}
          />
        </div>
        <img className='max-w-[406px] lg:pt-22' src={phoneImg} alt='phoneImg' />
      </div>
    </div>
  );
};
export default TopBanner;
