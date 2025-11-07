import React, { useState } from "react";

function Assignment06({ setUsers, users }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return setMsg("All fields required!");
    if (!/.+@.+\..+/.test(email)) return setMsg("Invalid email!");
    setUsers([...users, { name, email, password }]);
    setMsg("Registered successfully!");
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <>
      <h3>Registration Page</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button>Register</button>
      </form>
      <p>{msg}</p>
    </>
  );
}

export default Assignment06;
