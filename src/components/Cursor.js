import React, { useEffect, useRef } from 'react';

const styles = {
  dot: {
    position: 'fixed', width: 12, height: 12,
    background: 'var(--red)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s, height 0.2s',
    mixBlendMode: 'normal',
  },
  ring: {
    position: 'fixed', width: 36, height: 36,
    border: '1.5px solid var(--red)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    opacity: 0.6,
  },
};

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      <div ref={dotRef} style={styles.dot} />
      <div ref={ringRef} style={styles.ring} />
    </>
  );
}
