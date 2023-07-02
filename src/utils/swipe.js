import { useEffect, useRef } from 'react';

export const useSwipe = (elementRef, onSwipeLeft, onSwipeRight) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleTouchStart = (event) => {
      touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartX.current - touchEndX.current;

      if (swipeDistance > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (swipeDistance < 0 && onSwipeRight) {
        onSwipeRight();
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    const element = elementRef.current;
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef, onSwipeLeft, onSwipeRight]);
};

export default useSwipe;
