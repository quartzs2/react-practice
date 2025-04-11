import cn from '@/utils/cn';
import PlaystationImg from '@/assets/Images/main/banner/bottom/Playstation.png';

const PlaystationBanner = ({ className }) => {
  return (
    <div
      className={cn('bg-white h-[424px] py-10 px-4 flex gap-6 flex-col items-center', className)}
    >
      <img className='w-[200px] h-[200px]' src={PlaystationImg} />
      <div className='flex flex-col gap-2'>
        <div className='font-light text-[34px] leading-10 text-center'>
          Playstation <span className='font-medium'>5</span>
        </div>
        <div className='w-[343px] text-banner-light-gray text-base font-medium leading-6 text-center '>
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
          PlayStation experience.
        </div>
      </div>
    </div>
  );
};
export default PlaystationBanner;
