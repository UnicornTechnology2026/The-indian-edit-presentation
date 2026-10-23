import { DeckNav } from "@/components/layout/DeckNav";
import { useSlideDeck } from "@/hooks/useSlideDeck";
import { SLIDES } from "@/slides";

export default function App() {
  const { index, go } = useSlideDeck(SLIDES.length);
  const { Component: CurrentSlide, fullBleed } = SLIDES[index];

  return (
    <div
      className="h-full flex flex-col bgx text-stone-100"
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        boxSizing: "border-box",
      }}
    >
      <main className="flex-1 overflow-y-auto">
        {/* `key` re-mounts the slide so the fade-in plays and local state resets. */}
        <div
          key={index}
          className={`fade ${fullBleed ? "h-full" : "min-h-full"}`}
        >
          <CurrentSlide go={go} />
        </div>
      </main>

      <DeckNav current={index} total={SLIDES.length} onGo={go} />
    </div>
  );
}
