import Nav from "../nav";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";

const Tuiter = () => {
    return(
       <>
         <div>
            <Nav/>
         </div>
         <div class="row">
               <div class="col-2 col-md-2 col-lg-1 col-xxl-none d-xl-none">
                  <NavigationSidebar active="home"/>
               </div>
               <div class="d-none d-xl-block col-xl-2">
                  <NavigationSidebar active="home"/>
               </div>
               <div class="col-10 col-lg-7 col-xl-6" >
                  <Routes>
                     <Route path="home" element={<HomeComponent />} />
                     <Route path="explore" element={<ExploreComponent />} />
                  </Routes>
               </div>
               <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                  <WhoToFollowList/>
               </div>
         </div>   
       </>
    );
 }
 export default Tuiter;