import Post from "../post/Post";
import "./posts.css";
import CardSkeleton from "../CardSkeleton";
import { getBlogPosts } from "../../api/posts";
// import { getTotalBlogPosts } from "../../api/posts";

import React, { useEffect, useState } from "react";

let pageNo = 0;

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPostCount, setTotalPostCount] = useState(0);
  const [fetching, setFetching] = useState(true);

  const fetchPosts = async () => {
    const { error, posts } = await getBlogPosts(pageNo, 100);
    setFetching(false);
    if (error) {
      return console.log(error);
    }
    setPosts(posts);
    setTotalPostCount(Math.floor(posts.length/3)*3);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  if (fetching)
    return (
      <div className="newsPosts  flex justify-center items-center">
        {/* <ReactLoading type="bars" color="lightblue" /> */}
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        
        {/* <Post></Post> */}
      </div>
  );

  return (
    <div>
      <div className="posts">
        {posts.slice(0,totalPostCount).map((post) => (
          <Post
            key={post.slug}
            id={post.id}
            title={post.title}
            img={post.thumbnail}
            content={post.content}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
