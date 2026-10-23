import { STEPS } from '@/data/processFlow';

/** Time per step while "Play journey" is running. */
export const STEP_DELAY_MS = 1700;

/** The track line runs through the centre of the first and last column. */
export const TRACK_INSET = 100 / (STEPS.length * 2); // ≈ 4.545% for 11 steps
export const TRACK_SPAN = 100 - TRACK_INSET * 2; // ≈ 90.909% for 11 steps

/** Which side of a decision the detail panel is showing. */
export type Branch = 'yes' | 'no';
