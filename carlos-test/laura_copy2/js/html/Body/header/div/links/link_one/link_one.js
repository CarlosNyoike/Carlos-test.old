// parent = ../../div.js
// children = [img, p]

import React
import P from "./p/p"

function LinkOne(){
  return(
    <a href="../index.html" rel="home" title="Free Bootstrap Themes and Website Templates" class="logo d-flex me-auto align-items-center">
      <img alt="BootstrapMade" src="../theme/img/logo.png" width="31" height="30">
      <P/>
    </a>
  )
}
export default LinkOne  //use it in ../div.js
