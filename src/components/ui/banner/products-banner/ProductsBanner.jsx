import { useState } from 'react';
import CategoryTab from '@components/ui/banner/products-banner/CategoryTab';
import useFetch from '@hooks/useFetch';
import getProductsByCategory from '@api/getProductsByCategory';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';

const ProductsBanner = ({ categories }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const categoryName = categories[currentIdx];

  const { data, isLoading, error } = useFetch({
    query: getProductsByCategory,
    options: { categoryName },
  });

  if (error) {
    console.log(error);
    return <div>에러가 발생했습니다.</div>;
  }

  const products = data?.list.slice(0, 8) ?? [];

  return (
    <div className='flex flex-col items-center gap-8 px-4 py-14'>
      <CategoryTab currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} categories={categories} />
      <ProductCardContainer products={products} isLoading={isLoading} />
    </div>
  );
};
export default ProductsBanner;
