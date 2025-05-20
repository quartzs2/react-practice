import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL } from '@constants/url';
import { useParams } from 'react-router';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';
import getProductsByCategory from '@api/getProductsByCategory';
import { useEffect, useState } from 'react';
import usePagination from '@hooks/usePagination';
import useIntersect from '@hooks/useIntersect';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { catalog } = useParams();
  const { data, error, isLoading, fetchNextPage, hasNextPage } = usePagination({
    query: getProductsByCategory,
    options: { categoryName: catalog },
    countPerPage: 6,
  });
  const total = data?.total ?? 0;
  const ref = useIntersect({
    onIntersect: async (entry, observer) => {
      observer.unobserve(entry.target);
      if (!isLoading && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      <Metadata
        title='cyber 메인 페이지'
        url={`${DEFAULT_META_DATA_URL}/${catalog}`}
        image={`${DEFAULT_META_DATA_URL}/og_product_page.png`}
        imageAlt='cyber 상품 페이지 이미지입니다. '
        description='cyber의 상품 페이지입니다.'
      />
      <div className='flex justify-center'>
        <div className='flex flex-col items-start'>
          <div>Products Result : {total}</div>
          <ProductCardContainer products={products} isLoading={isLoading} skeletonSize={6} />
          <Target ref={ref} />
        </div>
      </div>
    </div>
  );
};

function Target({ ref }) {
  return <div className='h-[1px]' ref={ref}></div>;
}

export default Products;
