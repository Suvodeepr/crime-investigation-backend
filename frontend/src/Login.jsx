// this page handles login

import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async () => {

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, role })
      });

      const data = await res.json();

      alert(data.msg);

      if (res.ok) {
        // store token and role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // redirect based on role
        if (data.role === "admin") {
          window.location.href = "/admin";
        } else if (data.role === "police") {
          window.location.href = "/police";
        } else {
          window.location.href = "/user";
        }
      }

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="police">Police</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;