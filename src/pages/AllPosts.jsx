import React, { useState, useEffect } from "react";
import service from "../appwrite/conf";
import { Container, PostCards } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  service.listPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="py-2 w-1/4">
                <PostCards {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
