import { useEffect, useState } from 'react';
import usePagination from '@hooks/usePagination';
import useFetch from '@hooks/useFetch';
import useIntersect from '@hooks/useIntersect';

const useProductInfinityScroll = ({ countPerPage, query, options }) => {
  const [products, setProducts] = useState([]);

  const { fetchNextPageQuery, hasNextPage, setHasNextPage, setCurrentSkip } = usePagination({
    query,
    options,
    countPerPage,
  });
  const { data, isLoading, error } = useFetch({ query: fetchNextPageQuery });

  const total = data?.total ?? 0;
  const ref = useIntersect({
    onIntersect: async (entry, observer) => {
      observer.unobserve(entry.target);
      if (!isLoading && hasNextPage) {
        setCurrentSkip((prev) => prev + countPerPage);
      }
    },
  });

  useEffect(() => {
    if (data && data.products) {
      setProducts((prevProducts) => {
        const existingProductIds = new Set(prevProducts.map((product) => product.id));
        const nonDuplicatedProducts = data.products.filter(
          (product) => !existingProductIds.has(product.id),
        );

        return [...prevProducts, ...nonDuplicatedProducts];
      });
      setHasNextPage(data.products.length === countPerPage);
    }
  }, [data, setHasNextPage, countPerPage]);

  return { products, total, isLoading, error, hasNextPage, ref };
};

export default useProductInfinityScroll;
