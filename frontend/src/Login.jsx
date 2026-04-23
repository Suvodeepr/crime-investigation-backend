// This file is used for user login
// After login, token is saved in browser

import { useState } from "react";

function Login() {

  // state variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to handle login
  const handleLogin = async () => {

    try {
      // send login request to backend
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      // save token in localStorage
      localStorage.setItem("token", data.token);

      alert(data.msg);

      // redirect after login
      if (res.ok) {
        window.location.href = "/";
      }

    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;