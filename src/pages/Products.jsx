import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL } from '@constants/url';
import { useParams } from 'react-router';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';
import getProductsByCategory from '@api/getProductsByCategory';
import useProductInfinityScroll from '@hooks/useProductInfinityScroll';
import Target from '@components/Target';

const Products = () => {
  const countPerPage = 6;
  const { catalog } = useParams();

  const { products, total, isLoading, error, ref } = useProductInfinityScroll({
    countPerPage,
    query: getProductsByCategory,
    options: { categoryName: catalog },
  });

  if (error) {
    console.log(error);
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
          <ProductCardContainer
            products={products}
            isLoading={isLoading}
            skeletonSize={countPerPage}
          />
          <Target ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default Products;
