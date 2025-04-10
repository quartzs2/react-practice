import SearchIcon from '../../../assets/Images/icons/24px/icon_search.svg?react';
import Icon from '../../icons/Icon.jsx';
import cn from '../../../utils/cn.js';

const SearchBar = ({ className }) => {
  return (
    <div
      className={cn('flex items-center w-[433px] h-14 p-4  bg-light-gray rounded-lg', className)}
    >
      <Icon icon={SearchIcon} size='24px' />
      <input className='text-sm ml-3 w-full focus:outline-none' type='text' placeholder='Search' />
    </div>
  );
};
export default SearchBar;
