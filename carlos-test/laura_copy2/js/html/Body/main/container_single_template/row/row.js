//children = [col4.js, col8.js]
//parent = main_container.js

import React
import COL8 from "./col_lg_8/col8"
import COL4 from "./col_lg_4/col4"

function ROW(){
  return(
    <COL8/>
    <COL4/>
  )
}
export default ROW    //use in main_container.js
