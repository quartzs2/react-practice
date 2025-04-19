import Icon from '@/components/icons/Icon';
import cn from '@/utils/cn';

const Category = ({ name, image, className }) => {
  return (
    <div
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
    </div>
  );
};
export default Category;
