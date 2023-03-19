import React from "react";

const PostSummaryItem = (post) => {
 return(
     <>
        <li className="list-group-item" key={post.id}>
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} &#183; {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3 mt-3" src={`../images/${post.image}`} alt="couple posing together"/>
                </div>
            </div>
        </li>            
    </>
 );
};

export default PostSummaryItem;