import { useCallback, useState } from 'react';
import useDeepCompareEffect from '@hooks/useDeepCompareEffect';

const usePagination = ({ query, options, countPerPage }) => {
  const [currentSkip, setCurrentSkip] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [stableOptions, setStableOptions] = useState(options);

  useDeepCompareEffect(() => {
    setStableOptions(options);
  }, [options]);

  const fetchNextPageQuery = useCallback(() => {
    return query({
      ...stableOptions,
      limit: countPerPage,
      skip: currentSkip,
    });
  }, [countPerPage, currentSkip, query, stableOptions]);

  return { fetchNextPageQuery, hasNextPage, setHasNextPage, setCurrentSkip };
};

export default usePagination;
