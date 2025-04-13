import cn from '@utils/cn';
import PlaystationImg from '@assets/Images/main/banner/bottom/Playstation.png';
import PlaystationPCImg from '@assets/Images/main/banner/bottom/PlaystationPC.png';

const PlaystationBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'flex h-[424px] flex-col items-center gap-6 overflow-hidden bg-white px-4 py-10 lg:relative lg:h-[328px] lg:flex-row lg:p-0 lg:pr-2 xl:pr-4 2xl:pr-12',
        className,
      )}
    >
      <img
        className='absolute top-0 left-0 hidden h-[340px] w-[360px] lg:block'
        src={PlaystationPCImg}
        alt='Playstation for PC'
      />
      <img
        className='h-[200px] w-[200px] lg:hidden'
        src={PlaystationImg}
        alt='Playstation for Mobile'
      />
      <div className='flex flex-col gap-2 lg:w-full lg:items-end lg:justify-center lg:gap-4'>
        <div className='text-center text-[34px] leading-10 font-light lg:w-[220px] lg:text-start lg:text-[40px] xl:w-[338px]'>
          Playstation <span className='font-medium'>5</span>
        </div>
        <div className='text-banner-light-gray w-[343px] text-center text-base leading-6 font-medium lg:w-[220px] lg:text-start lg:text-[14px] xl:w-[338px]'>
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
          PlayStation experience.
        </div>
      </div>
    </div>
  );
};
export default PlaystationBanner;
