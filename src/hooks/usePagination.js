import { useCallback, useEffect, useRef, useState } from 'react';
import { isEqual } from 'lodash';

const usePagination = ({ query, options, countPerPage }) => {
  const [currentSkip, setCurrentSkip] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [stableOptions, setStableOptions] = useState(options);

  const prevOptionsRef = useRef();

  useEffect(() => {
    if (!isEqual(options, prevOptionsRef.current)) {
      setStableOptions(options);
    }
    prevOptionsRef.current = options;
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
