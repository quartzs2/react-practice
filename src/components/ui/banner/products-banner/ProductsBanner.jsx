import { useState } from 'react';
import CategoryTab from '@components/ui/banner/products-banner/CategoryTab';
import ProductCard from '@components/ui/ProductCard';
import useFetch from '@hooks/useFetch';
import getProductsByCategory from '@api/getProductsByCategory';

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

  const products = data?.products.slice(0, 8) ?? [];

  return (
    <div className='flex flex-col items-center gap-8 px-4 py-14'>
      <CategoryTab currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} categories={categories} />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {isLoading &&
          Array.from({ length: 8 }).map((_, idx) => <ProductCard key={idx} isLoading />)}
        {!isLoading &&
          products.map(({ id, title, price, images: [image] }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              isLoading={false}
              image={image}
            />
          ))}
      </div>
    </div>
  );
};
export default ProductsBanner;
