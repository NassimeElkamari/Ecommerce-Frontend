import './NewsLetter.css'

const NewsLetter = ()=>{
    return(
        <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
        <h4>Sign Up For NewsLetters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>       
        </div>
        <form class="form">
            <input type="text" placeholder="Your email address"/>
            <button class="normal" type="submit">Sign Up</button>
        </form>
        </section>
    );
}

export default NewsLetter;