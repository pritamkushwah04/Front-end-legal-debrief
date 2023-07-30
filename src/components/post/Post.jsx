import { Link } from "react-router-dom";
import "./post.css";
import React from "react";
import dateFormat from 'dateformat'

export default function Post(props) {
  return (
    <div className="w-[300px] ml-1 mr-[10px] mb-[10px] flex flex-col shadow-xl bg-white rounded-lg">
      <img className="rounded" src={props.img} alt="" />
      <h5 className="m-1 flex text-[14px] text-[#918c8a]">{dateFormat(props.date, "mmmm d, yyyy")}</h5>
      <div className="flex flex-col items-center">
        <span className="text-[22px] font-Arial font-semibold mt-1 cursor-pointer text-center">
          <Link to={"/post/" + props.id} className="link">
            {props.title}{" "}
          </Link>
        </span>
        <hr />
      </div>
    </div>
  );
}
