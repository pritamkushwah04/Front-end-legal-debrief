import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getBlogPosts,
  getOpportunityPosts,
  getNewsPosts,
} from "../../api/posts";
import dateFormat from "dateformat";
import styles from "../../index.css"

export default function Single() {
  const params = useParams();
  const postId = params.postId;
  // console.log(postId);
  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);

  const fetchPosts = async () => {
    // const totalPosts = await getBlogPosts();
    // const totalNews = await getNewsPosts();
    // const totalOpp = await getOpportunityPosts();
    let totalPosts = [];
    let promises = [getBlogPosts(), getNewsPosts(), getOpportunityPosts()];
    await Promise.all(promises).then((data) => {
      // totalPosts.push(...data.posts);
      // totalPosts = [...totalPosts, data.posts];
      data.forEach((item) => {
        totalPosts = [...totalPosts, ...item.posts];
      });
    });

    console.log({ totalPosts });
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
    // var ptitle;
    // var pslug;
    // var pimg;
    // var pcontent;

    if (postCount !== 0) {
      let tempPost = totalPosts.find((post) => post.id === postId);
      console.log("in single post");
      console.log({ tempPost });

      if (tempPost)
        setPostInfo({
          ptitle: tempPost.title,
          pslug: tempPost.slug,
          pimg: tempPost.thumbnail,
          pcontent: tempPost.content,
          pdate: tempPost.createdAt,
        });
    }
  }, [postCount, totalPosts, postId]);

  return (
    <div>
      {postCount ? (
        <div className="flex flex-wrap mx-auto my-4">
          <SinglePost className="mx-24"
            key={postInfo.slug}
            id={postId}
            title={postInfo.ptitle}
            img={postInfo.pimg}
            content={postInfo.pcontent}
            date={dateFormat(postInfo.pdate, "mmmm d, yyyy")}
          ></SinglePost>
          <Sidebar className=""/>
        </div>
      ) : (
        <h1>NO POST</h1>
      )}
    </div>
  );
}
