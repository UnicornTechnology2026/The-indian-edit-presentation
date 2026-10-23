import { Controls } from './Controls';
import { DetailPanel } from './DetailPanel';
import { Header } from './Header';
import { Legend } from './Legend';
import { Track } from './Track';
import { useJourneyPlayer } from './useJourneyPlayer';

export function ProcessFlowSlide() {
  const { step, playing, branch, setBranch, select, togglePlay, railRef } = useJourneyPlayer();

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Header />
        <Controls
          step={step}
          playing={playing}
          onPrev={() => select(step - 1)}
          onNext={() => select(step + 1)}
          onTogglePlay={togglePlay}
        />
      </div>

      <Track step={step} branch={branch} onSelect={select} railRef={railRef} />
      <Legend step={step} />
      <DetailPanel step={step} branch={branch} onBranch={setBranch} onSelect={select} />
    </div>
  );
}
