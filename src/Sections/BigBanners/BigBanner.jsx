import Banners2 from '../../components/banners2';
import './BigBanner.css'

const BigBanner= ()=>{
    return(
        <section id="sm-banner" class="section-p1">
        <Banners2 title={'Crazy deals'} sub={'buy 1 get 1 free'} desc={'The best classic dress is on sale at cara'}/>
        <Banners2 title={'spring summer'} sub={'upcoming season'} desc={'The best dress at cara'}/>
        </section>
    );
}

export default BigBanner;
 