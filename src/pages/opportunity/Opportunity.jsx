import "./opportunity.css";
import OpportunityPost from "../../components/opportunityPost/opportunityPost";
import CallForBlogs from "../../components/opportunityTags/CallForBlogs";
import Debate from "../../components/opportunityTags/Debate";
import Moots from "../../components/opportunityTags/moots";

import CallForPapers from "../../components/opportunityTags/CallForPapers";
import Sidebar from "../../components/sidebar/Sidebar";
import OpportunitiesTopBar from "../../components/opportunitiesTopBar/OppotunitiesTopBar"
 import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch 
} from "react-router-dom";

export default function Opportunity() {
  let { path } = useRouteMatch();
  console.log("path");
  console.log(path);
  
  return (

    <>
      <OpportunitiesTopBar />
      <div className="flex flex-wrap justify-center bg-[#dedede] pt-4">
        <Switch>
          <Route exact path={path}>
            <OpportunityPost />
          </Route>
          <Route path="/opportunity/debate">
            <Debate />
          </Route>
          <Route path="/opportunity/call-for-blogs">
            <CallForBlogs/>
          </Route>
          <Route path="/opportunity/call-for-papers">
            <CallForPapers />
          </Route>
          <Route path="/opportunity/conferences-and-seminars">
            <Debate />
          </Route>
          <Route path="/opportunity/moots">
            <Moots />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </>
  );
}
