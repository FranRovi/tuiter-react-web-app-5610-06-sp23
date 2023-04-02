import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTuitThunk } from '../../services/tuits-thunks';

import { AiOutlineMessage,  AiFillHeart, AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { BsHandThumbsDown } from 'react-icons/bs';

const TuitStats = (props) => {
    const tuit = props.tuit;
    const [tuitLike, setTuitLike ] = useState(props.tuit.likes);
    const [tuitDislike, setTuitDislike ] = useState(props.tuit.dislikes);

    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
        }))
        setTuitLike(tuitLike + 1);
    }
    const dislikeClickHandler = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
        }))
        setTuitDislike(tuitDislike + 1);
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-2'>
                        <AiOutlineMessage/> 
                        <span>{tuit.retuits}</span> 
                    </div>
                    <div className='col-2' >
                        <AiOutlineRetweet/>
                        <span>{tuit.replies}</span> 
                    </div>
                    <div className='col-2' onClick={likeClickHandler}>
                        {tuit.liked ? <AiFillHeart style={{color:'red'}}/> : <AiOutlineHeart/>}
                        <span> {tuitLike}</span> 
                    </div>
                    <div className='col-2' onClick={dislikeClickHandler}>
                        <BsHandThumbsDown/>
                        <span> {tuitDislike}</span> 
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