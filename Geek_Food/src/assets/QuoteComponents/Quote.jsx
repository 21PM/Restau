import quotestyles from "../QuoteComponents/quote.module.css"

function QuotePage({quote,author}){
    return(
        <div className={quotestyles.quote_outer_div}>
            <div className={quotestyles.card}>
                <h4>{quote}</h4>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default QuotePage;


