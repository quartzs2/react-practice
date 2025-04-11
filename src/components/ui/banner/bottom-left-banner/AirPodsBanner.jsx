import cn from '@/utils/cn';
import airPodImg from '@/assets/Images/main/banner/bottom/AirPod.png';

const AirPodsBanner = ({ className }) => {
  return (
    <div
      className={cn('bg-bg-gray h-[376px] py-10 px-4 flex gap-6 flex-col items-center', className)}
    >
      <img className='w-[192px] h-[200px]' src={airPodImg} />
      <div className='flex flex-col gap-2'>
        <div className='font-light text-[34px] leading-10 text-center'>
          <span>Apple</span> <span>AirPods</span> <span className='font-medium'>Max</span>
        </div>
        <div className='text-banner-light-gray text-base font-medium leading-6 text-center '>
          <span>Computational audio. </span>
          <span>Listen, it's powerful</span>
        </div>
      </div>
    </div>
  );
};
export default AirPodsBanner;
