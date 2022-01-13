import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data, setData]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.title}</h1>
          <br />
          <p align="left">{data.body}</p>
        </>
      )}
    </div>
  );
};

export default SingleBlogPage;
