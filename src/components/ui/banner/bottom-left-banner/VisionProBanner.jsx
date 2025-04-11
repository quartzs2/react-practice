import cn from '@/utils/cn';
import visionProImg from '@/assets/Images/main/banner/bottom/VisionPro.png';

const VisionProBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-[#353535] h-[393px] py-10 px-4 flex gap-6 flex-col items-center',
        className,
      )}
    >
      <img className='w-[326px] h-[193px] scale-x-[-1]' src={visionProImg} />
      <div className='flex flex-col gap-2'>
        <div className='font-light text-white text-[34px] leading-10 text-center'>
          <span>Apple</span>{' '}
          <span>
            Vision <span className='font-medium'>Pro</span>
          </span>
        </div>
        <div className='text-banner-light-gray text-base font-medium leading-6 text-center '>
          <span>An immersive way to </span>
          <span>experience </span>
          <div>entertainment</div>
        </div>
      </div>
    </div>
  );
};
export default VisionProBanner;
