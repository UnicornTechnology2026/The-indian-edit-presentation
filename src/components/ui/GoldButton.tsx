import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';

interface GoldButtonProps {
  children: ReactNode;
  className?: string;
}

/** Gold call-to-action bar used inside the phone mock-ups (decorative, not interactive). */
export function GoldButton({ children, className }: GoldButtonProps) {
  return (
    <div
      className={cx(
        'rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center py-2 font-medium',
        className,
      )}
    >
      {children}
    </div>
  );
}
