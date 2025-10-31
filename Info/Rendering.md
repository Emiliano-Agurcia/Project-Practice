# Rendering in Next.js

## SSR vs CSR

### SSR Benefits
- Better SEO optimization
- Faster initial page load
- Reduced client-side JavaScript
- Better performance for users
- Improved accessibility

### SSR Disadvantage
- Event components don't work immediately (need hydration)
- Brief delay between seeing content and being able to interact with it

## Rendering Strategy (Standard)
The standard approach is to use both SSR and CSR, but prioritize SSR whenever possible:
- Use SSR as the default choice
- Only switch to CSR when necessary
- Leverage the benefits of both approaches

## Client-Side Components

### "use client" Directive
```typescript
"use client";  // Marks component for client-side rendering
```

**Important Notes:**
- Makes the component and its dependencies use CSR
- Required for components using browser APIs or client-side interactions
- If not implemented when needed, component will fail when trying to use browser features
- Child components of a client component are automatically client components too

### When to Implement
- Interactive forms with complex state
- Components using hooks (useState, useEffect, etc.)
- Features requiring browser APIs:
  - Clipboard operations
  - Geolocation
  - LocalStorage/SessionStorage
  - Window or Document manipulation
- Real-time updates (WebSocket connections)
- Client-side libraries (animation libraries, etc.)
- Interactive UI elements (dropdowns, modals, etc.)

### When Not Implemented
- Component defaults to server-side rendering
- Will throw runtime errors if trying to use browser APIs
- Can't use features like `window`, `localStorage`, or browser events

## Static vs Dynamic Rendering

### Static Rendering
Content is generated at build time and reused for all requests.

**When to Use:**
- Marketing pages
- Blog posts
- Product listings
- Documentation
- SEO-focused content

### Dynamic Rendering
Content is generated fresh for each request.

**When to Use:**
- User dashboards
- Shopping carts
- Personalized content
- Real-time data
- User-specific pages

### Build Output Rendering Indicators

When running `npm run build` to create a production build, Next.js will show you the rendering strategy used for each route:
- ○ indicates static rendering (content built at build time)
- λ indicates dynamic rendering (content generated per request)

This helps you verify that your pages are being rendered as intended and optimize your application's performance.
