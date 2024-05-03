import "./card.css"

function ReviewCard({para,customStyle={}}){
    return(
        <div id="outer_container_card" style={{
            maxHeight: "346px", 
            ...customStyle
            }}>
                <div id="inner_card_container">
                    <div id="text_box">
                            <p>{para}</p>
                    </div>
                </div>
                <div id="profile_div">
                    <div id="image_div">
                        <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"  width="100%" height="100%"></img>

                    </div>
                    <div id="name_div">
                    <span>Gladis Lennon</span> 
                    <p>Head of SEO</p>
                    </div>  

                </div>
        </div>
    )
}


export default ReviewCard;