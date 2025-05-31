"use client";

// ========================================== Client Component Version ==========================================
import { useState } from "react";

async function makePostRequest() {
  // This is the way client components can make API requests for your own api
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Bernard" }),
  });

  const data = await res.json();
  console.log("Response from POST request:", data);
  return data;
}

export default function friendPage() {
  const [message, setMessage] = useState("");
  const onClick = async () => {
    const data = await makePostRequest();
    setMessage(data.message);
  };
  return (
    <h1>
      {`Hey friends, ${message}`} <button onClick={onClick}>Click Here</button>
    </h1>
  );
}

// ========================= Server Component Version =========================

// async function makePostRequest() {
//   // For server component, you need the full URL to make the fetch request
//   const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "Bernard" }),
//   });

//   const data = await res.json();
//   console.log("Response from POST request:", data);
//   return data;
// }

// export default async function friendPage() {
//   const data = await makePostRequest();

//   return <h1>{`Hey friends, ${data.message}`}</h1>;
// }
