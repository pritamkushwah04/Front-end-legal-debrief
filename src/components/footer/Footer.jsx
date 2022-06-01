import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
 return (
  <footer className="footer">
        <div className="about">
           <h5 className="title">ABOUT</h5>  
           <p className="para">Hello, We at Legal DeBrief are trying to build a platform which can become a one stop solution to the needs of the people who wish to know about the current trends of the legal field, law students who are looking for internships at firms, NGO and government organizations. There are many websites who are trying to do what we aspire to do but nearly all the website have a particular section in which they provide adequate content, leaving the rest of the topics with inadequate content. This results to the problem of finding a new website for each of the topic. Now, the segments which we will be providing are:
	Internship Zone
	Legal Affairs
	Blog Section
	Call for articles and blogs</p>
        </div>
        
        <div className="contact">
           <h5 className="title">CONTACT</h5>  
           <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde!</p>
        </div>
  </footer>
  );
}
