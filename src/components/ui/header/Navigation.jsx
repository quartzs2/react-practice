import { Link, useLocation } from 'react-router';
import cn from '@utils/cn';
import { NAVIGATION_URL } from '@constants/url';

const Navigation = ({ className }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={cn('text-light-gray-text flex w-[369px] gap-[52px] text-base', className)}>
      {Object.entries(NAVIGATION_URL).map(([url, urlText]) => (
        <Link key={url} className={cn({ 'text-black': currentPath === url })} to={url}>
          {urlText}
        </Link>
      ))}
    </div>
  );
};
export default Navigation;
