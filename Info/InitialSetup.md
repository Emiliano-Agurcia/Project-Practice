# Initial Next.js Project Setup

## Creating a New Project

### Standard Setup
```bash
# With npm
npx create-next-app@latest my-app

# With pnpm
pnpm create next-app my-app

# With Yarn
yarn create next-app my-app
```

### Setup Questions and Recommended Answers
```
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? Yes
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? Yes
```

## Project Structure
```
my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   ├── lib/              # Utilities and helpers
│   └── types/            # TypeScript types
├── public/               # Static files
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── .env.local         # Local environment variables
```

## Essential Configuration Files

### 1. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    domains: ['your-image-domain.com'],
  },
  // Enable experimental features if needed
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
```

### 2. tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Environment Variables

### 1. Setup
Create `.env.local` in your project root:
```env
# API Keys
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key

# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 2. Usage
```typescript
// Server-side
const apiKey = process.env.API_SECRET_KEY

// Client-side (must be prefixed with NEXT_PUBLIC_)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Git Setup

### 1. Initialize Git
```bash
git init
```

### 2. Create .gitignore
```gitignore
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

## Scripts in package.json
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

## Best Practices

### 1. File and Folder Organization
- Use clear, consistent naming
- Group related files together
- Keep components small and focused
- Use index files for cleaner imports

### 2. Type Safety
- Enable strict mode in TypeScript
- Define types for all props
- Use proper type imports/exports

### 3. Code Quality
- Use ESLint and Prettier
- Write meaningful comments
- Follow consistent coding standards

### 4. Performance
- Implement proper loading states
- Use image optimization
- Implement proper caching strategies

## Common Issues and Solutions

### 1. Path Aliases Not Working
Check `tsconfig.json` paths and `next.config.js` configuration:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 2. Environment Variables Not Loading
- Ensure `.env.local` is in the root directory
- Restart the development server
- Check prefix (`NEXT_PUBLIC_` for client-side usage)

### 3. TypeScript Errors
- Run `npm install @types/react @types/node`
- Check `tsconfig.json` configuration
- Update Next.js types with `npm install @types/next`