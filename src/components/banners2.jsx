const Banners2 =({title , sub , desc})=>{
    return(
        <div class="banner-box">
            <h4>{title}</h4>
            <h2>{sub}</h2>
            <span>{desc}</span>
            <button class="white">Learn More</button>
        </div>
    );
}

export default Banners2;