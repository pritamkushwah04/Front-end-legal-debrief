import "./blogs.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Blogs() {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-[#dedede] pt-4">
      <Posts />
      <Sidebar />
      </div>
    </>
  );
}
