import React from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findTuit } from '../reducers/tuits-reducer';
import { AiOutlineMessage,  AiFillHeart, AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";

const TuitStats = (tuit) => {
    console.log(tuit.id);
    const dispatch = useDispatch();
    const singleTuit = () => {
        dispatch(findTuit(tuit.id));
    }
    console.log(singleTuit);
    console.log(singleTuit.likes);
    //const tuit = useSelector(state => props.id === tuit._id);
    //state.findIndex(tuit => tuit._id === action.payload);
    //console.log(tuit);
    //console.log(props);
    //
    //console.log("Id of tuit: " + tuitsArray[props.id]);
    // const singleTuit = tuitsArray[0];
    // console.log(singleTuit);
    // console.log(singleTuit._id);

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-2'>
                        <AiOutlineMessage/> <span>{tuit.retuits}</span>
                    </div>
                    <div className='col-2' >
                        <AiOutlineRetweet/> <span>{tuit.replies}</span>
                    </div>
                    <div className='col-2'>
                        {
                            tuit.liked === true ? <AiFillHeart style={{color:'red'}}/> : <AiOutlineHeart/>
                        }<span>{tuit.likes}</span>
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