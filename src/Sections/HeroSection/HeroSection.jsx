import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="img-slider">
      <div className="slide active">
        <img src="/img/img1.png" />
        <div className="info">
          <h4 className="select-none">Trade-In-Offer</h4>
          <h2 className="select-none">Super Value Deals</h2>
          <h1 className="select-none">On all products</h1>
          <p className="select-none">Save more with coupons & up to 70% off!</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection ;
