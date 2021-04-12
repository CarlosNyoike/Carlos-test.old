//parent = row.js
//children = [action, features, price, title]

import React
import TITLE from "./title/title"
import PRICE from "./price/price"
import FEATURES from "./features/features"
import ACTION from "./action/action"

function FREE(){
  return (
    <div class="col-lg-4 mt-4 mt-lg-0 free">
      <TITLE/>
      <PRICE/>
      <FEATURES/>
      <ACTION/>
    </div>
  )
}
export default FREE //use in row.js
