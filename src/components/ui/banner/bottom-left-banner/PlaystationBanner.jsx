import cn from '@/utils/cn';
import PlaystationImg from '@/assets/Images/main/banner/bottom/Playstation.png';
import PlaystationPCImg from '@/assets/Images/main/banner/bottom/PlaystationPC.png';

const PlaystationBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-white h-[424px] py-10 px-4 flex gap-6 flex-col items-center overflow-hidden lg:relative lg:flex-row lg:h-[328px] lg:p-0 lg:pr-2 xl:pr-4 2xl:pr-12',
        className,
      )}
    >
      <img
        className='hidden absolute left-0 top-0 w-[360px] h-[340px] lg:block'
        src={PlaystationPCImg}
      />
      <img className='w-[200px] h-[200px] lg:hidden' src={PlaystationImg} />
      <div className='flex flex-col gap-2 lg:justify-center lg:w-full  lg:gap-4 lg:items-end'>
        <div className='font-light text-[34px] leading-10 text-center lg:text-start lg:w-[220px] lg:text-[40px] xl:w-[338px]'>
          Playstation <span className='font-medium'>5</span>
        </div>
        <div className='w-[343px] text-banner-light-gray text-base font-medium leading-6 text-center lg:text-start lg:w-[220px] lg:text-[14px] xl:w-[338px]'>
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
          PlayStation experience.
        </div>
      </div>
    </div>
  );
};
export default PlaystationBanner;
