import Post from "../post/Post";
// import Pagination from "../Paggination";
import "./newsPosts.css";
import { getNewsPosts } from "../../api/posts";
// import { getTotalNewsPosts } from "../../api/posts";
import ReactLoading from "react-loading";
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
      <div className="p-10 flex justify-center items-center">
        <ReactLoading type="bars" color="lightblue" />
        
        {/* <Post></Post> */}
      </div>
    );


  return (
    <div >
      <div className="newsPosts ">
        {posts.slice(0,totalPostCount).map(post => (
          <Post key={post.slug} id={post.id} title={post.title} img={post.thumbnail} content={post.content} date={post.createdAt} />
        ))}
      </div>
      {/* <Pagination></Pagination> */}
      
    </div>

  );

}
