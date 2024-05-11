import rstlye from "./resturant.module.css"
import resdata from "./Resdata";
import { useState } from "react";

// console.log(resdata);

function ResturantDiv(){


    const [rdata, Setrdata ] =  useState(resdata);
    const [rcopy , Setrcopy] =  useState(rdata)
    const [rating,Setrating] = useState(0)


    // console.log(rating);


    // const [setInout]


    function changeData(e){
        Setrdata(rcopy);  

        let filterData =  rcopy.filter((ele)=>{
                return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        Setrdata(filterData)
    }


    function getnumber(e){
        Setrating(e.target.value)
        console.log(e.target.value)

    }

    return(
        <div className={rstlye.outer_div}>
                <div className={rstlye.inputDiv}>
                    <input type="text" className={rstlye.inputtext} onChange={changeData}placeholder="Search for restaurant"></input>
                    <div className={rstlye.inputnum}>
                        <p>Minimum Rating:</p>
                    <input type="Number" value={rating} onChange={getnumber}></input>
                    </div>
                </div>

                <div className={rstlye.bottomDiv}>



                        {
                            rdata.map((ele)=>{
                                return(

                                    <div className={rstlye.outercard}>
                                    <div className={rstlye.location}>
        
        
                                        <section className={rstlye.locationSection}>
                                            <span><h2>{ele.name}</h2></span><span>*****</span>
                                        </section>
        
                                        <section className={rstlye.address}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={15} height={15}><path fill="#4c5663" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                                <span>{ele.address + ","}</span>
                                                <span>{ele["address line 2"]}</span>
                                        </section>
        
                                        <section className={rstlye.code}>
                                            <span>{ele.outcode + ""}</span>
                                            <span>{ele.postcode}</span>
                                        </section>
                                    
                                    </div>    
                                    <div className={rstlye.type}>
        
        
                                        <section className={rstlye.Chinese}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15}> <path fill="#22c55e" d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
                                            <p>{ele.type_of_food}</p>
                                        </section>
        
                                        <section className={rstlye.anchor}>
                                            <a href="">Visit Menu</a>
                                        </section>
        
                                    </div>
                            </div>


                                )
                            })
                        }


                </div>  
        </div>
    )
}

export default ResturantDiv;