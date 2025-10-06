export default function Navbar() {
  return (
    <div className="container-fluid fixed-top px-0">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5">
        <a href="#" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="display-5 m-0">Tool Manager</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" className="nav-item nav-link active">Inicio</a>
            <a href="#about" className="nav-item nav-link">Acerca de</a>
            <a href="#contact" className="nav-item nav-link">Contacto</a>
          </div>
        </div>
      </nav>
    </div>
  )
}


