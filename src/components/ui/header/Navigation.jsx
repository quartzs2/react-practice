import classNames from 'classnames';
import { Link, useLocation } from 'react-router';
import cn from '@/utils/cn';

const Navigation = ({ className }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={cn('flex gap-[52px] w-[369px] text-base text-light-gray-text', className)}>
      <Link className={classNames({ 'text-black': currentPath === '/' })} to='/'>
        home
      </Link>
      <Link className={classNames({ 'text-black': currentPath === '/about' })} to='/about'>
        About
      </Link>
      <Link
        className={classNames({ 'text-black': currentPath === '/contact-us' })}
        to='/contact-us'
      >
        ContactUs
      </Link>
      <Link className={classNames({ 'text-black': currentPath === '/blog' })} to='/blog'>
        Blog
      </Link>
    </div>
  );
};
export default Navigation;
