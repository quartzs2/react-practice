import Button from '@components/ui/buttons/Button';
import { BUTTON_STYLE, BUTTON_THICKNESS } from '@constants/button';

function FilterBtn({ children, onClick }) {
  return (
    <Button
      thickness={BUTTON_THICKNESS.THICK}
      style={BUTTON_STYLE.GRAY_STROKE}
      onClick={onClick}
      className={'w-[164px] justify-between p-4 text-[15px]/[16px] font-normal tracking-[-0.5%]'}
    >
      {children}
    </Button>
  );
}

export default FilterBtn;
