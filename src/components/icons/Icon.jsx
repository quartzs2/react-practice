import cn from '@utils/cn';

const Icon = ({ icon, size, className, classNameIcon }) => {
  const ImgIcon = icon;

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <ImgIcon className={cn(classNameIcon)} />
    </div>
  );
};
export default Icon;
