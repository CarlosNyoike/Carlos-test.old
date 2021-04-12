//parent = about.js

import React
import LINK1 from "./links/link1"
import LINK2 from "./links/link2"
import LINK3 from "./links/link3"
import LINK4 from "./links/link4"

function DIV(){
  return(
    <div class="social-links d-flex mt-3">
      <LINK1/>
      <LINK2/>
      <LINK3/>
      <LINK4/>
    </div>
  )
}
export default DIV
