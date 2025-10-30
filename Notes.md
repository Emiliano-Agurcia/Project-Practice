import { format } from 'date-fns';

radix-ui for components?:
You need to install each component manually (correct this in Components.md)
scroll-area.tsx and imports
avatar.tsx and imports

What is this?
viewportRef
"use client";


These variables seem to be :root exclusive:
  --background: #1A1A1A;
  --foreground: #ffffff;

Rendering:
SSR benefits over CSR (Include Event components disadvantage for SSR)
Standard is using both, but use SSR as much as possible
Static vs Dynamic  Rendering
"use client"; This is for making the component use CSR (If that comp. depends of other comps. they will be CSR too) (What happens if not implemented)

npm run build - Sims a production build (Takes a while | ○=static λ=dynamic)
npm start - Runs the production build

Caching:
How to use File System as DB
How caching works in next.js (cache:'no-store' | next: {revalidate 15}) This doesnt apply using axios

Navigation.md:
Why we use Link and not href

Tutorials:
[Component Responsiveness](https://youtu.be/l04dDYW-QaI?si=vvSMTF165X0vxTMb)