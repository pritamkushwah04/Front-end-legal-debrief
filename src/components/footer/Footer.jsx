import "./footer.css";

export default function Footer() {
   return (
      <footer >
         <div className="flex flex-wrap bg-[#26262c] text-[22px]">
            <div className="p-10 w-1/2 items-center">
               <h5 className="text-[#a1a5a8] text-center">ABOUT</h5>
               <p className="p-2 item-center text-[#a1a5a8]">Hello, at Legal DeBrief, we're creating a one-stop platform for legal professionals, law students, and organizations. Our segments include Internship Zone, Legal Affairs, Blog Section, and Call for Articles and Blogs. No more searching multiple websites for comprehensive content – we've got you covered!</p>
            </div>
            <div className="p-10 w-1/2 items-center">
               <h5 className="text-[#a1a5a8] text-center">CONTACT US</h5>
               <p className="p-2 item-center text-[#a1a5a8]">
                  <p>9993903175</p>
                  <p>To Submit your blog: mail us at team.legaldebrief@gmail.com</p>
               </p>
            </div>
         </div>
      </footer>
   );
}
