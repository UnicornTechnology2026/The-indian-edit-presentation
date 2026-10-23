# The Indian Edit – Presentation Site

React + TypeScript + Vite + Tailwind slide deck.

```bash
npm install
npm run dev        # start dev server
npm run build      # typecheck + production build
npm run typecheck  # types only
```

`preview/indian-edit-deck.html` is a standalone copy you can open directly in a browser.

Navigate with the on-screen arrows, the dots, or the keyboard (← / → / Space). Open a specific slide with a hash, e.g. `/#3`.

## Project structure

```
src/
├── main.tsx                 Entry point
├── App.tsx                  Deck shell: current slide + bottom nav
├── index.css                Tailwind + a few global styles (.fade, .bgx, .pat)
├── assets/                  Images
├── types/                   Shared types (SlideProps, Slide)
├── utils/                   cx() class joiner, clamp()
├── hooks/
│   └── useSlideDeck.ts      Slide index, URL hash, keyboard shortcuts
├── data/                    ALL slide content lives here (edit wording here)
│   ├── overview.ts  features.ts  outlet.ts  sop.ts
│   ├── processFlow.ts       Steps, decisions, phases
│   └── journey.ts  architecture.ts  roles.ts  measurement.ts   (unused slides)
├── components/
│   ├── ui/                  Card, SlideHeading, Tag, Pill, GoldButton
│   ├── layout/DeckNav.tsx   Bottom navigation bar
│   └── phone/PhoneFrame.tsx Phone bezel for the mock-ups
└── slides/
    ├── index.ts             ← the slide list / order (edit this to add or reorder)
    ├── CoverSlide.tsx  OverviewSlide.tsx  FeaturesSlide.tsx
    ├── OutletSlide.tsx  SopSlide.tsx  ClosingSlide.tsx
    ├── ProcessFlow/         Interactive flow (split into Track, StepNode, DetailPanel, …)
    ├── Screens/             Phone mock-up slide + the 8 screen designs
    └── unused/              Finished slides that are not in the deck right now
```

## Common tasks

- **Change text:** edit the matching file in `src/data/`.
- **Add a slide:** create `src/slides/MySlide.tsx`, then add `{ id: 'my-slide', Component: MySlide }` to `src/slides/index.ts`.
- **Reorder / remove a slide:** change the `SLIDES` array in `src/slides/index.ts`.
- **Bring back an unused slide:** import it from `./unused` in `src/slides/index.ts` and add it to `SLIDES`.
- **Add a phone screen:** add an entry to `PHONE_SCREENS` in `src/slides/Screens/phoneScreens.tsx`.
- **Process flow with a different number of steps:** update `STEPS` and `PHASES` in `data/processFlow.ts` and the static `grid-cols-11` class in `ProcessFlow/PhaseBands.tsx` and `Track.tsx`.
