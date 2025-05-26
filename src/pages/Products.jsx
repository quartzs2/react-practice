import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL } from '@constants/url';
import { useParams } from 'react-router';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';
import getProductsByCategory from '@api/getProductsByCategory';
import useProductInfinityScroll from '@hooks/useProductInfinityScroll';
import Target from '@components/Target';
import getAllProducts from '@api/getAllProducts';
import Filter from '@components/ui/products/Filter';
import Button from '@components/ui/buttons/Button';
import FilterIcon from '@assets/Images/icons/24px/icon_filter.svg?react';
import ChevronDownIcon from '@assets/Images/icons/24px/icon_chevron_down.svg?react';
import { BUTTON_STYLE, BUTTON_THICKNESS } from '@constants/button';
import BottomSheet from '@components/ui/common/BottomSheet';

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
    <main>
      <Metadata
        title='cyber 메인 페이지'
        url={url}
        image={`${DEFAULT_META_DATA_URL}/og_product_page.png`}
        imageAlt='cyber 상품 페이지 이미지입니다. '
        description='cyber의 상품 페이지입니다.'
      />
      <section className='my-11 flex justify-center gap-4 md:hidden'>
        <FilterBtn>
          Filters <FilterIcon />
        </FilterBtn>
        <FilterBtn>
          By rating <ChevronDownIcon />
        </FilterBtn>
      </section>
      <section className='flex justify-center gap-8'>
        <Filter className={'hidden md:flex md:max-w-[200px] lg:max-w-[256px]'} />
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
      </section>
      <BottomSheet className={'md:hidden'}>
        <Filter className={'w-full max-w-full'} dropdownClassName={'max-w-full'} />
      </BottomSheet>
    </main>
  );
};

function FilterBtn({ children, onClick }) {
  return (
    <Button
      thickness={BUTTON_THICKNESS.THICK}
      style={BUTTON_STYLE.GRAY_STROKE}
      onClick={onClick}
      className={'w-[164px] justify-between p-4 text-[15px]/[16px] font-normal tracking-[-0.5%]'}
    >
      {children}
    </Button>
  );
}

export default Products;
