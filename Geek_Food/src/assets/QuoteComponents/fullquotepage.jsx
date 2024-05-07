import quotesdata from "./quoteData"
import Navouterdiv from "../Components/Navbar/navbar"
import Footermain from "../Components/footer/footer"
import quotesdata1 from "./quoteData.js"
import QuotePage from "./Quote"




    function Quotefullpage(){
        return(
            <>
                <Navouterdiv/>
                {
                    quotesdata.map((ele)=>{
                     return(
                   <QuotePage quote={ele.quote} author={ele.author}/>
                     )
                    })
                }

                <Footermain/>
            </>

        )
    }




    export default  Quotefullpage;

      
    //   {
    //     quotesdata.map((ele)=>{
    //       return(
    //         <QuotePage quote={ele.quote} author={ele.author}/>
    //       )
    //     })
    // }




