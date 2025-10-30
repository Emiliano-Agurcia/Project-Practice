🧩 1. What is buttonVariants, and what is cva?

    buttonVariants is a function created by cva() from the library class-variance-authority.

    It’s used to manage Tailwind class combinations (variants) in a clean, structured way.

⚙️ 2. What does this mean?
    const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => { ... }
    );

    Let’s break it down:

    React.forwardRef:
    Allows you to forward a ref from a parent component to a DOM node (so someone using <Button ref={...} /> actually gets the underlying <button>).

    <HTMLButtonElement, ButtonProps>:
    → First type param: the element type the ref points to (button tag).
    → Second: the props the component accepts (ButtonProps you defined).

    ({ className, variant, size, asChild = false, ...props }, ref):
    → Destructures the props object and provides a default for asChild.
    → ...props captures all other props (onClick, aria-label, etc.) and passes them through.

🧱 3. What is Comp?
    const Comp = asChild ? Slot : "button";
    
    
    This is a neat Radix trick.
    
    If asChild = false → the component renders a normal <button>.
    
    If asChild = true → it renders a Radix Slot instead.
    
    The Slot component lets you make the button’s styles apply to a child element instead of rendering its own DOM element.
    
    Example:
    
    <Button asChild>
      <a href="/dashboard">Go</a>
    </Button>
    
    
    This renders:
    
    <a class="button-styles" href="/dashboard">Go</a>
    
    
    Instead of nesting a <button> inside <a>, which would be invalid HTML.