import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg);
        return;
      }

      // store token + role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login successful");

      // role redirect
      if (data.role === "admin") {
        window.location.href = "/admin";
      } else if (data.role === "police") {
        window.location.href = "/police";
      } else {
        window.location.href = "/user";
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

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => window.location.href="/"} style={{cursor:"pointer"}}>
        New user? Register
      </p>
    </div>
  );
}

export default Login;