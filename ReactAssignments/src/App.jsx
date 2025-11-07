import React,{useState} from "react";
import Assignment04 from "./Assignment04";
import Assignment05 from "./Assignment05";
import Assignment06 from "./Assignment06";

function App(){
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* <Assignment04 intialValue={0}/>
    <Assignment04 intialValue={10}/>
    <Assignment04 intialValue={20}/> */}

      {/* <Assignment05/> */}

      {/* <Assignment06/> */}

       <button onClick={() => setShowLogin(false)}>Register</button>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <hr />
      {showLogin ? (
        <Assignment06 users={users} />
      ) : (
        <Register setUsers={setUsers} users={users} />
      )}
    </>
  );
};

export default App;
