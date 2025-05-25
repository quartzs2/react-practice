import ProductCard from '@components/ui/common/ProductCard';
import cn from '@utils/cn';

const ProductCardContainer = ({ isLoading, products, skeletonSize = 10, className }) => {
  return (
    <div
      className={cn(
        'grid max-w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-3 xl:grid-cols-4',
        className,
      )}
    >
      {products.map(({ id, title, price, images: [image] }) => (
        <ProductCard key={id} id={id} title={title} price={price} isLoading={false} image={image} />
      ))}
      {isLoading &&
        Array.from({ length: skeletonSize }).map((_, idx) => <ProductCard key={idx} isLoading />)}
    </div>
  );
};
export default ProductCardContainer;
