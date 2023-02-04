// import { Link } from "react-router-dom";
import "./sidebar.css";
import {FaTwitter} from 'react-icons/fa'
import Link from "@material-ui/core/Link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        
        <div className="sidebarSocial">
        <Link
        href="https://www.facebook.com/legaldebrief"><i style={{ color: '#3f729b' }}  className="sidebarIcon fab fa-facebook-square"></i>
        </Link>
        <Link
        href="https://www.instagram.com/legal_debrief/"><i style={{ color: '#CC0066' }} className="sidebarIcon fab fa-instagram-square"></i>
        </Link>
        <Link
        href="https://www.linkedin.com/in/legal-debrief-85377222b/"><i className="sidebarIcon fab fa-linkedin"></i>
        </Link>
        </div>
      </div>
    </div>
  );
}