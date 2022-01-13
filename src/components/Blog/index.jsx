import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BLog = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data, setData]);

  return (
    <div>
      <h1>BLog</h1>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id} align="left">
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BLog;
