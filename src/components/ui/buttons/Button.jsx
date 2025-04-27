import cn from '@utils/cn';

const Button = ({ children, thickness, style, className, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded-lg border-1 text-center text-base leading-6 font-medium',
        thickness,
        style,
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
