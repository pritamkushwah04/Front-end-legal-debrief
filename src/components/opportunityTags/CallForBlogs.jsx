import Post from "../post/Post";
import "./tagPost.css";
import { getRelatedOpportunityPosts } from "../../api/posts";
import { getTotalRelatedOpportunityPosts } from "../../api/posts";

import React, {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";

let pageNo = 0;
const POST_LIMIT = 9;

const getPaginationCount = (length) => {
    const division = length / POST_LIMIT;

    if(division % 1 !== 0){
        return Math.floor(division) + 1;
    }

    return division;
}

export default function Posts() {
  const tag="call-for-blogs";
  const [posts, setPosts] = useState([]);
  const [totalPostCount, setTotalPostCount] = useState([]);
  const paginationCount = getPaginationCount(totalPostCount);
  const paginationArr   = new Array(paginationCount).fill(" ");
  
  const fetchPosts = async () => {
    const totalPosts= await getTotalRelatedOpportunityPosts(tag);
    const { error, posts} = await getRelatedOpportunityPosts(pageNo, POST_LIMIT,tag);
    if(error){
        return console.log(error);
    }
    setPosts(posts);
    setTotalPostCount(totalPosts.posts.length);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchMorePosts = (index) => {
    pageNo = index;
    fetchPosts();
  } 

 
  return (
    <div>
    <div className="posts">
      {posts.map(post => (
        <Post key={post.slug} id={post.id} title={post.title} img={post.thumbnail} content={post.content} />
      ))}
    </div>
    
    
     
     {paginationArr.length >0 ? <div className="py-5 flex justify-center items-center space-x-3">
         {paginationArr.map((_, index) => {
             return( 
                 <button
                     key={index}
                   
                     onClick={() => fetchMorePosts(index)}
                     className={
                         index === pageNo
                             ? " text-blue-500 border-b-2 border-b-blue-500"
                             : " text-gray-500"
                     }
                 > 
                     {index + 1} 
                 </button>
             );
         })}
     </div> : <div>NO POST</div>}
     </div>

  );
  
}
