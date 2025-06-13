import React, { useRef, useState } from 'react';

const PullToRefresh = ({ children, onRefresh, maxDistance, loadingComponent }) => {
  const spinnerRef = useRef(null);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  const resetToInitial = () => {
    const spinner = spinnerRef.current;
    if (spinner) {
      Object.assign(spinner.style, {
        height: 0,
        willChange: 'unset',
        overflow: 'hidden',
      });
    }
    setIsRefreshing(false);
    setStartY(0);
  };

  const onTouchStart = (e) => {
    setStartY(e.touches[0].clientY);

    const spinner = spinnerRef.current;
    if (spinner) {
      spinner.style.willChange = 'height';
    }
  };

  const onTouchMove = (e) => {
    if (window.scrollY !== 0) {
      return;
    }

    const moveY = e.touches[0].clientY;
    const moveDistance = moveY - startY;
    const pulledDistance = Math.min(Math.pow(Math.max(moveDistance, 0), 0.875), maxDistance);
    const spinner = spinnerRef.current;

    spinner.style.height = `${pulledDistance}px`;

    if (spinner.style.height !== '0px') {
      document.body.style.overflow = 'hidden';
      Object.assign(spinner.style, {
        overflow: 'visible',
        opacity: pulledDistance / 100,
        transform: `scale(${Math.min(pulledDistance / 100, 1)})`,
      });
    } else {
      document.body.style.overflow = 'unset';
      Object.assign(spinner.style, {
        overflow: 'hidden',
        transform: 'scale(1)',
      });
    }

    if (pulledDistance >= maxDistance) {
      setIsRefreshing(true);
    } else {
      setIsRefreshing(false);
    }
  };

  const onTouchEnd = async () => {
    if (isRefreshing) {
      await onRefresh();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }
    resetToInitial();
  };

  return (
    <div>
      <div ref={spinnerRef} className='flex h-0 justify-center overflow-hidden pt-4'>
        {loadingComponent}
      </div>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;
