# Next.js Tutorial Summary

This document summarizes the key concepts and steps involved in building a Next.js site, including code examples and best practices.

---

## 1. How to Build a Next.js Site

**Step 1: Create a Next.js App**

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

**Step 2: Project Structure**

- `app/` or `pages/`: Main directory for routes and components.
- `public/`: Static assets.
- `next.config.js`: Configuration file.

---

## 2. Server Component vs Client Component

### Server Component

- Runs only on the server.
- No access to browser APIs or state.
- Default in the `app/` directory.

```tsx
// app/page.tsx
export default function Home() {
  // Server-side code
  return <h1>Hello from Server Component</h1>;
}
```

### Client Component

- Runs in the browser.
- Can use state, effects, and browser APIs.
- Add `"use client"` at the top.

```tsx
// app/components/Counter.tsx
"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 3. layout.tsx, page.tsx, error.tsx, loading.tsx

- **layout.tsx**: Defines shared layout for a route segment.
- **page.tsx**: Defines the main page content.
- **error.tsx**: Handles errors in a route segment.
- **loading.tsx**: Shows a loading UI during data fetching.

**Example Structure:**

```
app/
  layout.tsx
  page.tsx
  error.tsx
  loading.tsx
```

**layout.tsx**

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>/* navigation */</nav>
        {children}
      </body>
    </html>
  );
}
```

**page.tsx**

```tsx
// app/page.tsx
export default function HomePage() {
  return <main>Welcome to Next.js!</main>;
}
```

**error.tsx**

```tsx
// app/error.tsx
"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

**loading.tsx**

```tsx
// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

---

## 4. API Route

- API routes are defined in `app/api/` (app router).

**Example:**

```ts
// app/api/hello/route.ts
export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "Hello API" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```

---

## 5. Client-side API Fetching vs Server-side API Fetching

### Client-side Fetching

- Use React hooks like `useEffect` and `fetch` in client components.

```tsx
// app/components/UserList.tsx
"use client";
import { useEffect, useState } from "react";
export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

### Server-side Fetching

- Use `fetch` directly in server components.

```tsx
// app/page.tsx
export default async function Home() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 6. SEO Optimization

- Use the `metadata` export in the `app/` directory for SEO.
- Use `<Head>` in the `pages/` directory.

**Example:**

```tsx
// app/page.tsx
export const metadata = {
  title: "Home Page",
  description: "Welcome to my Next.js site",
};
export default function HomePage() {
  return <main>SEO Optimized Page</main>;
}
```

**Best Practices:**

- Use semantic HTML tags.
- Add Open Graph and Twitter meta tags.
- Optimize images with `next/image`.
- Use canonical URLs.

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
