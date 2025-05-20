import { useEffect, useRef, useState } from 'react';
import { isEqual } from 'lodash';

const useFetch = ({ enabled = true, options, query }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const prevQueryRef = useRef();
  const prevOptionRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await query({ ...options });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (!enabled) {
      setData(null);
      setError(null);
      setIsLoading(null);

      prevQueryRef.current = undefined;
      prevOptionRef.current = undefined;
      return;
    }

    if (
      prevQueryRef.current === undefined ||
      query !== prevQueryRef.current ||
      !isEqual(options, prevOptionRef.current)
    ) {
      prevQueryRef.current = query;
      prevOptionRef.current = options;
      fetchData();
    }
  }, [query, options, enabled]);

  if (!enabled) {
    return { data: null, error: null, isLoading: null };
  }

  return { data, error, isLoading };
};

export default useFetch;
