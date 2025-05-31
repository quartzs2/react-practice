import IconButton from '@components/icons/IconButton';
import FavoriteIcon from '@assets/Images/icons/32px/icon_favorites.svg?react';
import CartIcon from '@assets/Images/icons/32px/icon_cart.svg?react';
import UserIcon from '@assets/Images/icons/32px/icon_user.svg?react';
import cn from '@utils/cn';
import { PATH } from '@constants/url';

const Icons = ({ className }) => {
  return (
    <div className={cn('flex h-8 w-36 gap-6', className)}>
      <IconButton url={`${PATH.FAVORITES}`} icon={FavoriteIcon} size={'32px'} />
      <IconButton url={`${PATH.CART}`} icon={CartIcon} size={'32px'} />
      <IconButton url={`${PATH.USER_INFO}`} icon={UserIcon} size={'32px'} />
    </div>
  );
};
export default Icons;
