const Icon = ({ icon, size }) => {
  const ImgIcon = icon;

  return (
    <div className='flex justify-center items-center' style={{ width: size, height: size }}>
      <ImgIcon />
    </div>
  );
};
export default Icon;
