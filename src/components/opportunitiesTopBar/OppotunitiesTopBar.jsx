import "./opportunitiesTopBar.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo_wobg.png"


export default function Topbar() {
  return (
    <div className="oppTop">
      <div className="oppTopCenter">
        <ul className="oppTopList">
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/call-for-blogs">
              Call for blogs
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/call-for-papers">
              Call for papers
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/conferences-and-seminars">
              Conferences and Seminars
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/courses-and-workshops">
              Courses and Workshops
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/debate">
              Debates
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/essay-competitions">
              Essay Competitions
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/fellowships-and-scholarships">
              Fellowships and Scholarships
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/internships-and-projects">
              Internships and Projects
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/fests-muns-and-other-competitions">
              Fests, MUNs and other Competitions
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity/moots">
              Moots
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
