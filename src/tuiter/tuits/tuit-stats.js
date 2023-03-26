import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { likeTuit } from '../reducers/tuits-reducer';

import { AiOutlineMessage,  AiFillHeart, AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";

const TuitStats = (props) => {
    const dispatch = useDispatch();
    const homeTuitsArray = useSelector(state =>state.tuits);
    const singleTuitIndex = homeTuitsArray.findIndex(tuit => tuit._id === props.id);
    const singleTuitId = homeTuitsArray[singleTuitIndex]._id;
    console.log("Single Tuit ID: " + singleTuitId)
    const likeClickHandler = () => {
        console.log("I'm being clicked");
        if (homeTuitsArray[singleTuitIndex].liked) {
            //
            console.log("Dispatched liked tuit"); 
            dispatch(likeTuit({type: 'LIKE_TUIT', singleTuitId} ));
        } else {
            console.log("Dispatched unliked tuit"); 
            dispatch(likeTuit({type: 'UNLIKE_TUIT', singleTuitId} ));
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-2'>
                        <AiOutlineMessage/> <span>{homeTuitsArray[singleTuitIndex].retuits}</span>
                    </div>
                    <div className='col-2' >
                        <AiOutlineRetweet/> <span>{homeTuitsArray[singleTuitIndex].replies}</span>
                    </div>
                    <div className='col-2' onClick={() => likeClickHandler(homeTuitsArray[singleTuitIndex]._id)}>
                        {
                            homeTuitsArray[singleTuitIndex].liked === true ? <AiFillHeart style={{color:'red'}}/> : <AiOutlineHeart/>
                        }<span>{homeTuitsArray[singleTuitIndex].likes}</span>
                    </div>
                    <div className='col-2'>
                        <AiOutlineUpload/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TuitStats;