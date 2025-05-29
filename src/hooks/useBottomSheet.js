import { BOTTOM_SHEET_CLOSED_Y, BOTTOM_SHEET_OPEN_Y } from '@constants/bottomSheet';
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
      prevTouchY: null,
      movingDirection: MOVING_DIRECTION.NONE,
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

      if (currentSheet.getBoundingClientRect().y !== BOTTOM_SHEET_OPEN_Y) {
        return true;
      }

      if (touchMove.movingDirection === MOVING_DIRECTION.DOWN) {
        return currentContent.scrollTop <= 0;
      }

      return false;
    };

    const handleTouchStart = (e) => {
      const { touchStart, touchMove } = metrics.current;
      currentSheet.style.willChange = 'transform';
      currentSheet.style.transition = '';

      touchStart.sheetY = currentSheet.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;

      touchMove.prevTouchY = e.touches[0].clientY;
      metrics.current.isContentAreaTouched =
        currentContent?.contains(e.target) || e.target === currentContent;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = MOVING_DIRECTION.DOWN;
      } else if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = MOVING_DIRECTION.UP;
      } else {
        touchMove.movingDirection = MOVING_DIRECTION.NONE;
      }

      if (canUserMoveBottomSheet()) {
        if (e.cancelable) {
          e.preventDefault();
        }

        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= BOTTOM_SHEET_OPEN_Y) {
          nextSheetY = BOTTOM_SHEET_OPEN_Y;
        }

        if (nextSheetY >= BOTTOM_SHEET_CLOSED_Y) {
          nextSheetY = BOTTOM_SHEET_CLOSED_Y;
        }

        currentSheet.style.setProperty(
          'transform',
          `translateY(${nextSheetY - BOTTOM_SHEET_CLOSED_Y}px)`,
        );
      } else {
        document.body.style.overflowY = 'hidden';
      }

      touchMove.prevTouchY = currentTouch.clientY;
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = 'auto';
      currentSheet.style.willChange = 'auto';
      currentSheet.style.transition = 'transform 0.3s ease-out';

      const { touchMove } = metrics.current;
      const currentSheetY = currentSheet.getBoundingClientRect().y;
      const halfwayPoint = (BOTTOM_SHEET_OPEN_Y + BOTTOM_SHEET_CLOSED_Y) / 2;

      if (currentSheetY !== BOTTOM_SHEET_OPEN_Y && currentSheetY !== BOTTOM_SHEET_CLOSED_Y) {
        if (touchMove.movingDirection === MOVING_DIRECTION.UP) {
          currentSheet.style.setProperty(
            'transform',
            `translateY(${BOTTOM_SHEET_OPEN_Y - BOTTOM_SHEET_CLOSED_Y}px)`,
          );
        } else if (touchMove.movingDirection === MOVING_DIRECTION.DOWN) {
          currentSheet.style.setProperty('transform', 'translateY(0)');
        } else {
          if (currentSheetY < halfwayPoint) {
            currentSheet.style.setProperty(
              'transform',
              `translateY(${BOTTOM_SHEET_OPEN_Y - BOTTOM_SHEET_CLOSED_Y}px)`,
            );
          } else {
            currentSheet.style.setProperty('transform', 'translateY(0)');
          }
        }
      }

      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: null,
          movingDirection: MOVING_DIRECTION.NONE,
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
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return { sheetRef, contentRef };
}
