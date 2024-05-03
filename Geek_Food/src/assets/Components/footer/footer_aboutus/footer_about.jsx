import "./footer_about.css"

let contactus=  ["About","Careers","History","Services","Projects","Blog"]

function AboutUs(){
    return(
           <div id="about_us_div">

            {
                contactus.map((ele)=>{
                    return(
                        <span>{ele}</span>
                    )   
                })
            }

           </div>
    )
}



export default AboutUs;

