import { Link } from "react-router-dom";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getTotalPosts } from "../../api/posts";
import ReactTimeAgo from 'react-time-ago'
import ReactMarkdown from 'react-markdown'





export default function SinglePost(props) {

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="UpperSection">
          <h1 className="singlePostTitle">
            {props.title}
          </h1>
          <hr />
          <div className="singlePostInfo">
            {props.date}
          </div>
        </div>

        <img
          className="singlePostImg"
          src={props.img}
          alt=""
        />
        <div className="bottomSection">
          <p className="singlePostDesc">
            <ReactMarkdown>{props.content}</ReactMarkdown>
          </p>

        </div>
      </div>
    </div>
  );
}
