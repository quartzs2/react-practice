import cn from '@utils/cn';

const Skeleton = ({ animation = 'animate-pulse', className, isAnimate = true }) => {
  return (
    <div className={cn(`rounded-xl bg-gray-200`, isAnimate ? animation : '', className)}></div>
  );
};

export default Skeleton;
