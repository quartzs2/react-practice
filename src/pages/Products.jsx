import Metadata from '@components/Metadata';
import { DEFAULT_META_DATA_URL, OG_PRODUCT_PAGE_IMAGE_URL, PATH } from '@constants/url';
import { useParams } from 'react-router';
import ProductCardContainer from '@components/ui/common/ProductCardContainer';
import getProductsByCategory from '@api/getProductsByCategory';
import useInfinityScroll from '@hooks/useInfinityScroll';
import Target from '@components/Target';
import getAllProducts from '@api/getAllProducts';
import Filter from '@components/ui/products/Filter';
import useFetch from '@hooks/useFetch';
import getCategoryList from '@api/getCategoryList';
import FilterIcon from '@assets/Images/icons/24px/icon_filter.svg?react';
import ChevronDownIcon from '@assets/Images/icons/24px/icon_chevron_down.svg?react';
import BottomSheet from '@components/ui/common/BottomSheet';
import { useMemo } from 'react';
import FilterBtn from '@components/ui/buttons/FilterBtn';
import useIsMobileDevice from '@hooks/useIsMobileDevice';
import ProductCardContainerSkeleton from '@components/ui/common/ProductCardContainerSkeleton';
import PullToRefresh from '@components/ui/common/PullToRefresh';
import { PulseLoader } from 'react-spinners';

const Products = () => {
  const countPerPage = 6;
  const { catalog } = useParams();
  const isMobile = useIsMobileDevice();

  const query = useMemo(() => (catalog ? getProductsByCategory : getAllProducts), [catalog]);
  const options = useMemo(() => (catalog ? { categoryName: catalog } : null), [catalog]);
  const url = catalog
    ? `${DEFAULT_META_DATA_URL}${PATH.PRODUCTS}/${catalog}`
    : `${DEFAULT_META_DATA_URL}${PATH.PRODUCTS}`;

  const { data, total, isLoading, error, ref, hasNextPage, refreshData } = useInfinityScroll({
    countPerPage,
    query,
    options,
  });

  const isLoadingDone = !hasNextPage && !isLoading;

  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useFetch({ query: getCategoryList });

  if (error) {
    console.log(error);
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      <Metadata
        title='cyber Products 페이지'
        url={url}
        image={OG_PRODUCT_PAGE_IMAGE_URL}
        imageAlt='cyber 상품 페이지 이미지입니다. '
        description='cyber의 상품 페이지입니다.'
      />
      <PullToRefresh onRefresh={refreshData} maxDistance={80} loadingComponent={<PulseLoader />}>
        {isMobile && (
          <section className='my-11 flex justify-center gap-4 md:hidden'>
            <FilterBtn>
              Filters <FilterIcon />
            </FilterBtn>
            <FilterBtn>
              By rating <ChevronDownIcon />
            </FilterBtn>
          </section>
        )}
        <section className='flex justify-center gap-8'>
          <Filter
            categories={categoryData?.list}
            categoryIsLoading={categoryLoading}
            categoryError={categoryError}
            className={'hidden md:flex md:max-w-[200px] lg:max-w-[256px]'}
          />
          <div className='flex justify-center'>
            <div className='flex flex-col items-start'>
              <div>Products Result : {total}</div>
              <ProductCardContainer
                products={data}
                skeletonSize={countPerPage}
                className={'md:grid-cols-2 xl:grid-cols-3'}
              />
              <Target ref={ref} />
              {!isLoadingDone && (
                <ProductCardContainerSkeleton className={'md:grid-cols-2 xl:grid-cols-3'} />
              )}
            </div>
          </div>
        </section>
      </PullToRefresh>
      {isMobile && (
        <BottomSheet className={'md:hidden'}>
          <Filter
            categories={categoryData?.list}
            categoryIsLoading={categoryLoading}
            categoryError={categoryError}
            className={'w-full max-w-full'}
            dropdownClassName={'max-w-full'}
          />
          <Filter
            categories={categoryData?.list}
            categoryIsLoading={categoryLoading}
            categoryError={categoryError}
            className={'w-full max-w-full'}
            dropdownClassName={'max-w-full'}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default Products;
