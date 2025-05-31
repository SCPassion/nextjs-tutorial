// If there is no not-found.tsx file in the app directory, Next.js will automatically render a default 404 page.
// Otherwise, it will render the custom 404 page defined in not-found.tsx.

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        You can go back to the <a href="/">home page</a>.
      </p>
    </div>
  );
}
