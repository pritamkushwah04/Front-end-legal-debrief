import { Link } from "react-router-dom";
import "./post.css";
import React from "react";
import ReactTimeAgo from "react-time-ago";
import ReactMarkdown from 'react-markdown'

//it creates post
export default function Post(props) {
  console.log("in post component");

  // Last seen: <ReactTimeAgo date={date} locale="en-US"/>
  return (
    <div className="post">
      <img className="postImg" src={props.img} alt="" />
      <h5 className="postDate">Apr 04, 2022</h5>
      
    
      <div className="postInfo">
        <span className="postTitle">
          <Link to={"/post/" + props.id} className="link">
            {props.title}{" "}
          </Link>
        </span>
        <hr />
      </div>
      {/* <span className="postDate">1 hour ago</span> */}
    </div>
  );
}
