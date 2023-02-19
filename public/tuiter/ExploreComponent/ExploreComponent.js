
const ExploreComponent = () => {
    return(`
            <div class="form-group d-flex justify-content-around wd-pos-rel">
                <i class="fas fa-search wd-input-icon"></i>
                <input type="text" placeholder="Search Twitter" class="form form-control rounded-pill ps-5" width="65px" height="65px" class="mt-1 ms-2"/>
                <i class="fa fa-cog m-3" style="color: #2a9fd6;"></i>
           </div>
           <ul class="nav nav-tabs mt-2 mb-1">
                <li class="nav-item"><a class="nav-link active"> For You</a></li>
                <li class="nav-item"><a class="nav-link">Trending</a></li>
                <li class="nav-item"><a class="nav-link">News</a></li>
                <li class="nav-item"><a class="nav-link">Sports</a></li>
                <li class="nav-item"><a class="nav-link">Entertaiment</a></li>
            </ul>
            <div class="wd-pos-rel">
                <img src="../../images/web_dev_spacex_starship.webp" alt="spaceX starship" width="100%">
                <h2 class="wd-pic-title">SpaceX's Starship</h2>
            </div>
           
    `);
}
export default ExploreComponent;                