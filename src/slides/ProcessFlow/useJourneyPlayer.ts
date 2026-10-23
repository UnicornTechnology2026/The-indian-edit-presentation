import { useEffect, useRef, useState } from 'react';
import { LAST_STEP } from '@/data/processFlow';
import { clamp } from '@/utils/math';
import { STEP_DELAY_MS, type Branch } from './constants';

/**
 * State + behaviour for the process-flow slide:
 * selected step, autoplay, and the Yes/No view of the current decision.
 */
export function useJourneyPlayer() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [branch, setBranch] = useState<Branch>('no');
  const railRef = useRef<HTMLDivElement>(null);

  /** Manual selection stops autoplay and resets decisions to their "No" view. */
  const select = (index: number) => {
    setPlaying(false);
    setStep(clamp(index, 0, LAST_STEP));
    setBranch('no');
  };

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (step >= LAST_STEP) setStep(0); // replay from the start
    setPlaying(true);
  };

  // While playing, the journey succeeds → decisions show their "Yes" path.
  useEffect(() => {
    setBranch(playing ? 'yes' : 'no');
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Autoplay: advance one step at a time, stop at the end.
  useEffect(() => {
    if (!playing) return;
    if (step >= LAST_STEP) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), STEP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [playing, step]);

  // Keep the active node visible on narrow screens (the track scrolls sideways).
  useEffect(() => {
    const node = railRef.current?.querySelector<HTMLElement>('[data-active="1"]');
    node?.scrollIntoView?.({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [step]);

  return { step, playing, branch, setBranch, select, togglePlay, railRef };
}
