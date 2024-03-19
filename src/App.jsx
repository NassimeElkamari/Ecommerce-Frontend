import './App.css'
import Header from './Sections/Header/Header'
import HeroSection from './Sections/HeroSection/HeroSection'
import Features from './Sections/Features/Features'
import Products from './Sections/Products/Products'
import CallToAction from './Sections/CallToAction/CallToAction'
import Banners from './Sections/Banners/Banners'
import NewsLetter from './Sections/NewsLetter/NewsLetter'
import Footer from './Sections/Footer/Footer'
import BigBanner from './Sections/BigBanners/BigBanner'

function App() {

  return (
    <>
     <Header></Header>
     <HeroSection></HeroSection>
     <Features></Features>
     <Products></Products>
     <CallToAction></CallToAction>
     <BigBanner></BigBanner>
     <Banners></Banners>
     <NewsLetter></NewsLetter>
     <Footer></Footer>
    </>
  )
}

export default App
