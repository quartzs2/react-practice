import cn from '@utils/cn';
import visionProImg from '@assets/Images/main/banner/bottom/VisionPro.png';
import visionProPCImg from '@assets/Images/main/banner/bottom/VisionProPC.png';
import useImageOptimization from '@hooks/useImageOptimization';

const VisionProBanner = ({ className }) => {
  const visionProRef = useImageOptimization({ src: visionProImg });
  const visionProPCRef = useImageOptimization({ src: visionProPCImg });

  return (
    <div
      className={cn(
        'flex h-[393px] flex-col items-center gap-6 bg-[#353535] px-4 py-10 lg:h-[272px] lg:flex-row lg:justify-between lg:p-0 lg:pr-12',
        className,
      )}
    >
      <img
        className='h-[193px] w-[326px] scale-x-[-1] lg:hidden'
        ref={visionProRef}
        alt='visionPro for Mobile'
      />
      <img
        className='hidden h-[190px] w-[136px] lg:block'
        ref={visionProPCRef}
        alt='visionPro for PC'
      />
      <div className='flex flex-col gap-2'>
        <div className='text-center text-[34px] leading-10 font-light text-white lg:flex lg:flex-col lg:text-start lg:text-[29px]'>
          <span>Apple</span>{' '}
          <span>
            Vision <span className='font-medium'>Pro</span>
          </span>
        </div>
        <div className='text-banner-light-gray text-center text-base leading-6 font-medium lg:flex lg:flex-col lg:text-start lg:text-[14px]'>
          <span>An immersive way to </span>
          <span>experience </span>
          <div>entertainment</div>
        </div>
      </div>
    </div>
  );
};
export default VisionProBanner;
