import "./footer.css"
import Footerlogo from "./footer_logo_div/footer_logo"
import AboutUs from "./footer_aboutus/footer_about"
import SocialLogo from "./footer_social_media/socialLogo"

function Footermain(){
    return(
        <footer id="footer_main_div">
                <div id="footer_inner_div">
                <Footerlogo/>
                <AboutUs/>
                <SocialLogo/>
                </div>
        </footer>
    )
}

export default Footermain;