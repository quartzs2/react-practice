import Dropdown from '@components/ui/common/Dropdown';
import cn from '@utils/cn';
import React from 'react';
import getCategoryList from '@api/getCategoryList';
import useFetch from '@hooks/useFetch';
import { useNavigate, useParams } from 'react-router';

const Filter = ({ className, dropdownClassName }) => {
  const DROPDOWN_ITEMS = [
    {
      title: 'Category',
      Children: CategoryItem,
    },
  ];

  return (
    <div className={cn('w-full max-w-[256px] gap-6', className)}>
      {DROPDOWN_ITEMS.map(({ title, Children }) => (
        <Dropdown
          className={cn('w-full max-w-[256px]', dropdownClassName)}
          key={title}
          dropdownTitle={title}
        >
          <Children />
        </Dropdown>
      ))}
    </div>
  );
};

function CategoryItem() {
  const navigate = useNavigate();
  const { data: categories, isLoading, error } = useFetch({ query: getCategoryList });
  const { catalog } = useParams();

  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      {categories?.map((category) => (
        <div className='flex gap-2' key={category}>
          <input
            type='checkbox'
            checked={category === catalog}
            id={`${category}`}
            onChange={() => {
              if (catalog !== category) {
                navigate(`/products/${category}`);
              } else {
                navigate('/products');
              }
            }}
          />
          <label htmlFor={`${category}`}>{category}</label>
        </div>
      ))}
    </div>
  );
}

export default Filter;
