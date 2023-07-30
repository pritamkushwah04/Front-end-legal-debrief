import "./singlePost.css";
import Markdown from 'markdown-to-jsx';
import styles from "../../index.css"


export default function SinglePost(props) {
  console.log(styles);
  return (
    <div className="max-w-2xl bg-white mx-24 rounded-lg shadow-lg mb-4  
    ">
      <img className="rounded-t-lg" src={props.img} alt="" />
      <div className="px-2">
        <h1 className="text-gray-800 font-semibold text-xl py-2">{props.title}</h1>
        <h1 className="underline">{props.date}</h1>
        <div className="prose prose-lg prose-headings:my-2">
          {props.content && <Markdown>{props.content}</Markdown>}
        </div>
      </div>
    </div>
  );
 
}
