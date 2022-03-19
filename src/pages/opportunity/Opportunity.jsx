import "./opportunity.css";
import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Carousel from "../../components/carousel/Carousel";

export default function Write() {
  return (
      <>
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </>
  );
  
}
