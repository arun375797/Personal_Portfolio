# 🎬 Portfolio Animation Guide

A comprehensive guide to all animation effects used in this portfolio, built with **Framer Motion** and **CSS animations**.

---

## 📚 Table of Contents

1. [Hero Section Animations](#hero-section-animations)
2. [Scroll-Triggered Animations](#scroll-triggered-animations)
3. [Navigation Animations](#navigation-animations)
4. [Component Entrance Animations](#component-entrance-animations)
5. [Hover Effects](#hover-effects)
6. [Background Animations](#background-animations)
7. [Custom Cursor Animation](#custom-cursor-animation)
8. [Scroll Indicators](#scroll-indicators)
9. [CSS Animations](#css-animations)
10. [Customization Tips](#customization-tips)

---

## 🎯 Hero Section Animations

### 1. **Rotating Text Animation** ⭐ NEW!

**Location:** `src/components/Hero.jsx`

The hero title rotates through different roles with smooth transitions.

```javascript
// Rotating roles array
const roles = [
  'Full Stack Developer',
  'MERN Stack Expert',
  'Problem Solver',
  'Code Enthusiast',
  'Web Developer'
];

// Animation variants
const textVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.3
    }
  }
};
```

**How it works:**
- Changes text every 3 seconds using `setInterval`
- Fades out with slide up animation
- Fades in with slide down animation
- Includes scaling effect for depth

**Customize:**
```javascript
// Change speed (in milliseconds)
setInterval(() => {...}, 3000);  // Current: 3 seconds

// Change transition duration
duration: 0.5  // Faster or slower transitions
```

### 2. **Blinking Cursor Effect**

```javascript
<motion.span
  className="inline-block w-1 h-8 md:h-12 bg-primary-400 ml-1"
  animate={{ opacity: [1, 0, 1] }}
  transition={{ duration: 0.8, repeat: Infinity }}
/>
```

**Properties:**
- Opacity cycles: 1 → 0 → 1
- Duration: 0.8 seconds
- Repeats: Infinite

### 3. **Staggered Children Animation**

```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delay between each child
      delayChildren: 0.3,    // Initial delay
    },
  },
};
```

**Effect:** Each element appears one after another with a 0.2s delay

### 4. **Profile Image Animations**

```javascript
// Glowing border
<div className="... animate-pulse" />

// Hover scale
whileHover={{ scale: 1.05 }}

// Initial entrance
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 1.2, duration: 0.8 }}
```

### 5. **Floating Badges**

```javascript
animate={{ y: [0, -10, 0] }}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

**Effect:** Badges float up and down continuously

---

## 🔄 Scroll-Triggered Animations

**Library:** `react-intersection-observer`

**Location:** All section components (About, Skills, Experience, etc.)

```javascript
const [ref, inView] = useInView({
  threshold: 0.2,      // Trigger when 20% visible
  triggerOnce: true,   // Animate only once
});

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
>
```

**Sections with scroll animations:**
- ✅ About Section
- ✅ Skills Section
- ✅ Experience Section
- ✅ Projects Section
- ✅ Contact Section

**Animation Pattern:**
1. Elements start hidden (opacity: 0, y: 30)
2. When scrolled into view, they fade in and slide up
3. Stagger effect creates wave-like appearance

---

## 🧭 Navigation Animations

**Location:** `src/components/Navbar.jsx`

### 1. **Navbar Entrance**

```javascript
initial={{ y: -100 }}
animate={{ y: 0 }}
```

**Effect:** Navbar slides down from top on page load

### 2. **Menu Items Fade In**

```javascript
{navItems.map((item, index) => (
  <motion.a
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

**Effect:** Each menu item appears with increasing delay

### 3. **Mobile Menu**

```javascript
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    />
  )}
</AnimatePresence>
```

**Effect:** Smooth expand/collapse animation

### 4. **Hover Effects**

```javascript
whileHover={{ y: -2 }}      // Lift up on hover
whileHover={{ scale: 1.2 }}  // Scale up
whileTap={{ scale: 0.9 }}    // Shrink on click
```

---

## 📦 Component Entrance Animations

### Standard Item Variants

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
```

**Used in:**
- Section headers
- Cards
- Text blocks
- Images

### Section Header Pattern

```javascript
// Number indicator fade
initial={{ opacity: 0, y: -20 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.2 }}

// Title slide up
initial={{ opacity: 0, y: -20 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ delay: 0.3 }}

// Underline expand
initial={{ width: 0 }}
animate={inView ? { width: 96 } : {}}
transition={{ delay: 0.5, duration: 0.8 }}
```

---

## 🎨 Hover Effects

### 1. **Card Hover**

```javascript
<motion.div
  className="card"
  whileHover={{ y: -10 }}
/>
```

**Cards with hover lift:**
- About highlights
- Skill categories
- Experience cards
- Project cards

### 2. **Button Hover**

```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Buttons affected:**
- Primary buttons
- Outline buttons
- Social media icons

### 3. **Icon Rotation**

```javascript
whileHover={{ rotate: 360 }}
transition={{ duration: 0.6 }}
```

**Location:** Skill category icons

### 4. **Link Slide**

```javascript
whileHover={{ x: 5 }}  // Slide right
```

**Location:** Footer links, project links

---

## 🌈 Background Animations

**Location:** Hero section

### 1. **Floating Orbs**

```javascript
<div className="... animate-float" />
```

**CSS Animation:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

**Multiple orbs with different delays:**
```jsx
style={{ animationDelay: '0s' }}   // First orb
style={{ animationDelay: '2s' }}   // Second orb
style={{ animationDelay: '4s' }}   // Third orb
```

### 2. **Gradient Animation**

```css
@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}
```

---

## 🖱️ Custom Cursor Animation

**Location:** `src/components/Cursor.jsx`

### 1. **Main Cursor Ring**

```javascript
<motion.div
  animate={{
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
    scale: isHovering ? 1.5 : 1,
  }}
  transition={{
    type: 'spring',
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  }}
/>
```

### 2. **Cursor Dot**

```javascript
animate={{
  x: mousePosition.x - 4,
  y: mousePosition.y - 4,
  scale: isHovering ? 0 : 1,
}}
transition={{
  type: 'spring',
  stiffness: 1000,
  damping: 40,
  mass: 0.2,
}}
```

### 3. **Cursor Trail**

```javascript
animate={{
  x: mousePosition.x - 24,
  y: mousePosition.y - 24,
  scale: isHovering ? 1.8 : 1,
}}
transition={{
  type: 'spring',
  stiffness: 150,
  damping: 20,
  mass: 1,
}}
```

**Spring Properties:**
- `stiffness`: How quickly cursor follows (higher = faster)
- `damping`: Smoothness (lower = more bouncy)
- `mass`: Weight feel (higher = slower)

---

## ⬇️ Scroll Indicators

### 1. **Scroll Down Arrow**

**Location:** Bottom of Hero section

```javascript
<motion.a
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <FiArrowDown />
</motion.a>
```

**Effect:** Bounces up and down continuously

### 2. **Scroll to Top Button**

**Location:** `src/components/ScrollToTop.jsx`

```javascript
<AnimatePresence>
  {isVisible && (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    />
  )}
</AnimatePresence>
```

**Behavior:**
- Appears when scrolled > 300px
- Fades in with scale
- Lifts on hover
- Compresses on click

---

## 🎭 CSS Animations

**Location:** `src/index.css`

### 1. **Float Animation**

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

**Used for:** Background orbs

### 2. **Gradient Animation**

```css
@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient {
  animation: gradient 8s linear infinite;
}
```

**Used for:** Gradient backgrounds

### 3. **Glow Animation**

```css
@keyframes glow {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```

**Used for:** Pulsing effects

### 4. **Spin Animation**

```css
.animate-spin {
  animation: spin 1s linear infinite;
}
```

**Used for:** Loading indicators

---

## 🎯 Animation Performance Tips

### 1. **Use `transform` and `opacity`**
These properties are GPU-accelerated:
```javascript
// Good ✅
transform: 'translateY(0px)'
opacity: 1

// Avoid ❌
top: '0px'
display: 'block'
```

### 2. **Reduce Motion for Accessibility**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. **Use `triggerOnce` for Scroll Animations**

```javascript
useInView({
  triggerOnce: true,  // Animate only once
})
```

This prevents re-animation on every scroll.

---

## 🛠️ Customization Tips

### Change Animation Speed

```javascript
// Slower
transition={{ duration: 1.2 }}

// Faster
transition={{ duration: 0.3 }}
```

### Change Easing

```javascript
ease: 'easeIn'      // Starts slow
ease: 'easeOut'     // Ends slow
ease: 'easeInOut'   // Both
ease: 'linear'      // Constant speed
ease: [0.6, -0.05, 0.01, 0.99]  // Custom cubic-bezier
```

### Change Spring Feel

```javascript
type: 'spring'
stiffness: 300    // Bounciness (100-500)
damping: 20       // Smoothness (10-50)
mass: 1           // Weight (0.1-5)
```

### Disable Specific Animations

```javascript
// Disable hover effect
// whileHover={{ scale: 1.05 }}  // Comment out

// Disable entrance animation
initial={{ opacity: 1 }}  // Start visible
```

### Change Scroll Threshold

```javascript
useInView({
  threshold: 0.5,  // 50% of element must be visible
})
```

---

## 📊 Animation Timing Reference

| Component | Entrance Delay | Duration | Repeat |
|-----------|---------------|----------|--------|
| Navbar | 0s | 0.6s | Once |
| Hero Text | 0.5-0.9s | 0.6s | Once |
| Role Rotation | - | 0.5s | Every 3s |
| Profile Image | 1.2s | 0.8s | Once |
| Floating Badges | - | 3s | Infinite |
| Background Orbs | - | 6s | Infinite |
| Scroll Indicator | - | 1.5s | Infinite |
| Section Headers | 0.2-0.5s | 0.6s | Once |
| Cards | Staggered 0.1s | 0.6s | Once |
| Cursor | Real-time | 0.3s | Continuous |

---

## 🎪 Animation Combinations

### Hero Entrance Sequence

1. **Navbar** slides down (0s)
2. **Background orbs** start floating (0s)
3. **"Hi, my name is"** fades in (0.5s)
4. **Name** slides up (0.7s)
5. **Role title** animates in (0.9s)
6. **Description** fades in (1.1s)
7. **Buttons** appear (1.3s)
8. **Social icons** pop in (1.5s)
9. **Profile image** scales in (1.2s)
10. **Floating badges** appear (1.5s)

Total entrance time: ~2 seconds

### Section Entrance Sequence

1. **Section number** fades in (0.2s)
2. **Title** slides up (0.3s)
3. **Underline** expands (0.5s)
4. **Content** fades in (0.7s)
5. **Cards** stagger in (0.8s+)

---

## 🔗 Animation Libraries Used

### Framer Motion
```json
"framer-motion": "^10.16.16"
```

**Key features used:**
- `motion` components
- `AnimatePresence` for exit animations
- `variants` for animation presets
- `whileHover`, `whileTap` for interactions
- Spring physics for natural motion

### React Intersection Observer
```json
"react-intersection-observer": "^9.5.3"
```

**Usage:**
- Scroll-triggered animations
- Lazy loading detection
- Viewport visibility detection

---

## 📚 Further Reading

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Animation Performance](https://web.dev/animations-guide/)
- [Accessible Animations](https://web.dev/prefers-reduced-motion/)

---

## 🎬 Animation Checklist

When adding new animations:

- [ ] Use `transform` and `opacity` for performance
- [ ] Add `transition` with appropriate duration
- [ ] Consider mobile performance
- [ ] Test with slow networks
- [ ] Respect `prefers-reduced-motion`
- [ ] Use `AnimatePresence` for exit animations
- [ ] Add appropriate delays for sequencing
- [ ] Test hover states on touch devices
- [ ] Ensure animations don't block user interaction
- [ ] Keep animations under 1 second for UI feedback

---

**Created by:** Arun Thomas  
**Last Updated:** 2025  
**Portfolio Version:** 1.0.0

---

*Enjoy the animations! Feel free to customize them to match your style.* 🎨✨

