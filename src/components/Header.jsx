import Logo from './icons/Logo';
import SearchBar from './ui/header/SearchBar';

const Header = () => {
  return (
    <header className='flex items-center h-22'>
      <Logo />
      <SearchBar />
    </header>
  );
};
export default Header;
