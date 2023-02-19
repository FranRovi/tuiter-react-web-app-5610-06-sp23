const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <img src="${who.avatarIcon}" alt="${who.avatarAlt}" class="col-2 wd-image-rb rounded-circle ps-1 pe-1">
                <div class="col-6 ps-1 pe-1">
                    <h6 class="wd-fs-rb mb-0 d-inline">${who.userName}</h6><i class="fas fa-circle" style="color:white"></i></a>
                    <p class="mt-0 wd-fs-rb-secondary">@${who.handle}</p>
                </div>
                <div class="col-lg-2 p-0">
                    <a href="#" class="btn btn-primary rounded-pill me-2 ">Follow</a>
                </div>  
            </div>
        </li>  
    `);
}

export default WhoToFollowListItem;