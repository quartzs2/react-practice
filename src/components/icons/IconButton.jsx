import { Link } from 'react-router';

const IconButton = ({ url, icon, size }) => {
  const ImgIcon = icon;
  const sizeClass = `w-[${size}] h-[${size}]`;

  return (
    <Link to={url}>
      <span className={sizeClass}>
        <ImgIcon />
      </span>
    </Link>
  );
};
export default IconButton;
