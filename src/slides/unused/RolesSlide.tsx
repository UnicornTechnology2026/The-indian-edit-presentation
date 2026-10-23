import { Card, SlideHeading } from '@/components/ui';
import { ROLES } from '@/data/roles';

export function RolesSlide() {
  return (
    <div className="p-6 md:p-10">
      <SlideHeading kicker="10 · Roles & Responsibilities" title="Clear ownership at every touchpoint" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ROLES.map((role) => (
          <Card key={role.name} className="p-5">
            <div className="text-4xl">{role.icon}</div>
            <div className="font-serif text-2xl text-amber-100 my-2">{role.name}</div>
            <ul className="space-y-1.5 text-stone-300 text-sm">
              {role.responsibilities.map((r) => (
                <li key={r}>
                  <span className="text-amber-500">◆ </span>
                  {r}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
