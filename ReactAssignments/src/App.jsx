import React,{useState} from "react";
import Assignment04 from "./Assignment04";
import Assignment05 from "./Assignment05";
import Assignment06 from "./Assignment06";
import Login from "./Login";

function App(){
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <button onClick={() => setShowLogin(false)}>Register</button>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <hr />

      {showLogin ? (
        <Login users={users} />
      ) : (
        <Assignment06 setUsers={setUsers} users={users} />
      )}
    </>
  );
};

export default App;
