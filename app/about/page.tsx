import { Metadata } from "next"; // To use Metadata, the component must be a server component

// Highly recommended to add metadata to your server components
export const metadata: Metadata = {
  title: "About US | Name of Website",
  description: "A lot of keywords about the website, and what it does",
  keywords: ["about", "website", "nextjs", "react"],
  twitter: {
    card: "summary_large_image",
    title: "About US | Name of Website",
  },
};

// Metadata can be shared across multiple pages by adding it to the layout.tsx file
// If you have a Metadata in both layout and page, the page's metadata will override the layout's metadata

export default function About() {
  console.log("Hey, is this in the server or client?");

  // the name of the function does not matter because it is not used in the app router
  return <h1>About page</h1>;
}
