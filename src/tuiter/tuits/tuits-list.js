import React from "react";
import { useSelector } from 'react-redux';
import TuitItem from "./tuits-item";

const TuitsList = () => {
    const homeTuitsArray = useSelector(state => state.tuits);
    //console.log(homeTuitsArray);
    return(
        <>
            <ul className="list-group list-unstyled">
                {   homeTuitsArray.map(tuit =>
                        <li key={tuit._id}><TuitItem
                        id={tuit._id}
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
                    /></li>
                    )    
                }
            </ul>
        </>
    )
}

export default TuitsList;
