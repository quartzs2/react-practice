import cn from '@/utils/cn';

const Icon = ({ icon, size, className }) => {
  const ImgIcon = icon;

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <ImgIcon />
    </div>
  );
};
export default Icon;
