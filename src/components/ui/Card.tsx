import type { HTMLAttributes } from 'react';
import { cx } from '@/utils/cx';

/** Translucent bordered panel used across all slides. */
export function Card({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('rounded-xl border border-amber-500/20 bg-white/[0.04]', className)} {...rest}>
      {children}
    </div>
  );
}
