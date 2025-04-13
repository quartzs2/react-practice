import LogoImg from '@assets/Images/logo/logo_black.svg?react';
import { Link } from 'react-router';

const Logo = ({ className }) => {
  return (
    <Link className={className} to='/'>
      <span className='h-[32px] w-[96px]'>
        <LogoImg />
      </span>
    </Link>
  );
};
export default Logo;
