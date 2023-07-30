import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getBlogPosts,
  getOpportunityPosts,
  getNewsPosts,
  getFeaturedPosts,
} from "../../api/posts";
import dateFormat from "dateformat";
import styles from "../../index.css"
import PostSkeleton from "../../components/PostSkeleton";



export default function Single() {
  const params = useParams();
  const postId = params.postId;

  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);
  const [fetching, setFetching] = useState(true);
  console.log(styles);

  const fetchPosts = async () => {
    let totalPosts = [];
    let promises = [getBlogPosts(), getNewsPosts(), getOpportunityPosts(), getFeaturedPosts()];
    await Promise.all(promises).then((data) => {
      data.forEach((item) => {
        totalPosts = [...totalPosts, ...item.posts];
      });
    });
    setFetching(false);
    setTotalPost(totalPosts);
    setPostCount(totalPosts.length);
  };

  const [postInfo, setPostInfo] = useState({
    pslug: "",
    ptitle: "",
    pimg: "",
    pcontent: "",
    pdate: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (postCount !== 0) {
      let tempPost = totalPosts.find((post) => post.id === postId);
      if (tempPost) {
        setPostInfo({
          ptitle: tempPost.title,
          pslug: tempPost.slug,
          pimg: tempPost.thumbnail,
          pcontent: tempPost.content,
          pdate: tempPost.createdAt,
        });
      }
    }
  }, [postCount, totalPosts, postId]);

  if (fetching) {
    return (
      <PostSkeleton />
    )
  } else {
    return (
      <div className="bg-[#dedede]">
        {postCount ? (
          <div className="flex flex-wrap mx-auto py-4 justify-center">
            <SinglePost className=""
              key={postInfo.slug}
              id={postId}
              title={postInfo.ptitle}
              img={postInfo.pimg}
              content={postInfo.pcontent}
              date={dateFormat(postInfo.pdate, "mmmm d, yyyy")}
            ></SinglePost>
            <Sidebar className="" />
          </div>
        ) : (
          <h1>NO POST</h1>
        )}
      </div>
    );
  }



}
