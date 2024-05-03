import "./review.css"
import ReviewCard from "./card_review/card";

function ReviewContainer(){

    return(
        <div id="outer_container_review">
            <div id="inner_container_review">
                <div id="inside_inner_contianer">
                    <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.
"customStyle={{maxHeight:"max-content"}}/>
                    <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.
"customStyle={{maxHeight:"max-content"}}/>
                    <ReviewCard para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.
"customStyle={{maxHeight:"max-content"}}/>
                    <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.
"customStyle={{maxHeight:"max-content"}}/>
                    <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!
"customStyle={{maxHeight:"max-content"}}/>
                    <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.
"customStyle={{maxHeight:"max-content"}}/>
                </div>
            </div>
        </div>
    )

}

export default ReviewContainer;