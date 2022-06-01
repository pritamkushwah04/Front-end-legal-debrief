import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import React, {useEffect,useState} from 'react';
import { getTotalPosts } from "../../api/posts";



export default function Single() {
  const params = useParams();
  const postId = params.postId;
  // console.log(postId);
  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);
  const fetchPosts = async () => {
    const totalPosts= await getTotalPosts();
    setTotalPost(totalPosts);
    setPostCount(totalPosts.posts.length);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  var ptitle;
  var pslug;
  var pimg;
  var pcontent;
  
  if(postCount!=0){
    console.log("inside if condition");
    totalPosts.posts.map(post => {
      if(postId==post.id){
         ptitle=post.title;
         pslug=post.slug;
         pimg=post.thumbnail;
         pcontent=post.content;
      }
    }) 
  }

  return (
    <div>
      {postCount?
      <div >
      <SinglePost key={pslug} id={postId} title={ptitle} img={pimg} content={pcontent}></SinglePost>
      </div>
      :<h1>NO POST</h1>
      }
    </div>
  
  
  
  );
 
 
 
}
