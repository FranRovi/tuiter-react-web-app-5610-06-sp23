

const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
            <div class="col-9">
                    <p class="m-0 wd-fs-rb-secondary text-muted">${post.topic}</p>
                    <p class="m-0 wd-fs-rb-secondary">${post.userName} <i class="fas fa-circle" style="color:white"></i> <span class="text-muted"> - ${post.time}</p>
                    <h6 class="wd-fs-rb mb-0 d-inline">${post.title}</h6>
                    ${post.tweets === "" ? "" : `<p class="m-0 wd-fs-rb-small">${post.tweets}</p>`}
                       
                </div>
                <img src="${post.image}" alt="Java logo" class="col-2 p-0 wd-image-rb wd-post-image">
            </div>
        </li>  
    `);
}

export default PostSummaryItem;