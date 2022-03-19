import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>  <Carousel /></div>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      {/* <div>  <Footer /></div> */}
      
      
    </>
  );
}
