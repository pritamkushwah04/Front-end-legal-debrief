import { Link } from "react-router-dom";
import logo from "../../image/logo_wobg.png"
import "./topbar.css";

export default function Topbar() {
  const user = true;
  const scrollToBottom =() =>window.scrollTo({top:100000000,behavior:"smooth"});
  const scrollToTop =() =>window.scrollTo({top:0,behavior:"smooth"});

  return (
    <div className="top">
      <div className="topLeft">
      <Link className="link"onClick={scrollToTop} to="/">
      <img
        className="icon"
        src={logo}
        alt=""
      />
      </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link"onClick={scrollToTop} to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem" onClick={scrollToBottom}>ABOUT</li>
          <li className="topListItem" onClick={scrollToBottom}>CONTACT</li>
          <li className="topListItem">
            <Link className="link"onClick={scrollToTop} to="/blogs">
              BLOGS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link"onClick={scrollToTop} to="/opportunity">
              OPPORTUNITY
            </Link>
          </li>
          {/* {user && <li className="topListItem">LOGOUT</li>}
         */}
        </ul>
      </div>
      <div className="topRight">
      </div>
      
    </div>
  );
}
