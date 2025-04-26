import Icon from '@/components/icons/Icon';
import cn from '@/utils/cn';
import { useNavigate } from 'react-router';

const Category = ({ name, image, className, slug }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`products/${slug}`);

  return (
    <button
      type='button'
      onClick={handleClick}
      className={cn(
        'bg-bg-gray flex h-32 w-40 flex-col items-center justify-center gap-2 rounded-[15px] px-13 py-6',
        className,
      )}
    >
      {name === undefined ? (
        '준비중'
      ) : (
        <>
          {image !== undefined && <Icon icon={image} size={'48px'} />}
          <span className='text-center text-base leading-6 font-medium whitespace-nowrap'>
            {name}
          </span>
        </>
      )}
    </button>
  );
};
export default Category;
