import React from "react";
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducers';

const TuitItem = (tuit) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log("Delete tuit ID: " + id);
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item" key={tuit._id}>
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle ms-2 wd-img-avatar" src={tuit.userIcon} alt=""/>
                </div>
            
                <div className="col-10 pos-relative">
                    <p className="m-0"><span className="wd-ft-bold">{tuit.userName}</span> <AiFillCheckCircle className="wd-icon-primary"/> <span className="text-muted">{tuit.handle} &#183; {tuit.time}</span> <span className="wd-ellipsis"> <button className="btn btn-danger  btn-sm" onClick={() => deleteTuitHandler(tuit._id)}>X</button></span></p>
                    <p className="wd-lh wd-fs pt-2">{tuit.description}{tuit.color === "" ? "" : <span className='text-primary'>{tuit.color}</span>}</p>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;