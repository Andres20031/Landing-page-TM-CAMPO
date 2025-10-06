export default function Services() {
  return (
    <div className="container-xxl service py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 600 }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Nuestros Servicios</p>
          <h1 className="display-5 mb-5">Tecnología agrícola que impulsa tus resultados</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Pre-nómina</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Maquinaria</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Planificación de Labores</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Informes Gerenciales</h5>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: 350 }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img2/img2_26_resize.jpg" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Gestiona las actividades realizadas por el personal de campo.</h3>
                    <p className="mb-4">Administra trabajadores propios, temporales y contratistas con pagos por hora o por tarea.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Pagos por hora o por tarea</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Control de horas extras</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Archivo plano bancario</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Ver más sobre Nómina</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: 350 }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img2/img2_19_resize.jpg" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Optimiza el uso y mantenimiento de tus equipos</h3>
                    <p className="mb-4">Registro de maquinaria, implementos y equipos de riego. Programa mantenimientos preventivos.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Seguimiento de mantenimientos</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Control de combustible</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Indicadores de eficiencia</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Ver más sobre Maquinaria</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: 350 }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img2/img2_37_resize.jpg" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Organiza tus labores según el estado del cultivo</h3>
                    <p className="mb-4">Programa actividades por lote, módulo o sector y proyecta consumo de insumos.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Programación según tabla tecnológica</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Proyección y solicitud de insumos</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Generación automática de formatos</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Ver más sobre Labores</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: 350 }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img2/img2_31_resize.jpg" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Toma decisiones con información clara y actualizada</h3>
                    <p className="mb-4">Consulta reportes detallados de costos, cosechas, presupuestos y labores en tiempo real.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>P&G por hacienda o lote</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Dashboard de cosechas y costos</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Visualización por SIG</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Ver más sobre Informes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


