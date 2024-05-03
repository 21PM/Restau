import "./content.css"
import Button from "../Button/button"

function Contentdiv(){


        

    return(
        <div id="outer_content_div">
         <div id="content_div">
        <h1 className="style_bold_black">Let us find your</h1>
        <strong className="style_bold_red">Forever Food.</strong>
        <p className="content_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <Button name="Search Now"/>
        <Button name="Know more" customstyle={{backgroundColor:"white", color:"rgb(225, 29, 72)"}}/>
        </div>
        </div>

    )
}

export default Contentdiv;