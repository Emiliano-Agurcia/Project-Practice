# Animations in React/Next.js

## CSS Animations

### Basic Transitions
```css
/* In your CSS or Tailwind classes */
.smooth-transition {
  @apply transition-all duration-300 ease-in-out;
}

.hover-scale {
  @apply hover:scale-105 transition-transform duration-200;
}

.fade-in {
  @apply opacity-0 transition-opacity duration-300;
}

.fade-in-visible {
  @apply opacity-100;
}
```

### Keyframe Animations
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 2s infinite;
}
```

### Common Animation Patterns

#### 1. Menu Toggle
```tsx
function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`
      transform transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Menu content */}
    </div>
  )
}
```

#### 2. Fade In on Mount
```tsx
function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div className={`
      transition-opacity duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      {children}
    </div>
  )
}
```

## Animation Libraries

### 1. Framer Motion
The most popular animation library for React applications.

**Installation:**
```bash
npm install framer-motion
```

**Basic Usage:**
```tsx
import { motion } from 'framer-motion'

// Simple animation
function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Card Content
    </motion.div>
  )
}

// Hover animations
function HoverCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Interactive Card
    </motion.div>
  )
}

// Page transitions
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
```

### 2. React Spring
A physics-based animation library.

**Installation:**
```bash
npm install @react-spring/web
```

**Basic Usage:**
```tsx
import { useSpring, animated } from '@react-spring/web'

function AnimatedButton() {
  const springs = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    config: { tension: 300, friction: 10 }
  })

  return (
    <animated.button
      style={{
        transform: springs.scale.to(s => `scale(${s})`)
      }}
    >
      Springy Button
    </animated.button>
  )
}
```

### 3. AutoAnimate
Simple animation utility for React applications.

**Installation:**
```bash
npm install @formkit/auto-animate
```

**Basic Usage:**
```tsx
import { useAutoAnimate } from '@formkit/auto-animate/react'

function AnimatedList() {
  const [parent] = useAutoAnimate()
  const [items, setItems] = useState([1, 2, 3])

  return (
    <ul ref={parent}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
```

## Advanced Animation Techniques

### 1. Intersection Observer Animations
```tsx
function FadeInOnScroll() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      Content appears on scroll
    </motion.div>
  )
}
```

### 2. Stagger Animations
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function StaggeredList({ items }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map(item => (
        <motion.li key={item} variants={item}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

## Performance Tips

1. **CSS vs JavaScript Animations**
   - Use CSS for simple transitions
   - Use JS libraries for complex animations
   - Hardware accelerate when possible with `transform` and `opacity`

2. **Optimization Techniques**
   ```css
   .optimized-animation {
     will-change: transform;
     transform: translateZ(0);
   }
   ```

3. **Reducing Bundle Size**
   - Import specific animations from libraries
   - Use code splitting for animation-heavy components
   - Consider lazy loading animation libraries

## Accessibility Considerations

1. **Respecting User Preferences**
```tsx
function RespectfulAnimation({ children }) {
  const prefersReducedMotion = 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const animationSettings = prefersReducedMotion 
    ? { animate: {} }  // No animation
    : { animate: { opacity: 1 } }  // Normal animation

  return (
    <motion.div
      initial={{ opacity: 0 }}
      {...animationSettings}
    >
      {children}
    </motion.div>
  )
}
```

2. **Progressive Enhancement**
   - Ensure content is accessible without animations
   - Use animations to enhance, not to hide content
   - Provide alternatives for motion-sensitive users