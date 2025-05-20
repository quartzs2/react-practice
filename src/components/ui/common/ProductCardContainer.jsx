import ProductCard from '@components/ui/common/ProductCard';

const ProductCardContainer = ({ isLoading, products, skeletonSize = 10 }) => {
  return (
    <div className='grid max-w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4'>
      {products.map(({ id, title, price, images: [image] }) => (
        <ProductCard key={id} id={id} title={title} price={price} isLoading={false} image={image} />
      ))}
      {isLoading &&
        Array.from({ length: skeletonSize }).map((_, idx) => <ProductCard key={idx} isLoading />)}
    </div>
  );
};
export default ProductCardContainer;
