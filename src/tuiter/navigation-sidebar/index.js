import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const sections = [
  {
    label: '', path: '', href: '/', icon: "FaTwitter", 
  },
  {
    label: ' Home', path: 'home', href: '../HomeComponent/index.html', icon: 'home',
  },
  {
    label: ' Explore', path: 'explore', href: '../ExploreComponent/index.html', icon: 'hashtag', 
  },
  {
    label: ' Notifications', path: 'notifications', href: '/', icon: 'bell',
  },
  {
    label: ' Messages', path: 'messages', href: '/', icon: 'envelope',
  },
  {
    label: ' Bookmarks', path: 'bookmarks', href: '/', icon: 'bookmark',
  },
  {
    label: ' Lists',path: 'lists', href: '/', icon: 'list', 
  },
  {
    label: ' Profile', path: 'profile', href: '/', icon: 'user',
  },
  {
    label: ' More', path: 'more', href: '/', icon: 'circle', 
  }
]

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  return(
    <>
      <div className="d-none d-xl-block">
        <ul className="list-group list-unstyled">
        {
          sections.map(section => {
            const active = pathname === `/tuiter/${section.path}`;
            return(
              <Link to={`/tuiter/${section.path}`} className={`list-group-item " ${active ? ' active' : ''}`}>
            {section.label === "" ? < FaTwitter/> : <FontAwesomeIcon icon={section.icon} />}{section.label}</Link>)
            }
          )
        }
        </ul>
      </div> 
      <div className="d-block d-xl-none">
        <ul className="list-group list-unstyled">
        {
          sections.map(section => {
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