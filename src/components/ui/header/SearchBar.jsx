import SearchIcon from '@assets/Images/icons/24px/icon_search.svg?react';
import Icon from '@components/icons/Icon.jsx';
import cn from '@utils/cn.js';

const SearchBar = ({ className }) => {
  return (
    <div className={cn('bg-light-gray flex h-14 w-[433px] items-center rounded-lg p-4', className)}>
      <Icon icon={SearchIcon} size='24px' />
      <input className='ml-3 w-full text-sm focus:outline-none' type='text' placeholder='Search' />
    </div>
  );
};
export default SearchBar;
