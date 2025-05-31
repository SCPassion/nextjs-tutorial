import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  // params is a promise that resolves to an object with userId

  const { userId } = await params; // await the promise to get the userId
  const user = await fetchUser(userId); // fetch the user data

  if (!user) {
    // If there is no user data, return a 404 page
    notFound(); // This will trigger a 404 page in Next.js automatically
  }
  console.log("User data:", user); // log the user data to the console
  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>
        Address: {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
      <p>Catchphrase: {user.company.catchPhrase}</p>
      <p>BS: {user.company.bs}</p>
      <p>Username: {user.username}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>Latitude: {user.address.geo.lat}</p>
      <p>Longitude: {user.address.geo.lng}</p>
    </div>
  );
}

async function fetchUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    return null;
  }
  const user = await res.json();
  return user;
}
