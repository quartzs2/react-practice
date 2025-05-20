import ProductCard from '@components/ui/common/ProductCard';

const ProductCardContainer = ({ isLoading, products }) => {
  return (
    <div className='grid max-w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4'>
      {isLoading && Array.from({ length: 8 }).map((_, idx) => <ProductCard key={idx} isLoading />)}
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
  );
};
export default ProductCardContainer;
