import { format } from 'date-fns';

radix-ui for components?:
You need to install each component manually (correct this in Components.md)
scroll-area.tsx and imports
avatar.tsx and imports

These variables seem to be :root exclusive:
  --background: #1A1A1A;
  --foreground: #ffffff;




Caching:
  How to use File System as DB
  How caching works in next.js (cache:'no-store' | next: {revalidate 15}) This doesnt apply using axios

What can I do for specific info like:
  React Components?:
  - React.forwardRef:
    Allows you to forward a ref from a parent component to a DOM node (so someone using <Button ref={...} /> actually gets the underlying <button>).
  - <HTMLButtonElement, ButtonProps>:
    → First param: the element type the ref points to (button tag).
    → Second param: the props the component accepts (ButtonProps you defined).
  - ({ className, variant, size, asChild = false, ...props }, ref):
    → Destructures the props object and provides a default for asChild.
    → ...props captures all other props (onClick, aria-label, etc.) and passes them through.

Images:
  How to declare component
  Free Images: Unsplash, Freepik, Pexels, Pixabay.

Website:
  Make a website folder, ask ideas of which topics to add.
  Starting to build
  Tricks/Gimmicks (Section scrolling, ghost components, side scrolling, etc.)
  [Website Building Tips video]()
  For section ideas, you can go to the websites in Components.md

Markdown:
  Include shortcuts for big things (table of contents)

Rendering.md:
Navigation.md:

Non-included sections:
  Styling: Better do it in the future when you 
  CSS: CSS can be easily implemented along AI (also there is documentation w3schools) 
  Tailwind: better see the documentation page, or use Tailwind Docs extension.

How to use gitlens
  Is it better than normal git pull and requests? (looks more complex)

Tutorials:
[Component Responsiveness](https://youtu.be/l04dDYW-QaI?si=vvSMTF165X0vxTMb)

[Website Building Tips](https://www.youtube.com/watch?v=OjEg0IBR_ak)
  80/20 Rule: Investigate and Design first, code later.
  Hero Section (Examples on vid)
  Repeateble design for consistency (Cards, Sections)
  Free Images: Unsplash, Freepik, Pexels, Pixabay.
  4 or 3 Colors
  1 font (3 max | Use variables)
  Bonus tips: Dynamic h1 size, flex-cards, section-snap scrolling.
  Not in video: 1 icon library