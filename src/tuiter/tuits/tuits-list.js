import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TuitItem from "./tuits-item";
import { findAllTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
    const { tuits } = useSelector(state => state.tuitsData);
    console.log(tuits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllTuitsThunk());
    }, [])

    return(
        <>
            <ul className="list-group list-unstyled">
                {   tuits.map(tuit =>
                        <li key={tuit._id}><TuitItem
                        id={tuit._id}
                        userName={tuit.userName}
                        handle={tuit.handle}
                        image={tuit.image}    
                        time={tuit.time}
                        description={tuit.description}
                        replies={tuit.replies}
                        retuits={tuit.retuits}
                        likes={tuit.likes}
                        liked= {tuit.liked}
                        dislikes={tuit.dislikes}
                    /></li>
                    )    
                }
            </ul>
        </>
    )
}

export default TuitsList;
