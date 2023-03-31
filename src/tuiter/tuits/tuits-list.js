import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TuitItem from "./tuits-item";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
    
    const {tuits, loading} = useSelector(state => state.tuitsData);
    // const homeTuitsArray = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(findTuitsThunk())}, [])
    return(
        <>
            <ul className="list-group list-unstyled">
                {
                    loading && <li className="list-group-item">Loading ...</li>
                }
                {   tuits.map(tuit =>
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
