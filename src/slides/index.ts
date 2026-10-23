import type { Slide } from '@/types';
import { ClosingSlide } from './ClosingSlide';
import { CoverSlide } from './CoverSlide';
import { FeaturesSlide } from './FeaturesSlide';
import { OutletSlide } from './OutletSlide';
import { OverviewSlide } from './OverviewSlide';
import { ProcessFlowSlide } from './ProcessFlow';
import { ScreensSlide } from './Screens';
import { SopSlide } from './SopSlide';

/**
 * The deck, in presentation order.
 * To add, remove or reorder slides, edit this list only.
 */
export const SLIDES: Slide[] = [
  { id: 'cover', Component: CoverSlide },
  { id: 'overview', Component: OverviewSlide },
  { id: 'process-flow', Component: ProcessFlowSlide },
  { id: 'features', Component: FeaturesSlide },
  { id: 'screens', Component: ScreensSlide },
  { id: 'outlet', Component: OutletSlide },
  { id: 'sop', Component: SopSlide },
  { id: 'closing', Component: ClosingSlide },
];
