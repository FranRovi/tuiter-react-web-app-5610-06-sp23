import React from "react";

const WhoToFollowListItem = (who) =>
    { 
    return(
        <li className="list-group-item" key={who._id}>
            <div className="row">
                <div className="col-2">
                <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt="company logo"/>
            </div>
            <div className="col-8">
                <div className="fw-bold">{who.userName}</div>
                <div>@{who.handle}</div>
            </div>
            <div className="col-2">
                <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;