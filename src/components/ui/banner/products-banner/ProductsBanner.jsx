import { useEffect, useState } from 'react';
import CategoryTab from '@components/ui/banner/products-banner/CategoryTab';
import ProductCard from '@components/ui/ProductCard';

const ProductsBanner = ({ categories }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const categoryId = categories[currentIdx]?.id;

    if (categoryId === undefined) {
      return;
    }
    setIsLoading(true);

    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products?limit=8&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, [currentIdx, categories]);

  return (
    <div className='flex flex-col items-center gap-8 px-4 py-14'>
      <CategoryTab currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} categories={categories} />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {isLoading
          ? Array.from({ length: 8 }).map((_, idx) => <ProductCard key={idx} isLoading />)
          : productData.map(({ id, title, price, images: [image] }) => (
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
