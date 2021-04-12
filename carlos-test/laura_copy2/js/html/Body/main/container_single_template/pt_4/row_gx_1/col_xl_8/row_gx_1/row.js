//parent = col8.js
//children = [free.js, membership.js, pro.js]

import React
import FREE from "./free/free"
import PRO from "./pro/pro"
import MEMBERSHIP from "./membership/membership"

function ROW(){
  return(
    <div class="row gx-1">
      <FREE/>
      <PRO/>
      <MEMBERSHIP/>
    </div>
  )
}
export default ROW  //
