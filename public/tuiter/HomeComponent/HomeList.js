import HomeItem from "./HomeItem.js";
import homes from "./homes.js";

const HomeItemList = () => {
    return(`
        <ul class="list-unstyled">
            ${
                homes.map(home => {
                    return(HomeItem(home))
                }).join("")
            }
        </ul>  
    `);
}

export default HomeItemList;
