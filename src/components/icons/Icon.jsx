const Icon = ({ icon, size }) => {
  const ImgIcon = icon;
  const sizeClass = `w-[${size}] h-[${size}]`;

  return (
    <span className={sizeClass}>
      <ImgIcon />
    </span>
  );
};
export default Icon;
