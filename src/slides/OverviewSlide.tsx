import { useState } from "react";
import bottle from "@/assets/newBottle.png";
import { ACTORS, OBJECTIVES } from "@/data/overview";
import { cx } from "@/utils/cx";
import { delay } from "@/utils/anim";

/** Tailwind position classes for the four actors around the circle (top, right, bottom, left). */
const ACTOR_POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

export function OverviewSlide() {
  const [selected, setSelected] = useState(0);
  const actor = ACTORS[selected];

  return (
    <div className="p-6 md:p-12 grid lg:grid-cols-5 gap-10 items-center min-h-full">
      {/* Left: headline + objectives */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3 text-[11px] tracking-[.35em] text-amber-500 uppercase">
          <span className="draw-x w-10 h-px bg-amber-500" />
          Strategic Overview
        </div>
        <h2
          style={delay(100)}
          className="rise font-serif text-5xl md:text-6xl text-amber-50 leading-[1.05] mt-4"
        >
          Every outlet visit,
          <br />
          one connected
          <br />
          <i className="text-amber-400">brand moment.</i>
        </h2>
        <p style={delay(250)} className="rise text-stone-400 mt-4 max-w-md">
          One programme that links what consumers do on their phone with what
          happens at the outlet counter.
        </p>
        <ol className="mt-7">
          {OBJECTIVES.map((o, i) => (
            <li
              key={o.text}
              style={delay(400 + i * 150)}
              className="slide-in flex gap-4 items-baseline py-3 border-t border-amber-500/20"
            >
              <span className="font-serif text-3xl text-amber-500 w-10">
                0{i + 1}
              </span>
              <span className="text-stone-300">{o.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Right: actor wheel */}
      <div className="lg:col-span-3">
        <div
          style={delay(200)}
          className="rise relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] mx-auto"
        >
          <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0">
            <circle
              cx="50"
              cy="50"
              r="33"
              fill="none"
              stroke="#d4a64a"
              strokeOpacity=".5"
              strokeDasharray="1.5 2"
            />
            <circle
              cx="50"
              cy="50"
              r="22"
              fill="#3a0a14"
              fillOpacity=".6"
              stroke="#d4a64a"
              strokeOpacity=".3"
            />
          </svg>
          <img
            src={bottle}
            className="float absolute inset-0 m-auto h-28 sm:h-36 object-contain"
            alt=""
          />

          {ACTORS.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setSelected(i)}
              style={delay(500 + i * 130)}
              className={cx(
                "pop absolute flex flex-col items-center w-24",
                ACTOR_POSITIONS[i],
              )}
            >
              <span
                className={cx(
                  "w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 transition",
                  selected === i
                    ? "bg-amber-500 border-amber-300 scale-110"
                    : "bg-black/70 border-amber-500/50 hover:border-amber-300",
                )}
              >
                {a.icon}
              </span>
              <span
                className={cx(
                  "text-[11px] mt-1 uppercase tracking-wider",
                  selected === i ? "text-amber-300" : "text-stone-400",
                )}
              >
                {a.name}
              </span>
            </button>
          ))}
        </div>

        <div key={selected} className="fade mt-6 text-center max-w-md mx-auto">
          <div className="font-serif italic text-3xl text-amber-300">
            {actor.name}
          </div>
          <p className="text-stone-300 mt-1">{actor.description}</p>
          <div className="text-[11px] tracking-[.25em] uppercase text-stone-500 mt-3">
            Consumer · App · Promoter · Brand Operations
          </div>
        </div>
      </div>
    </div>
  );
}
