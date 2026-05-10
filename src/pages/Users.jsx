import { useEffect, useState } from "react";
import API from "../api/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get("/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(users) &&
            users.map((u) => (
              <tr key={u._id}>
                <td>{u.username}</td>
                <td>{u.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}