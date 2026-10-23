import type { ButtonHTMLAttributes } from 'react';
import { cx } from '@/utils/cx';

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

/** Rounded selectable button, used for filters. */
export function Pill({ selected, className, children, ...rest }: PillProps) {
  return (
    <button
      className={cx(
        'px-4 py-1.5 rounded-full text-sm border',
        selected ? 'bg-amber-500 text-black border-amber-500' : 'border-amber-500/30 text-stone-300',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
