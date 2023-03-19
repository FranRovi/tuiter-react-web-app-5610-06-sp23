import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHome, faBell, faEnvelope, faBookmark, faList, faCircle, faGear, faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faHome, faBell, faEnvelope, faBookmark, faList, faCircle, faGear, faGlobe );

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const sectionsArray = useSelector(state => state.sections);
  console.log(sectionsArray);
  return(
    <>
      <div className="d-none d-xl-block">
        <ul className="list-group list-unstyled">
        {
          sectionsArray.map(section => {
            const active = pathname === `/tuiter/${section.path}`;
            return(
              <>
                <Link to={`/tuiter/${section.path}`} className={`list-group-item " ${active ? ' active' : ''}`}>
                {section.label === "" ? < FaTwitter/> : <FontAwesomeIcon icon={section.icon} />}{section.label}</Link>
              </>
            )    
          })
        }
        </ul>
      </div> 
      <div className="d-block d-xl-none">
        <ul className="list-group list-unstyled">
        {
          sectionsArray.map(section => {
            const active = pathname === `/tuiter/${section.path}`;
            return(
              <Link to={`/tuiter/${section.path}`} className={`list-group-item " ${active ? ' active' : ''}`}>
            {section.label === "" ? < FaTwitter/> : <FontAwesomeIcon icon={section.icon} />}</Link>)
            }
          )
        }
        </ul>
      </div> 
    </>
    
  )
};

export default NavigationSidebar;