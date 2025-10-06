export default function Footer() {
  return (
    <>
      <footer className="container-fluid bg-dark text-light footer mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-4">Contactanos</h4>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>ventas@toolmanager.co</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="mailto:ventas@toolmanager.co"><i className="fa fa-envelope icon-white"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4 className="text-white mb-4">Servicios</h4>
              <a className="btn btn-link" href="#">Presupuesto de Campo</a>
              <a className="btn btn-link" href="#">Programación de labores</a>
              <a className="btn btn-link" href="#">Insumos requeridos</a>
              <a className="btn btn-link" href="#">Cosecha</a>
              <a className="btn btn-link" href="#">Informe gerencial</a>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4 className="text-white mb-4">Link Rapidos</h4>
              <a className="btn btn-link" href="#">Acerca de</a>
              <a className="btn btn-link" href="#">Nuestros Servicios</a>
              <a className="btn btn-link" href="#">Contactanos</a>
              <a className="btn btn-link" href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Tool Manager</a>, Todos los derechos reservados.
            </div>
            <div className="col-md-6 text-center text-md-end"></div>
          </div>
        </div>
      </div>
      <a style={{ backgroundColor: '#1ca053', color: 'white' }} href="#" className="btn btn-lg btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  )
}


