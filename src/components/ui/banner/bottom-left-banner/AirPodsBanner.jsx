import cn from '@/utils/cn';
import airPodImg from '@/assets/Images/main/banner/bottom/AirPod.png';
import airPodPCImg from '@/assets/Images/main/banner/bottom/AirPodPC.png';

const AirPodsBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-bg-gray h-[376px] py-10 px-4 flex gap-6 flex-col items-center lg:h-[272px] lg:p-0 lg:flex-row lg:justify-between xl:pr-12',
        className,
      )}
    >
      <img className='w-[192px] h-[200px] lg:hidden' src={airPodImg} alt='airPod for Mobile' />
      <img className='w-[104px] h-[272px] hidden lg:block' src={airPodPCImg} alt='airPod for PC' />
      <div className='flex flex-col gap-2'>
        <div className='font-light text-[34px] leading-10 text-center lg:text-start lg:text-[29px] lg:flex lg:flex-col'>
          <span>Apple</span> <span>AirPods</span> <span className='font-medium'>Max</span>
        </div>
        <div className='text-banner-light-gray text-base font-medium leading-6 text-center lg:flex lg:flex-col lg:text-start lg:text-[14px] lg:max-w-40'>
          <span>Computational audio. </span>
          <span>Listen, it's powerful</span>
        </div>
      </div>
    </div>
  );
};
export default AirPodsBanner;
