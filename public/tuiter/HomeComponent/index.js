import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeItemList from "./HomeList.js";
import PostSummaryItems from "../PostSummaryList/index.js"
import NaviSBSmall from "../NavigationSidebar/NaviSBSmall.js";


function homeComponent() {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xxl-none d-xl-none">
                ${NaviSBSmall(' Home')}
            </div>
            <div class="d-none d-xl-block col-xl-2">
                ${NavigationSidebar(' Home')}
            </div>
            <div class="col-10 col-lg-6 col-xl-5">
                ${HomeItemList()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5 p-0">
                ${PostSummaryItems()}
            </div>
        </div>
    `);
 }
 
$(homeComponent);