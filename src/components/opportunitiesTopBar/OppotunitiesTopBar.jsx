 import Carousel from 'react-elastic-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./opportunitiesTopBar.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo_wobg.png"


export default function Topbar() {
  const breakPoints=[
    { width: 480, itemsToShow: 3},
    { width: 768, itemsToShow: 4},
    { width: 1024, itemsToShow: 6},
    { width: 1200, itemsToShow: 8},
    
  ]; 

  return (
    <div className="oppTop">
      <div className="oppTopCenter">
        <Carousel breakPoints={breakPoints} pagination={false} >
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/call-for-papers">
                Call for papers
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/conferences-and-seminars">
                Conferences and Seminars
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/moots">
                Moots
              </Link>
           </div> 
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/courses-and-workshops">
                Courses and Workshops
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/debate">
                Debates
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/fellowships-and-scholarships">
                Fellowships and Scholarships
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/call-for-blogs">
                Call for blogs
              </Link>
            </div>
             <div className="oppTopListItem">
              <Link className="link" to="/opportunity/essay-competitions">
                Essay Competitions
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/internships-and-projects">
                Internships and Projects
              </Link>
            </div>
            <div className="oppTopListItem">
              <Link className="link" to="/opportunity/fests-muns-and-other-competitions">
                Fests, MUNs and other Competitions
              </Link>
            </div>
        </Carousel>
      </div>
    </div>
  );
}
