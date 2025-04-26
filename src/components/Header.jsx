import Logo from '@components/icons/Logo';
import Hamburger from '@components/ui/header/Hamburger';
import Icons from '@components/ui/header/Icons';
import Navigation from '@components/ui/header/Navigation';
import SearchBar from '@components/ui/header/SearchBar';

const Header = () => {
  return (
    <header className='flex w-full justify-center'>
      <div className='flex h-22 w-full max-w-280 items-center gap-8 px-4'>
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
