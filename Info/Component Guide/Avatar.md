# Avatar Component Documentation

## Core Features Summary

| Topic | Explanation | Example / Effect |
|-------|-------------|------------------|
| **Radix Integration** | Built on top of `@radix-ui/react-avatar` for accessibility and functionality | Ensures proper ARIA attributes and keyboard navigation |
| **Forwarded Refs** | Uses `React.forwardRef` with Radix-specific type definitions | Enables proper ref handling and type safety |
| **Fallback Handling** | Provides fallback UI when image fails to load | Shows initials or placeholder when avatar image isn't available |
| **Size Customization** | Uses Tailwind classes for consistent sizing | Default: `h-10 w-10`, customizable via className |
| **Shape Control** | Rounded styling with configurable border radius | Default: `rounded-full` for circular avatars |
| **Display Name** | Preserves Radix component name in DevTools | Shows as `<Avatar />` instead of `<ForwardRef />` |
| **Type Safety** | Full TypeScript support with Radix primitive types | Automatic prop type inference and validation |
| **Style Merging** | Uses `cn()` utility for className merging | Allows style customization while preserving defaults |

## Component Interface

```typescript
const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  // Component implementation
))
```

### Type Definitions Explained:
- **Root Component Ref**: `React.ComponentRef<typeof AvatarPrimitive.Root>`
  - Preserves proper ref typing from Radix primitive
  - Enables correct DOM element access

- **Component Props**: `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>`
  - Inherits all Radix Avatar properties
  - Excludes ref prop (handled separately by forwardRef)
  - Includes standard HTML attributes

## Component Details

### Type Safety and Radix Integration
The verbose type declarations provide several benefits:
- Automatic prop inference from Radix primitives
- Full IntelliSense support
- Type-safe prop validation
- Proper ref handling

### Display Name
```typescript
Avatar.displayName = AvatarPrimitive.Root.displayName
```
Benefits:
- Better debugging experience
- Clear component identification in React DevTools
- Improved error stack traces

## Usage Examples

### Basic Avatar
```tsx
<Avatar>
  <AvatarImage src="/user-avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With Custom Size
```tsx
<Avatar className="h-16 w-16">
  <AvatarImage src="/user-avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With Fallback Content
```tsx
<Avatar>
  <AvatarImage src="/invalid-image.png" alt="User" />
  <AvatarFallback>
    <UserIcon className="h-6 w-6" />
  </AvatarFallback>
</Avatar>
```

## Alternative Implementation

For simpler use cases, you could use a more basic implementation:

```typescript
const SimpleAvatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("relative flex h-10 w-10 rounded-full", className)} 
      {...props} 
    />
  )
);
```

**Note:** The simpler version loses:
- Radix's accessibility features
- Automatic prop type inference
- Built-in fallback handling
- Image loading states

## Best Practices

1. **Always Provide Fallback**
   - Use initials or placeholder icons
   - Handle loading and error states

2. **Maintain Aspect Ratio**
   - Keep width and height equal
   - Use square images when possible

3. **Optimize Images**
   - Use appropriate image sizes
   - Consider using Next.js Image component for optimization

4. **Accessibility**
   - Always include alt text for avatar images
   - Preserve Radix's built-in accessibility features