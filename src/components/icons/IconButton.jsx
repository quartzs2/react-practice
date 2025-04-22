import { Link } from 'react-router';
import Icon from './Icon';

const IconButton = ({ url, icon, size, className, classNameIcon }) => {
  return (
    <Link to={url}>
      <Icon icon={icon} size={size} className={className} classNameIcon={classNameIcon} />
    </Link>
  );
};
export default IconButton;
