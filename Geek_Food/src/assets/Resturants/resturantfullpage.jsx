import Navouterdiv from "../Components/Navbar/navbar"
import Footermain from "../Components/footer/footer"
import ResturantDiv from "./resturant";

function Resturant(){
        return(
            <div>
                <Navouterdiv/>
                <ResturantDiv/>
                <Footermain/>

            </div>
        )
}

export default Resturant;