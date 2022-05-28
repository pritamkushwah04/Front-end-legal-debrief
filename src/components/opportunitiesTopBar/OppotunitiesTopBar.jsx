import "./opportunitiesTopBar.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo_wobg.png"


export default function Topbar() {
  return (
    <div className="oppTop">
      <div className="oppTopCenter">
        <ul className="oppTopList">
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP1
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/opportunity">
              OPP2
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP3
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP4
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP5
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP6
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP7
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP8
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP9
            </Link>
          </li>
          <li className="oppTopListItem">
            <Link className="link" to="/">
              OPP10
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
