const NaviSBSmall = (highlight = "Explore") => {
    const sections = [
      {
        label: '', href: '/', icon: 'fab fa-twitter style="color:white"', 
      },
      {
        label: ' Home', href: '../HomeComponent/index.html', icon: 'fas fa-home style="color:white"',
      },
      {
        label: ' Explore', href: '../ExploreComponent/index.html', icon: 'fas fa-hashtag style="color:white"', 
      },
      {
        label: ' Notifications', href: '/', icon: 'fas fa-bell style="color:white"',
      },
      {
        label: ' Messages', href: '/', icon: 'fas fa-envelope style="color:white"',
      },
      {
        label: ' Bookmarks', href: '/', icon: 'fas fa-bookmark style="color:white"',
      },
      {
        label: ' Lists', href: '/', icon: 'fas fa-list style="color:white"', 
      },
      {
        label: ' Profile', href: '/', icon: 'fas fa-user style="color:white"',
      },
      {
        label: ' More', href: '/', icon: 'fas fa-circle style="color:white"', 
      }
    ]
    return(`
      <div class="list-group">
        ${
          sections.map(section => `
          <a class="list-group-item ${section.label === highlight ? "active" : ""}" href="${section.href}">
            <i class="${section.icon}"></i></a>
          `).join("")
        }
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NaviSBSmall;