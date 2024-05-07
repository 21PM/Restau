import Navouterdiv from "./assets/Components/Navbar/navbar"
import Footermain from "./assets/Components/footer/footer"
import FrontPage from "./assets/Components/Main_page/front"
import House from "./assets/Components/House/house.jsx"
import ReviewContainer from "./assets/Components/review/review.jsx"
import QuotePage from "./assets/QuoteComponents/Quote.jsx"
import quotesdata from "./assets/QuoteComponents/quoteData.js"
import Quotefullpage from "./assets/QuoteComponents/fullquotepage.jsx"
import { useState } from "react"
// console.log(quotesdata);

function App() {

  const [currentPage, setCurrentPage] = useState(true); // Initial page


  console.log(currentPage);

  function handleMenuItemChange(newMenuItem) {
    setCurrentPage(newMenuItem);
  }

  return (
    <>  
      <h1></h1>
          <Navouterdiv/>
          {/* <FrontPage/>
          <House/>
          <ReviewContainer/> */}
          <Quotefullpage onMenuItemChange={handleMenuItemChange}/>  

  
        {/* // <Quotefullpage onMenuItemChange={handleMenuItemChange}/>   */}
        <Footermain/>
      
    </>
  )
}

export default App
