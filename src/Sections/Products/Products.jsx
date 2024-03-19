import ProductBox from '../../components/ProductBox';
import './Products.css'

const Products = ()=>{
    return(
        <section class="section-p1" id="product1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="pro-container">
        <ProductBox img={'img/products (1)/f1.jpg'} title={'cara'} desc={'Classic Space Explorer T-Shirt'} price={'$129'}/>
        <ProductBox img={'img/products (1)/f2.jpg'} title={'cara'} desc={'Galactic Adventure Tee'} price={'$249'}/>
        <ProductBox img={'img/products (1)/f3.jpg'} title={'cara'} desc={'Alien Invasion Graphic T-Shirt'} price={'$189'}/>
        <ProductBox img={'img/products (1)/f4.jpg'} title={'cara'} desc={'Rocket Rider Printed Tee'} price={'$159'}/>
        <ProductBox img={'img/products (1)/f5.jpg'} title={'cara'} desc={'Cosmic Sneaker Illustration T-Shirt'} price={'$99'}/>
        <ProductBox img={'img/products (1)/f6.jpg'} title={'cara'} desc={'Meteor Shower Casual Tee'} price={'$129'}/>
        <ProductBox img={'img/products (1)/f7.jpg'} title={'cara'} desc={'Celestial Sunglasses Design T-Shirt'} price={'$199'}/>
        <ProductBox img={'img/products (1)/f8.jpg'} title={'cara'} desc={'Starlight Night Sky Print T-Shirt'} price={'$259'}/>         
        </div>
    </section>
    );
}

export default Products;