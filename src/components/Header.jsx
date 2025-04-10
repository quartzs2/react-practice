import Logo from './icons/Logo';
import Icons from './ui/header/Icons';
import Navigation from './ui/header/Navigation';
import SearchBar from './ui/header/SearchBar';

const Header = () => {
  return (
    <header className='flex items-center h-22'>
      <Logo />
      <SearchBar />
      <Navigation />
      <Icons />
    </header>
  );
};
export default Header;
