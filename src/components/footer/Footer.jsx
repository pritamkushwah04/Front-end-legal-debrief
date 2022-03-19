import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
 return (
  <footer className="footer">
        <div className="about">
           <h5 className="title">ABOUT</h5>  
           <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde!</p>
        </div>
        
        <div className="contact">
           <h5 className="title">CONTACT</h5>  
           <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde!</p>
        </div>
  </footer>
  );
}
