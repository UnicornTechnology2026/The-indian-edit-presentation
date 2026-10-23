import bottle from '@/assets/newBottle.png';
import type { SlideProps } from '@/types';

export function ClosingSlide({ go }: SlideProps) {
  return (
    <div className="relative h-full min-h-[460px] flex items-center justify-center text-center p-6 pat">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 to-transparent" />
      <div className="relative max-w-3xl">
        <img src={bottle} className="h-48 mx-auto mb-4" alt="" />
        <div className="text-[11px] tracking-[.35em] text-amber-500 uppercase">08 · Closing Summary</div>
        <h2 className="font-serif text-4xl md:text-5xl text-amber-50 mt-2">
          One Connected Journey. One Consistent Outlet Experience.
        </h2>
        <p className="text-stone-300 mt-4">
          Consumer experience, app functionality, outlet execution and performance measurement work together as a
          single system.
        </p>
        <div className="mt-3 font-serif text-amber-400 text-xl tracking-widest">THE INDIAN EDIT</div>
        <button
          onClick={() => go(0)}
          className="mt-5 px-5 py-2 rounded-full border border-amber-500/50 text-amber-300 hover:bg-amber-500/10"
        >
          ↺ Back to start
        </button>
      </div>
    </div>
  );
}
