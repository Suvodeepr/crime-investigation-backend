// This is User dashboard page
// It fetches protected data using token
// Also includes logout button

import { useEffect, useState } from "react";
import { fetchWithAuth } from "./api";

function User() {

  // state to store user data
  const [users, setUsers] = useState([]);

  // logout function
  const logout = () => {
    localStorage.removeItem("token");   // remove token
    window.location.href = "/login";    // go to login page
  };

  // fetch data when page loads
  useEffect(() => {
    fetchWithAuth("http://localhost:3000/users")
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>User Dashboard</h2>

      {/* logout button */}
      <button onClick={logout}>Logout</button>

      <br /><br />

      {/* display users */}
      {users.map((u) => (
        <p key={u._id}>{u.name} - {u.email}</p>
      ))}
    </div>
  );
}

export default User;