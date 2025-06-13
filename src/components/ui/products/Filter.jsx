import Dropdown from '@components/ui/common/Dropdown';
import cn from '@utils/cn';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { PATH } from '@constants/url';

const Filter = ({ className, dropdownClassName, ...rest }) => {
  const { categories, categoryIsLoading, categoryError } = rest;

  const DROPDOWN_ITEMS = [
    {
      title: 'Category',
      Children: () => (
        <CategoryItem data={categories} isLoading={categoryIsLoading} error={categoryError} />
      ),
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

function CategoryItem({ data, isLoading, error }) {
  const navigate = useNavigate();
  const { catalog } = useParams();

  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      {data?.map((category) => (
        <div className='flex gap-2' key={category}>
          <input
            type='checkbox'
            checked={category === catalog}
            id={`${category}`}
            onChange={() => {
              if (catalog !== category) {
                navigate(`${PATH.PRODUCTS}/${category}`);
              } else {
                navigate(`${PATH.PRODUCTS}`);
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
