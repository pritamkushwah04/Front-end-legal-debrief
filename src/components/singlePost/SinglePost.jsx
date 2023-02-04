import "./singlePost.css";
import Markdown from 'markdown-to-jsx';
import styles from "../../index.css"


export default function SinglePost(props) {
  return (
    <div className="max-w-2xl mx-auto">
      <img src={props.img} alt="" />
      <div className="px-2">
        <h1 className="text-gray-800 font-semibold text-xl py-2">{props.title}</h1>
        <h1 className="underline">{props.date}</h1>
        <div className="prose prose-lg prose-headings:my-2">
          {props.content && <Markdown>{props.content}</Markdown>}
        </div>
      </div>
    </div>
  );
 
  // return (
  //   <div className="singlePost">
  //     <div className="singlePostWrapper">
  //       <div className="UpperSection">
  //         <h1 className="font-weight: 400">
  //           {props.title}
  //         </h1>
  //         <hr />
  //         <div className="singlePostInfo">
  //           {props.date}
  //         </div>
  //       </div>

  //       <img
  //         className="singlePostImg"
  //         src={props.img}
  //         alt=""
  //       />
  //       <div  >
  //         {props.content && <Markdown>{props.content}</Markdown>}
  //       </div>
  //     </div>
  //   </div>
  // );
}
