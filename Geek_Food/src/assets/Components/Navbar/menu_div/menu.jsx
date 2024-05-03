import "./menu.css"

let menuItems = ["Home","Quote","Resturants","Foods","Contact"];

function MenuItems(){
        return(
        <div id="menu_div">
                <ul>
                        {
                            menuItems.map((item)=>{
                                if(item === "Home")
                                return(
                                        <li style={{color:"#2563eb"}}>{item}</li>
                                        
                                )

                                return(
                                        <li>{item}</li>
                                )
                            })    
                        }
                </ul>
        </div>
        )
}


export default MenuItems;

