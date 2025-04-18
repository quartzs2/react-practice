import Logo from './icons/Logo';
import Hamburger from './ui/header/Hamburger';
import Icons from './ui/header/Icons';
import Navigation from './ui/header/Navigation';
import SearchBar from './ui/header/SearchBar';

const Header = () => {
  return (
    <header className='w-full flex justify-center'>
      <div className='flex items-center  h-22 max-w-280 w-full gap-8 px-4'>
        <Logo className={'mr-auto'} />
        <SearchBar className={'hidden lg:flex'} />
        <Navigation className={'hidden lg:flex'} />
        <Icons className={'hidden md:flex'} />
        <Hamburger className={'md:hidden'} />
      </div>
    </header>
  );
};
export default Header;
