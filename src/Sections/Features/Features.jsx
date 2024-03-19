import './Features.css'
import FeaturesBox from '../../components/featuresBox';

const Features = ()=>{
    return(
        <section id="feature" class="section-p1">
        
        <FeaturesBox img={'img/features (1)/f1.png'} title={'Free Shipping'}/>
        <FeaturesBox img={'img/features (1)/f2.png'} title={'Online'}/>
        <FeaturesBox img={'img/features (1)/f3.png'} title={'Save Money'}/>
        <FeaturesBox img={'img/features (1)/f4.png'} title={'Promotion'}/>
        <FeaturesBox img={'img/features (1)/f5.png'} title={'Happy Sell'}/>
        <FeaturesBox img={'img/features (1)/f6.png'} title={'24/7 Support'}/>
        
        </section>
    );
}

export default Features;