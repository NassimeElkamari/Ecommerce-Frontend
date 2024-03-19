import './Footer.css'

const Footer = ()=>{
    return(
        <footer class="section-p1">
        <div class="col">
            <img src="img/logo (1).png" class="logo"/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>Bettana Salé</p>
            <p><strong>Phone: </strong>+212697690746</p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>       
        </div>
        <div class="col">
            <h4>About</h4>
            <a href="about.html">About Us</a>
            <a href="blog.html">Delivery Information</a>
            <a href="blog.html">Privacy Policy</a>
            <a href="blog.html">Terms &amp; Conditions</a>
            <a href="contact.html">Contact Us</a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="cart.html">View Cart</a>
            <a href="shop.html">My WishList</a>
            <a href="product.html">Track My Order</a>
            <a href="contact.html">Help</a>
        </div>
        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="img/pay (1)/app.jpg" />
                <img src="img/pay (1)/play.jpg" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay (1)/pay.png" />
        </div>
        <div class="copyright">
            <p>@2024 NassimeElkamari. All Rights Reserved</p>
        </div>
    </footer>
    );
}

export default Footer;