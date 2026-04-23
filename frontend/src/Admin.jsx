// Admin dashboard page
// Shows all users data
// Includes logout button

import { useEffect, useState } from "react";
import { fetchWithAuth } from "./api";

function Admin() {

  const [data, setData] = useState([]);

  // logout function
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // fetch data
  useEffect(() => {
    fetchWithAuth("http://localhost:3000/users")
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Admin Panel</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      {data.map(item => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Admin;