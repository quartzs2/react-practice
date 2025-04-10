import SearchIcon from '../../../assets/Images/icons/24px/icon_search.svg?react';
import Icon from '../../icons/Icon.jsx';

const SearchBar = () => {
  return (
    <div className='flex items-center w-[433px] p-4  bg-light-gray rounded-lg'>
      <Icon icon={SearchIcon} size='24px' />
      <input className='text-sm ml-3 w-full focus:outline-none' type='text' placeholder='Search' />
    </div>
  );
};
export default SearchBar;
