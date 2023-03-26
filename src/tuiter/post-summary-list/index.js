import React from 'react';
import { useSelector } from 'react-redux'
import PostSummaryItem from "../post-summary/post-summary-item";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.posts)
  console.log(postsArray);

  return(
    <>
      <ul className="list-group list-unstyled">
          { 
            postsArray.map(post => <li key={post._id}>
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