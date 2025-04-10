import IconButton from '../../icons/IconButton';
import FavoriteIcon from '../../../assets/Images/icons/32px/icon_favorites.svg?react';
import CartIcon from '../../../assets/Images/icons/32px/icon_cart.svg?react';
import UserIcon from '../../../assets/Images/icons/32px/icon_user.svg?react';

const Icons = () => {
  return (
    <div className='flex w-36 h-8 gap-6'>
      <IconButton url={'/favorites'} icon={FavoriteIcon} size={'32px'} />
      <IconButton url={'/cart'} icon={CartIcon} size={'32px'} />
      <IconButton url={'/user-info'} icon={UserIcon} size={'32px'} />
    </div>
  );
};
export default Icons;
