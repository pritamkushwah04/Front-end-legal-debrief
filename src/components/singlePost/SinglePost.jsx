import { Link } from "react-router-dom";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import React, {useEffect,useState} from 'react';
import { getTotalPosts } from "../../api/posts";

import ReactTimeAgo from 'react-time-ago'



export default function SinglePost(props) {
  
  const scrollToTop =() =>window.scrollTo({top:0,behavior:"smooth"});

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={props.img}
          alt=""
        />
        <h1 className="singlePostTitle">
          {props.title}
        </h1>
        <div className="singlePostInfo">
          {/* <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span> */}
          <ReactTimeAgo date={"Apr 04, 2022"} locale="en-US" />
        </div>
        <p className="singlePostDesc">{props.content}
        </p>
      </div>
    </div>
  );
}
