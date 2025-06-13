import useIntersect from './useIntersect';

const useImageOptimization = ({ src }) => {
  const ref = useIntersect({
    onIntersect: async (entry, observer) => {
      observer.unobserve(entry.target);
      ref.current.src = src;
    },
  });

  return ref;
};

export default useImageOptimization;
