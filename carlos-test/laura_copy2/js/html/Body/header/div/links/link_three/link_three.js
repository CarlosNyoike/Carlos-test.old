//parent = ../../div.js
//children = [svg]
import React
import SVG from "./svg/svg"

function LinkThree(){
  return(
    <a href="index.html#" class="mobile-nav-toggle mobile-nav-hide" title="Close Menu">
      <SVG/>
    </a>
  )
}
export default LinkThree  //use in ../../div.js
