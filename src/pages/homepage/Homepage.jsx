import { useLocation } from "react-router";
import NewsPosts from "../../components/newsPosts/NewsPosts";
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedPosts from "../../components/featuredPosts/FeaturedPosts";
// import Footer from "../../components/footer/Footer";
import React from "react";
import "./homepage.css";


export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <FeaturedPosts />
      <div className="flex justify-center bg-[#dedede] ">
        <NewsPosts />
        <Sidebar />
      </div>
    </div>

  );
}
