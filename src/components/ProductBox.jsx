import Stars from "./Stars";

const ProductBox = ({img , title , desc , price})=>{
    return(
        <div class="pro">
            <img src={img}/>
            <div class="des">
                <span>{title}</span>
                <h5>{desc}</h5>
                <Stars></Stars>
                <h4>{price}</h4>
            </div>
            <a href="cart.html" class="cart">
                <i class="fa-solid fa-bag-shopping"></i>
            </a>
        </div>
    );
};

export default ProductBox ;