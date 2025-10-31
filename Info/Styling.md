# CSS Frameworks and Preprocessors Guide

## Table of Contents
- [CSS Frameworks and Preprocessors Guide](#css-frameworks-and-preprocessors-guide)
  - [Table of Contents](#table-of-contents)
  - [Common CSS Frameworks](#common-css-frameworks)
    - [Tailwind CSS](#tailwind-css)
    - [Bootstrap](#bootstrap)
    - [Material UI](#material-ui)
    - [Chakra UI](#chakra-ui)
  - [Alternative Frameworks](#alternative-frameworks)
    - [Bulma](#bulma)
    - [Foundation](#foundation)
    - [Semantic UI](#semantic-ui)
  - [CSS Preprocessors](#css-preprocessors)
    - [SCSS/SASS](#scsssass)
      - [Installation Guide](#installation-guide)
      - [Basic SCSS Features](#basic-scss-features)
      - [File Structure Best Practice](#file-structure-best-practice)

## Common CSS Frameworks

### Tailwind CSS
- **Type**: Utility-first CSS framework
- **Best for**: Custom designs, modern applications
- **Learning Curve**: Medium
- **Documentation**: [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **Installation**: `npm install -D tailwindcss`

### Bootstrap
- **Type**: Component-based CSS framework
- **Best for**: Rapid prototyping, traditional websites
- **Learning Curve**: Low
- **Documentation**: [Bootstrap Docs](https://getbootstrap.com/docs)
- **Installation**: `npm install bootstrap`

### Material UI
- **Type**: React component library with Material Design
- **Best for**: Google Material Design implementation
- **Learning Curve**: Medium
- **Documentation**: [MUI Docs](https://mui.com/material-ui/getting-started/)
- **Installation**: `npm install @mui/material @emotion/react @emotion/styled`

### Chakra UI
- **Type**: Component library with built-in accessibility
- **Best for**: Accessible React applications
- **Learning Curve**: Low
- **Documentation**: [Chakra UI Docs](https://chakra-ui.com/docs/getting-started)
- **Installation**: `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

## Alternative Frameworks

### Bulma
- Modern CSS framework based on Flexbox
- No JavaScript dependencies
- [Bulma Documentation](https://bulma.io/documentation/)
- `npm install bulma`

### Foundation
- Professional-grade responsive framework
- Highly customizable
- [Foundation Documentation](https://get.foundation/sites/docs/)
- `npm install foundation-sites`

### Semantic UI
- Human-friendly HTML syntax
- Intuitive UI components
- [Semantic UI Documentation](https://semantic-ui.com/introduction/getting-started.html)
- `npm install semantic-ui-react semantic-ui-css`

## CSS Preprocessors

### SCSS/SASS
SASS is a preprocessor scripting language that is compiled into CSS. SCSS is a newer syntax of SASS that is more similar to CSS.

#### Installation Guide

1. **With Next.js:**
```bash
npm install -D sass
```
That's it! Next.js has built-in support for SASS/SCSS.

2. **With Create React App:**
```bash
npm install -D sass
```
Same here - CRA supports SASS out of the box.

3. **Manual Setup:**
```bash
npm install -D sass
```
Then add a script to your package.json:
```json
{
  "scripts": {
    "sass": "sass src/styles/input.scss dist/output.css --watch"
  }
}
```

#### Basic SCSS Features
```scss
// Variables
$primary-color: #333;

// Nesting
.navbar {
  background: white;
  
  &__item {  // BEM syntax
    color: $primary-color;
    
    &:hover {
      color: lighten($primary-color, 10%);
    }
  }
}

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-div {
  @include flex-center;
}
```

#### File Structure Best Practice
```
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   └── _navbar.scss
└── main.scss
```

For more detailed information about any framework or preprocessor, visit their respective documentation links.
