import { Link } from 'react-router';

const Icon = ({ url, icon, size }) => {
  return (
    <Link to={url}>
      <span className={`w-[${size}] h-[${size}]`}>{icon}</span>
    </Link>
  );
};
export default Icon;
