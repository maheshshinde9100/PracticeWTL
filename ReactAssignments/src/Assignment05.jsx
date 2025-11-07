import React, { useState } from "react";
import axios from "axios";

const Assignment05 = () => {
  const [userInfo, setUserInfo] = useState({});
  const url = "https://api.github.com/users/maheshshinde9100";

  async function fetchData() {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setUserInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button onClick={fetchData}>Fetch User Information</button>

      <div>
        {Object.entries(userInfo).map(([key, value]) => (
          <h5 key={key}>
            {key}: {String(value)}
          </h5>
        ))}
      </div>
    </>
  );
};

export default Assignment05;
