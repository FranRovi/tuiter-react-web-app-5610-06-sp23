import PostSummaryItems from "./PostSummaryItems.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group list-unstyled p-2 wd-posts">
            ${
                posts.map(post => {
                    return(PostSummaryItems(post))
                }).join("")
            }
        </lu>  
    `);
}

export default PostSummaryList;