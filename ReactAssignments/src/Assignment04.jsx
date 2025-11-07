import React, { useState } from "react";

const Assignment04 = ({ intialValue }) => {
  const [count, setCount] = useState(intialValue);
  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h3>{count}</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Assignment04;
