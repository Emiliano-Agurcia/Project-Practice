
# Understanding Routing in the Next.js App Router

This document explains the file-system-based routing mechanism used in the modern Next.js App Router.

## Core Principle: Folder-Based Routing

The single most important concept to understand is that the **App Router uses folders (directories) to define routes**. This is different from the older "Pages Router" which was file-based.

1.  **Folders Create URL Segments:** Every folder you create inside the `src/app/` directory maps directly to a segment in the URL.
    *   `src/app/` corresponds to the root of your site (`/`).
    *   `src/app/login/` creates the `/login` route.
    *   `src/app/dashboard/settings/` creates the `/dashboard/settings` route.

2.  **`page.tsx` is the UI:** For a folder to become a publicly accessible route, it **must** contain a file named `page.tsx` (or `.js`/`.jsx`). This file should export a React component as its default export.
    *   `src/app/page.tsx` renders the UI for the `/` route.
    *   `src/app/login/page.tsx` renders the UI for the `/login` route.
    *   Any other React component file within these folders (e.g., `MyButton.tsx`) is treated as a private, co-located component, not a separate page. It will not have its own route.

3.  **Dynamic Routes:** You can create routes that handle dynamic data by naming the folder with square brackets.
    *   `src/app/blog/[slug]/page.tsx` will create dynamic routes. It will match `/blog/hello-world`, `/blog/my-first-post`, etc. The `slug` value is passed as a prop to the `page.tsx` component.

## Co-location and Special Files

A major advantage of this folder-based system is the ability to co-locate all files related to a specific route. The App Router recognizes several special filenames:

*   **`layout.tsx`**: Creates a shared UI wrapper for a route and all its child routes. This is perfect for defining headers, footers, or sidebars that persist across pages.
*   **`loading.tsx`**: A file that automatically creates a loading UI using React Suspense. It will be shown to the user while the data for your `page.tsx` is loading.
*   **`error.tsx`**: Creates a component that will automatically render if an unhandled error occurs in the corresponding `page.tsx` or its children.
*   **`route.ts`**: Used to create API endpoints within the same folder structure, allowing you to manage your backend and frontend logic together.

## Contrast with the Old "Pages Router"

It is important not to confuse the App Router with the older Pages Router system.

*   **Pages Router (the old way):** Used a `src/pages` directory where *every* React component file automatically became a route.
    *   `src/pages/about.tsx` would create the `/about` route.
    *   `src/pages/contact.tsx` would create the `/contact` route.

*   **App Router (the new, current way):** Uses the `src/app` directory where only a `page.tsx` file inside a folder creates a route. This provides better organization and enables more advanced features.

In summary, the Next.js App Router's directory-based approach provides a powerful and organized way to structure your application, manage layouts, and handle loading and error states efficiently.
