export default function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 align-items-end mb-4">
          <div className="col-lg-6">
            <img className="img-fluid rounded" src="/img2/img2_16_resize.jpg" />
          </div>
          <div className="col-lg-6">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Acerca de nosotros</p>
            <h1 className="display-5 mb-4">¿Qué es Tool Manager?</h1>
            <p className="mb-4">
              Una solución tecnológica integral que acompaña todo el ciclo de vida de las operaciones agrícolas, permitiendo una administración eficiente, trazabilidad completa, control de recursos y soporte para decisiones en tiempo real.
            </p>
            <div className="border rounded p-4">
              <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">Visión</button>
                  <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Tecnología</button>
                  <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Integración</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                  <p>
                    Tool Manager es un software que une de forma inteligente la gestión administrativa con las operaciones del campo. Su diseño está pensado para facilitar la toma de decisiones desde el escritorio hasta la parcela, aportando control total en tiempo real.
                  </p>
                  <p className="mb-0">Gracias a su enfoque integral, permite mejorar la eficiencia operativa, optimizar recursos y ofrecer una visión clara y completa del negocio agrícola en cada una de sus etapas.</p>
                </div>
                <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <p>Tool Manager permite adaptarse a las infraestructuras tecnológicas más comunes del sector.</p>
                  <p className="mb-0">Esta versatilidad asegura una implementación flexible y escalable, permitiendo a las empresas agrícolas trabajar con sistemas ya existentes o expandirse sin necesidad de grandes cambios técnicos.</p>
                </div>
                <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                  <p>El sistema se integra con múltiples plataformas ERP y SIG, facilitando la centralización de la información operativa.</p>
                  <p className="mb-0">Esta integración permite consolidar datos clave para generar informes detallados que apoyan planificación, mantenimiento y gestión del ciclo productivo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded p-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-coins text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Control de Costos</h4>
                    <span>Supervisa costos por lote, controla insumos y compara presupuesto vs real.</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-mobile text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Toma de Decisiones</h4>
                    <span>Administra con datos actualizados y mejora la eficiencia operativa.</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-calendar-check text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Planificación Inteligente</h4>
                    <span>Proyecta cosechas, siembras y presupuestos a mediano y largo plazo.</span>
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


