import { useEffect, useState } from "react";
import axios from "axios";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Callapi = () => {
  const [posts, setPosts] = useState<PostType[] | null>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              {post.id} {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Callapi;
