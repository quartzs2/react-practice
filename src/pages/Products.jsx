import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL } from '@constants/url';
import { useParams } from 'react-router';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';
import getProductsByCategory from '@api/getProductsByCategory';
import useProductInfinityScroll from '@hooks/useProductInfinityScroll';
import Target from '@components/Target';
import getAllProducts from '@api/getAllProducts';
import Filter from '@components/ui/products/Filter';

const Products = () => {
  const countPerPage = 6;
  const { catalog } = useParams();

  const query = catalog ? getProductsByCategory : getAllProducts;
  const options = catalog ? { categoryName: catalog } : null;
  const url = catalog
    ? `${DEFAULT_META_DATA_URL}/products/${catalog}`
    : `${DEFAULT_META_DATA_URL}/products`;

  const { products, total, isLoading, error, ref } = useProductInfinityScroll({
    countPerPage,
    query,
    options,
  });

  if (error) {
    console.log(error);
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div className='flex justify-center gap-8'>
      <Metadata
        title='cyber 메인 페이지'
        url={url}
        image={`${DEFAULT_META_DATA_URL}/og_product_page.png`}
        imageAlt='cyber 상품 페이지 이미지입니다. '
        description='cyber의 상품 페이지입니다.'
      />
      <Filter />
      <div className='flex justify-center'>
        <div className='flex flex-col items-start'>
          <div>Products Result : {total}</div>
          <ProductCardContainer
            products={products}
            isLoading={isLoading}
            skeletonSize={countPerPage}
            className={'md:grid-cols-2 xl:grid-cols-3'}
          />
          <Target ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default Products;
