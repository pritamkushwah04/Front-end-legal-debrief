import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./featuredSingle.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getFeaturedPosts } from "../../api/posts";



export default function Single() {
  const params = useParams();
  const postId = params.postId;
  console.log("postId: " + postId);
  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);
  console.log("featuredSingle called");
  const fetchPosts = async () => {
    //call getTotalFeaturedPosts()
    const totalPosts = await getFeaturedPosts();
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
  var pdate;
  console.log("in featured");
  console.log(totalPosts.posts);
  
  if (postCount !== 0) {
    totalPosts.posts.map(post => {
      if (postId == post.id) {
        console.log("inside if condition");
        ptitle = post.title;
        pslug = post.slug;
        pimg = post.thumbnail;
        pcontent=post.content;
        pdate=post.createdAt;
      }
    })
  }

  return (
    <div >
      {postCount ?
        <div className="fs">
          <SinglePost key={pslug} id={postId} title={ptitle} img={pimg} content={pcontent} date={pdate}></SinglePost>
          <Sidebar />
        </div>
        : <h1>NO POST</h1>
      }
    </div>



  );



}
