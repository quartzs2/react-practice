import { BUTTON_ARROW, BUTTON_STYLE, BUTTON_TYPE } from '@/constants/button';
import cn from '@/utils/cn';
import ArrowDownIcon from '@assets/Images/icons/24px/icon_down_arrow.svg?react';
import Icon from '@/components/icons/Icon';

const Button = ({ content, thickness, arrow, style, className }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg border-1 text-center text-base leading-6 font-medium',
        BUTTON_TYPE[thickness][arrow],
        style,
        className,
      )}
    >
      {content}
      {arrow === BUTTON_ARROW.ON && (
        <Icon
          icon={ArrowDownIcon}
          size={'24px'}
          classNameIcon={cn('stroke-black', {
            'stroke-white ': style !== BUTTON_STYLE.BLACK_STROKE,
          })}
        />
      )}
    </button>
  );
};
export default Button;
