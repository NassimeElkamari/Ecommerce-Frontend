import '../Banners/Banners.css'
import BannerBox from '../../components/bannerBox';

const Banners = ()=>{
    return(
        <section id="banner3">
        <BannerBox text={'SEASON SALE'} desc={'winter Collection -50% OFF'}/>
        <BannerBox text={'NEW FOOTWEAR COLLECTION'} desc={'spring / summer 2024'}/>
        <BannerBox text={'T-SHIRT'} desc={'New Trendy Prints'}/>
        </section>
    );
}

export default Banners;