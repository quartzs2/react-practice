import getCategoryList from '@api/getCategoryList';
import AirPodsBanner from '@components/ui/banner/bottom-left-banner/AirPodsBanner';
import PlaystationBanner from '@components/ui/banner/bottom-left-banner/PlaystationBanner';
import VisionProBanner from '@components/ui/banner/bottom-left-banner/VisionProBanner';
import MacbookBanner from '@components/ui/banner/bottom-right-banner/MacbookBanner';
import CategoryBanner from '@components/ui/banner/category-banner/CategoryBanner';
import ProductsBanner from '@components/ui/banner/products-banner/ProductsBanner';
import TopBanner from '@components/ui/banner/top-banner/TopBanner';
import useFetch from '@hooks/useFetch';

const Banner = () => {
  const { data: categories, isLoading, error } = useFetch({ query: getCategoryList });

  if (error) {
    console.log('에러:', error);
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      <TopBanner />
      <div className='lg:grid-rows-[328px 282px] lg:grid lg:grid-cols-4'>
        <AirPodsBanner className='lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-2' />
        <VisionProBanner className='lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-2' />
        <PlaystationBanner className='lg:col-span-2 lg:col-start-1 lg:row-span-1 lg:row-start-1' />
        <MacbookBanner className='lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1' />
      </div>
      <CategoryBanner />
      {!isLoading && categories !== null && <ProductsBanner categories={categories} />}
    </div>
  );
};
export default Banner;
