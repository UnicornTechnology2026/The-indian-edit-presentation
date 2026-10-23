import bottle from "@/assets/newBottle.png";
import type { SlideProps } from "@/types";
import { delay } from "@/utils/anim";

export function ClosingSlide({ go }: SlideProps) {
  return (
    <div className="relative h-full min-h-[460px] flex items-center justify-center text-center p-6 pat">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 to-transparent" />
      <div className="relative max-w-3xl">
        <div style={delay(100)} className="rise">
          <img src={bottle} className="float h-48 mx-auto mb-4" alt="" />
        </div>
        <div
          style={delay(350)}
          className="rise text-[11px] tracking-[.35em] text-amber-500 uppercase"
        >
          08 · Closing Summary
        </div>
        <h2
          style={delay(500)}
          className="rise font-serif text-4xl md:text-5xl text-amber-50 mt-2"
        >
          One Connected Journey. One Consistent Outlet Experience.
        </h2>
        <p style={delay(700)} className="rise text-stone-300 mt-4">
          Consumer experience, app functionality, outlet execution and
          performance measurement work together as a single system.
        </p>
        <div style={delay(900)} className="rise mt-3">
          <span className="inline-block font-serif text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-200 to-amber-600 shimmer">
            THE INDIAN EDIT
          </span>
        </div>
        <button
          onClick={() => go(0)}
          style={delay(1100)}
          className="rise mt-5 px-5 py-2 rounded-full border border-amber-500/50 text-amber-300 hover:bg-amber-500/10 hover:scale-105 transition"
        >
          ↺ Back to start
        </button>
      </div>
    </div>
  );
}
