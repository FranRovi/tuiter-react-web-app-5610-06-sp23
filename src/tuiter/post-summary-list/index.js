import React from "react";
import postsArray from '../post-summary-list/posts.json';
import PostSummaryItem from "../post-summary/post-summary-item";

const PostSummaryList = () => {
  return(
    <>
      <ul className="list-group list-unstyled">
          { 
            postsArray.map(post => <li className="" key={post._id}>
              <PostSummaryItem
                time={post.time}
                image={post.image}
                topic={post.topic}
                title={post.title}
                userName={post.userName}
              />
              </li>
            )
          }
    </ul>
    </>
    
  );
};

export default PostSummaryList;