import Post from "../post/Post";
import CardSkeleton from "../CardSkeleton";
// import Pagination from "../Paggination";
import "./newsPosts.css";
import { getNewsPosts } from "../../api/posts";
// import { getTotalNewsPosts } from "../../api/posts";
// import styles from "../../index"

import React, { useEffect, useState } from 'react';

let pageNo = 0;
// const POST_LIMIT = 100;

// const getPaginationCount = (length) => {
//   const division = length / POST_LIMIT;

//   if (division % 1 !== 0) {
//     return Math.floor(division) + 1;
//   }

//   return division;
// }

export default function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [totalPostCount, setTotalPostCount] = useState([]);
  const [fetching, setFetching] = useState(true);
  
  const fetchPosts = async () => {
    const { error, posts } = await getNewsPosts(pageNo, 100 );
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
      <div className="max-w-screen-lg flex  flex-wrap justify-center items-center">
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    );


  return (
    <div >
      <div className="flex flex-wrap max-w-screen-lg justify-center">
        {posts.slice(0,totalPostCount).map(post => (
          <Post key={post.slug} id={post.id} title={post.title} img={post.thumbnail} content={post.content} date={post.createdAt} />
        ))}
      </div>
      {/* <Pagination></Pagination> */}
      
    </div>

  );

}
