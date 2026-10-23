import landscape from "@/assets/landscape.jpg";
import type { SlideProps } from "@/types";

export function CoverSlide({ go }: SlideProps) {
  return (
    <div className="relative h-full min-h-[460px]">
      <img
        src={landscape}
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
        alt="The Indian Edit"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* One centred column: kicker, title, subtitle, button */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center px-6 pb-6 md:pb-8">
        <h1 className="font-serif text-4xl md:text-6xl text-amber-50 leading-tight max-w-4xl">
          The Indian Edit – Consumer Journey &amp; Outlet Execution Strategy
        </h1>
        <p className="text-amber-200/80 mt-3 text-lg">
          From Digital Discovery to In-Store Engagement
        </p>
        <button
          onClick={() => go(1)}
          className="mt-6 px-6 py-2.5 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 whitespace-nowrap"
        >
          Begin the walkthrough
        </button>
      </div>
    </div>
  );
}
