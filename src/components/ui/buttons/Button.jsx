import cn from '@utils/cn';

const Button = ({ children, thickness, buttonStyle, className, onClick, ...rest }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded-lg border-1 text-center text-base leading-6 font-medium',
        thickness,
        buttonStyle,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
