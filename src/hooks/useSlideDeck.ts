import { useCallback, useEffect, useState } from 'react';
import { clamp } from '@/utils/math';

/** Reads `#3` from the URL as slide 3 (zero-based index 2). Falls back to the first slide. */
const indexFromHash = (total: number): number => {
  const n = parseInt(window.location.hash.slice(1), 10);
  return clamp(Number.isNaN(n) ? 0 : n - 1, 0, total - 1);
};

/**
 * Slide navigation state + keyboard controls
 * (→ or Space = next, ← = previous).
 */
export function useSlideDeck(total: number) {
  const [index, setIndex] = useState(() => indexFromHash(total));

  const go = useCallback(
    (target: number) => setIndex(clamp(target, 0, total - 1)),
    [total],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setIndex((i) => clamp(i + 1, 0, total - 1));
      } else if (e.key === 'ArrowLeft') {
        setIndex((i) => clamp(i - 1, 0, total - 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total]);

  return { index, go };
}
