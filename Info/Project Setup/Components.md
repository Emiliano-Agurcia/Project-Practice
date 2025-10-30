## Project setup — Components (quick start)

This file covers the minimal steps to get UI components working locally.

### 1) Install libraries

Run these commands from the `my-app` folder (PowerShell):

```powershell
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

Packages explained:
- `@radix-ui/react-slot` — Slot component used by some UI primitives
- `class-variance-authority` — `cva` helper used for variant-based class generation
- `clsx` — small utility for composing class names
- `tailwind-merge` — optional but recommended to merge Tailwind classes safely

---

### 2) Add a small `cn` utility

Create `src/lib/utils.ts` (recommended) and add the following:

```ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
```

Notes:
- Components in this repo import `cn` as `@/lib/utils`. To keep that alias working, see the next step.
- If you prefer not to update TypeScript paths, you can instead create `lib/utils.ts` at the project root so `@/lib/utils` resolves to `./lib/utils` with the current config.

---

### 5) Example usage

Import a component and use it in a page:

```tsx
import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Click me</Button>;
}
```
