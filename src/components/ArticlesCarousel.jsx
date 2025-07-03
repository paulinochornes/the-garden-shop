import plant1 from "../assets/article1.jpg";
import plant2 from "../assets/article2.jpg";
import plant3 from "../assets/article3.jpg";

function ArticlesCarousel() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Artículos destacados</h2>
      <div id="articlesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={plant1} className="d-block w-100" alt="Artículo 1" />
          </div>
          <div className="carousel-item">
            <img src={plant2} className="d-block w-100" alt="Artículo 2" />
          </div>
          <div className="carousel-item">
            <img src={plant3} className="d-block w-100" alt="Artículo 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#articlesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#articlesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
}

export default ArticlesCarousel;
