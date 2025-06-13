import { useCallback, useState } from 'react';
import useDeepCompareEffect from '@hooks/useDeepCompareEffect';

const useFetch = ({ enabled = true, options, query }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = useCallback(() => {
    setRefetchIndex((prevIndex) => prevIndex + 1);
  }, []);

  useDeepCompareEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await query({ ...options });
        const responseData = await response.json();

        setData(responseData);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (enabled) {
      fetchData();
    } else {
      setData(null);
      setError(null);
      setIsLoading(false);
    }
  }, [query, options, enabled, refetchIndex]);

  const getParsedData = () => {
    if (!data) {
      return null;
    }

    if (Array.isArray(data)) {
      return {
        list: data,
        limit: 0,
        total: data.length,
      };
    }

    if (typeof data === 'object' && data !== null) {
      const key = Object.keys(data)[0];
      if (key && Array.isArray(data[key])) {
        return {
          list: data[key],
          limit: data.limit,
          total: data.total,
        };
      }
    }

    return { list: [], limit: 0, total: 0 };
  };

  return { data: getParsedData(), error, isLoading, refetch, refetchIndex };
};

export default useFetch;
