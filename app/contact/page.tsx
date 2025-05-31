import Button from "./Button";

export default async function Contact() {
  console.log("Hey, is this in the server or client?");
  // React states and effects are not supported in server components
  // Browser interactions like event listeners, timers, and local storage are not supported in server components

  // Advantages of server components:
  // 1. It pre-renders the html, why faster? Because it does not have to wait for the client to load the javascript and then render the html
  // 2. Server components are pre-rendered on the server and delivered. When search engines like Google crawl the site,
  //    they see the fully rendered HTML, which is better for SEO.
  // 3. Allow you to turn the component async, making it easier to fetch data from a database or an API directly in the component.
  //    Directly do fetch request, access database

  // Can you enjoy the benefits of server components and client components in the same app?
  // Use a server component to fetch data easily
  // Import a client component to handle browser interactions
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return <Button />;
}
