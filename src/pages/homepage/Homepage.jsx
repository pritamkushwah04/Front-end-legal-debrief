import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedPosts from "../../components/featuredPosts/FeaturedPosts";
import Footer from "../../components/footer/Footer";

import "./homepage.css";
import BlogPosts from "../../components/blogpost/BlogPosts";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div><FeaturedPosts/></div>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
