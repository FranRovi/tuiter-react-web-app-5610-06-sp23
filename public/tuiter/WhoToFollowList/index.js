import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group list-unstyled p-2">
            <h6 class="list-group-item mb-0 wd-fs-rb wd-title-bold">Who to follow</h6>
            ${
                whos.map(who => {
                    return(WhoToFollowListItem(who))
                }).join("")
            }
        </ul>  
    `);
}

export default WhoToFollowList;




