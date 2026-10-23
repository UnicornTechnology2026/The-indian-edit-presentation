import type { CSSProperties } from "react";

/** Delay (ms) for staggered entrance animations: <li className="rise" style={delay(i * 80)} /> */
export const delay = (ms: number): CSSProperties => ({
  animationDelay: `${ms}ms`,
});
