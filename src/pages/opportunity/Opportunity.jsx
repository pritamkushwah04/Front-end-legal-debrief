import "./opportunity.css";
import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import OpportunitiesTopBar from"../../components/opportunitiesTopBar/OppotunitiesTopBar"
import Carousel from "../../components/carousel/Carousel";

export default function Opportunity() {
  return (
      <>
        <div >
          <OpportunitiesTopBar/>
          <div className="home">
              <Posts />
              <Sidebar />
          </div>
        </div>
      </>
  );
  
}
