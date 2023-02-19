const HomeItem = (home) => {
    return(`
        <li>
            <div class="row">
                <div class="col-1">
                    <img src="${home.avatarIcon}" class="rounded-circle wd-icon">
                </div>
                <div class="col-10">
                    <span>${home.userName} </span><i class="fas fa-circle" style='color:white'></i><span class='text-muted'> ${home.handle} &#x2022</span> <span class='text-muted'>${home.time}</span><span class="text-muted wd-ellipsis-end">...</span>
                    <p>${home.heading}</p>
                    <div>
                        <div>
                            <img src="${home.imageM}" class="wd-image-home wd-home-border-top-rounded">
                            <div class="wd-home-border-bottom-rounded">
                                ${home.imageH === "" ? "" : `<p class="image-heading p-1">${home.imageH}</p>`
                                }
                                ${home.imageD === "" ? "" : `<p class="wd-home-description">${home.imageD}</p>`
                                }
                                ${home.chain === "" ? "" : `<i class=" mt-0 p-2 pe-0 fas fa-link style="font-size: 0.25em" ></i><span class="ps-0 wd-home-description">${home.chain}</span>`
                                }
                            </div>
                            
                        </div> 

                    </div>
                    <ul class="d-flex justify-content-between list-unstyled p-2">
                    <li><i class="far fa-comment wd-icons-main-txt"></i><span class="wd-icons-main-txt"> ${home.comments}</span></li>
                    <li><i class="fas fa-retweet wd-icons-main-txt"></i><span class="wd-icons-main-txt"> ${home.retweets}</span></li>
                    <li><i class="far fa-heart wd-icons-main-txt"></i><span class="wd-icons-main-txt"> ${home.likes}</span></li>
                    <li><i class="fas fa-upload wd-icons-main-txt"></i></li>
                <ul>
                </div> 
            </div>
            <hr class="width-all-line mt-0" />      
        </li>      
    `);
}
export default HomeItem;        