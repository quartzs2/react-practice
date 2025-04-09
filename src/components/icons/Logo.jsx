import LogoImg from '../../assets/Images/logo/logo_black.svg?react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to='/'>
      <span className='w-[96px] h-[32px]'>
        <LogoImg />
      </span>
    </Link>
  );
};
export default Logo;
