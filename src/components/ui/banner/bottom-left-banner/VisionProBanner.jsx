import cn from '@/utils/cn';
import visionProImg from '@/assets/Images/main/banner/bottom/VisionPro.png';
import visionProPCImg from '@/assets/Images/main/banner/bottom/VisionProPC.png';

const VisionProBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-[#353535] h-[393px] py-10 px-4 flex gap-6 flex-col items-center lg:h-[272px] lg:flex-row lg:justify-between lg:p-0 lg:pr-12',
        className,
      )}
    >
      <img className='w-[326px] h-[193px] scale-x-[-1] lg:hidden' src={visionProImg} />
      <img className='w-[136px] h-[190px] hidden lg:block' src={visionProPCImg} />
      <div className='flex flex-col gap-2'>
        <div className='font-light text-white text-[34px] leading-10 text-center lg:text-start lg:flex lg:flex-col lg:text-[29px]'>
          <span>Apple</span>{' '}
          <span>
            Vision <span className='font-medium'>Pro</span>
          </span>
        </div>
        <div className='text-banner-light-gray text-base font-medium leading-6 text-center lg:text-start lg:text-[14px] lg:flex lg:flex-col'>
          <span>An immersive way to </span>
          <span>experience </span>
          <div>entertainment</div>
        </div>
      </div>
    </div>
  );
};
export default VisionProBanner;
