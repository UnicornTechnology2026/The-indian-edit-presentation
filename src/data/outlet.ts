export type OutletOwner = "brand" | "staff";

export interface OutletStep {
  icon: string;
  title: string;
  text: string;
  details: string[];
  owner: OutletOwner;
}

export const OUTLET_OWNERS: Record<
  OutletOwner,
  { label: string; className: string }
> = {
  brand: {
    label: "Brand team",
    className: "border-rose-400/60 text-rose-200 bg-rose-500/10",
  },
  staff: {
    label: "Outlet staff",
    className: "border-amber-400/60 text-amber-200 bg-amber-500/10",
  },
};

export const OUTLET_STEPS: OutletStep[] = [
  {
    icon: "📋",
    title: "Brief",
    text: "We brief your team.",
    owner: "brand",
    details: [
      "Share the approved campaign and SOP",
      "Agree where the QR will go",
    ],
  },
  {
    icon: "🪧",
    title: "Display",
    text: "Put up the QR.",
    owner: "staff",
    details: ["Use approved materials only", "Place them at the agreed points"],
  },
  {
    icon: "🤝",
    title: "Invite",
    text: "Ask guests to scan.",
    owner: "staff",
    details: ["Invite every guest politely", "Help only if they need it"],
  },
  {
    icon: "✅",
    title: "Fulfil",
    text: "Check and give the reward.",
    owner: "staff",
    details: [
      "Check the confirmation on their phone",
      "Give only eligible benefits",
    ],
  },
  {
    icon: "📊",
    title: "Report",
    text: "We record the result.",
    owner: "brand",
    details: ["The outcome is logged", "The brand team reviews it"],
  },
];

export const OUTLET_PRINCIPLES = [
  {
    title: "Same every time",
    text: "Every outlet follows the same five steps.",
  },
  { title: "Guest-led", text: "Guests scan and play on their own phone." },
  {
    title: "Always recorded",
    text: "Every visit ends with a result we can review.",
  },
];
