import HeroImg from "../assets/hero.svg";
import HeroImg2 from "../assets/paricode.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            impedit cupiditate optio iusto, quos dignissimos, deleniti hic ipsa
            inventore earum veniam ex culpa qui, possimus alias esse minima
            officiis atque?
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg2} alt="" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
