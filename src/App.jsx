import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import FeaturedSingle from "./pages/featuredSingle/FeaturedSingle";
import Opportunity from "./pages/opportunity/Opportunity";
import Blogs from "./pages/blogs/Blogs";
import ScrollToTop from "./components/ScrollToTop";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/featured-posts/:postId">
            <FeaturedSingle />
          </Route>
          <Route path="/opportunity">
            <Opportunity />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
