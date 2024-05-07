import { useState } from "react";
import "./menu.css"

let menuItems = ["Home","Quote","Resturants","Foods","Contact"];





function MenuItems({onMenuItemChange}){

        const [selectedMenuItem, setSelectedMenuItem] = useState(true); // Initial selection

        

        function handleMenuItemClick(newselectedMenuItem) {
        
          setSelectedMenuItem(newselectedMenuItem);
          console.log(selectedMenuItem);
        //   if (onMenuItemChange) {       
        //     onMenuItemChange(newselectedMenuItem); // Call callback function if provided
        //     console.log("onmenuchange");
        //   }
        }

        function getquote(e){
                
                if(e.target.innerText === "Quote"){
                        handleMenuItemClick(!selectedMenuItem)
                        
                }
        }



        return(
        <div id="menu_div">
                <ul>
                        {
                            menuItems.map((item,i)=>{
                                if(item === "Home")
                                return(
                                        <li key={i} style={{color:"#2563eb"}}>{item}</li>
                                        
                                )

                                return(
                                        <li key={i}  onClick={getquote}>{item}</li>
                                )
                            })    
                        }
                </ul>
        </div>
        )
}


export default MenuItems;

