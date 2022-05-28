import "./blogs.css";
import BlogPosts from "../../components/blogpost/BlogPosts"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Blogs() {
    console.log("blog called");
    return (
      <>
        <div className="home">
          <BlogPosts />
          <Sidebar />
        </div>
      </>
  );
  
}
