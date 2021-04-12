// parent ../../div.js
// children = [svg]
import React
import SVG from "./svg/svg"

function LinkTwo(){
  return(
    <a href="index.html#" class="mobile-nav-toggle mobile-nav-show d-lg-none" title="Toggle Menu">
    <SVG/>
    </a>
  )
}
export default LinkTwo  //use in ../../div.js
