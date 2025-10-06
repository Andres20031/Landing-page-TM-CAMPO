export default function Features() {
  return (
    <div className="container-xxl feature py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Ventajas clave</p>
            <h1 className="display-5 mb-4">¿Por qué elegir Tool Manager?</h1>
            <p className="mb-4">
              Tool Manager une el control administrativo con la gestión de labores agrícolas. Planifica, ejecuta y decide con datos reales.
            </p>
            <a className="btn btn-primary py-3 px-5" href="#">Ver más detalles</a>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-check fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Gestión personal de campo</h4>
                      <p className="mb-3">Administra personal propio, eventual o contratista para eficiencia en labores.</p>
                      <a className="fw-semi-bold" href="#">Leer más <i className="fa fa-arrow-right ms-1"></i></a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-check fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Control de Maquinaria y Labores</h4>
                      <p className="mb-3">Supervisa labores y uso de maquinaria, con mantenimientos y eficiencia.</p>
                      <a className="fw-semi-bold" href="#">Leer más <i className="fa fa-arrow-right ms-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box border rounded p-4">
                  <i className="fa fa-check fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Informes Gerenciales Automatizados</h4>
                  <p className="mb-3">Reportes de ejecución presupuestal, cosechas y costos listos para decidir.</p>
                  <a className="fw-semi-bold" href="#">Leer más <i className="fa fa-arrow-right ms-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


