
export default function ButtonGeneral() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center mt-4">
                <h2 className='h4 mt-2 text-start'>Crear un boton general con un icono</h2>
                <button className="btn btn-warning w-25">
                    <i className="bi bi-person-check"></i>
                    <span className='ms-3'>
                        Activar cuenta
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}
