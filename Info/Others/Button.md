# Button: UI Component Documentation

## Core Features Summary

| Topic | Explanation | Example / Effect |
|-------|-------------|------------------|
| **cva & buttonVariants** | `cva()` (from **class-variance-authority**) helps create reusable Tailwind class combinations. Define variants like `default`, `destructive`, and sizes like `sm`, `lg`. | `buttonVariants({ variant: "ghost" })` → `"hover:bg-accent hover:text-accent-foreground"` |
| **forwardRef Header** | `React.forwardRef<HTMLButtonElement, ButtonProps>` enables ref forwarding and TypeScript typing. | `ref.current?.focus()` works, with full TypeScript support |
| **Comp Variable** | `const Comp = asChild ? Slot : "button"` enables dynamic element rendering | `<Button asChild><a href="#">Link</a></Button>` renders as styled `<a>` |
| **Importing Variants** | Reuse button styles without the component wrapper | `className={buttonVariants({ variant: "link" })}` |
| **Variants in Use** | Automatic class generation based on variants | `<Button variant="destructive" />` → red button |
| **Default Variants** | Handled internally by `cva()` | No need for manual defaults like `variant = "default"` |
| **HTML Props** | Native button attributes supported via `...props` | `<Button type="submit" aria-label="Send" />` |
| **className & asChild** | Customization and polymorphic components | `<Button asChild><Link href="/" /></Button>` |

## Button Props Interface

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

This interface defines the properties that can be passed to the Button component:

- **HTML Button Attributes**: By extending `React.ButtonHTMLAttributes<HTMLButtonElement>`, the Button component inherits all standard HTML button attributes like:
  - `type` ("button" | "submit" | "reset")
  - `disabled`
  - `onClick`
  - `aria-*` attributes
  - And all other native button properties

- **Variant Props**: By extending `VariantProps<typeof buttonVariants>`, it includes all variant properties defined in the `buttonVariants` cva function:
  - `variant`: The style variant of the button ("default" | "destructive" | "outline" | "secondary" | "ghost" | "link")
  - `size`: The size variant of the button ("default" | "sm" | "lg" | "icon")

- **Custom Props**:
  - `asChild`: Optional boolean that enables polymorphic behavior. When `true`, the button's styles are applied to its child component instead of rendering a button element.

## Implementation Details

### The cva Function
The `buttonVariants` function is created using `cva()` from class-variance-authority:
- Manages Tailwind class combinations in a clean, structured way
- Defines variants like `default`, `destructive`, `outline`, etc.
- Handles size variations: `sm`, `default`, `lg`, `icon`
- Automatically applies default variants when none specified

### Forward Ref Implementation
```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Component implementation
  }
);
```

This structure:
- Forwards refs to the underlying button element
- Provides TypeScript type safety
- Destructures needed props while passing through others via `...props`

### The Comp Variable
```typescript
const Comp = asChild ? Slot : "button";
```

This Radix UI integration enables:
- Regular button rendering when `asChild` is false
- Style forwarding to child elements when `asChild` is true
- Proper HTML structure (avoids invalid nesting)

### Style Reusability
Import `buttonVariants` to apply button styles without the Button component:
```typescript
import { buttonVariants } from "@/components/ui/button";

<Link href="/settings" className={buttonVariants({ variant: "outline" })}>
  Settings
</Link>
```

## Usage Examples

### Basic Button
```tsx
<Button>Click me</Button>
```

### Styled Variant
```tsx
<Button variant="destructive" size="lg">
  Delete Item
</Button>
```

### As Link
```tsx
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

### With Custom Classes
```tsx
<Button 
  className="custom-class"
  variant="outline"
  size="sm"
>
  Custom Styled
</Button>
```