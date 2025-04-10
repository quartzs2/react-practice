import { Link } from 'react-router';
import Icon from './Icon';

const IconButton = ({ url, icon, size }) => {
  return (
    <Link to={url}>
      <Icon icon={icon} size={size} />
    </Link>
  );
};
export default IconButton;
