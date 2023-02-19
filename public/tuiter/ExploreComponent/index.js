import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js"
import PostSummaryItems from "../PostSummaryList/index.js"
import NaviSBSmall from "../NavigationSidebar/NaviSBSmall.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xxl-none d-xl-none">
                ${NaviSBSmall(' Explore')}
            </div>
            <div class="d-none d-xl-block col-xl-2">
                ${NavigationSidebar(' Explore')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}
                ${PostSummaryItems()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
 }
 
$(exploreComponent);