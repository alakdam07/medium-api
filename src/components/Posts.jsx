import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData =  async ()=>{
    try {
      setIsLoaded(true);
      const response  =  await fetch (process.env.REACT_APP_NOT_SECRET_CODE);
      const data = await response.json();
      setPosts(data.items);

    } catch (error) {
      setError(error);
    }
    setIsLoaded(false);
  }

  return (
    <div className="post">
     { error? <div>Error: {error.message}</div>:
       isLoaded? <div>Loading...</div>: <ul>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>}
    </div>
  );
};

export default Posts;
