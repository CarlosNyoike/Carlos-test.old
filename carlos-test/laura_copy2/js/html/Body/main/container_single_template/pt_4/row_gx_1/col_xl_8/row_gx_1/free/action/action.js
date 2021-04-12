//parent = free.js
//child = []

import React

function ACTION(){
  return(

    <div class="action">
      <strong>Select Version</strong>
      <a class="download-template-subscribe" href="download/index.html" rel="nofollow" title="Laura template created with Bootstrap version v5.0.0 Beta">
        <svg class="icon icon-download" fill="currentColor">
          <use xlink:href="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#download" />
        </svg>
        <span>Bootstrap v5</span>
      </a>
      <a class="download-template-subscribe" href="download-bootstrap-4/index.html" rel="nofollow" title="Laura template created with Bootstrap version v4.6.x">
        <svg class="icon icon-download" fill="currentColor">
          <use xlink:href="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#download" />
        </svg>
        <span>Bootstrap v4</span>
      </a>
    </div>

  )
}
export default ACTION   //use in ../free.js
