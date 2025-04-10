import cn from '@/utils/cn';

const Icon = ({ icon, size, className }) => {
  const ImgIcon = icon;

  return (
    <div
      className={cn('flex justify-center items-center', className)}
      style={{ width: size, height: size }}
    >
      <ImgIcon />
    </div>
  );
};
export default Icon;
