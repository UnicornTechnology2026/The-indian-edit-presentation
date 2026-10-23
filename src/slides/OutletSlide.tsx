import { Card, SlideHeading } from '@/components/ui';
import { OUTLET_STEPS } from '@/data/outlet';

export function OutletSlide() {
  const lastIndex = OUTLET_STEPS.length - 1;

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="06 · Execution Mechanism at Outlet Level"
        title="A simple, repeatable five-step routine"
        subtitle="Designed so every outlet team executes the experience the same way."
      />
      <div className="grid md:grid-cols-5 gap-3">
        {OUTLET_STEPS.map((step, i) => (
          <div key={step.title} className="relative">
            <Card className="p-4 h-full hover:border-amber-400 transition">
              <div className="text-amber-400 text-sm">0{i + 1}</div>
              <div className="text-3xl my-2">{step.icon}</div>
              <div className="text-amber-100 font-medium">{step.title}</div>
              <div className="text-stone-400 text-sm mt-1">{step.description}</div>
            </Card>
            {i < lastIndex && (
              <span className="hidden md:block absolute -right-3 top-1/2 text-amber-500 z-10">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
