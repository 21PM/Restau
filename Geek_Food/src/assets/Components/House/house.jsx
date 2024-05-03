import "./house.css"
import Button from "../Main_page/Button/button";

function  House(){
    return(
        <div id="outer_house">
            <div id="House_Img">
            <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="House-image" width="100%" height="100%"></img>
            </div>

            <div id="house_content">
                <div id="inner_house_content">
              <div id="pd-inner">
              <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1><br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <br></br>
                <Button name="Know more" customstyle={{backgroundColor:"rgb(79, 70, 229)", color:"white"}}/>

                </div>
                
              </div>

            </div>

        </div>
    )
}


export default House;