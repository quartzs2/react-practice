import { useEffect, useState } from 'react';
import AirPodsBanner from './bottom-left-banner/AirPodsBanner';
import PlaystationBanner from './bottom-left-banner/PlaystationBanner';
import VisionProBanner from './bottom-left-banner/VisionProBanner';
import MacbookBanner from './bottom-right-banner/MacbookBanner';
import CategoryBanner from './category-banner/CategoryBanner';
import ProductsBanner from './products-banner/ProductsBanner';
import TopBanner from './top-banner/TopBanner';

const Banner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories?limit=6')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
      <ProductsBanner categories={categories} />
    </div>
  );
};
export default Banner;
