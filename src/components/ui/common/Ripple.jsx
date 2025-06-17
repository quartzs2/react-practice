import { useCallback, useState } from 'react';

const RIPPLE_DURATION_MS = 600;

/**
 * Ripple Component (Render Prop Pattern)
 *
 * 자식 요소에 모바일 네이티브 앱과 같은 ripple 효과를 적용할 수 있는 로직과 데이터를 제공하는 컴포넌트
 *
 * @param {function} children - 렌더링 함수. ripple 효과에 필요한 props를 인자로 받음
 * @param {string} color - ripple 색상 (기본값: 'rgba(255, 255, 255, 0.3)')
 *
 * @example
 * <Ripple>
 * {({ rippleProps, rippleElements }) => (
 * <button {...rippleProps}>
 * {rippleElements}
 * Click me!
 * </button>
 * )}
 * </Ripple>
 */
const Ripple = ({ children, color = 'rgba(255,255,255,0.3)' }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, id: Date.now() };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== newRipple.id));
    }, RIPPLE_DURATION_MS);
  }, []);

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className='ripple-effect'
      style={{
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: color,
        transform: 'scale(0)',
        animation: `ripple ${RIPPLE_DURATION_MS}ms linear`,
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
        pointerEvents: 'none',
      }}
    />
  ));

  const rippleProps = {
    onMouseDown: addRipple,
    style: {
      position: 'relative',
      overflow: 'hidden',
    },
    className: 'ripple-container',
  };

  if (typeof children !== 'function') {
    return null;
  }

  return children({ rippleProps, rippleElements });
};

export default Ripple;
