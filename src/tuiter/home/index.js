import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import homeTuitsArray from "./home-tuits.json";
import HomeTuitItem from "./home-tuit-item";

const HomeComponent = () => {

 return(
   <>
    <FontAwesomeIcon icon={faRetweet} className="text-muted ps-5" /><span className="text-muted"> Elon Musk Retweeted</span>
    <ul className="list-group list-unstyled">
        {
            homeTuitsArray.map(tuit =>
                <li key={tuit._id}><HomeTuitItem
                    userName={tuit.userName}
                    handle={tuit.handle}
                    userIcon={tuit.userIcon}
                    image={tuit.image}    
                    time={tuit.time}
                    description={tuit.description}
                    color={tuit.color}
                    comments={tuit.comments}
                    retweets={tuit.retweets}
                    likes={tuit.likes}
                    extra={tuit.extra}
                    commented={tuit.commeted}
                    />
                </li>
            ) 
        }
    </ul>
   </>
 );
};
export default HomeComponent;