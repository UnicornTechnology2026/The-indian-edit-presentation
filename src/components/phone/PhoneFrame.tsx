import type { ReactNode } from 'react';

/** Device bezel + notch. Children render inside the screen. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[240px] h-[470px] rounded-[34px] border-[5px] border-stone-700 bg-[#0d0608] overflow-hidden shadow-2xl shadow-amber-900/30 text-[11px] shrink-0">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10" />
      {children}
    </div>
  );
}
