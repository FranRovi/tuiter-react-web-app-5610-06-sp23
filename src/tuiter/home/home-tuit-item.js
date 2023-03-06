import React from "react";
import "./index.css";
import {AiOutlineComment, AiOutlineRetweet, AiOutlineHeart, AiOutlineUpload, AiFillCheckCircle} from "react-icons/ai";

const HomeTuitItem = (tuit) => {

    const commentTweet = {
        _id: 3,
        userName: "Elon Musk",
        userIcon: "../../images/web_dev_spaceX_logo.jpeg",
        handle: "@SpaceX",
        time: "16h",
        description: "Starlink for Rv's now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv",
        commented : false,
        height: 25,
        width: 20

    };

    return(
        <li className="list-group-item" key={tuit._id}>
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle ms-2 wd-img-avatar" src={tuit.userIcon} alt=""/>
                </div>
            
                <div className="col-10 pos-relative">
                    <p className="m-0"><span className="wd-ft-bold">{tuit.userName}</span> <AiFillCheckCircle className="wd-icon-primary"/> <span className="text-muted">{tuit.handle} &#183; {tuit.time}</span> <span className="wd-ellipsis">...</span></p>
                    <p className="wd-lh wd-fs">{tuit.description}{tuit.color === "" ? "" : <span className='text-primary'>{tuit.color}</span>}</p>
                    {
                        tuit.image === "" ? <></> : <img className="rounded-4" src={tuit.image} width="100%" alt="" />
                    }

                    {
                        tuit.userName === "Elon Musk" ? <>
                            <div className="row border rounded-4 me-2">
                                <div>
                                    <img className="col-1 rounded-circle m-1" height={commentTweet.height} width={commentTweet.width} src={commentTweet.userIcon} alt="" /> <span className="m-0"><span className="wd-ft-bold ps-1">{commentTweet.userName} <AiFillCheckCircle className="wd-icon-primary"/></span> <span className="text-muted">{commentTweet.handle} &#183; {commentTweet.time}</span><span className="text-muted wd-pd-st"></span></span>
                                </div>
                                <div>
                                    <p className="wd-lh ps-3 wd-fs-s">{commentTweet.description}</p>
                                </div>
                            </div>

                        </> : <></>
                    }
                    <div className="d-flex justify-content-around mb-0 ">
                        <AiOutlineComment className="mt-3 ms-3" /><span className="mt-3 me-1">{tuit.comments}</span>
                        <AiOutlineRetweet className="mt-3 ms-3" /><span className="mt-3 me-1">{tuit.retweets}</span>
                        <AiOutlineHeart className="mt-3 ms-3" /><span className="mt-3 me-1">{tuit.likes}</span>
                        <AiOutlineUpload className="mt-3 ms-3" />
                    </div>
                    <p className="text-primary mt-2">{tuit.extra}</p>
                </div>
            </div>
        </li>
    );
};

export default HomeTuitItem;