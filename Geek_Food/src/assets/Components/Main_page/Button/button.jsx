import "./button.css"

function Button({name,customstyle = {}}){

// let{name} = props

    return(
        <button id="seach_now_btn"
        className="button-class"
         style={{
        fontWeight: "500PX",
        height: "44px",
        lineHeight :"20px",
        paddingBottom :"12px",
        paddingLeft: "48px",
        paddingRight:" 48px",
        paddingTop :"12px",
        fontSize :"14px",
        borderStyle:"none",
        backgroundColor:"rgb(225, 29, 72)",
        color:"white",
        fontSize :"14px",
        borderStyle:"none",
        marginRight:"15px",
        borderRadius:"4px",
        


        ...customstyle
            
        }}>{name}</button>
    )
}


export default Button;