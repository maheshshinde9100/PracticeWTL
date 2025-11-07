import React, { useState } from "react";

function Login({ users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) setMsg("Login successfully!");
    else setMsg("Invalid credentials!");
  };

  return (
    <>
      <h3>Login Page</h3>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </>
  );
}

export default Login;
