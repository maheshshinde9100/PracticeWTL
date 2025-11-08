import React, { useState, useEffect } from "react";

const Assignment08 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:5000/api/users");
    const data = await res.json();
    console.log(data);
    setResponse(data);
  }

  async function addUser() {
    const user = { name, email, age };
    const res = await fetch("http://localhost:5000/api/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    setMsg(data.msg);
    getData();
  }

  async function updateUser() {
    const user = { name, email, age };
    const res = await fetch(`http://localhost:5000/api/user/${name}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    setMsg(data.msg);
    getData();
  }

  async function deleteUser() {
    const res = await fetch(`http://localhost:5000/api/user/${name}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    setMsg(data.msg);
    getData();
  }

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
      />
      <hr />

      {/* ✅ FIXED: Pass function reference, not function call */}
      <button onClick={getData}>GET DATA</button>
      <button onClick={addUser}>ADD USER</button>
      <button onClick={updateUser}>UPDATE USER</button>
      <button onClick={deleteUser}>DELETE USER</button>
      <hr />

      <h3>{msg}</h3>

      <h4>Users List:</h4>
      <ul>
        {response.map((user, i) => (
          <li key={i}>
            {user.name} - {user.email} - {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Assignment08;
