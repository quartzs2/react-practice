import Logo from './icons/Logo';
import Navigation from './ui/header/Navigation';
import SearchBar from './ui/header/SearchBar';

const Header = () => {
  return (
    <header className='flex items-center h-22'>
      <Logo />
      <SearchBar />
      <Navigation />
    </header>
  );
};
export default Header;
