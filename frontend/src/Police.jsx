// Police dashboard page
// Shows cases data
// Includes logout button

import { useEffect, useState } from "react";
import { fetchWithAuth } from "./api";

function Police() {

  const [cases, setCases] = useState([]);

  // logout function
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // fetch cases
  useEffect(() => {
    fetchWithAuth("http://localhost:3000/cases")
      .then(data => setCases(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Police Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      {cases.map(c => (
        <p key={c._id}>{c.title}</p>
      ))}
    </div>
  );
}

export default Police;