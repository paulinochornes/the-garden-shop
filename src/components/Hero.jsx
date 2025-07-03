import heroImage from "../assets/hero.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div className="overlay" />
      <div className="content">
        <h1 className="display-4 fw-bold">Bienvenido a The Garden Shop</h1>
        <p className="lead">Tu rincón verde para conectar con la naturaleza</p>
      </div>
    </section>
  );
}

export default Hero;
