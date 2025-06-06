import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';

const useDeepCompareEffect = (callback, dependencies) => {
  const currentDependenciesRef = useRef();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [currentDependenciesRef.current]);
};

export default useDeepCompareEffect;
