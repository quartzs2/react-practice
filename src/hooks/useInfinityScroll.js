import { useState } from 'react';
import usePagination from '@hooks/usePagination';
import useFetch from '@hooks/useFetch';
import useIntersect from '@hooks/useIntersect';
import useDeepCompareEffect from '@hooks/useDeepCompareEffect';

const useInfinityScroll = ({ countPerPage, query, options }) => {
  const [data, setData] = useState([]);

  const { fetchNextPageQuery, hasNextPage, setHasNextPage, setCurrentSkip } = usePagination({
    query,
    options,
    countPerPage,
  });
  const {
    data: fetchData,
    isLoading,
    error,
    refetch,
    refetchIndex,
  } = useFetch({ query: fetchNextPageQuery });

  const total = fetchData?.total ?? 0;
  const ref = useIntersect({
    onIntersect: async (entry, observer) => {
      observer.unobserve(entry.target);
      if (!isLoading && hasNextPage) {
        setCurrentSkip((prev) => prev + countPerPage);
      }
    },
    disabled: data.length === 0,
  });

  const refreshData = () => {
    setData([]);
    setCurrentSkip(0);
    setHasNextPage(true);
    refetch();
  };

  useDeepCompareEffect(() => {
    setData([]);
    setCurrentSkip(0);
    setHasNextPage(true);
  }, [options, query]);

  useDeepCompareEffect(() => {
    if (fetchData && fetchData.list) {
      setData((prevData) => {
        const existingElementIds = new Set(prevData.map((element) => element.id));
        const nonDuplicatedData = fetchData.list.filter(
          (element) => !existingElementIds.has(element.id),
        );
        return [...prevData, ...nonDuplicatedData];
      });
      setHasNextPage(fetchData.list.length === countPerPage);
    }
  }, [fetchData, setHasNextPage, countPerPage, refetchIndex]);

  return { data, total, isLoading, error, hasNextPage, ref, refreshData };
};

export default useInfinityScroll;
