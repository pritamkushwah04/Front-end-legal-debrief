import "./blogs.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Blogs() {
  console.log("blog called");
  return (
    <>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
