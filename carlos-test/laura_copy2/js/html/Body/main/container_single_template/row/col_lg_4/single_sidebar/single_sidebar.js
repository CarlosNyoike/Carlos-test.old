//children = [single_buttons/, template_details/div.js]
//parent = COL4.js

import React
import DIV1 from "./single_buttons/div"
import DIV2 from "./template_details/div"

function SIDEBAR(){
  return(
    <div class="single-sidebar">
      <DIV1/>
      <DIV2/>
    </div>
  )
}
export default SIDEBAR  //use in col4.js
