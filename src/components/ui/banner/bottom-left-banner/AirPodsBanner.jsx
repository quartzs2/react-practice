import cn from '@utils/cn';
import airPodImg from '@assets/Images/main/banner/bottom/AirPod.png';
import airPodPCImg from '@assets/Images/main/banner/bottom/AirPodPC.png';
import useImageOptimization from '@hooks/useImageOptimization';

const AirPodsBanner = ({ className }) => {
  const airPodRef = useImageOptimization({ src: airPodImg });
  const airPodPCref = useImageOptimization({ src: airPodPCImg });

  return (
    <div
      className={cn(
        'bg-bg-gray flex h-[376px] flex-col items-center gap-6 px-4 py-10 lg:h-[272px] lg:flex-row lg:justify-between lg:p-0 xl:pr-12',
        className,
      )}
    >
      <img className='h-[200px] w-[192px] lg:hidden' ref={airPodRef} alt='airPod for Mobile' />
      <img className='hidden h-[272px] w-[104px] lg:block' ref={airPodPCref} alt='airPod for PC' />
      <div className='flex flex-col gap-2'>
        <div className='text-center text-[34px] leading-10 font-light lg:flex lg:flex-col lg:text-start lg:text-[29px]'>
          <span>Apple</span> <span>AirPods</span> <span className='font-medium'>Max</span>
        </div>
        <div className='text-banner-light-gray text-center text-base leading-6 font-medium lg:flex lg:max-w-40 lg:flex-col lg:text-start lg:text-[14px]'>
          <span>Computational audio. </span>
          <span>Listen, it&apos;s powerful</span>
        </div>
      </div>
    </div>
  );
};
export default AirPodsBanner;
