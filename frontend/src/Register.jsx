import { useState } from "react";

function Register() {
  // state variables for storing input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  // function to handle registration
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, role })
      });

      const data = await res.json();
      alert(data.msg);

      // redirect after success
      if (res.ok) {
        window.location.href = "/login";
      }

    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      
      {/* card box */}
      <div style={styles.card}>

        <h2 style={styles.title}>Register</h2>

        {/* name input */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        {/* email input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* password input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* role selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="user">User</option>
          <option value="police">Police</option>
          <option value="admin">Admin</option>
        </select>

        {/* register button */}
        <button onClick={handleRegister} style={styles.button}>
          Register
        </button>

        {/* login link */}
        <p style={styles.text}>
          Already have account? <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2"
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  title: {
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  text: {
    marginTop: "15px"
  }
};
export default Register;