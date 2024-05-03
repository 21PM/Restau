import Logodiv from "./logo_div/logo"
import MenuItems from "./menu_div/menu"
import Getstartedbutton from "./btn_div/btn";

import './navbar.css';

function Navouterdiv () {


   

    return(
        <nav id="navbar" className="navstyle">
            <Logodiv/>
            <MenuItems/>
            <Getstartedbutton/>
        </nav>
    )

}


export default Navouterdiv
