import React from 'react'
import "./featuredPost.css";
// import { Link } from "react-router-dom";

export default function featuredPost(props) {
  return (
    <div className='singlefp' >
      {/* <Link to={"/post/:postId"+props.id} className="link"> */}
      <img
        className="img"
        src={props.img}
        alt=""
      />
      {/* </Link> */}
    </div>
  );
}