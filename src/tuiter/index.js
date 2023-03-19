import Nav from '../nav';
import { Routes, Route } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import ExploreComponent from './explore';
import HomeComponent from './home';
import ProfileComponent from './profile/profile';
import EditProfileComponent from './profile/edit-profile';
import whoReducer from './reducers/who-reducers';
import tuitsReducer from './reducers/tuits-reducers';
import postsReducer from './reducers/posts-reducer';
import sectionsReducer from './reducers/sections-reducer';
import profileReducer from './reducers/profile-reducer';

const store = configureStore(
   {
      reducer: {
         who: whoReducer,
         tuits: tuitsReducer,
         posts: postsReducer,
         sections: sectionsReducer,
         profile: profileReducer,
      }
   }
);

const Tuiter = () => {
    return(
       <>
         <Provider store={store}>
            <div>
               <Nav/>
            </div>
            <div className="row">
                  <div className="col-2 col-md-2 col-lg-1 col-xxl-none d-xl-none">
                     <NavigationSidebar active="home"/>
                  </div>
                  <div className="d-none d-xl-block col-xl-2">
                     <NavigationSidebar active="home"/>
                  </div>
                  <div className="col-10 col-lg-7 col-xl-6" >
                     <Routes>
                        <Route path="explore" element={<ExploreComponent />} />
                        <Route path="home" element={<HomeComponent />} />
                        <Route path="profile" element={<ProfileComponent />} />
                        <Route path="edit" element={<EditProfileComponent />} />
                        <Route index element={<HomeComponent />} />
                        
                     </Routes>
                  </div>
                  <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                     <WhoToFollowList/>
                  </div>
            </div>   
         </Provider>
         
       </>
    );
 }
 export default Tuiter;