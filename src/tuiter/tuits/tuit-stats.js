import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { AiOutlineMessage,  AiFillHeart, AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";

const TuitStats = (props) => {
    //const dispatch = useDispatch();
    const tuitsArray = useSelector(state => state.tuits);
    const singleTuit = tuitsArray[0];
    console.log(singleTuit);


    return (
        <>
            {
                tuitsArray.map(tuit => 
                    <>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'>
                                </div>
                                <div className='col-2'>
                                    <AiOutlineRetweet/> <span>{tuit.replies}</span>
                                </div>
                                <div className='col-2' >
                                    <AiOutlineMessage/> <span>{tuit.retuits}</span>
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
        </>
    )
}

export default TuitStats;