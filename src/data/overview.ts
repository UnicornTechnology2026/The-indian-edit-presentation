export interface Objective {
  icon: string;
  text: string;
}

export interface Actor {
  icon: string;
  name: string;
  description: string;
}

export const OBJECTIVES: Objective[] = [
  { icon: '🔗', text: 'Turn brand curiosity into a guided, in-outlet experience' },
  { icon: '✨', text: 'Give consumers a simple, mobile-first path from scan to reward' },
  { icon: '🧭', text: 'Equip outlet teams with one clear routine to follow' },
  { icon: '📈', text: 'Capture engagement data so decisions are based on evidence' },
];

export const ACTORS: Actor[] = [
  { icon: '🧑', name: 'Consumer', description: 'Enters through a QR scan and moves through the experience at their own pace.' },
  { icon: '📱', name: 'Mobile App', description: 'Handles sign-in, activities, rules and confirmation in one place.' },
  { icon: '🧑‍💼', name: 'Outlet Staff', description: 'Welcomes consumers, supports where needed and completes fulfilment.' },
  { icon: '📊', name: 'Brand Operations', description: 'Sets up campaigns, oversees outlets and learns from the data.' },
];
