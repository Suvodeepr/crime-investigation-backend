// this page allows user to register

import { useState } from "react";

function Register() {

  // store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  // function to handle registration
  const handleRegister = async () => {

    try {
      // send data to backend
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, role })
      });

      const data = await res.json();

      alert(data.msg);

      // if success → go to login
      if (res.ok) {
        window.location.href = "/login";
      }

    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register</h2>

      {/* name input */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      {/* email input */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      {/* password input */}
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      {/* role selection */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="police">Police</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;