import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./featuredSingle.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getFeaturedPosts } from "../../api/posts";



export default function Single() {
  const params = useParams();
  const postId = params.postId;
 
  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);
  
  const fetchPosts = async () => {
    let totalPosts = [];
    let promises = getFeaturedPosts();
    await Promise.all(promises).then((data) => {
      data.forEach((item) => {
        totalPosts = [...totalPosts, ...item.posts];
      });
    });
    setTotalPost(totalPosts);
    setPostCount(totalPosts.length);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  var ptitle;
  var pslug;
  var pimg;
  var pcontent;
  var pdate;
  
  if (postCount !== 0) {
    totalPosts.posts.map(post => {
      if (postId === post.id) {
        console.log("inside if condition");
        ptitle = post.title;
        pslug = post.slug;
        pimg = post.thumbnail;
        pcontent=post.content;
        pdate=post.createdAt;
      }
      return 0;
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
