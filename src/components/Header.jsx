import Logo from './icons/Logo';
import Icons from './ui/header/Icons';
import Navigation from './ui/header/Navigation';
import SearchBar from './ui/header/SearchBar';

const Header = () => {
  return (
    <header className='w-full flex justify-center'>
      <div className='flex items-center h-22 max-w-280 gap-8'>
        <Logo />
        <SearchBar />
        <Navigation />
        <Icons />
      </div>
    </header>
  );
};
export default Header;
