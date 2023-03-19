import React from "react";
import { useSelector } from 'react-redux';
// import whoArray from './who.json';
import WhoToFollowListItem from "../who-to-follow/who-to-follow-List-item";

const WhoToFollowList = () => {
  const whoArray = useSelector(state => state.who);
  return(
    <>
      <ul className="list-group list-unstyled">
        <li className="list-group-item list-unstyled border">
          <h4>Who to follow</h4>
        </li>
          { 
            whoArray.map(who => <li className=""  key={who._id}>
                <WhoToFollowListItem
              userName={who.userName}
              handle={who.handle}
              avatarIcon={who.avatarIcon}  
              />
            </li>
            )
          }
      </ul>
    </>
    
  );
};

export default WhoToFollowList;