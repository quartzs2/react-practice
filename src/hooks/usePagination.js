import useFetch from '@hooks/useFetch';
import { useCallback, useEffect, useState } from 'react';

const usePagination = ({ query, options, countPerPage }) => {
  const [currentSkip, setCurrentSkip] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { data, isLoading, error } = useFetch({
    query,
    options: { ...options, limit: countPerPage, skip: currentSkip },
  });

  const fetchNextPage = useCallback(() => {
    if (hasNextPage) {
      setCurrentSkip((prev) => prev + countPerPage);
    }
  }, [countPerPage, hasNextPage]);

  useEffect(() => {
    if (data) {
      setHasNextPage(data.products.length === countPerPage);
    }
  }, [data, countPerPage]);

  return { data, isLoading, error, fetchNextPage, hasNextPage };
};
export default usePagination;
