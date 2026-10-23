// Data for the "End-to-End Process Flow" slide.
// To change wording, edit this file only — the slide reads everything from here.
//
// type:    'process' | 'decision'
// who:     actors involved in the step
// detail:  description of the step (for decisions: what happens on "No")
// noLabel: short label shown under a decision diamond (decisions only)

interface BaseStep {
  title: string;
  icon: string;
  who: string[];
  detail: string;
}

export interface ProcessStep extends BaseStep {
  type: "process";
}

export interface DecisionStep extends BaseStep {
  type: "decision";
  noLabel: string;
}

export type FlowStep = ProcessStep | DecisionStep;

export interface Phase {
  name: string;
  /** Number of steps in the phase. All counts must add up to STEPS.length. */
  count: number;
}

export const STEPS: FlowStep[] = [
  {
    type: "process",
    title: "Consumer Entry",
    icon: "👋",
    who: ["Consumer"],
    detail:
      "Learns of The Indian Edit through brand communication or an in-outlet promotion.",
  },
  {
    type: "process",
    title: "QR Scan / App Access",
    icon: "📷",
    who: ["Consumer", "App"],
    detail:
      "Scans the outlet QR code or uses an approved entry point to open the campaign.",
  },
  {
    type: "process",
    title: "Onboarding / Verification",
    icon: "📝",
    who: ["Consumer", "App"],
    detail:
      "Completes quick onboarding and OTP verification of the mobile number.",
  },
  {
    type: "decision",
    title: "Verification successful?",
    icon: "🔐",
    who: ["App"],
    detail:
      "Retry OTP or ask staff for help; exit with guidance once the allowed attempts are used.",
    noLabel: "Retry OTP / get help",
  },
  {
    type: "decision",
    title: "Consumer eligible?",
    icon: "🪪",
    who: ["App"],
    detail:
      "Show a polite message explaining campaign rules; no activity is unlocked.",
    noLabel: "Polite rules message",
  },
  {
    type: "process",
    title: "Engagement Activity",
    icon: "🎮",
    who: ["Consumer", "App"],
    detail: "Takes part in the interactive activity while progress is tracked.",
  },
  {
    type: "decision",
    title: "Activity completed?",
    icon: "🏁",
    who: ["App"],
    detail:
      "Progress is kept so the consumer can resume, within campaign rules.",
    noLabel: "Resume later",
  },
  {
    type: "process",
    title: "Result / Confirmation",
    icon: "🎉",
    who: ["App"],
    detail:
      "Receives the result and a confirmation, per approved campaign rules.",
  },
  {
    type: "process",
    title: "Coupon Redeem",
    icon: "🎁",
    who: ["Consumer", "Promoter"],
    detail:
      "Shows the coupon at the outlet; staff validate it against the confirmation.",
  },
  {
    type: "decision",
    title: "Fulfilment successful?",
    icon: "🤝",
    who: ["Promoter"],
    detail:
      "Promoter retries or escalates to Brand Operations per SOP; status is logged.",
    noLabel: "Retry / escalate",
  },
  {
    type: "process",
    title: "Logged for Reporting",
    icon: "📊",
    who: ["Brand Operations"],
    detail:
      "Status and engagement data flow into reporting for the Brand team.",
  },
];

export const PHASES: Phase[] = [
  { name: "Enter", count: 3 },
  { name: "Qualify", count: 2 },
  { name: "Engage", count: 2 },
  { name: "Reward", count: 3 },
  { name: "Learn", count: 1 },
];

export const LAST_STEP = STEPS.length - 1;
export const DECISION_COUNT = STEPS.filter((s) => s.type === "decision").length;

/** Name of the phase a step belongs to. */
export const phaseOf = (stepIndex: number): string => {
  let end = 0;
  for (const phase of PHASES) {
    end += phase.count;
    if (stepIndex < end) return phase.name;
  }
  return "";
};
