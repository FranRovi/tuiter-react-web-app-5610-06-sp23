import React from "react";
import PostSummaryList from "../post-summary-list/index";
import "./index.css";
const ExploreComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-mglass-input"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a className="nav-link active" href="/">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">News</a>
       </li>
     </ul>
     <div className="position-relative mb-2">
       <img src="../../images/web_dev_rocket_launch.jpeg" className="w-100" alt= "rocket ready for launch"/>
       <h1 className="position-absolute wd-title-overlap-exp text-white">
         SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;