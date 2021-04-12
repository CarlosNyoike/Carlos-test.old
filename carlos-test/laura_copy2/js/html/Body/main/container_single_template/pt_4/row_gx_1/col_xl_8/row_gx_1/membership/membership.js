//parent = row.js

import React
import TITLE from "./title/title"
import PRICE from "./price/price"
import FEATURES from "./features/features"

import ACTION from "./action/action"
function MEMBERSHIP(){
  return(
    <div class="col-lg-4 mt-5 mt-lg-0 membership">
      <TITLE/>
      <PRICE/>
      <FEATURES/>
      <ACTION/>
    </div>
  )
}
export default MEMBERSHIP
