import React, { useEffect, useRef, useCallback } from 'react';
import './Background.css';

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  const updatePositions = useCallback(() => {
    if (!containerRef.current) return;
    const blobs = containerRef.current.querySelectorAll<HTMLDivElement>('[data-parallax]');
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const sy = scrollRef.current;

    blobs.forEach((blob) => {
      const scrollFactor = parseFloat(blob.dataset.scrollFactor || '0');
      const mouseFactor = parseFloat(blob.dataset.mouseFactor || '0');
      const tx = mx * mouseFactor;
      const ty = sy * scrollFactor + my * mouseFactor;
      blob.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });

    rafRef.current = requestAnimationFrame(updatePositions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updatePositions]);

  return (
    <div ref={containerRef} className='background-fixed-wrapper'>
      <div
        className='bg-blob bg-blob-1'
        data-parallax
        data-scroll-factor='0.12'
        data-mouse-factor='20'
      />

      <div
        className='bg-blob bg-blob-2'
        data-parallax
        data-scroll-factor='-0.08'
        data-mouse-factor='-25'
      />

      <div
        className='bg-blob bg-blob-3'
        data-parallax
        data-scroll-factor='0.04'
        data-mouse-factor='10'
      />

      <div
        className='bg-blob bg-blob-4'
        data-parallax
        data-scroll-factor='0.15'
        data-mouse-factor='30'
      />
    </div>
  );
};

export default Background;
