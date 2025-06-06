export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
