import React from "react";
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";

const HomeTuitItem = (tuit) => {
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
                </div>
            </div>
        </li>
    );
};

export default HomeTuitItem;