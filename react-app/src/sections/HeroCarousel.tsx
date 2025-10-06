export default function HeroCarousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img2/carusel-3.JPG" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3">
                      Bienvenido a Tool Manager
                    </p>
                    <h1 className="display-1 mb-4">Optimiza tu campo con datos reales</h1>
                    <a href="#" className="btn btn-primary py-3 px-5">Descubre sus beneficios</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img2/carusel-2.JPG" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <h1 className="display-1 mb-4">Tecnología que impulsa tu producción</h1>
                    <a href="#" className="btn btn-primary py-3 px-5">Descubre sus beneficios</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img2/carusel-1.JPG" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <h1 className="display-1 mb-4">Transforma tu gestión rural con tecnología inteligente.</h1>
                    <a href="#" className="btn btn-primary py-3 px-5">Animate a probarlo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}


