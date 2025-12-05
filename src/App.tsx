import React from "react";

type Role = "ADMIN" | "USER";

interface User {
  id: string;
  name: string;
  role: Role;
}

const mockUsers: User[] = [
  { id: "1", name: "Alice", role: "ADMIN" },
  { id: "2", name: "Bob", role: "USER" },
];

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = React.useState<Role>("ADMIN");

  const filteredUsers = currentRole === "ADMIN" ? mockUsers : mockUsers.filter(u => u.role === "USER");

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>Admin Portal</h1>
      <p>Current role: <strong>{currentRole}</strong></p>

      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setCurrentRole("ADMIN")}>Login as Admin</button>
        <button style={{ marginLeft: "8px" }} onClick={() => setCurrentRole("USER")}>
          Login as User
        </button>
      </div>

      <h2>Users</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
