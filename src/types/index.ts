import type { ReactNode } from "react";

/** Props every slide receives from the deck. */
export interface SlideProps {
  /** Jump to a slide by its zero-based index. */
  go: (index: number) => void;
}

export interface Slide {
  /** Used for debugging and as a stable identifier. */
  id: string;
  Component: (props: SlideProps) => ReactNode;
  /** Fill the whole screen area instead of scrolling (used by the cover). */
  fullBleed?: boolean;
}
