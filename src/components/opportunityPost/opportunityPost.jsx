import Post from "../post/Post";
import "./opportunityPost.css";
import CardSkeleton from "../CardSkeleton";
import { getOpportunityPosts } from "../../api/posts";
// import { getTotalOpportunityPosts } from "../../api/posts";

import React, {useEffect,useState} from 'react';

let pageNo = 0;
// const POST_LIMIT = 9;

// const getPaginationCount = (length) => {
//     const division = length / POST_LIMIT;

//     if(division % 1 !== 0){
//         return Math.floor(division) + 1;
//     }

//     return division;
// }

export default function Posts() {
 
  const [posts, setPosts] = useState([]);
  const [totalPostCount, setTotalPostCount] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchPosts = async () => {
    const { error, posts} = await getOpportunityPosts(pageNo, (Math.floor(totalPostCount/3))*3);
    setFetching(false);
    if(error){
        return console.log(error);
    }
    setPosts(posts);
    setTotalPostCount(posts.length);
  };

  useEffect(() => {
    fetchPosts();
  }, );
  
  if (fetching)
    return (
      <div className="flex flex-wrap xl:max-w-[950px] justify-center">
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
    <div className="flex flex-wrap xl:max-w-[950px] justify-center">
      {posts.slice(0,Math.floor(totalPostCount/3)*3).map(post => (
        <Post key={post.slug} id={post.id} title={post.title} img={post.thumbnail} content={post.content} date={post.createdAt} />
      ))}
    </div>
    
     </div>
  );
  
}
