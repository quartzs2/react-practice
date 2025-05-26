import { MAX_Y, MIN_Y } from '@constants/bottomSheet';
import { useEffect, useRef } from 'react';

const MOVING_DIRECTION = {
  NONE: 'none',
  DOWN: 'down',
  UP: 'up',
};

export function useBottomSheet() {
  const sheetRef = useRef(null);
  const contentRef = useRef(null);

  const metrics = useRef({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const currentSheet = sheetRef.current;
    const currentContent = contentRef.current;

    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      if (!isContentAreaTouched) {
        return true;
      }

      if (currentSheet.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === MOVING_DIRECTION.DOWN) {
        return currentContent.scrollTop <= 0;
      }

      return false;
    };

    const handleTouchStart = (e) => {
      const { touchStart } = metrics.current;
      currentSheet.style.willChange = 'transform';

      touchStart.sheetY = currentSheet.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = MOVING_DIRECTION.DOWN;
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = MOVING_DIRECTION.UP;
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault();

        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        currentSheet.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = 'auto';

      const currentSheet = sheetRef.current;
      const { touchMove } = metrics.current;

      const currentSheetY = sheetRef.current.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === MOVING_DIRECTION.DOWN) {
          currentSheet.style.setProperty('transform', 'translateY(0)');
        }
        if (touchMove.movingDirection === MOVING_DIRECTION.UP) {
          currentSheet.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
        }
      }

      currentSheet.style.willChange = 'auto';
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    currentSheet.addEventListener('touchstart', handleTouchStart);
    currentSheet.addEventListener('touchmove', handleTouchMove);
    currentSheet.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (currentSheet) {
        currentSheet.removeEventListener('touchstart', handleTouchStart);
        currentSheet.removeEventListener('touchmove', handleTouchMove);
        currentSheet.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    const currentContent = contentRef.current;
    const currentMetrics = metrics.current;

    const handleTouchStart = () => {
      currentMetrics.isContentAreaTouched = true;
    };

    currentContent.addEventListener('touchstart', handleTouchStart);

    return () => currentContent.removeEventListener('touchstart', handleTouchStart);
  }, []);

  return { sheetRef, contentRef };
}
