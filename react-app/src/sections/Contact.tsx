export default function Contact() {
  return (
    <div className="container-fluid callback my-5 pt-5">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white border rounded p-4 p-sm-5">
              <div className="text-center mx-auto" style={{ maxWidth: 600 }}>
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Ponte en contacto</p>
                <h1 className="display-5 mb-5">Déjanos Contactarte</h1>
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Tu Nombre" />
                    <label htmlFor="name">Nombre</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="mail" placeholder="Tu Correo Electrónico" />
                    <label htmlFor="mail">Correo Electrónico</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="mobile" placeholder="Tu Teléfono" />
                    <label htmlFor="mobile">Teléfono</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Asunto" />
                    <label htmlFor="subject">Asunto</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Escribe tu mensaje aquí" id="message" style={{ height: 100 }}></textarea>
                    <label htmlFor="message">Mensaje</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


