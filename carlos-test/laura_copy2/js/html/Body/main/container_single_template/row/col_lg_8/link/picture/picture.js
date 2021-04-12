//child = none
//parent = ../a.js

import React
function PICTURE(){
  return(
    <picture>
      <source type="image/avif" media="(min-width: 992px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template.avif">
      <source type="image/avif" media="(min-width: 480px) and (max-width: 991px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-md.avif">
      <source type="image/avif" media="(max-width: 479px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-sm.avif">
      <source media="(min-width: 992px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template.png">
      <source media="(min-width: 480px) and (max-width: 991px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-md.png">
      <source media="(max-width: 479px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-sm.png"> <img src="../content/templatefiles/Laura/Laura-bootstrap-website-template.png" class="img-fluid"
        alt="Laura - Free Creative Bootstrap Template" width="1320" height="990">
    </picture>
  )
}
export default PICTURE
