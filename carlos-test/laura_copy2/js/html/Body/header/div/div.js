/*
linkOne; nav; div; linkTwo; linkThree; svg
 */

import React
import SVG from "./svg/svg"
import LinkOne from "./links/link_one/link_one"
import LinkTwo from "./links/link_two/link_two"
import LinkThree from "./links/link_three/link_three"
import NAV from "./nav/nav"
import DIV from "./div/div"

function DIV(){
  return(
    <LinkOne/>  //first in line
    <NAV/> //second in line
    <DIV/>//third in line
    <LinkTwo/>//fourth in line
    <LinkThree/>//fifth in line
    <SVG/>//last in line
  )
}
export default DIV //use it in header
