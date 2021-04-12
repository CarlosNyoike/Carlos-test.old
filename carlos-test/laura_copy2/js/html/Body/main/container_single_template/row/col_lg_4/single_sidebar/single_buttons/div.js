//children = [link1, link2]
//parent = single_sidebar.js
import React
import A1 from "./links/link1"
import A2 from "./links/link2"

function DIV1(){
  return(
    <div class="single-buttons">
      <A1/>
      <A2/>
    </div>
  )
}
export default DIV1  //to be used in single_sidebar.js
