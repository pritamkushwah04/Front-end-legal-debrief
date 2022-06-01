import { useLocation } from "react-router";
import NewsPosts from "../../components/newsPosts/NewsPosts";
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedPosts from "../../components/featuredPosts/FeaturedPosts";
import Footer from "../../components/footer/Footer";

import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div><FeaturedPosts/></div>
      <div className="hhome">
        <NewsPosts />
        <Sidebar />
      </div>
    </div>
    
  );
}
